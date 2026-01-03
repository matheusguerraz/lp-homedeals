import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://horizons-cdn.hostinger.com/0fbacde2-7cdd-4588-b944-8c8e401192b9/b8daf8ba94393049992ab57b8474c578.png"
          alt="Produtos premium para casa e acessórios em exposição"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Começar a Economizar na Sua{' '}
            <span className="text-[#25D366]">Casa dos Sonhos?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Junte-se a mais de 5.000 compradores inteligentes que estão transformando suas casas enquanto economizam milhares. Sua próxima grande oferta está a apenas um clique de distância!
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-lg px-10 py-7 rounded-full shadow-2xl shadow-[#25D366]/50 transition-all duration-300 hover:scale-105 group"
            >
              <a href="https://sndflw.com/i/homedeals" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Entrar no Grupo WhatsApp Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-sm mt-6"
          >
            🔒 100% Grátis • Não Requer Cartão de Crédito • Cancele a Qualquer Momento
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;