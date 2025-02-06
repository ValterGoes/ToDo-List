import { TIPO_BOTAO, ID_BOTAO} from './constants';
import style from './Botao.module.css';

// Componente Botao
const Botao = (props) => {
    const { texto, tipo = TIPO_BOTAO.ADD, ...outrasProps } = props;
    const id = ID_BOTAO[tipo];

    return (
        <button id={id} className={style.Botao} type={tipo} {...outrasProps}>
            {texto}
        </button>
    );
};

export { Botao };