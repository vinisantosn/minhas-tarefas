import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import { Container } from './styles'
const tarefas = [
  {
    titulo: 'Estudar typescript',
    descricao: 'Ver aula 3 da Ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'pagar net',
    descricao: 'Pegar fatura',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Ir para a capoeira',
    descricao: 'treinar berimbau',
    prioridade: 'importante',
    status: 'concluída'
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
