import { useState } from "react";
import { Loading } from "../../Loading";
import { useAppContext } from "../../../hooks";
import style from "./ListaTarefasItem.module.css";
import { Botao, CampoTexto, TIPO_BOTAO } from "../../../components";

// Componente ListaTarefasItem
const ListaTarefasItem = (props) => {
  const { id, nome, check } = props;

  // Estado para verificar se o item está sendo editado
  const [estaEditando, setEstaEditando] = useState(false);

  // Funções do contexto da aplicação para editar e remover tarefas
  const {
    loadingEditar,
    loadingRemover,
    editarTarefa,
    removerTarefas,
    alternarCheckTarefa,
    isCheck,
  } = useAppContext();

  //Função para evitar chamadas recorrentes no backend
  const onBlurTarefa = (event) => {
    const nomeTarefa = event.currentTarget.value;
    editarTarefa(id, nomeTarefa);
    setEstaEditando(false);
  };

  // Função para verificar se está sendo editado
  const loadingEstaEditando = loadingEditar === id;
  // Função para verificar se está sendo removido
  const loadingEstaRemovendo = loadingRemover === id;
  // Função para verificar se está sendo checado
  const loadingEstaCheck = isCheck === id;

  return (
    <div className={style.ListaTarefasItem}>
      <li>
        {(loadingEstaEditando || estaEditando) && (
          <CampoTexto 
            autoFocus 
            defaultValue={nome} 
            onBlur={onBlurTarefa} 
          />
        )}

        {loadingEstaEditando ||
          (!estaEditando && (
            <p onDoubleClick={() => setEstaEditando(true)}> {nome} </p>
          ))}

        {/* {loadingEstaEditando && <Loading />} */}
      </li>
      <div className={style.botoes}>
        <Botao
          onClick={() => alternarCheckTarefa(id)}
          tipo={check ? TIPO_BOTAO.TRUE : TIPO_BOTAO.FALSE}
          texto={
            loadingEstaCheck ? (
              <Loading />
            ) : check ? (
              <span className="material-symbols-outlined">
                task_alt
              </span>
            ) : (
              <span className="material-symbols-outlined">
                radio_button_unchecked
              </span>
            )
          }
        />

        <Botao
          tipo={TIPO_BOTAO.DELETE}
          onClick={() => removerTarefas(id)}
          texto={
            loadingEstaRemovendo ? (
              <Loading />
            ) : (
              <span className="material-symbols-outlined">cancel</span>
            )
          }
        />
      </div>
    </div>
  );
};

export { ListaTarefasItem };
