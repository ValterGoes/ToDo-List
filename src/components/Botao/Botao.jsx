import { TIPO_BOTAO} from './constants';
import style from './Botao.module.css';

// Componente Botao
const Botao = (props) => {
    const { texto, tipo = TIPO_BOTAO.ADD, ...outrasProps } = props;

    return (
        <button className={style.Botao} type={tipo} {...outrasProps}>
            {texto}
        </button>
    );
};

export { Botao };