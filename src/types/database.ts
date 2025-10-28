// =============================================
// DATABASE TYPES FOR BOPPEL MARKETPLACE
// =============================================
// These types match the Supabase database schema
// Generated from the Prisma schema for type safety

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// =============================================
// ENUMS
// =============================================

export type AppRole = 'buyer' | 'seller' | 'admin'

export type ProductType = 'physical' | 'digital' | 'ticket'

export type SubscriptionTier = 'starter' | 'maker' | 'pro_maker' | 'collective'

export type SellerType = 'physical' | 'digital' | 'both'

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export type CollaborationStatus = 'pending' | 'accepted' | 'active' | 'completed' | 'declined'

export type ApplicationStatus = 'pending' | 'approved' | 'rejected'

// =============================================
// DATABASE TABLES
// =============================================

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string | null
          email: string | null
          password: string | null
          avatar_url: string | null
          bio: string | null
          is_verified: boolean
          badges: string[]
          seller_type: SellerType | null
          subscription_tier: SubscriptionTier
          country: string | null
          region: string | null
          city: string | null
          show_city: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name?: string | null
          email?: string | null
          password?: string | null
          avatar_url?: string | null
          bio?: string | null
          is_verified?: boolean
          badges?: string[]
          seller_type?: SellerType | null
          subscription_tier?: SubscriptionTier
          country?: string | null
          region?: string | null
          city?: string | null
          show_city?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string | null
          email?: string | null
          password?: string | null
          avatar_url?: string | null
          bio?: string | null
          is_verified?: boolean
          badges?: string[]
          seller_type?: SellerType | null
          subscription_tier?: SubscriptionTier
          country?: string | null
          region?: string | null
          city?: string | null
          show_city?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      user_roles: {
        Row: {
          id: string
          user_id: string
          role: AppRole
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          role: AppRole
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          role?: AppRole
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          seller_id: string
          title: string
          description: string | null
          price: number
          images: string[]
          category: string | null
          is_active: boolean
          stock_quantity: number | null
          product_type: ProductType
          customisation_fields: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          seller_id: string
          title: string
          description?: string | null
          price: number
          images?: string[]
          category?: string | null
          is_active?: boolean
          stock_quantity?: number | null
          product_type?: ProductType
          customisation_fields?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          seller_id?: string
          title?: string
          description?: string | null
          price?: number
          images?: string[]
          category?: string | null
          is_active?: boolean
          stock_quantity?: number | null
          product_type?: ProductType
          customisation_fields?: Json
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          buyer_id: string | null
          seller_id: string
          product_id: string | null
          quantity: number
          total_amount: number
          status: OrderStatus
          customisation_data: Json | null
          shipping_address: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          buyer_id?: string | null
          seller_id: string
          product_id?: string | null
          quantity?: number
          total_amount: number
          status?: OrderStatus
          customisation_data?: Json | null
          shipping_address?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          buyer_id?: string | null
          seller_id?: string
          product_id?: string | null
          quantity?: number
          total_amount?: number
          status?: OrderStatus
          customisation_data?: Json | null
          shipping_address?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          reviewer_id: string
          reviewee_id: string
          product_id: string | null
          order_id: string | null
          rating: number
          comment: string | null
          verified_purchase: boolean
          created_at: string
        }
        Insert: {
          id?: string
          reviewer_id: string
          reviewee_id: string
          product_id?: string | null
          order_id?: string | null
          rating: number
          comment?: string | null
          verified_purchase?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          reviewer_id?: string
          reviewee_id?: string
          product_id?: string | null
          order_id?: string | null
          rating?: number
          comment?: string | null
          verified_purchase?: boolean
          created_at?: string
        }
      }
      collab_scores: {
        Row: {
          user_id: string
          total_points: number
          current_rank: number | null
          completed_collabs: number
          co_hosted_events: number
          created_bundles: number
          positive_reviews: number
          average_rating: number | null
          badges_earned: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          total_points?: number
          current_rank?: number | null
          completed_collabs?: number
          co_hosted_events?: number
          created_bundles?: number
          positive_reviews?: number
          average_rating?: number | null
          badges_earned?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          total_points?: number
          current_rank?: number | null
          completed_collabs?: number
          co_hosted_events?: number
          created_bundles?: number
          positive_reviews?: number
          average_rating?: number | null
          badges_earned?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      markets: {
        Row: {
          id: string
          host_id: string
          title: string
          description: string | null
          event_type: string | null
          start_date: string
          end_date: string
          location: string | null
          max_participants: number | null
          participation_fee: number | null
          created_at: string
        }
        Insert: {
          id?: string
          host_id: string
          title: string
          description?: string | null
          event_type?: string | null
          start_date: string
          end_date: string
          location?: string | null
          max_participants?: number | null
          participation_fee?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          host_id?: string
          title?: string
          description?: string | null
          event_type?: string | null
          start_date?: string
          end_date?: string
          location?: string | null
          max_participants?: number | null
          participation_fee?: number | null
          created_at?: string
        }
      }
      market_participants: {
        Row: {
          id: string
          market_id: string
          seller_id: string
          application_status: ApplicationStatus
          stall_number: string | null
          application_data: Json | null
          applied_at: string
        }
        Insert: {
          id?: string
          market_id: string
          seller_id: string
          application_status?: ApplicationStatus
          stall_number?: string | null
          application_data?: Json | null
          applied_at?: string
        }
        Update: {
          id?: string
          market_id?: string
          seller_id?: string
          application_status?: ApplicationStatus
          stall_number?: string | null
          application_data?: Json | null
          applied_at?: string
        }
      }
      collaborations: {
        Row: {
          id: string
          proposer_id: string
          partner_id: string
          collaboration_type: string
          title: string
          description: string | null
          status: CollaborationStatus
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          proposer_id: string
          partner_id: string
          collaboration_type: string
          title: string
          description?: string | null
          status?: CollaborationStatus
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          proposer_id?: string
          partner_id?: string
          collaboration_type?: string
          title?: string
          description?: string | null
          status?: CollaborationStatus
          created_at?: string
          updated_at?: string
        }
      }
      waitlist: {
        Row: {
          id: string
          first_name: string
          email: string
          user_type: string
          wants_beta: boolean
          uk_location: string | null
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          email: string
          user_type: string
          wants_beta?: boolean
          uk_location?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          email?: string
          user_type?: string
          wants_beta?: boolean
          uk_location?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: AppRole
      product_type: ProductType
      subscription_tier: SubscriptionTier
      seller_type: SellerType
      order_status: OrderStatus
      collaboration_status: CollaborationStatus
      application_status: ApplicationStatus
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// =============================================
// HELPER TYPES
// =============================================

// Extract table row types
export type Profile = Database['public']['Tables']['profiles']['Row']
export type UserRole = Database['public']['Tables']['user_roles']['Row']
export type Product = Database['public']['Tables']['products']['Row']
export type Order = Database['public']['Tables']['orders']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']
export type CollabScore = Database['public']['Tables']['collab_scores']['Row']
export type Market = Database['public']['Tables']['markets']['Row']
export type MarketParticipant = Database['public']['Tables']['market_participants']['Row']
export type Collaboration = Database['public']['Tables']['collaborations']['Row']
export type Waitlist = Database['public']['Tables']['waitlist']['Row']

// Extract insert types
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type UserRoleInsert = Database['public']['Tables']['user_roles']['Insert']
export type ProductInsert = Database['public']['Tables']['products']['Insert']
export type OrderInsert = Database['public']['Tables']['orders']['Insert']
export type ReviewInsert = Database['public']['Tables']['reviews']['Insert']
export type CollabScoreInsert = Database['public']['Tables']['collab_scores']['Insert']
export type MarketInsert = Database['public']['Tables']['markets']['Insert']
export type MarketParticipantInsert = Database['public']['Tables']['market_participants']['Insert']
export type CollaborationInsert = Database['public']['Tables']['collaborations']['Insert']
export type WaitlistInsert = Database['public']['Tables']['waitlist']['Insert']

// Extract update types
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update']
export type UserRoleUpdate = Database['public']['Tables']['user_roles']['Update']
export type ProductUpdate = Database['public']['Tables']['products']['Update']
export type OrderUpdate = Database['public']['Tables']['orders']['Update']
export type ReviewUpdate = Database['public']['Tables']['reviews']['Update']
export type CollabScoreUpdate = Database['public']['Tables']['collab_scores']['Update']
export type MarketUpdate = Database['public']['Tables']['markets']['Update']
export type MarketParticipantUpdate = Database['public']['Tables']['market_participants']['Update']
export type CollaborationUpdate = Database['public']['Tables']['collaborations']['Update']
export type WaitlistUpdate = Database['public']['Tables']['waitlist']['Update']

// =============================================
// EXTENDED TYPES WITH RELATIONS
// =============================================

export interface ProfileWithRelations extends Profile {
  user_roles: UserRole[]
  products: Product[]
  orders_as_buyer: Order[]
  orders_as_seller: Order[]
  reviews_as_reviewer: Review[]
  reviews_as_reviewee: Review[]
  collab_score?: CollabScore
  markets_as_host: Market[]
  market_participants: MarketParticipant[]
  collaborations_as_proposer: Collaboration[]
  collaborations_as_partner: Collaboration[]
}

export interface ProductWithRelations extends Product {
  seller: Profile
  orders: Order[]
  reviews: Review[]
}

export interface OrderWithRelations extends Order {
  buyer?: Profile
  seller: Profile
  product?: Product
  reviews: Review[]
}

export interface ReviewWithRelations extends Review {
  reviewer: Profile
  reviewee: Profile
  product?: Product
  order?: Order
}

export interface MarketWithRelations extends Market {
  host: Profile
  participants: MarketParticipant[]
}

export interface MarketParticipantWithRelations extends MarketParticipant {
  market: Market
  seller: Profile
}

export interface CollaborationWithRelations extends Collaboration {
  proposer: Profile
  partner: Profile
}

// =============================================
// API RESPONSE TYPES
// =============================================

export interface ApiResponse<T> {
  data: T | null
  error: string | null
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  count: number
  page: number
  limit: number
  total_pages: number
}

// =============================================
// QUERY FILTER TYPES
// =============================================

export interface ProductFilters {
  category?: string
  product_type?: ProductType
  seller_id?: string
  min_price?: number
  max_price?: number
  is_active?: boolean
  search?: string
}

export interface OrderFilters {
  buyer_id?: string
  seller_id?: string
  status?: OrderStatus
  date_from?: string
  date_to?: string
}

export interface ReviewFilters {
  reviewer_id?: string
  reviewee_id?: string
  product_id?: string
  min_rating?: number
  max_rating?: number
}

export interface MarketFilters {
  host_id?: string
  event_type?: string
  date_from?: string
  date_to?: string
  location?: string
}
