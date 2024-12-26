import style from "./Conteudo.module.css";

// Componente Conteudo
const Conteudo = (props) => {
  const { children } = props;

  return <div className={style.Conteudo}>{children}</div>;
};

export { Conteudo };
