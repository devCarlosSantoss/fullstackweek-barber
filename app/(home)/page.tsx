import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import Header from "../_components/header";

const Home = () => {
  const dataAtual = new Date();

  const dataFormatada = format(dataAtual, "EEEE', ' d 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
          <h2 className="text-xl font-bold ">Olá, Carlos</h2>
          <p className="capitalize text-sm">{dataFormatada}</p>
      </div>
    </div>
  );
};

export default Home;
