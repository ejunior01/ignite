import { produce } from 'immer'
import { ActionTypes } from '../cycles/actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interrupeddate?: Date
  finishedDate?: Date
}

interface cycleStateType {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function CyclesReducer(state: cycleStateType, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPED_CURRENT_CYCLE: {
      const activeCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (activeCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[activeCycleIndex].interrupeddate = new Date()
        draft.activeCycleId = null
      })
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const activeCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (activeCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[activeCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }

    default:
      return state
  }
}
