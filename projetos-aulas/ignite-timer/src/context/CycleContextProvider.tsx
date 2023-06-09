import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Cycle, CyclesReducer } from '../reducers/cycles/recucer'
import {
  createNewCycleAction,
  interrupedCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

const IGNITE_TIMER = '@ignite-timer:cycles-state-1.0.0'

export interface createNewCycleData {
  task: string
  minutesAmount: number
}

interface cycleContextType {
  cycles: Cycle[] | undefined
  activeCycle: Cycle | undefined
  activeCycleId: String | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (totalSeconds: number) => void
  createNewCycle: (data: createNewCycleData) => void
  interrupedCurrentCycle: () => void
}

interface CycleContextProviderProps {
  children: ReactNode
}

export const CycleContext = createContext({} as cycleContextType)

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    CyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storadStateJSON = localStorage.getItem(IGNITE_TIMER)

      if (storadStateJSON) {
        return JSON.parse(storadStateJSON)
      }

      return initialState
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  function setSecondsPassed(totalSeconds: number) {
    setAmountSecondsPassed(totalSeconds)
  }

  function createNewCycle(data: createNewCycleData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    dispatch(createNewCycleAction(newCycle))
    setSecondsPassed(0)
  }

  function interrupedCurrentCycle() {
    dispatch(interrupedCurrentCycleAction())
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem(IGNITE_TIMER, stateJSON)
  }, [cyclesState])

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setSecondsPassed,
        markCurrentCycleAsFinished,
        createNewCycle,
        interrupedCurrentCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
