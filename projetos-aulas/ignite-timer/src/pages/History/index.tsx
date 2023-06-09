import { useContext } from 'react'
import { EmptyTable, HistoryContainer, HistoryList, Status } from './styles'
import { CycleContext } from '../../context/CycleContextProvider'
import { formatDistanceToNow, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico </h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles?.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td
                    title={format(
                      new Date(cycle.startDate),
                      'dd/MM/yyyy HH:mm:ss',
                      {
                        locale: ptBR,
                      },
                    )}
                  >
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interrupeddate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.interrupeddate && !cycle.finishedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {cycles!.length < 1 && <EmptyTable />}
      </HistoryList>
    </HistoryContainer>
  )
}
