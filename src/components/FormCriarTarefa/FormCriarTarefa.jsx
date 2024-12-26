import { useState } from "react";
import { useAppContext } from "../../hooks";
import style from "./FormCriarTarefa.module.css";
import { CampoTexto, Botao, Loading } from "../../components";

// Componente FormCriarTarefa
const FormCriarTarefa = () => {
  const { adicionarTarefa, loadingCriar} = useAppContext();

  // Estado para armazenar o nome da tarefa
  const [nomeTarefa, setNomeTarefa] = useState("");

  // Função para atualizar o estado do nome da tarefa
  const onChangeNomeTarefa = (e) => {
    setNomeTarefa(e.currentTarget.value);
  };

  // Função para adicionar uma nova tarefa
  const addTarefa = (e) => {
    e.preventDefault();

    // Verifica a existência do nome da tarefa
    if (!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa);

    // Limpa o campo de texto após adicionar a tarefa
    setNomeTarefa(" ");
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={addTarefa}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botao
        texto={loadingCriar ? <Loading /> : <span className="material-symbols-outlined">add_circle</span>}
      />
    </form>
  );
};

export { FormCriarTarefa };
