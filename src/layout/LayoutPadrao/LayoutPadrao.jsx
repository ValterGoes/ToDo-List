import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";

// Componente Layout Padrao
const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho />
                <Conteudo>
                    <Outlet />
                </Conteudo>
            <Rodape />
        </> 
    );
};


export { LayoutPadrao}