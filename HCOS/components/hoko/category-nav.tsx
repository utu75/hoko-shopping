"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Grid3X3,
  Shirt,
  Sparkles,
  Home,
  ChefHat,
  Baby,
  Dumbbell,
  Plane,
  Gamepad2,
  Briefcase,
  Gift,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Columns2,
  Columns3,
  LayoutGrid,
  ArrowUpDown,
  Check,
  Package
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUniverse } from "@/lib/universe-context"

const categoryIcons: Record<string, typeof Grid3X3> = {
  all: Grid3X3,
  mode: Shirt,
  beaute: Sparkles,
  maison: Home,
  cuisine: ChefHat,
  enfants: Baby,
  fitness: Dumbbell,
  voyage: Plane,
  gaming: Gamepad2,
  bureau: Briefcase,
  cadeaux: Gift
}

export function CategoryNav() {
  const { currentCategory, setCurrentCategory, categories } = useUniverse()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [columns, setColumns] = useState(4)
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [fastDelivery, setFastDelivery] = useState(false)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 py-3">
        {/* Categories Row */}
        <div className="relative flex items-center gap-2 mb-3">
          {canScrollLeft && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 z-10 bg-card/90 shadow-md h-8 w-8"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => {
              const Icon = categoryIcons[category.id] || Grid3X3
              const isActive = currentCategory.id === category.id
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setCurrentCategory(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 hover:bg-muted text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </motion.button>
              )
            })}
          </div>

          {canScrollRight && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 z-10 bg-card/90 shadow-md h-8 w-8"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Filters Row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            {/* Sort */}
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowUpDown className="h-3.5 w-3.5" />
              Popularite
            </Button>

            {/* Columns */}
            <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setColumns(2)}
                className={`p-2 ${columns === 2 ? "bg-muted" : "hover:bg-muted/50"}`}
              >
                <Columns2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setColumns(3)}
                className={`p-2 ${columns === 3 ? "bg-muted" : "hover:bg-muted/50"}`}
              >
                <Columns3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setColumns(4)}
                className={`p-2 ${columns === 4 ? "bg-muted" : "hover:bg-muted/50"}`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Price Range */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Prix XPF</span>
              <span className="font-medium">{priceRange[1].toLocaleString()}</span>
              <input
                type="range"
                min="0"
                max="20000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-24 h-1 accent-primary"
              />
            </div>

            {/* Quick Filters */}
            <Button
              variant={inStockOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setInStockOnly(!inStockOnly)}
              className="gap-1.5"
            >
              {inStockOnly && <Check className="h-3 w-3" />}
              <Package className="h-3.5 w-3.5" />
              En stock
            </Button>

            <Button
              variant={fastDelivery ? "default" : "outline"}
              size="sm"
              onClick={() => setFastDelivery(!fastDelivery)}
              className="gap-1.5"
            >
              {fastDelivery && <Check className="h-3 w-3" />}
              ⚡ Livraison rapide
            </Button>
          </div>

          {/* Product Count */}
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">771</span> produits
          </div>
        </div>
      </div>
    </div>
  )
}
