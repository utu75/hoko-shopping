"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Home, Shirt, Sparkles, UtensilsCrossed, Smartphone, Baby, Dumbbell, Plane, Monitor, Gift, ChevronRight } from "lucide-react"

const categories = [
  { id: "maison", label: "Maison", icon: Home },
  { id: "mode", label: "Mode", icon: Shirt },
  { id: "beaute", label: "Beauté", icon: Sparkles },
  { id: "cuisine", label: "Cuisine", icon: UtensilsCrossed },
  { id: "tech", label: "Tech", icon: Smartphone },
  { id: "enfants", label: "Enfants", icon: Baby },
  { id: "sport", label: "Sport", icon: Dumbbell },
  { id: "voyage", label: "Voyage", icon: Plane },
  { id: "gaming", label: "Gaming", icon: Monitor },
  { id: "bureau", label: "Bureau", icon: Monitor },
  { id: "cadeaux", label: "Cadeaux", icon: Gift },
]

export function CategoryNav() {
  const [active, setActive] = useState("maison")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="relative flex items-center gap-2">
          <div
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1"
          >
            {categories.map((category) => {
              const isActive = active === category.id
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActive(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap
                    text-sm font-medium transition-all duration-200 shrink-0
                    ${
                      isActive
                        ? "bg-primary/10 text-primary border-2 border-primary"
                        : "bg-muted/50 text-foreground border-2 border-transparent hover:border-border hover:bg-muted"
                    }
                  `}
                >
                  <category.icon className={`h-4 w-4 ${isActive ? "text-primary" : ""}`} />
                  {category.label}
                </motion.button>
              )
            })}
          </div>
          
          {/* Scroll indicator */}
          <button
            onClick={scrollRight}
            className="shrink-0 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}
