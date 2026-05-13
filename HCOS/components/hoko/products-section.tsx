"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2 } from "lucide-react"
import { ProductCard, type Product } from "./product-card"
import { Button } from "@/components/ui/button"
import { useUniverse } from "@/lib/universe-context"

const products: Product[] = [
  {
    id: "p1",
    name: "Porte-telephone Magnetique Tableau Bord HEPA - Fixation Robuste",
    price: 2490,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 16,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p2",
    name: "Mini Drone Pliable 4K - Camera HD Temps Reel & Stabilise",
    price: 7450,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 13,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p3",
    name: "Robot Educatif Programmable 4-en-1 - STEM Enfants",
    price: 6290,
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 16,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p4",
    name: "Cube Magique Infini Pop It Lumineux - Fidget Toy Sensoriel LED",
    price: 3890,
    image: "https://images.unsplash.com/photo-1596568816375-16f89e4f6728?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 15,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p5",
    name: "Brume Hydratante Probiotique Nano - Soin Visage Tropical",
    price: 3890,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 10,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p6",
    name: "Stylo Lifting Ultrasonique Micro-Aiguille Rechargeable",
    price: 5290,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 9,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p7",
    name: "Masque LED RGB Anti-Age Vibration Sonique Professionnel",
    price: 4890,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 12,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p8",
    name: "Sac de Plage Etanche 20L Roll-Top Premium - Tropical Proof",
    price: 3490,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 7,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p9",
    name: "Camera Action 4K Ultra-Compacte Etanche 30m - Aventures Extremes",
    price: 5890,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 32,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p10",
    name: "Montre de Plongee Intelligente IP68 - Sport & Diving",
    price: 4990,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 35,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p11",
    name: "Humidificateur Air Ultrasonique Tactile Neon - Ambiance LED",
    price: 5190,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 38,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p12",
    name: "Lampe LED Intelligente Ambiance Musicale - Synchronisation Son",
    price: 4890,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 32,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p13",
    name: "Mini Projecteur LED WiFi 6 Portable - 1080P Ultra Compact",
    price: 6490,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 29,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p14",
    name: "Batterie externe 65W PD ultra-compacte - Charge rapide universelle",
    price: 5490,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 32,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p15",
    name: "Ecouteurs Conduction Osseuse IA - Technologie Revolutionnaire",
    price: 4990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 31,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p16",
    name: "Projecteur LED HUD Pare-brise - Affichage Tete Haute GPS",
    price: 5890,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 30,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p17",
    name: "Mini Drone Pliable IA - Controle Gestuel Revolutionnaire",
    price: 6490,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 27,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p18",
    name: "Puzzle 3D Bois Mecanique Dinosaure Motorise - Construction Interactive",
    price: 5290,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 26,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p19",
    name: "Pop It Fidget Magnetique 3D LED - Jouet Anti-Stress Connecte",
    price: 3890,
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 21,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p20",
    name: "Stylo Microneedling RF Sans Fil - Rajeunissement Peau Ecran LED",
    price: 6890,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 24,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p21",
    name: "Masque LED Rouge Infra-Rouge Anti-Age Visage Rajeunissement",
    price: 5490,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 23,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p22",
    name: "Nettoyant Facial Ultrasonique Pro LED Anti-Age - Technologie Premium",
    price: 3990,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 20,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p23",
    name: "Sac Etanche Modulable Bretelles Flottantes - Aventure Aquatique",
    price: 3890,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 23,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
  {
    id: "p24",
    name: "Organiseur Mural Magnetique Modulable - Crochets Ajustables",
    price: 3790,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 24,
    isNew: true,
    inStock: true,
    delivery: "worldwide",
  },
]

export function ProductsSection() {
  const { currentUniverse, currentCategory } = useUniverse()
  const [visibleCount, setVisibleCount] = useState(24)
  const [isLoading, setIsLoading] = useState(false)

  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 24, products.length))
      setIsLoading(false)
    }, 500)
  }

  const visibleProducts = products.slice(0, visibleCount)
  const remainingCount = products.length - visibleCount

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-6">
      {/* Products Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentUniverse.id}-${currentCategory.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4"
        >
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Load More Button */}
      {remainingCount > 0 && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={loadMore}
            disabled={isLoading}
            variant="outline"
            size="lg"
            className="min-w-[250px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Chargement...
              </>
            ) : (
              `Charger plus (${remainingCount} restants)`
            )}
          </Button>
        </div>
      )}
    </section>
  )
}
