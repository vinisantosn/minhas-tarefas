import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/Reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard contador={3} legenda="pendentes" />
          <FiltroCard contador={4} legenda="concluídas" />
          <FiltroCard contador={5} legenda="urgentes" />
          <FiltroCard contador={2} legenda="importantes" />
          <FiltroCard contador={4} legenda="normal" />
          <FiltroCard contador={10} legenda="todas" ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
