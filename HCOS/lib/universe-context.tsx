"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { type UniverseId, type Universe, UNIVERSES, type Category, CATEGORIES } from "./types"

interface UniverseContextType {
  // Univers actif
  currentUniverse: Universe
  setCurrentUniverse: (id: UniverseId) => void
  universes: Universe[]
  
  // Categorie active
  currentCategory: Category
  setCurrentCategory: (id: string) => void
  categories: Category[]
  
  // Devise
  currency: { code: string; symbol: string; flag: string }
  setCurrency: (code: string) => void
  
  // Theme
  isDark: boolean
  toggleTheme: () => void
  
  // UI State
  isUniverseMenuOpen: boolean
  setUniverseMenuOpen: (open: boolean) => void
}

const UniverseContext = createContext<UniverseContextType | undefined>(undefined)

export function UniverseProvider({ children }: { children: ReactNode }) {
  const [currentUniverseId, setCurrentUniverseId] = useState<UniverseId>("shopping")
  const [currentCategoryId, setCurrentCategoryId] = useState("all")
  const [currencyCode, setCurrencyCode] = useState("XPF")
  const [isDark, setIsDark] = useState(false)
  const [isUniverseMenuOpen, setUniverseMenuOpen] = useState(false)

  const currentUniverse = UNIVERSES.find(u => u.id === currentUniverseId) || UNIVERSES[0]
  const currentCategory = CATEGORIES.find(c => c.id === currentCategoryId) || CATEGORIES[0]

  const currencies = {
    XPF: { code: "XPF", symbol: "XPF", flag: "🇵🇫" },
    USD: { code: "USD", symbol: "$", flag: "🇺🇸" },
    EUR: { code: "EUR", symbol: "€", flag: "🇪🇺" }
  }

  const setCurrentUniverse = useCallback((id: UniverseId) => {
    setCurrentUniverseId(id)
    setUniverseMenuOpen(false)
  }, [])

  const setCurrentCategory = useCallback((id: string) => {
    setCurrentCategoryId(id)
  }, [])

  const setCurrency = useCallback((code: string) => {
    setCurrencyCode(code)
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev)
  }, [])

  return (
    <UniverseContext.Provider
      value={{
        currentUniverse,
        setCurrentUniverse,
        universes: UNIVERSES,
        currentCategory,
        setCurrentCategory,
        categories: CATEGORIES,
        currency: currencies[currencyCode as keyof typeof currencies] || currencies.XPF,
        setCurrency,
        isDark,
        toggleTheme,
        isUniverseMenuOpen,
        setUniverseMenuOpen
      }}
    >
      {children}
    </UniverseContext.Provider>
  )
}

export function useUniverse() {
  const context = useContext(UniverseContext)
  if (!context) {
    throw new Error("useUniverse must be used within UniverseProvider")
  }
  return context
}
