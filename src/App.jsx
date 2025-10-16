import Advantages from "./components/Advantages";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import { Navbar } from "./components/Navbar";
import ServicesSection from "./components/Services";
import Foto from "./assets/foto.jpg"
export default function App() {

  return (
    <>
    <main  className="absolute top-0 z-[-2]  w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000_1px)] bg-[size:20px_20px]">
      <nav className=" px-5 py-3 fixed z-20 w-screen ">
        <Navbar/>
      </nav>
      <section className=" px-5 lg:px-20 pt-40 pb-10 grid gap-5 place-items-center">
        <h2 className="  capitalize text-white   text-center font-semibold text-[34px] lg:text-6xl" >
          
          <span className="  text-lime-400">Transformamos ideias </span>em soluções digitais<br/> que geram <span className=" text-lime-400"> crescimento e resultado</span> 
        </h2>
        <p className=" text-center text-white font-semibold text-lg  lg:text-2xl">
          Combinamos estratégia, design e tecnologia para transformar boas ideias em soluções digitais que impulsionam marcas, geram resultados reais e fortalecem o crescimento dos nossos clientes.

        </p>
        <a className=" uppercase bg-lime-400 text-xl lg:text-2xl p-2 rounded-xl font-semibold" href="https://kutt.it/2d2dwu">Agende uma conversa</a>

      </section>
     
      <section className=" pt-10 grid gap-5">
        <h2 className=" text-2xl lg:text-4xl text-center text-white font-semibold ">Por que escolher a <span className=" text-lime-400">LunaDev</span></h2>
        <p className=" text-center text-lg px-10  lg:text-2xl text-white font-semibold">Três vantagens claras que unimos em cada projeto: propósito, técnica e estratégia.</p>
        <Advantages/>
      </section>

      <section>
        <ServicesSection/>
      </section>
      
      <section>
        <FAQSection/>
      </section>
       
       <section className=" py-16">
      <div className=" w-full lg:px-20 mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="lg:w-3/5 text-white text-lg lg:text-2xl">
          <h2 className=" text-3xl lg:text-5xl font-bold mb-6">Sobre a LunaDev</h2>
          <p className="mb-4 text-gray-300">
            A LunaDev nasceu com o propósito de transformar ideias em experiências digitais que inspiram e geram resultados reais. Acreditamos que tecnologia e criatividade devem caminhar juntas para construir soluções que impulsionam negócios, fortalecem marcas e conectam pessoas.
          </p>
          <p className="text-gray-300">
            Mais do que uma agência de desenvolvimento, somos parceiros estratégicos. Unimos design, estratégia e inovação para criar projetos sob medida, com foco em performance, usabilidade e crescimento sustentável.
          </p>
        </div>

        <div className="lg:w-2/5">
          <img
            src={Foto}
            alt="Sobre a LunaDev"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
     
    <section className=" grid gap-6 mb-14">
      <p className=" text-lg lg:text-xl text-center font-semibold uppercase  text-lime-400">Entre em Contato</p>
      <h3 className="  text-center text-white text-2xl lg:text-4xl font-semibold ">Solicite Seu Orçamento Gratuito</h3>
      <p className=" text-center text-white text-lg lg:text-2xl">Preencha o formulário abaixo e nossa equipe entrará em  contato<br/> em até 24 horas para discutir seu projeto.</p>
      <Forms/>
    </section>
    <section>
      <Footer/>
    </section>
    </main>
    </>
  )
}


