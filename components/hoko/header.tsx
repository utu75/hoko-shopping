"use client"

import { Search, Sparkles, Percent, Heart, User, ShoppingCart, ChevronDown, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const { itemCount, toggleCart, subtotal } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground leading-tight">Shopping HOKO</h1>
              <p className="text-[10px] text-muted-foreground">Tout le catalogue • Livraison Pacifique</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="flex items-center gap-0">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un produit, une marque..."
                  className="pl-10 pr-4 h-11 rounded-r-none border-r-0 bg-muted/50 focus:bg-card"
                />
              </div>
              <div className="relative">
                <select className="h-11 px-3 border border-l-0 border-border bg-muted/30 text-sm appearance-none pr-8 cursor-pointer focus:outline-none">
                  <option>Toutes les catégories</option>
                  <option>Maison</option>
                  <option>Mode</option>
                  <option>Tech</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
              <Button className="h-11 px-5 rounded-l-none">
                <Search className="h-4 w-4 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 lg:gap-2 shrink-0">
            <HeaderAction icon={Sparkles} label="Nouveautés" className="hidden lg:flex" />
            <HeaderAction icon={Percent} label="Promos" className="hidden lg:flex" />
            <HeaderAction icon={Heart} label="Favoris" badge={4} className="hidden sm:flex" />
            <HeaderAction icon={User} label="Compte" className="hidden sm:flex" />
            
            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative flex flex-col items-center gap-0.5 px-3 py-2 hover:bg-muted/50 rounded-lg transition-colors group"
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <span className="text-[10px] text-muted-foreground hidden lg:block">Panier</span>
              {subtotal > 0 && (
                <span className="text-[10px] font-semibold text-primary hidden lg:block">
                  {subtotal.toLocaleString()} XPF
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function HeaderAction({
  icon: Icon,
  label,
  badge,
  className = "",
}: {
  icon: React.ElementType
  label: string
  badge?: number
  className?: string
}) {
  return (
    <button className={`relative flex flex-col items-center gap-0.5 px-3 py-2 hover:bg-muted/50 rounded-lg transition-colors group ${className}`}>
      <div className="relative">
        <Icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
        {badge !== undefined && badge > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
            {badge}
          </span>
        )}
      </div>
      <span className="text-[10px] text-muted-foreground">{label}</span>
    </button>
  )
}
