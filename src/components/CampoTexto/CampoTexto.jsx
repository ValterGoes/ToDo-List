import style from './CampoTexto.module.css';

// Componente Campo de Texto
const CampoTexto = (props) => {
    return (
        <input 
            type="text"
            placeholder='Adicione uma tarefa'
            className={style.CampoTexto}  
            {...props}
        />
    );
};

export { CampoTexto };