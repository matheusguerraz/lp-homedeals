import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-homedeals.webp";
import bgMobile from "@/assets/mobile-background.webp";
import bgDesktop from "@/assets/desktop-background.webp";
import { BadgePercent } from "lucide-react";

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

      {/* Top bar */}
      <div className="relative z-10 bg-[#E10600] text-white">
        <div className="mx-auto flex items-center justify-center gap-3 px-4 py-3 text-center text-sm sm:text-base font-semibold tracking-wide uppercase">
          <span>Cupons e descontos exclusivos</span>
          <BadgePercent className="w-5 h-5" />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-56px)] max-w-screen-xl flex-col items-center px-4 pb-12 pt-16 text-center">
        <div className="mt-6 flex w-full flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            <span className="text-[#FFD200]">OFERTAS</span> que deixam sua{" "}
            <span className="text-[#FFD200]">ROTINA</span> mais{" "}
            <span className="text-[#FFD200]">ECONÔMICA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="mt-8 text-lg sm:text-xl text-white/90 leading-relaxed"
          >
            Descontos diários para membros!
            <br />
            Entre agora:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-10 w-full max-w-xl"
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
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-xl sm:text-2xl px-8 py-8 rounded-xl shadow-2xl shadow-[#25D366]/40 uppercase tracking-wide"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsappClick}
                  className="flex items-center justify-center gap-3"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15 border border-white/40">
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
                  </span>
                  Entrar no WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-auto pt-12"
        >
          <img
            src={logo}
            alt="Home Deals Logo"
            className="w-44 sm:w-52 h-auto"
            width="196"
            height="196"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
