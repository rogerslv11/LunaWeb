import  { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

// Componente individual de FAQ
function FAQItem({ faq, isOpen, onClick, index }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-white focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-lg font-medium">{faq.question}</span>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-lime-400" />
          ) : (
            <Plus className="h-5 w-5 text-lime-400" />
          )}
        </div>
      </button>

      <div
        id={`faq-answer-${index}`}
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`px-6 pb-4 text-gray-400 overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {faq.answer}
      </div>
    </div>
  );
}
// Componente principal de FAQ
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como vocês garantem a qualidade dos projetos?",
      answer:
        "Todos os nossos projetos passam por processos de revisão e testes rigorosos. Priorizamos performance, segurança e experiência do usuário para entregar soluções confiáveis e duradouras.",
    },
    {
      question: "Qual é o prazo médio para entrega de um projeto?",
      answer:
        "Depende do escopo, mas sempre estabelecemos prazos realistas e entregamos dentro do combinado, com atualizações periódicas para você acompanhar cada etapa.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer:
        "Sim. Garantimos suporte contínuo para manutenção, ajustes e melhorias, garantindo que sua solução digital permaneça funcional e atualizada.",
    },
    {
      question: "Como vocês lidam com comunicação durante o projeto?",
      answer:
        "Mantemos contato próximo via reuniões, e-mails e ferramentas de gestão. Transparência e comunicação clara são prioridades em todos os projetos.",
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer:
        "Trabalhamos com frameworks modernos, como React, Laravel, Next.js e outras soluções escaláveis, garantindo inovação, segurança e performance.",
    },
    {
      question: "Vocês ajudam no crescimento e marketing digital?",
      answer:
        "Sim. Nossas soluções incluem estratégias de UX, SEO, performance e marketing digital, integradas para gerar resultados reais e mensuráveis.",
    },
    {
      question: "Posso acompanhar o andamento do meu projeto?",
      answer:
        "Sim. Fornecemos acesso a relatórios e atualizações regulares para que você acompanhe cada etapa do desenvolvimento.",
    },
    {
      question: "Vocês oferecem soluções escaláveis para o futuro?",
      answer:
        "Sim. Todos os nossos projetos são planejados para crescer junto com o seu negócio, permitindo atualizações e expansões sem complicações.",
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-4xl mx-auto px-6 grid gap-6">
        <h2 className="text-center text-4xl font-bold text-white ">
          Perguntas Frequentes
        </h2>
        <p className=" text-center  text-white text-2xl font-semibold">
          Perguntas frequentes para você entender como trabalhamos.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
