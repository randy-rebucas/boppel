import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create sample profiles
  const buyerProfile = await prisma.profile.create({
    data: {
      name: 'John Buyer',
      email: 'john@example.com',
      bio: 'Passionate about supporting local makers',
      country: 'UK',
      region: 'London',
      city: 'London',
      showCity: true,
      userRoles: {
        create: {
          role: 'buyer'
        }
      }
    }
  })

  const sellerProfile = await prisma.profile.create({
    data: {
      name: 'Sarah Maker',
      email: 'sarah@example.com',
      bio: 'Handcrafted jewelry and accessories',
      sellerType: 'physical',
      subscriptionTier: 'maker',
      country: 'UK',
      region: 'Manchester',
      city: 'Manchester',
      showCity: true,
      userRoles: {
        create: {
          role: 'seller'
        }
      }
    }
  })

  // Create sample products
  const product1 = await prisma.product.create({
    data: {
      sellerId: sellerProfile.id,
      title: 'Handmade Silver Ring',
      description: 'Beautiful handcrafted silver ring with unique design',
      price: 45.99,
      images: ['ring1.jpg', 'ring2.jpg'],
      category: 'Jewelry',
      stockQuantity: 5,
      productType: 'physical'
    }
  })

  const product2 = await prisma.product.create({
    data: {
      sellerId: sellerProfile.id,
      title: 'Digital Art Print',
      description: 'High-quality digital art print for home decoration',
      price: 12.99,
      images: ['art1.jpg'],
      category: 'Art',
      productType: 'digital'
    }
  })

  // Create sample order
  const order = await prisma.order.create({
    data: {
      buyerId: buyerProfile.id,
      sellerId: sellerProfile.id,
      productId: product1.id,
      quantity: 1,
      totalAmount: 45.99,
      status: 'pending',
      shippingAddress: '123 Main St, London, UK'
    }
  })

  // Create sample review
  await prisma.review.create({
    data: {
      reviewerId: buyerProfile.id,
      revieweeId: sellerProfile.id,
      productId: product1.id,
      orderId: order.id,
      rating: 5,
      comment: 'Absolutely beautiful ring! Great quality and fast shipping.',
      verifiedPurchase: true
    }
  })

  // Create collaboration score
  await prisma.collabScore.create({
    data: {
      userId: sellerProfile.id,
      totalPoints: 150,
      currentRank: 1,
      completedCollabs: 3,
      coHostedEvents: 1,
      createdBundles: 2,
      positiveReviews: 8,
      averageRating: 4.8,
      badgesEarned: ['Top Seller', 'Quality Maker']
    }
  })

  // Create sample market
  const market = await prisma.market.create({
    data: {
      hostId: sellerProfile.id,
      title: 'London Craft Market',
      description: 'Monthly craft market featuring local artisans',
      eventType: 'Craft Market',
      startDate: new Date('2024-02-15T10:00:00Z'),
      endDate: new Date('2024-02-15T18:00:00Z'),
      location: 'London Craft Center',
      maxParticipants: 50,
      participationFee: 25.00
    }
  })

  // Create market participant
  await prisma.marketParticipant.create({
    data: {
      marketId: market.id,
      sellerId: sellerProfile.id,
      applicationStatus: 'approved',
      stallNumber: 'A12',
      applicationData: {
        products: ['Handmade Silver Ring', 'Digital Art Print'],
        experience: '2 years selling online'
      }
    }
  })

  // Create waitlist entry
  await prisma.waitlist.create({
    data: {
      firstName: 'Emma',
      email: 'emma@example.com',
      userType: 'seller',
      wantsBeta: true,
      ukLocation: 'Birmingham'
    }
  })

  console.log('✅ Database seeding completed!')
  console.log(`Created ${buyerProfile.name} (buyer)`)
  console.log(`Created ${sellerProfile.name} (seller)`)
  console.log(`Created ${product1.title} and ${product2.title}`)
  console.log(`Created order and review`)
  console.log(`Created market: ${market.title}`)
  console.log(`Created waitlist entry`)
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
