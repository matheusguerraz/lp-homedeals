import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo from "@/assets/logo-homedeals.png";
import background from "@/assets/background.png";
import { Sparkles } from 'lucide-react'; // MessageCircle is no longer needed directly for the button

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={background}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Top Right Logo Image */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <img 
          src={logo}
          alt="Home Deals Logo" 
          className="h-10 w-auto" 
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex justify-center md:justify-start"
          >
            <div className="inline-flex items-center gap-2 bg-stone-800/40 border border-stone-600/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-stone-300" />
              <span className="text-stone-100 text-sm font-medium">Ofertas Diárias Exclusivas</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Transforme Sua Casa com{' '}
            <span className="text-[#D2691E]">Ofertas Imbatíveis</span> {/* Changed color to a brown/orange tone */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl text-stone-200 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            Junte-se à nossa comunidade exclusiva no WhatsApp e tenha acesso instantâneo a ofertas diárias em eletrodomésticos, móveis e muito mais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-lg px-8 py-6 rounded-full shadow-2xl shadow-[#25D366]/50 transition-all duration-300 hover:scale-105"
            >
              <a href="https://sndflw.com/i/homedeals" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img 
                  src="https://horizons-cdn.hostinger.com/0fbacde2-7cdd-4588-b944-8c8e401192b9/01b8d8b8370fe70ecf72e23d98a94399.webp" 
                  alt="WhatsApp icon" 
                  className="w-6 h-6" 
                /> {/* Replaced Lucide icon with WhatsApp logo image */}
                Entrar no Grupo WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-6 mt-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-stone-900/50 rounded-full flex items-center justify-center border border-white/10">
                <span className="text-lg font-bold text-white">5k+</span>
              </div>
              <span className="text-sm">Membros Ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-stone-900/50 rounded-full flex items-center justify-center border border-white/10">
                <span className="text-lg font-bold text-white">40+</span>
              </div>
              <span className="text-sm">Ofertas Diárias</span>
            </div>
          </motion.div>
        </div>
        
        {/* Absolute Footer for copyright/credits to keep layout single-screen but professional */}
        <div className="absolute bottom-4 left-0 right-0 text-center z-20">
             <p className="text-stone-400 text-xs">
            © 2026 Home Deals. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;