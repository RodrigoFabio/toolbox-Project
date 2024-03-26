import funcionalidades from '../../mocks/funcionalidades.json';
import Card from '../../components/card/index.js';

export default function Home() {
  return (
    <>
      {/* <Header/> */}
      {funcionalidades.map((funcionalidade) => (
        <Card nome={funcionalidade.nome} descricao={funcionalidade.descricao}/>
      ))}
      {/* <Footer/> */}
    </>
  );
}