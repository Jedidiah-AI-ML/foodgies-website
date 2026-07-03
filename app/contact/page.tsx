import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { BRAND } from "@/data/menuData";

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to get in touch with Foodgies Corner."
  );

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${BRAND.whatsappNumber}?text=${whatsappMessage}`,
      external: true,
    },
    {
      icon: Phone,
      label: "Call Us",
      value: BRAND.phoneNumber,
      href: `tel:${BRAND.phoneNumber}`,
      external: false,
    },
    {
      icon: Mail,
      label: "Email",
      value: BRAND.email,
      href: `mailto:${BRAND.email}`,
      external: false,
    },
    {
      icon: MapPin,
      label: "Location",
      value: BRAND.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.address)}`,
      external: true,
    },
  ];

  return (
    <main className="relative overflow-hidden px-6 pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(201,162,75,0.12),transparent)]" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-fg-gold text-center">
          Foodgies Corner
        </p>
        <h1 className="mt-2 text-center font-display text-4xl text-fg-cream md:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 text-center text-sm text-fg-cream/60">
          Questions, orders, or just craving a chat — reach us any way you like.
        </p>

        <div className="mt-14 space-y-4">
          {contactMethods.map(({ icon: Icon, label, value, href, external }) => (
            
            <a  key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl border border-fg-gold/20 bg-fg-emerald/30 p-5 transition-colors hover:border-fg-gold/50"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-fg-gold/10 text-fg-gold">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-fg-gold">{label}</p>
                <p className="mt-0.5 text-sm text-fg-cream/80">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}