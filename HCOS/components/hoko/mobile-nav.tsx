"use client"

import { Home, Search, Tag, ShoppingCart, User } from "lucide-react"
import { motion } from "framer-motion"
import { useCart } from "@/lib/cart-context"

const navItems = [
  { id: "home", label: "Accueil", icon: Home, href: "/" },
  { id: "search", label: "Cherche", icon: Search, href: "/search" },
  { id: "deals", label: "Deals", icon: Tag, href: "/deals" },
  { id: "cart", label: "Panier", icon: ShoppingCart, href: "/cart" },
  { id: "account", label: "Compte", icon: User, href: "/account" },
]

export function MobileNav() {
  const { itemCount, toggleCart } = useCart()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border lg:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const isCart = item.id === "cart"
          
          return (
            <button
              key={item.id}
              onClick={isCart ? toggleCart : undefined}
              className="flex flex-col items-center gap-0.5 py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors relative"
            >
              <div className="relative">
                <item.icon className="h-5 w-5 text-foreground" />
                {isCart && itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-1"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </div>
              <span className="text-[10px] text-muted-foreground">{item.label}</span>
            </button>
          )
        })}
      </div>
      
      {/* Safe area for iOS */}
      <div className="h-safe-area-inset-bottom bg-card" />
    </nav>
  )
}
