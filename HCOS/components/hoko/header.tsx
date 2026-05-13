"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Camera,
  Moon,
  Sun,
  User,
  ShoppingCart,
  Heart,
  Menu,
  ChevronDown,
  ShoppingBag,
  Building2,
  Car,
  Crown,
  Sparkles,
  Tag,
  Store,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useUniverse } from "@/lib/universe-context"

const universeIcons = {
  shopping: ShoppingBag,
  pro: Building2,
  drive: Car,
  deluxe: Crown,
  special: Sparkles,
  deals: Tag,
  market: Store,
  flash: Zap
}

export function Header() {
  const { itemCount, subtotal, toggleCart } = useCart()
  const {
    currentUniverse,
    setCurrentUniverse,
    universes,
    currency,
    isDark,
    toggleTheme,
    isUniverseMenuOpen,
    setUniverseMenuOpen
  } = useUniverse()
  const [searchQuery, setSearchQuery] = useState("")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <a href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-2xl font-black tracking-tight">
              HOK<span className="text-primary">O</span>
            </span>
            <span className="hidden sm:inline text-xs font-medium text-muted-foreground uppercase tracking-widest ml-1">
              WORLD
            </span>
          </a>

          {/* Universe Selector */}
          <div className="hidden lg:block relative">
            <Button
              variant="outline"
              className="gap-2 px-3"
              onClick={() => setUniverseMenuOpen(!isUniverseMenuOpen)}
            >
              {(() => {
                const Icon = universeIcons[currentUniverse.id as keyof typeof universeIcons]
                return Icon ? <Icon className="h-4 w-4" /> : null
              })()}
              <span>Nos univers</span>
              <span className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full font-medium">
                {universes.length}
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isUniverseMenuOpen ? "rotate-180" : ""}`} />
            </Button>

            <AnimatePresence>
              {isUniverseMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setUniverseMenuOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl p-4 z-50"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {universes.map((universe) => {
                        const Icon = universeIcons[universe.id as keyof typeof universeIcons]
                        const isActive = currentUniverse.id === universe.id
                        return (
                          <button
                            key={universe.id}
                            onClick={() => setCurrentUniverse(universe.id)}
                            className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            {Icon && <Icon className="h-5 w-5 shrink-0" />}
                            <div className="min-w-0">
                              <div className="font-medium truncate">{universe.name}</div>
                              <div className={`text-xs truncate ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                                {universe.type === "catalogue" ? "Catalogue" : 
                                 universe.type === "promo" ? "Promo" :
                                 universe.type === "b2b" ? "Pro B2B" : "Marketplace"}
                              </div>
                            </div>
                            {universe.isPremium && (
                              <Crown className="h-3 w-3 text-amber-500 shrink-0" />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:flex">
            <div className="relative flex w-full">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher 50 000+ produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 rounded-l-lg border border-r-0 border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button variant="ghost" size="icon" className="h-10 w-10 border border-l-0 border-r-0 border-input rounded-none">
                <Camera className="h-4 w-4" />
              </Button>
              <Button className="h-10 px-4 rounded-l-none">
                Chercher
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Currency */}
            <Button variant="ghost" size="sm" className="hidden lg:flex gap-1.5 text-sm">
              <span>{currency.flag}</span>
              <span>{currency.code}</span>
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden sm:flex">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Login */}
            <Button variant="ghost" size="sm" className="hidden lg:flex gap-2">
              <User className="h-4 w-4" />
              <span>Se connecter</span>
            </Button>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1"
                >
                  {itemCount}
                </motion.span>
              )}
            </Button>

            {/* Mini Cart Preview (Desktop) */}
            <div className="hidden xl:flex items-center border-l border-border pl-3 ml-1">
              <button
                onClick={toggleCart}
                className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 transition-colors"
              >
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Votre panier ({itemCount})</div>
                  <div className="text-sm font-semibold text-primary">{formatPrice(subtotal)} XPF</div>
                </div>
                <div className="relative bg-primary/10 rounded-lg p-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
              </button>
            </div>

            {/* Favorites */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
