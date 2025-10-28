// =============================================
// DATABASE API CLIENT FOR BOPPEL MARKETPLACE
// =============================================
// This file provides type-safe database operations for all tables

import { createClient } from '@/lib/supabase/client'
import { createClient as createServerClient } from '@/utils/supabase/server'
import type {
  Database,
  Profile,
  Product,
  Order,
  Review,
  Market,
  Collaboration,
  Waitlist,
  ProductFilters,
  OrderFilters,
  ReviewFilters,
  MarketFilters,
  ApiResponse,
  PaginatedResponse
} from '@/types/database'

type SupabaseClient = ReturnType<typeof createClient>

// =============================================
// BASE DATABASE CLASS
// =============================================

class DatabaseClient {
  protected client: SupabaseClient

  constructor(client: SupabaseClient) {
    this.client = client
  }

  protected async handleResponse<T>(response: any): Promise<ApiResponse<T>> {
    if (response.error) {
      return {
        data: null,
        error: response.error.message,
        success: false
      }
    }

    return {
      data: response.data,
      error: null,
      success: true
    }
  }

  protected async handlePaginatedResponse<T>(
    response: any,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<T>> {
    if (response.error) {
      throw new Error(response.error.message)
    }

    const data = response.data || []
    const count = response.count || 0
    const total_pages = Math.ceil(count / limit)

    return {
      data,
      count,
      page,
      limit,
      total_pages
    }
  }
}

// =============================================
// PROFILES API
// =============================================

export class ProfilesAPI extends DatabaseClient {
  async getProfile(id: string): Promise<ApiResponse<Profile>> {
    const response = await this.client
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single()

    return this.handleResponse<Profile>(response)
  }

  async getProfileByEmail(email: string): Promise<ApiResponse<Profile>> {
    const response = await this.client
      .from('profiles')
      .select('*')
      .eq('email', email)
      .single()

    return this.handleResponse<Profile>(response)
  }

