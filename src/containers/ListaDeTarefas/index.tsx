import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'
const tarefas = [
  {
    titulo: 'Estudar typescript',
    descricao: 'Ver aula 3 da Ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'pagar net',
    descricao: 'Pegar fatura',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a capoeira',
    descricao: 'treinar berimbau',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            status={t.status}
            titulo={t.titulo}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
