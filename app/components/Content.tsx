import type React from "react";
import { Github, Linkedin } from "lucide-react";

interface ContentProps {
  activeDomain: string;
}

const Content: React.FC<ContentProps> = ({ activeDomain }) => {
  const renderContent = () => {
    let content;
    let pageName;

    switch (activeDomain) {
      case "me":
        content = (
          <p className="text-gray-600 mb-8 leading-relaxed">
            Curitibano, vegano e entusiasta do minimalismo. Apaixonado por café
            de especialidade, trilhas na natureza e em busca constante de um
            estilo de vida mais consciente e sustentável. Acredito que menos é
            mais, tanto na vida quanto no código.
          </p>
        );
        pageName = "pessoal";
        break;
      case "dev":
        content = (
          <p className="text-gray-600 mb-8 leading-relaxed">
            Desenvolvedor backend, minimalista e entusiasta de código limpo.
            Apaixonado por criar soluções elegantes e eficientes, sempre
            buscando a simplicidade tanto no código quanto no design.
          </p>
        );
        pageName = "desenvolvedor";
        break;
      case "com":
        content = (
          <p className="text-gray-600 mb-8 leading-relaxed">
            Fundador da meu.software, uma empresa nascida em 2023 com a missão
            de desenvolver soluções digitais elegantes e eficientes. Focada em
            criar produtos que combinam excelência técnica com simplicidade no
            design, a meu.software reflete minha paixão por construir
            ferramentas que fazem a diferença.
          </p>
        );
        pageName = "profissional";
        break;
    }

    return (
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-light mb-4">Lucas Kaminski</h1>
        {content}
        <p className="text-gray-400 text-sm mt-8">
          Mais seções sobre minha vida {pageName} estão em desenvolvimento.
        </p>
      </div>
    );
  };

  return (
    <div className="flex-grow flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default Content;
