import { useContext } from 'react'
import { FormContainer, MinutesAmountInout, TaksInput } from './style'

import { useFormContext } from 'react-hook-form'
import { CycleContext } from '../../../../context/CycleContextProvider'

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaksInput
        type="text"
        id="task"
        list="task-suggestion"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestion">
        <option value="Tarefa 01" />
        <option value="Tarefa 02" />
        <option value="Tarefa 03" />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInout
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={5}
        max={60}
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
