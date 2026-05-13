"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ShoppingBag,
  Building2,
  Car,
  Crown,
  Sparkles,
  Tag,
  Store,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useUniverse } from "@/lib/universe-context"
import { Button } from "@/components/ui/button"

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

const universeColors = {
  shopping: "bg-orange-500",
  pro: "bg-slate-800",
  drive: "bg-emerald-500",
  deluxe: "bg-amber-500",
  special: "bg-violet-500",
  deals: "bg-red-500",
  market: "bg-blue-500",
  flash: "bg-amber-400"
}

export function UniverseBar() {
  const { currentUniverse, setCurrentUniverse, universes } = useUniverse()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

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
      <div className="max-w-[1400px] mx-auto px-4 relative">
        {/* Scroll Buttons */}
        {canScrollLeft && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 shadow-md"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        {canScrollRight && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 shadow-md"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        {/* Universe Pills - Scrollable */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Duplicate for infinite scroll effect */}
          {[...universes, ...universes].map((universe, index) => {
            const Icon = universeIcons[universe.id as keyof typeof universeIcons]
            const colorClass = universeColors[universe.id as keyof typeof universeColors]
            const isActive = currentUniverse.id === universe.id
            const key = `${universe.id}-${index}`

            return (
              <motion.button
                key={key}
                onClick={() => setCurrentUniverse(universe.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted/50 hover:bg-muted text-foreground"
                }`}
              >
                {/* Colored dot indicator */}
                <span className={`w-2 h-2 rounded-full ${colorClass}`} />
                
                {Icon && <Icon className="h-4 w-4" />}
                <span>{universe.name}</span>
                
                {universe.isPremium && (
                  <Crown className="h-3 w-3 text-amber-400" />
                )}
                {universe.isNew && (
                  <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    NEW
                  </span>
                )}
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
