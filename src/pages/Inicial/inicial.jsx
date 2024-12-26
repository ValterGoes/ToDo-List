
import { FormCriarTarefa, ListaTarefas } from "../../components";
import style from './Inicial.module.css'

// Componente Inicial
const Inicial = () => {
    return (
        <div className={style.Inicial}>
            <FormCriarTarefa />
            <ListaTarefas />
        </div>
    );
};

export { Inicial };