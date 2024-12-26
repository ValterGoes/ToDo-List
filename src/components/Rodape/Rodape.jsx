import style from './Footer.module.css'

// Componente Rodape
const Rodape = () => {
    const anoAtual = (new Date()).getFullYear();

    return (
      <div className={style.Footer}>
        <a href="https://react.dev/"> React Básico </a>
        <p>- {anoAtual} -</p>
        <a href="https://www.linkedin.com/in/valtergoes/in">Valter Goes</a>
      </div>
    );
}

export { Rodape };