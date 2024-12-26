import { useAppContext } from '../../hooks'
import { Loading } from '../Loading';
import styles from './ListaTarefas.module.css';
import { ListaTarefasItem } from "./ListaTarefasItem";

const ListaTarefas = () => {
  const { tarefas, loadingCarregar } = useAppContext();
    
    return (
      <ul className={styles.ListaTarefas}>
        {loadingCarregar && (
          <span>
            Carregando... <Loading />
          </span>
        )}

        {/* /caso não haja items na lista */}
        {!loadingCarregar && !tarefas.length && (
          <p>Não há tarefas cadastradas na lista.</p>
        )}

        {/* adiciona os items na lista */}
        {tarefas.map((item) => (
          <ListaTarefasItem
            key={item.id}
            id={item.id}
            nome={item.nome}
            check={item.check}
          />
        ))}
      </ul>
    );
};

export { ListaTarefas }   