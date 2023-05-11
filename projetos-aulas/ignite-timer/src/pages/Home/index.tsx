import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInout,
  Separator,
  StartCountdownButton,
  TaksInput,
} from './styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa!'),
  minutesAmount: z.number().min(5).max(60).multipleOf(5),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaksInput
            type="text"
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