  async updateProfile(id: string, updates: Partial<Profile>): Promise<ApiResponse<Profile>> {
    const response = await this.client
      .from('profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return this.handleResponse<Profile>(response)
  }

  async createProfile(profile: Omit<Profile, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse<Profile>> {
    const response = await this.client
      .from('profiles')
      .insert(profile)
      .select()
      .single()

    return this.handleResponse<Profile>(response)
  }

  async getSellers(filters?: { subscription_tier?: string; seller_type?: string }): Promise<ApiResponse<Profile[]>> {
    let query = this.client
      .from('profiles')
      .select('*')
      .not('seller_type', 'is', null)

    if (filters?.subscription_tier) {
      query = query.eq('subscription_tier', filters.subscription_tier)
    }

    if (filters?.seller_type) {
      query = query.eq('seller_type', filters.seller_type)
    }

    const response = await query

    return this.handleResponse<Profile[]>(response)
  }
}

// =============================================
// PRODUCTS API
// =============================================

export class ProductsAPI extends DatabaseClient {
  async getProducts(
    filters?: ProductFilters,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<Product>> {
    let query = this.client
      .from('products')
      .select('*, seller:profiles(*)', { count: 'exact' })
      .eq('is_active', true)

    if (filters?.category) {
      query = query.eq('category', filters.category)
    }

    if (filters?.product_type) {
      query = query.eq('product_type', filters.product_type)
    }

    if (filters?.seller_id) {
      query = query.eq('seller_id', filters.seller_id)
    }

    if (filters?.min_price) {
      query = query.gte('price', filters.min_price)
    }

    if (filters?.max_price) {
      query = query.lte('price', filters.max_price)
    }

    if (filters?.search) {
      query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
    }

    const from = (page - 1) * limit
    const to = from + limit - 1

    const response = await query
      .range(from, to)
      .order('created_at', { ascending: false })

    return this.handlePaginatedResponse<Product>(response, page, limit)
  }

  async getProduct(id: string): Promise<ApiResponse<Product>> {
    const response = await this.client
      .from('products')
      .select('*, seller:profiles(*)')
      .eq('id', id)
      .single()

    return this.handleResponse<Product>(response)
  }

  async createProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse<Product>> {
    const response = await this.client
      .from('products')
      .insert(product)
      .select()
      .single()

    return this.handleResponse<Product>(response)
  }

  async updateProduct(id: string, updates: Partial<Product>): Promise<ApiResponse<Product>> {
    const response = await this.client
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return this.handleResponse<Product>(response)
  }

  async deleteProduct(id: string): Promise<ApiResponse<void>> {
    const response = await this.client
      .from('products')
      .delete()
      .eq('id', id)

    return this.handleResponse<void>(response)
  }

  async getProductsBySeller(sellerId: string): Promise<ApiResponse<Product[]>> {
    const response = await this.client
      .from('products')
      .select('*')
      .eq('seller_id', sellerId)
      .order('created_at', { ascending: false })

    return this.handleResponse<Product[]>(response)
  }
}

// =============================================
// ORDERS API
// =============================================

export class OrdersAPI extends DatabaseClient {
  async getOrders(
    filters?: OrderFilters,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<Order>> {
    let query = this.client
      .from('orders')
      .select('*, buyer:profiles(*), seller:profiles(*), product:products(*)', { count: 'exact' })

    if (filters?.buyer_id) {
      query = query.eq('buyer_id', filters.buyer_id)
    }

    if (filters?.seller_id) {
      query = query.eq('seller_id', filters.seller_id)
    }

    if (filters?.status) {
      query = query.eq('status', filters.status)
    }

    if (filters?.date_from) {
      query = query.gte('created_at', filters.date_from)
    }

    if (filters?.date_to) {
      query = query.lte('created_at', filters.date_to)
    }

    const from = (page - 1) * limit
    const to = from + limit - 1

    const response = await query
      .range(from, to)
      .order('created_at', { ascending: false })

    return this.handlePaginatedResponse<Order>(response, page, limit)
  }

  async getOrder(id: string): Promise<ApiResponse<Order>> {
    const response = await this.client
      .from('orders')
      .select('*, buyer:profiles(*), seller:profiles(*), product:products(*)')
      .eq('id', id)
      .single()

    return this.handleResponse<Order>(response)
  }

  async createOrder(order: Omit<Order, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse<Order>> {
    const response = await this.client
      .from('orders')
      .insert(order)
      .select()
      .single()

    return this.handleResponse<Order>(response)
  }

  async updateOrder(id: string, updates: Partial<Order>): Promise<ApiResponse<Order>> {
    const response = await this.client
      .from('orders')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return this.handleResponse<Order>(response)
  }

  async updateOrderStatus(id: string, status: string): Promise<ApiResponse<Order>> {
    return this.updateOrder(id, { status: status as any })
  }
}

// =============================================
// REVIEWS API
// =============================================

export class ReviewsAPI extends DatabaseClient {
  async getReviews(
    filters?: ReviewFilters,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<Review>> {
    let query = this.client
      .from('reviews')
      .select('*, reviewer:profiles(*), reviewee:profiles(*), product:products(*)', { count: 'exact' })

    if (filters?.reviewer_id) {
      query = query.eq('reviewer_id', filters.reviewer_id)
    }

    if (filters?.reviewee_id) {
      query = query.eq('reviewee_id', filters.reviewee_id)
    }

    if (filters?.product_id) {
      query = query.eq('product_id', filters.product_id)
    }

    if (filters?.min_rating) {
      query = query.gte('rating', filters.min_rating)
    }

    if (filters?.max_rating) {
      query = query.lte('rating', filters.max_rating)
    }

    const from = (page - 1) * limit
    const to = from + limit - 1

    const response = await query
      .range(from, to)
      .order('created_at', { ascending: false })

    return this.handlePaginatedResponse<Review>(response, page, limit)
  }

  async createReview(review: Omit<Review, 'id' | 'created_at'>): Promise<ApiResponse<Review>> {
    const response = await this.client
      .from('reviews')
      .insert(review)
      .select()
      .single()

    return this.handleResponse<Review>(response)
  }

  async updateReview(id: string, updates: Partial<Review>): Promise<ApiResponse<Review>> {
    const response = await this.client
      .from('reviews')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return this.handleResponse<Review>(response)
  }

  async deleteReview(id: string): Promise<ApiResponse<void>> {
    const response = await this.client
      .from('reviews')
      .delete()
      .eq('id', id)

    return this.handleResponse<void>(response)
  }

  async getAverageRating(userId: string): Promise<ApiResponse<number>> {
    const response = await this.client
      .from('reviews')
      .select('rating')
      .eq('reviewee_id', userId)

    if (response.error) {
      return {
        data: null,
        error: response.error.message,
        success: false
      }
    }

    const ratings = response.data?.map(r => r.rating) || []
    const average = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0

    return {
      data: Math.round(average * 100) / 100,
      error: null,
      success: true
    }
  }
}

// =============================================
// MARKETS API
// =============================================

export class MarketsAPI extends DatabaseClient {
  async getMarkets(
    filters?: MarketFilters,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<Market>> {
    let query = this.client
      .from('markets')
      .select('*, host:profiles(*)', { count: 'exact' })

    if (filters?.host_id) {
      query = query.eq('host_id', filters.host_id)
    }

    if (filters?.event_type) {
      query = query.eq('event_type', filters.event_type)
    }

    if (filters?.location) {
      query = query.ilike('location', `%${filters.location}%`)
    }

    if (filters?.date_from) {
      query = query.gte('start_date', filters.date_from)
    }

    if (filters?.date_to) {
      query = query.lte('end_date', filters.date_to)
    }

    const from = (page - 1) * limit
    const to = from + limit - 1

    const response = await query
      .range(from, to)
      .order('start_date', { ascending: true })

    return this.handlePaginatedResponse<Market>(response, page, limit)
  }

  async getMarket(id: string): Promise<ApiResponse<Market>> {
    const response = await this.client
      .from('markets')
      .select('*, host:profiles(*), participants:market_participants(*)')
      .eq('id', id)
      .single()

    return this.handleResponse<Market>(response)
  }

  async createMarket(market: Omit<Market, 'id' | 'created_at'>): Promise<ApiResponse<Market>> {
    const response = await this.client
      .from('markets')
      .insert(market)
      .select()
      .single()

    return this.handleResponse<Market>(response)
  }

  async updateMarket(id: string, updates: Partial<Market>): Promise<ApiResponse<Market>> {
    const response = await this.client
      .from('markets')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return this.handleResponse<Market>(response)
  }

  async deleteMarket(id: string): Promise<ApiResponse<void>> {
    const response = await this.client
      .from('markets')
      .delete()
      .eq('id', id)

    return this.handleResponse<void>(response)
  }
}

// =============================================
// COLLABORATIONS API
// =============================================

export class CollaborationsAPI extends DatabaseClient {
  async getCollaborations(
    proposerId?: string,
    partnerId?: string,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<Collaboration>> {
    let query = this.client
      .from('collaborations')
      .select('*, proposer:profiles(*), partner:profiles(*)', { count: 'exact' })

    if (proposerId) {
      query = query.eq('proposer_id', proposerId)
    }

    if (partnerId) {
      query = query.eq('partner_id', partnerId)
    }

    const from = (page - 1) * limit
    const to = from + limit - 1

    const response = await query
      .range(from, to)
      .order('created_at', { ascending: false })

    return this.handlePaginatedResponse<Collaboration>(response, page, limit)
  }

  async createCollaboration(collaboration: Omit<Collaboration, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse<Collaboration>> {
    const response = await this.client
      .from('collaborations')
      .insert(collaboration)
      .select()
      .single()

    return this.handleResponse<Collaboration>(response)
  }

  async updateCollaboration(id: string, updates: Partial<Collaboration>): Promise<ApiResponse<Collaboration>> {
    const response = await this.client
      .from('collaborations')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    return this.handleResponse<Collaboration>(response)
  }
}

// =============================================
// WAITLIST API
// =============================================

export class WaitlistAPI extends DatabaseClient {
  async joinWaitlist(waitlist: Omit<Waitlist, 'id' | 'created_at'>): Promise<ApiResponse<Waitlist>> {
    const response = await this.client
      .from('waitlist')
      .insert(waitlist)
      .select()
      .single()

    return this.handleResponse<Waitlist>(response)
  }

  async getWaitlist(page: number = 1, limit: number = 10): Promise<PaginatedResponse<Waitlist>> {
    const from = (page - 1) * limit
    const to = from + limit - 1

    const response = await this.client
      .from('waitlist')
      .select('*', { count: 'exact' })
      .range(from, to)
      .order('created_at', { ascending: false })

    return this.handlePaginatedResponse<Waitlist>(response, page, limit)
  }
}

// =============================================
// MAIN DATABASE API CLASS
// =============================================

export class DatabaseAPI {
  public profiles: ProfilesAPI
  public products: ProductsAPI
  public orders: OrdersAPI
  public reviews: ReviewsAPI
  public markets: MarketsAPI
  public collaborations: CollaborationsAPI
  public waitlist: WaitlistAPI

  constructor(client: SupabaseClient) {
    this.profiles = new ProfilesAPI(client)
    this.products = new ProductsAPI(client)
    this.orders = new OrdersAPI(client)
    this.reviews = new ReviewsAPI(client)
    this.markets = new MarketsAPI(client)
    this.collaborations = new CollaborationsAPI(client)
    this.waitlist = new WaitlistAPI(client)
  }
}

// =============================================
// CLIENT FACTORY FUNCTIONS
// =============================================

export function createDatabaseAPI(client?: SupabaseClient): DatabaseAPI {
  const supabaseClient = client || createClient()
  return new DatabaseAPI(supabaseClient)
}

export async function createServerDatabaseAPI(): Promise<DatabaseAPI> {
  const supabaseClient = await createServerClient()
  return new DatabaseAPI(supabaseClient)
}

// =============================================
// EXPORT DEFAULT
// =============================================

export default DatabaseAPI
