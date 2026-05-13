"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Flame, Sparkles, Star, ChevronDown, Grid3X3, LayoutGrid, List, ChevronRight } from "lucide-react"
import { ProductCard, type Product } from "./product-card"
import { Button } from "@/components/ui/button"

const tabs = [
  { id: "trending", label: "Tendances", icon: Flame, color: "text-primary" },
  { id: "new", label: "Nouveautés", icon: Sparkles, color: "text-foreground" },
  { id: "bestsellers", label: "Meilleures ventes", icon: Star, color: "text-foreground" },
]

const products: Product[] = [
  {
    id: "p1",
    name: "Porte-téléphone Magnétique Tableau Bord HEPA",
    price: 2490,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    inStock: true,
  },
  {
    id: "p2",
    name: "Mini Drone Pliable 4K – Caméra HD",
    price: 7450,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 89,
    isNew: true,
    inStock: true,
  },
  {
    id: "p3",
    name: "Robot Éducatif Programmable 4-en-1 – STEM Enfants",
    price: 6290,
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 56,
    isNew: true,
    inStock: true,
  },
  {
    id: "p4",
    name: "Bobot Magique Infini Pop It Lumineux – Fidget Toy",
    price: 3890,
    image: "https://images.unsplash.com/photo-1596568816375-16f89e4f6728?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
  },
  {
    id: "p5",
    name: "Brume Hydratante Probiotique Nano – Soin Visage Tropical",
    price: 3890,
    originalPrice: 5990,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 102,
    discount: 30,
    inStock: true,
  },
  {
    id: "p6",
    name: "Écouteurs Sans Fil ANC Pro – Réduction de Bruit Active",
    price: 8990,
    originalPrice: 12900,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 213,
    discount: 30,
    inStock: true,
  },
]

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("trending")
  const [viewMode, setViewMode] = useState<"grid4" | "grid3" | "list">("grid4")

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-foreground">Produits populaires</h2>
          
          {/* Tabs */}
          <div className="flex items-center gap-1 ml-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <tab.icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sort & View */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Trier par :</span>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted transition-colors">
              Populaires
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          {/* View Mode Toggles */}
          <div className="hidden md:flex items-center border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-muted" : "hover:bg-muted/50"}`}
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("grid3")}
              className={`p-2 ${viewMode === "grid3" ? "bg-muted" : "hover:bg-muted/50"}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("grid4")}
              className={`p-2 ${viewMode === "grid4" ? "bg-muted" : "hover:bg-muted/50"}`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`grid gap-4 ${
              viewMode === "grid4"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                : viewMode === "grid3"
                ? "grid-cols-2 md:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Scroll Arrow */}
        <button className="absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors hidden xl:flex">
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}
