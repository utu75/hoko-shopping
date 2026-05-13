"use client"

// HOKO World - Types du Systeme d'Exploitation Commercial

export type UniverseId = 
  | "shopping" 
  | "pro" 
  | "drive" 
  | "deluxe" 
  | "special" 
  | "deals" 
  | "market" 
  | "flash"

export type UniverseType = "catalogue" | "promo" | "marketplace" | "b2b"

export interface Universe {
  id: UniverseId
  name: string
  type: UniverseType
  description: string
  icon: string
  color: string
  gradient: string
  badge?: string
  isNew?: boolean
  isPremium?: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  slug: string
  productCount?: number
}

export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images?: string[]
  category: string
  universe: UniverseId
  stock: "in_stock" | "low_stock" | "out_of_stock"
  rating?: number
  reviewCount?: number
  isNew?: boolean
  isFeatured?: boolean
  isFlash?: boolean
  deliveryType: "worldwide" | "pacific" | "express"
  badges?: string[]
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface PromoItem {
  id: string
  product: string
  discount: number
  price: number
  badge?: string
}

// Configuration des Univers HOKO
export const UNIVERSES: Universe[] = [
  {
    id: "shopping",
    name: "Shopping",
    type: "catalogue",
    description: "Tout le catalogue · Livraison Pacifique · Tarifs malins",
    icon: "ShoppingBag",
    color: "#ea6d0a",
    gradient: "from-orange-500 to-orange-600",
    badge: "771+ produits"
  },
  {
    id: "pro",
    name: "Pro",
    type: "b2b",
    description: "Solutions B2B · Devis sur mesure · Prix pro",
    icon: "Building2",
    color: "#1a1a2e",
    gradient: "from-slate-800 to-slate-900",
    badge: "B2B",
    isPremium: true
  },
  {
    id: "drive",
    name: "Drive",
    type: "catalogue",
    description: "Commande rapide · Retrait express · Click & Collect",
    icon: "Car",
    color: "#10b981",
    gradient: "from-emerald-500 to-emerald-600",
    badge: "Express"
  },
  {
    id: "deluxe",
    name: "Deluxe",
    type: "catalogue",
    description: "Collection premium · Produits haut de gamme · Exclusivites",
    icon: "Crown",
    color: "#d4af37",
    gradient: "from-amber-500 to-yellow-600",
    badge: "Premium",
    isPremium: true
  },
  {
    id: "special",
    name: "Special",
    type: "catalogue",
    description: "Editions limitees · Collaborations · Pieces uniques",
    icon: "Sparkles",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-600",
    badge: "Limited",
    isNew: true
  },
  {
    id: "deals",
    name: "Deals",
    type: "promo",
    description: "Promotions · Remises exclusives · Bons plans",
    icon: "Tag",
    color: "#ef4444",
    gradient: "from-red-500 to-rose-600",
    badge: "Promos"
  },
  {
    id: "market",
    name: "Market+",
    type: "marketplace",
    description: "Marketplace · Vendeurs certifies · Selection curatee",
    icon: "Store",
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600",
    badge: "Marketplace"
  },
  {
    id: "flash",
    name: "Flash",
    type: "promo",
    description: "Ventes flash · Offres limitees · Countdown",
    icon: "Zap",
    color: "#f59e0b",
    gradient: "from-amber-400 to-orange-500",
    badge: "Flash"
  }
]

// Categories de produits
export const CATEGORIES: Category[] = [
  { id: "all", name: "Tout", icon: "Grid3X3", slug: "tout" },
  { id: "mode", name: "Mode", icon: "Shirt", slug: "mode" },
  { id: "beaute", name: "Beaute", icon: "Sparkles", slug: "beaute" },
  { id: "maison", name: "Maison", icon: "Home", slug: "maison" },
  { id: "cuisine", name: "Cuisine", icon: "ChefHat", slug: "cuisine" },
  { id: "enfants", name: "Enfants", icon: "Baby", slug: "enfants" },
  { id: "fitness", name: "Fitness", icon: "Dumbbell", slug: "fitness" },
  { id: "voyage", name: "Voyage", icon: "Plane", slug: "voyage" },
  { id: "gaming", name: "Gaming", icon: "Gamepad2", slug: "gaming" },
  { id: "bureau", name: "Bureau", icon: "Briefcase", slug: "bureau" },
  { id: "cadeaux", name: "Cadeaux", icon: "Gift", slug: "cadeaux" }
]

// Devises supportees
export const CURRENCIES = [
  { code: "XPF", symbol: "XPF", flag: "🇵🇫", name: "Franc Pacifique" },
  { code: "USD", symbol: "$", flag: "🇺🇸", name: "US Dollar" },
  { code: "EUR", symbol: "€", flag: "🇪🇺", name: "Euro" }
]
