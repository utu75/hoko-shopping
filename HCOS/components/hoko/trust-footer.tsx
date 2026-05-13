"use client"

import { Truck, ShieldCheck, RotateCcw, Headphones, Globe, CreditCard, Mail, MapPin } from "lucide-react"

const trustItems = [
  {
    icon: Truck,
    title: "Livraison 150+ pays",
    description: "Direct Asie · Worldwide delivery",
    color: "text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Paiement securise",
    description: "Stripe · PayPal · SSL",
    color: "text-green-600",
  },
  {
    icon: RotateCcw,
    title: "Satisfait ou Rembourse",
    description: "30 jours · Retours gratuits",
    color: "text-blue-600",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Reponse rapide garantie",
    color: "text-purple-600",
  },
]

const footerLinks = {
  boutique: [
    { label: "Nouveautes", href: "/nouveautes" },
    { label: "Meilleures ventes", href: "/bestsellers" },
    { label: "Promotions", href: "/promos" },
    { label: "Flash & Deals", href: "/flash" },
    { label: "Tout a 1$", href: "/1dollar" },
    { label: "Hokoiti", href: "/hokoiti" },
  ],
  services: [
    { label: "HOKO PASS", href: "/pass", badge: true },
    { label: "Sourcing IA", href: "/sourcing" },
    { label: "Devis sur mesure", href: "/devis" },
    { label: "Programme Pro", href: "/pro" },
    { label: "Affiliation", href: "/affiliation" },
    { label: "Booster mon produit", href: "/boost", emoji: "📣" },
  ],
  aide: [
    { label: "Centre d&apos;aide", href: "/help" },
    { label: "Suivi de commande", href: "/tracking" },
    { label: "Livraison", href: "/livraison" },
    { label: "Retours et remboursements", href: "/retours" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Mentions legales", href: "/mentions" },
    { label: "CGV", href: "/cgv" },
    { label: "Politique de confidentialite", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
  ],
}

export function TrustFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      {/* Trust Bar */}
      <div className="border-b border-border py-6">
        <div className="max-w-[1400px] mx-auto px-4">
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
      </div>

      {/* Main Footer */}
      <div className="py-10">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-black tracking-tight">
                  HOK<span className="text-primary">O</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                HOKO by TchipshopTechnology - Votre marketplace premium mondiale. Sourcing direct Hong Kong.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Siege social: Hong Kong</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 shrink-0" />
                  <span>Bureau Pacifique: Nuku-Hiva, Polynesie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:contact@tchipshoptechnology.com" className="hover:text-primary transition-colors">
                    contact@tchipshoptechnology.com
                  </a>
                </div>
              </div>
            </div>

            {/* Boutique */}
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-4">BOUTIQUE</h4>
              <ul className="space-y-2">
                {footerLinks.boutique.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-4">SERVICES</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                      {link.badge && <span className="text-amber-500">🏅</span>}
                      {link.emoji && <span>{link.emoji}</span>}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aide */}
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-4">AIDE</h4>
              <ul className="space-y-2">
                {footerLinks.aide.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-4">LEGAL</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Methods & Social */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Paiements securises:</span>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg">💳</span>
                <span className="text-lg">🅿️</span>
                <span className="text-lg">🍎</span>
              </div>
              <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded font-medium">
                SSL Securise
              </span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2026 HOKO · Direct Asie · 150+ pays
              </p>
              <p className="text-xs text-muted-foreground">
                by TchipshopTechnology — Hong Kong
              </p>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="border-t border-border mt-6 pt-6 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-3 flex-wrap">
              <span>🌺 BORN IN POLYNESIA</span>
              <span>·</span>
              <span>⚡ POWERED BY ASIA</span>
              <span>·</span>
              <span>🌍 DELIVERED WORLDWIDE</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
