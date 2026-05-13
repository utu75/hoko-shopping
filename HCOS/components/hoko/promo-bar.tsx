"use client"

import { Truck, ShieldCheck, Sparkles, Gift, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useUniverse } from "@/lib/universe-context"

interface PromoItem {
  icon: typeof Truck
  text: string
  highlight?: string
  price?: string
}

const defaultPromos: PromoItem[] = [
  { icon: Zap, text: "Masque Sommeil 3D Bloqueur Lumiere Thermique", highlight: "-41%", price: "1 890 XPF" },
  { icon: Truck, text: "Livraison 150+ pays · Direct Asie" },
  { icon: Zap, text: "Montre Digitale Altimetre Barometre GPS Voyage", highlight: "-36%", price: "18 900 XPF" },
  { icon: ShieldCheck, text: "Paiement securise · Stripe · PayPal" },
  { icon: Zap, text: "Convertisseur Volt 220V→110V/2000W Protection", highlight: "-35%", price: "5 890 XPF" },
  { icon: Sparkles, text: "Nouveautes chaque semaine" },
  { icon: Zap, text: "Organiseur Sac Voyage 7 Compartiments Etanche", highlight: "-38%", price: "2 490 XPF" },
  { icon: Gift, text: "Retours 30 jours · Satisfait ou rembourse" },
]

export function PromoBar() {
  const { currentUniverse } = useUniverse()
  
  return (
    <div className="bg-secondary text-secondary-foreground py-2.5 overflow-hidden border-b border-border">
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {[...defaultPromos, ...defaultPromos, ...defaultPromos].map((promo, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <promo.icon className="h-4 w-4 text-primary shrink-0" />
            {promo.highlight && (
              <span className="text-primary font-bold">{promo.highlight}</span>
            )}
            <span className="font-medium">{promo.text}</span>
            {promo.price && (
              <>
                <span className="text-muted-foreground">·</span>
                <span className="font-semibold text-primary">{promo.price}</span>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
