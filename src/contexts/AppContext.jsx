import { createContext, useEffect, useState } from "react";
import { api } from "../services";

// Cria o contexto da aplicação
export const AppContext = createContext({});

// Provedor do contexto da aplicação
export const AppContextProvider = (props) => {
  const { children } = props;

  // Estado para armazenar as tarefas
  const [tarefas, setTarefas] = useState([]);

  const [loadingCarregar, setLoadingCarregar] = useState(false);
  const [loadingCriar, setLoadingCriar] = useState(false);
  const [loadingEditar, setLoadingEditar] = useState(null);
  const [loadingRemover, setLoadingRemover] = useState(null);

  const [isCheck, setIsCheck] = useState(false);

  // Função para carregar tarefas do backend
  const carregarTarefas = async () => {
    setLoadingCarregar(true);

    const { data = [] } = await api.get("/tarefas");
    setTarefas([...data]);

    setLoadingCarregar(false);
  };

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = async (nomeTarefa) => {
    setLoadingCriar(true);

    const { data: tarefa } = await api.post("/tarefas", { nome: nomeTarefa });
    setTarefas((estadoAtual) => [...estadoAtual, tarefa]);

    setLoadingCriar(false);
  };

  // Função para alternar o estado de conclusão da tarefa
  const alternarCheckTarefa = async (idTarefa) => {
    setIsCheck(true);

    // Encontra a tarefa com base no id
    const tarefa = tarefas.find((tarefa) => tarefa.id === idTarefa);

    if (!tarefa) {
      console.error(`Tarefa com id ${idTarefa} não encontrada.`);
      setIsCheck(false);
      return;
    }

    const { data: tarefaAtualizada } = await api.put(`/tarefas/${idTarefa}`, {
      ...tarefa,
      check: !tarefa.check,
    });

    setTarefas((estadoAtual) =>
      estadoAtual.map((tarefa) =>
        tarefa.id === idTarefa ? tarefaAtualizada : tarefa
      )
    );

    setIsCheck(false);
  };

  // Função para remover uma tarefa
  const removerTarefas = async (idTarefa) => {
    setLoadingRemover(idTarefa);

    await api.delete(`/tarefas/${idTarefa}`);
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.filter(
        (tarefa) => tarefa.id !== idTarefa
      );
      return [...tarefasAtualizadas];
    });

    setLoadingRemover(null);
  };

  // Função para editar uma tarefa
  const editarTarefa = async (idTarefa, nomeTarefa) => {
    setLoadingEditar(idTarefa);

    const { data: tarefaAtualizada } = await api.put(`/tarefas/${idTarefa}`, {
      nome: nomeTarefa,
    });
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.map((tarefa) => {
        return tarefa.id === idTarefa
          ? { ...tarefa, nome: tarefaAtualizada.nome }
          : tarefa;
      });
      return [...tarefasAtualizadas];
    });

    setLoadingEditar(null);
  };

  // Carrega as tarefas ao montar o componente
  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <AppContext.Provider
      value={{
        tarefas,
        adicionarTarefa,
        removerTarefas,
        editarTarefa,
        alternarCheckTarefa,
        loadingCriar,
        loadingCarregar,
        loadingEditar,
        loadingRemover,
        isCheck,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
