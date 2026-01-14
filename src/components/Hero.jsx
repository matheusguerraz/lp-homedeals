import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-homedeals.png";
import bgMobile from "@/assets/mobile-background.png";
import bgDesktop from "@/assets/desktop-background.png";
import phoneMockup from "@/assets/phone-mockup.png";
import { Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://sndflw.com/i/homedeals";

const pulseTransition = {
  duration: 1.1,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut",
};

const Hero = () => {
  const handleWhatsappClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "clique_whatsapp", {
        event_category: "engajamento",
        event_label: "botao_whatsapp_hero",
        value: 1,
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background (mobile/desktop) */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 640px)" srcSet={bgDesktop} />
          <img
            src={bgMobile}
            alt=""
            className="w-full h-full object-cover object-center"
            decoding="async"
            fetchpriority="high"
          />
        </picture>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/60" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-6 pt-10 pb-10 min-h-[100svh] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Coluna texto */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src={logo}
                alt="Home Deals Logo"
                className="w-28 sm:w-32 h-auto"
                width="196"
                height="196"
                loading="eager"
                decoding="async"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mb-5 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white/90" />
                <span className="text-white text-sm font-medium">
                  Ofertas Diárias Exclusivas
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Ofertas para deixar sua rotina{" "}
              <span className="text-[#D2691E]">Mais Econômica</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
              className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Entre no grupo e receba ofertas diárias
              direto no seu celular.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  filter: [
                    "drop-shadow(0px 0px 0px rgba(37,211,102,0))",
                    "drop-shadow(0px 0px 14px rgba(37,211,102,0.75))",
                    "drop-shadow(0px 0px 0px rgba(37,211,102,0))",
                  ],
                }}
                transition={pulseTransition}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-lg px-8 py-6 rounded-full shadow-2xl shadow-[#25D366]/40 transition-transform duration-200 hover:scale-[1.02]"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsappClick}
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        d="M12.04 2C6.57 2 2.12 6.45 2.12 11.92c0 1.96.57 3.77 1.55 5.3L2 22l4.95-1.63a9.88 9.88 0 0 0 5.1 1.4h.01c5.47 0 9.92-4.45 9.92-9.92S17.51 2 12.04 2zm0 18.1h-.01a8.19 8.19 0 0 1-4.17-1.14l-.3-.18-2.94.97.98-2.87-.2-.3a8.19 8.19 0 1 1 6.64 3.52zm4.66-6.4c-.25-.12-1.46-.72-1.69-.8-.23-.09-.4-.12-.56.12-.17.25-.64.8-.79.96-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.1-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.56-1.34-.77-1.83-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.42.06-.64.32-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.17 1.69 2.58 4.1 3.62.57.25 1.02.4 1.36.51.57.18 1.1.15 1.52.09.46-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"
                      />
                    </svg>
                    Entrar no Grupo do WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Prova social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-white/90"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center border border-white/15">
                  <span className="text-sm font-bold">+5k</span>
                </div>
                <span className="text-xs sm:text-sm">Membros</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center border border-white/15">
                  <span className="text-sm font-bold">+40</span>
                </div>
                <span className="text-xs sm:text-sm">Ofertas/dia</span>
              </div>
            </motion.div>
          </div>

          {/* Mockup (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="hidden lg:flex justify-end"
          >
            <img
              src={phoneMockup}
              alt="Prévia do grupo Home Deals"
              className="w-[420px] h-auto drop-shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
