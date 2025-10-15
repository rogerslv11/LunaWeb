import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-8">
        
        {/* Logo / Nome */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white mb-4">LunaDev</h2>
          <p className="text-gray-400">
            Transformando ideias em experiências digitais que inspiram e geram resultados reais.
          </p>
        </div>

      

        {/* Redes Sociais */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Siga-nos</h3>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LunaDev. Todos os direitos reservados.
      </div>
    </footer>
  );
}
