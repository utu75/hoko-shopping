"use client"

import { Heart, ShoppingCart, Eye, Truck } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating?: number
  reviewCount?: number
  isNew?: boolean
  discount?: number
  inStock: boolean
  delivery?: "worldwide" | "pacific" | "express"
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [showQuickView, setShowQuickView] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    })
    setTimeout(() => setIsAdding(false), 300)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="bg-card rounded-xl border border-border overflow-hidden group shadow-sm hover:shadow-md transition-all duration-200"
    >
      {/* Image Container */}
      <div 
        className="relative aspect-square overflow-hidden bg-muted"
        onMouseEnter={() => setShowQuickView(true)}
        onMouseLeave={() => setShowQuickView(false)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-emerald-500 text-white border-0 text-[10px] font-bold px-1.5 py-0.5">
              NEW
            </Badge>
          )}
          {product.discount && (
            <Badge className="bg-primary text-primary-foreground border-0 text-[10px] font-bold px-1.5 py-0.5">
              -{product.discount}%
            </Badge>
          )}
        </div>

        {/* Review Count Badge */}
        {product.reviewCount && (
          <div className="absolute top-2 right-10 bg-black/60 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
            {product.reviewCount}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        >
          <Heart
            className={`h-3.5 w-3.5 transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Quick View Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showQuickView ? 1 : 0, y: showQuickView ? 0 : 10 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 hover:bg-white transition-colors"
        >
          <Eye className="h-3 w-3" />
          Apercu rapide
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        <h3 className="font-medium text-sm text-foreground line-clamp-2 leading-snug min-h-[2.5rem] group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold text-primary">
            {product.price.toLocaleString()} XPF
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Delivery Info */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Truck className="h-3 w-3" />
          <span>Livraison mondiale</span>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          variant="outline"
          className="w-full gap-2 h-9 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          size="sm"
        >
          <motion.div
            animate={isAdding ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
          </motion.div>
          Ajouter au panier
        </Button>
      </div>
    </motion.div>
  )
}
