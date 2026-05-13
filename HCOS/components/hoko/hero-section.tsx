"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const heroCards = [
  {
    id: 1,
    type: "main",
    badge: "OFFRE DU JOUR",
    discount: "-59%",
    title: "Papier Scrapbooking",
    subtitle: "Patterned 200 Feuilles",
    price: 2190,
    originalPrice: 5290,
    features: ["En stock", "Livraison rapide"],
    cta: "Voir le produit",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    id: 2,
    type: "tech",
    badge: "NOUVEAUTÉ",
    title: "Mini Drone",
    subtitle: "4K HD",
    price: 7450,
    cta: "Découvrir",
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&h=600&fit=crop",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
  },
  {
    id: 3,
    type: "luxury",
    badge: "COLLECTION 2025",
    title: "Montres",
    subtitle: "Édition Luxe",
    discount: "-37%",
    cta: "Voir la collection",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    gradient: "from-slate-700 via-slate-800 to-slate-900",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 min-h-[380px] group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
          <img
            src={heroCards[0].image}
            alt={heroCards[0].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="relative z-20 p-6 h-full flex flex-col justify-between text-white">
            <div className="flex items-center gap-2">
              <Badge className="bg-white/20 text-white backdrop-blur-sm border-0">
                {heroCards[0].badge}
              </Badge>
              <Badge className="bg-primary text-primary-foreground">
                {heroCards[0].discount}
              </Badge>
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold leading-tight">{heroCards[0].title}</h2>
                <p className="text-xl font-medium opacity-90">{heroCards[0].subtitle}</p>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">
                  {heroCards[0].price?.toLocaleString()} XPF
                </span>
                {heroCards[0].originalPrice && (
                  <span className="text-lg line-through opacity-60">
                    {heroCards[0].originalPrice.toLocaleString()} XPF
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm">
                {heroCards[0].features?.map((feature, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    {i === 0 ? (
                      <Check className="h-4 w-4 text-green-300" />
                    ) : (
                      <Zap className="h-4 w-4 text-yellow-300" />
                    )}
                    {feature}
                  </span>
                ))}
              </div>
              <Button className="w-fit">
                {heroCards[0].cta}
              </Button>
            </div>
            {/* Carousel dots */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map((dot) => (
                  <button
                    key={dot}
                    onClick={() => setCurrentSlide(dot)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === dot ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => setCurrentSlide((p) => (p > 0 ? p - 1 : 3))}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((p) => (p < 3 ? p + 1 : 0))}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Tech Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 min-h-[180px] sm:min-h-full group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <img
              src={heroCards[1].image}
              alt={heroCards[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-20 p-5 h-full flex flex-col justify-between text-white">
              <Badge className="w-fit bg-green-500 text-white border-0">
                {heroCards[1].badge}
              </Badge>
              <div className="space-y-2">
                <div>
                  <h3 className="text-xl font-bold">{heroCards[1].title}</h3>
                  <p className="text-lg opacity-90">{heroCards[1].subtitle}</p>
                </div>
                <p className="text-2xl font-bold text-primary">
                  {heroCards[1].price?.toLocaleString()} XPF
                </p>
                <Button variant="secondary" size="sm" className="w-fit">
                  {heroCards[1].cta}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Luxury Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 min-h-[180px] sm:min-h-full group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <img
              src={heroCards[2].image}
              alt={heroCards[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-20 p-5 h-full flex flex-col justify-between text-white">
              <div className="flex items-center gap-2">
                <Badge className="bg-white/20 text-white backdrop-blur-sm border-0">
                  {heroCards[2].badge}
                </Badge>
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="text-xl font-bold">{heroCards[2].title}</h3>
                  <p className="text-lg opacity-90">{heroCards[2].subtitle}</p>
                </div>
                <p className="text-sm">
                  {"Jusqu'à "}
                  <span className="text-xl font-bold text-primary">{heroCards[2].discount}</span>
                </p>
                <Button variant="secondary" size="sm" className="w-fit">
                  {heroCards[2].cta}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
