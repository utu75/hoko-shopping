"use client"

import { CartProvider } from "@/lib/cart-context"
import { UniverseProvider } from "@/lib/universe-context"
import { PromoBar } from "@/components/hoko/promo-bar"
import { Header } from "@/components/hoko/header"
import { UniverseBar } from "@/components/hoko/universe-bar"
import { UniverseHero } from "@/components/hoko/universe-hero"
import { CategoryNav } from "@/components/hoko/category-nav"
import { ProductsSection } from "@/components/hoko/products-section"
import { VipBanner } from "@/components/hoko/vip-banner"
import { TrustFooter } from "@/components/hoko/trust-footer"
import { CartDrawer } from "@/components/hoko/cart-drawer"
import { MobileNav } from "@/components/hoko/mobile-nav"

export default function Home() {
  return (
    <UniverseProvider>
      <CartProvider>
        <div className="min-h-screen bg-background pb-20 lg:pb-0">
          <PromoBar />
          <Header />
          <UniverseBar />
          <UniverseHero />
          <CategoryNav />
          <main>
            <ProductsSection />
            <VipBanner />
          </main>
          <TrustFooter />
          <CartDrawer />
          <MobileNav />
        </div>
      </CartProvider>
    </UniverseProvider>
  )
}
