import Navbar from "@/src/Navbar";
import Footer from "@/src/Footer";

export default function Social() {
  return (
    <>
      <main className="flex flex-col text-clr4 font-avenirbook text-xl">
        <Navbar />
        <div className="flex flex-col min-h-screen bg-clr4 pt-32 px-4 lg:px-28 pb-12 text-clr2 space-y-10">
          <h1 className="flex text-3xl">
            Proposta Comercial para Criação de Site
          </h1>
          <p>
            Olá! Ficamos contentes que esteja considerando construir seu site
            com a Torodan. Reconhecemos a importância de uma presença online
            robusta e eficaz nos dias de hoje e será um prazer colaborar com
            você para criar um site impressionante que atenda às suas
            necessidades e objetivos.
          </p>
          <h1 className="underline underline-offset-4">
            1. Visão Geral do Projeto
          </h1>
          <p>
            Desenvolveremos um site personalizado que represente sua marca de
            maneira única, otimizado para funcionalidade, usabilidade e
            estética. Nosso objetivo é criar uma plataforma que não apenas
            impressione visualmente, mas que também seja responsiva em
            dispositivos móveis, acessível e fácil de navegar.{" "}
          </p>
          <h1 className="underline underline-offset-4">
            2. Escopo dos Serviços
          </h1>
          <div className="space-y-2">

          <p>
            Consultoria Inicial: Entendimento aprofundado de suas necessidades,
            objetivos e público-alvo.
          </p>
          <p>
            Design Personalizado: Criação de um layout exclusivo e atraente,
            alinhado à identidade visual da sua empresa.
          </p>
          <p>
            Desenvolvimento Técnico: Utilização das mais recentes tecnologias
            para garantir funcionalidade e desempenho ideais.
          </p>
          <p>
            Otimização SEO: Implementação de estratégias para melhorar a
            visibilidade nos motores de busca.
          </p>
          <p>
            Integração de Conteúdo: Inclusão de textos, imagens, vídeos e outros
            elementos de acordo com suas especificações.
          </p>
          <p>
            Testes e Revisões: Garantia de qualidade por meio de testes
            rigorosos e revisões conforme suas recomendações.
          </p>
          </div>
          <h1>
            <p className="underline underline-offset-4">
              3. Cronograma de Trabalho
            </p>
          </h1>
          <p>
          Nos comprometemos a concluir o projeto dentro de um mês. Este prazo assume a prontidão e disponibilidade imediata do conteúdo essencial para o desenvolvimento do site.
          </p>
          <h1 className="underline underline-offset-4">4. Orçamento</h1>
          <p>
          O valor total para nossos projetos configura uma média de R$ 1200, podendo ser pago em até quatro parcelas iguais. Adicionalmente, para meses em que manutenções forem requisitadas pelo cliente, será aplicada uma taxa de R$ 50 por mês. Oferecemos também um desconto de 8% para pagamento à vista.
          </p>
          <h1 className="underline underline-offset-4">
            5. Compromisso com a Qualidade
          </h1>
          <p>
            Garantimos um compromisso total com a qualidade, prazos e satisfação
            do cliente. Estando também disponíveis para suporte técnico e
            quaisquer ajustes necessários após a conclusão do projeto. Estamos
            entusiasmados para iniciar essa jornada e criar um site excepcional
            para sua empresa. Ficaremos felizes em discutir detalhes adicionais
            ou responder a quaisquer perguntas que você possa ter.
          </p>
          <h1>Atenciosamente, Pedro Henrique Lima</h1>
        </div>
        <Footer />
      </main>
    </>
  );
}
