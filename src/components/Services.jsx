import React from "react";
import { Cloud, Globe, Smartphone, ShoppingCart, Cog, Link as LinkIcon } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Cloud className="h-8 w-8 text-black" />,
      title: "Desenvolvimento SaaS",
      description:
        "Criamos plataformas SaaS completas e escaláveis, prontas para gerar receita recorrente para seu negócio.",
      items: [
        "Arquitetura Multi-tenant",
        "Sistema de Assinaturas",
        "Billing Automatizado",
        "Dashboard Analytics",
        "API RESTful Completa",
        "Escalabilidade em Nuvem",
      ],
    },
    {
      icon: <Globe className="h-8 w-8 text-black" />,
      title: "Desenvolvimento Web",
      description:
        "Criamos aplicações web modernas, responsivas e escaláveis que transformam a experiência digital da sua empresa.",
      items: [
        "Aplicações Single Page (SPA)",
        "Progressive Web Apps (PWA)",
        "Portais Corporativos",
        "Dashboards Interativos",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8 text-black" />,
      title: "Apps Mobile",
      description:
        "Desenvolvemos aplicativos nativos e híbridos para iOS e Android com performance excepcional.",
      items: [
        "Apps Nativos (iOS/Android)",
        "Apps Híbridos",
        "Integração com APIs",
        "Push Notifications",
      ],
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-black" />,
      title: "E-commerce",
      description:
        "Plataformas de vendas completas com integração a gateways de pagamento e sistemas de gestão.",
      items: [
        "Lojas Virtuais Personalizadas",
        "Marketplaces",
        "Integrações ERP/CRM",
        "Analytics Avançado",
      ],
    },
    {
      icon: <Cog className="h-8 w-8 text-black" />,
      title: "Sistemas Corporativos",
      description:
        "Sistemas sob medida que automatizam processos e aumentam a produtividade da sua empresa.",
      items: [
        "ERP Personalizado",
        "CRM Customizado",
        "Gestão de Processos",
        "Automação Inteligente",
      ],
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-black" />,
      title: "APIs & Integrações",
      description:
        "Conectamos seus sistemas e criamos APIs robustas para integração perfeita entre plataformas.",
      items: [
        "REST APIs",
        "Integrações Complexas",
        "Webhooks",
        "Microserviços",
      ],
    },
  ];

  return (
    <section className=" py-16">
      <div className="mx-auto max-w-6xl px-6 grid gap-6">
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-white ">
          Nossos Serviços
        </h2>

        <p className=" text-center text-white text-lg lg:text-2xl font-semibold ">
          Soluções digitais sob medida para acelerar o crescimento do seu negócio."
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8 shadow-lg hover:shadow-lime-400/10 transition-shadow duration-300"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-lime-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-lime-400 mr-2">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
