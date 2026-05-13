"use client"

import { motion } from "framer-motion"
import { Crown, Gift, Truck, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  { icon: Gift, text: "Offres privées" },
  { icon: Truck, text: "Livraison prioritaire" },
  { icon: Crown, text: "Cadeaux exclusifs" },
]

export function VipBanner() {
  return (
    <section className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary via-secondary to-secondary/90 p-6 md:p-8"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-primary blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-primary blur-2xl" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center gap-6">
          {/* Crown Icon */}
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <Crown className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Devenez VIP HOKO
            </h3>
            <p className="text-white/80 mb-4">
              {"Profitez d'avantages exclusifs et de remises toute l'année !"}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {benefit.text}
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Rejoindre maintenant
            </Button>
          </div>

          {/* Decorative Crown */}
          <div className="hidden lg:block absolute right-8 -bottom-4">
            <Crown className="w-32 h-32 text-white/5" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
