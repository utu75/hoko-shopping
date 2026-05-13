"use client"

import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react"

const trustItems = [
  {
    icon: Truck,
    title: "Livraison Pacifique",
    description: "Rapide & Offerte dès 5 000 XPF",
    color: "text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Paiement 100% Sécurisé",
    description: "SSL • Visa • Mastercard • PayPal",
    color: "text-green-600",
  },
  {
    icon: RotateCcw,
    title: "Satisfait ou Remboursé",
    description: "30 jours pour changer d&apos;avis",
    color: "text-blue-600",
  },
  {
    icon: Headphones,
    title: "Support Client 7j/7",
    description: "Réponse rapide garantie",
    color: "text-purple-600",
  },
]

export function TrustFooter() {
  return (
    <section className="border-t border-border bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`shrink-0 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
