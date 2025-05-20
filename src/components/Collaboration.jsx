import { brainwaveSymbol, check } from "../assets";
import { collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";


const handleClick = () => {
  window.open("https://wa.me/5599999999999?text=Olá,+vim+pelo+site!", "_blank");
};

const Collaboration = () => {
  return (
    <Section crosses id="SobreGabriel">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Quem é Gabriel Alderige?
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            <p>Sou Gabriel Alderige, especialista em <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">desenvolver soluções digitais eficientes e alinhadas aos objetivos do cliente.</span> Com experiência em Sites, Landing Pages, Ecommerces, foco na entrega de projetos personalizados, com qualidade e resultado.
              Trabalho com planejamento detalhado e comunicação transparente para garantir que cada etapa seja cumprida com excelência. Meu compromisso é transformar seu projeto em uma ferramenta que impulsione seu negócio.</p>
          </ul>

          <Button onClick={handleClick}>Contato</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
