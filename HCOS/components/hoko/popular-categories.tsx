"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useRef } from "react"

const categories = [
  {
    id: 1,
    name: "Maison & Déco",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Mode & Accessoires",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Beauté & Soins",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Cuisine & Ustensiles",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Tech & Gadgets",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Enfants & Jouets",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Sport & Outdoor",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Voyage & Bagagerie",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
  },
]

export function PopularCategories() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" })
    }
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Nos univers populaires</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          Voir tout
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="relative flex items-center gap-4">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 shrink-0 cursor-pointer group"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-sm font-medium text-foreground text-center max-w-[100px] leading-tight group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </motion.div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="shrink-0 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}
