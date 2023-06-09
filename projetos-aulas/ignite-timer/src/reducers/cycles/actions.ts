/* eslint-disable no-unused-vars */

import { createNewCycleData } from '../../context/CycleContextProvider'

export enum ActionTypes {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  INTERRUPED_CURRENT_CYCLE = 'INTERRUPED_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function createNewCycleAction(newCycle: createNewCycleData) {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interrupedCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPED_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
