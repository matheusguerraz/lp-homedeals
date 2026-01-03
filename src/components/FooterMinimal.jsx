import React from 'react';
import { Home, Mail, MessageCircle } from 'lucide-react';

const FooterMinimal = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-stone-700 to-black rounded-lg flex items-center justify-center border border-white/10">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Home Deals</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Sua fonte confiável para ofertas diárias exclusivas em itens essenciais para casa, móveis, produtos de beleza e muito mais.
            </p>
          </div>

          <div>
            <span className="text-lg font-bold text-white mb-4 block">Contato</span>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@homedeals.com" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
                info@homedeals.com
              </a>
              <a href="https://sndflw.com/i/homedeals" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-400 hover:text-[#25D366] transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
                Comunidade WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8">
          <p className="text-center text-stone-500 text-sm">
            © 2026 Home Deals. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;