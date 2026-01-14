import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-homedeals.webp";
import bgMobile from "@/assets/mobile-background.webp";
import bgDesktop from "@/assets/desktop-background.webp";
import whatsapp from "@/assets/whatsapp.webp";
import phoneMockup from "@/assets/phone-mockup.webp";
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
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "clique_whatsapp", {
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
                    <img
                      src={whatsapp}
                      alt=""
                      className="w-6 h-6"
                      width="24"
                      height="24"
                      loading="lazy"
                      decoding="async"
                    />
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
