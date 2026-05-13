"use client"

import { Truck, Flame, Sparkles, ShieldCheck, Heart, Gift } from "lucide-react"
import { motion } from "framer-motion"

const promos = [
  { icon: Truck, text: "Livraison Pacifique gratuite dès 5 000 XPF", color: "text-primary" },
  { icon: Flame, text: "-59% Paper Scrapbooking aujourd'hui", color: "text-primary" },
  { icon: Sparkles, text: "Nouveautés chaque semaine", color: "text-primary" },
  { icon: ShieldCheck, text: "Paiement 100% sécurisé SSL", color: "text-foreground" },
  { icon: Heart, text: "Satisfait ou remboursé 30j", color: "text-primary" },
  { icon: Gift, text: "Codes promo exclusifs", color: "text-primary" },
]

export function PromoBar() {
  return (
    <div className="bg-secondary text-secondary-foreground py-2.5 overflow-hidden">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...promos, ...promos].map((promo, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <promo.icon className={`h-4 w-4 ${promo.color}`} />
            <span className="font-medium">{promo.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
