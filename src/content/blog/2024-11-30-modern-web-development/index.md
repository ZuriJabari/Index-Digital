---
title: "Modern Web Development in 2024: Our Tech Stack at Index Digital"
date: "2024-11-30"
author: "Maliamungu Benard"
tags: ["Web Development", "JavaScript", "React", "Next.js"]
excerpt: "Explore the modern web development stack we use at Index Digital to build scalable and performant applications."
---

As we approach 2025, the web development landscape continues to evolve. Here's an inside look at our current tech stack at Index Digital and why we chose these technologies for our projects.

## Our Core Stack

### 1. Frontend Framework: Next.js 14

We've embraced Next.js 14 for its powerful features:

```javascript
// app/page.tsx
export default async function HomePage() {
  // Server Component by default
  const data = await fetchData()
  
  return (
    <main>
      <h1>Welcome to {data.title}</h1>
      <ClientComponent initialData={data} />
    </main>
  )
}

// Parallel data fetching
async function fetchData() {
  const [posts, products] = await Promise.all([
    fetch('/api/posts').then(res => res.json()),
    fetch('/api/products').then(res => res.json())
  ])
  
  return { posts, products }
}
```

### 2. Styling: Tailwind CSS

Tailwind CSS has revolutionized our styling workflow:

```jsx
function Card({ title, description }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}
```

### 3. State Management: Zustand

We've moved from Redux to Zustand for simpler state management:

```typescript
import create from 'zustand'

interface Store {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
}

const useStore = create<Store>((set) => ({
  cart: [],
  addToCart: (item) => 
    set((state) => ({ 
      cart: [...state.cart, item] 
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter(item => item.id !== id)
    }))
}))
```

## Backend Architecture

### 1. API Routes with Edge Functions

```typescript
// app/api/search/route.ts
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  
  const results = await searchDatabase(query)
  
  return NextResponse.json(results)
}
```

### 2. Database: Prisma with PostgreSQL

```typescript
// prisma/schema.prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Usage in API route
async function createPost(data) {
  const post = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      author: {
        connect: { id: data.authorId }
      }
    }
  })
  return post
}
```

## Performance Optimization

### 1. Image Optimization

```typescript
import Image from 'next/image'

function OptimizedImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority
      className="object-cover"
    />
  )
}
```

### 2. Font Optimization

```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

## Testing Strategy

We use Vitest for unit testing and Playwright for E2E testing:

```typescript
// Component test with Vitest
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Button from './Button'

test('renders button with correct text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})

// E2E test with Playwright
test('user can add item to cart', async ({ page }) => {
  await page.goto('/products')
  await page.click('[data-testid="add-to-cart"]')
  await expect(page.locator('[data-testid="cart-count"]'))
    .toHaveText('1')
})
```

## Conclusion

Our tech stack is constantly evolving as we evaluate new tools and technologies. The key is finding the right balance between innovation and stability. These choices have helped us deliver robust, performant applications for our clients.

Want to learn more about our development process? We're always happy to share our experiences and learn from others in the community. Drop us a line or check out our other technical articles.
