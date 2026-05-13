"use client"

import { motion } from "framer-motion"
import {
  ShoppingBag,
  Building2,
  Car,
  Crown,
  Sparkles,
  Tag,
  Store,
  Zap
} from "lucide-react"
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

const universeEmojis: Record<string, string> = {
  shopping: "🛍️",
  pro: "🏢",
  drive: "🚗",
  deluxe: "👑",
  special: "✨",
  deals: "🏷️",
  market: "🏪",
  flash: "⚡"
}

export function UniverseHero() {
  const { currentUniverse } = useUniverse()
  const Icon = universeIcons[currentUniverse.id as keyof typeof universeIcons]
  const emoji = universeEmojis[currentUniverse.id] || "🛍️"

  return (
    <motion.div
      key={currentUniverse.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card border-b border-border"
    >
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{emoji}</div>
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              {currentUniverse.name} HOKO
              {currentUniverse.isPremium && (
                <Crown className="h-5 w-5 text-amber-500" />
              )}
            </h1>
            <p className="text-muted-foreground">{currentUniverse.description}</p>
          </div>
          {currentUniverse.badge && (
            <span className="ml-auto bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {currentUniverse.badge}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
