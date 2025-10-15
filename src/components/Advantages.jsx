
export default function Advantages() {
  const advantages = [
    {
      title: "Soluções Personalizadas",
      description: "Projetos sob medida, alinhados aos objetivos do seu negócio.",
      color: "bg-lime-400",
      iconStroke: "#000",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2v4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7.5l3 1.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 7.5l-3 1.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="14" r="6" stroke="#000" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "3. Tecnologia de Ponta",
      description: "Frameworks modernos garantem segurança, escalabilidade e inovação.",
      color: "bg-lime-400",
      iconStroke: "#000",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#000" strokeWidth="1.5" />
          <path d="M8 8h8v8H8z" stroke="#000" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "7. Estratégia Integrada",
      description: "Combinação de marketing, UX e tecnologia para maximizar resultados.",
      color: "bg-lime-400",
      iconStroke: "#000",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3v6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 11l6-2 6 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6z" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className=" py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
       

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex flex-col rounded-2xl  bg-neutral-900 p-6 shadow-sm  hover:shadow-md transition-shadow">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${advantage.color}`}>
                {advantage.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{advantage.title}</h3>
              <p className="mt-3 text-gray-200">{advantage.description}</p>
            </li>
          ))}
        </ul>

       
      </div>
    </section>
  );
}
