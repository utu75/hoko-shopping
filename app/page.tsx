"use client"

import { CartProvider } from "@/lib/cart-context"
import { PromoBar } from "@/components/hoko/promo-bar"
import { Header } from "@/components/hoko/header"
import { CategoryNav } from "@/components/hoko/category-nav"
import { HeroSection } from "@/components/hoko/hero-section"
import { PopularCategories } from "@/components/hoko/popular-categories"
import { ProductsSection } from "@/components/hoko/products-section"
import { VipBanner } from "@/components/hoko/vip-banner"
import { TrustFooter } from "@/components/hoko/trust-footer"
import { CartDrawer } from "@/components/hoko/cart-drawer"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <PromoBar />
        <Header />
        <CategoryNav />
        <main>
          <HeroSection />
          <PopularCategories />
          <ProductsSection />
          <VipBanner />
        </main>
        <TrustFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
