import { create } from "zustand";
import { devtools } from 'zustand/middleware'

import { genereateField } from "../helpers/generateField";

export const STATE = {
  NOT_STARTED: 'notStarted',
  IN_PROGRESS: 'inProgress',
  FAILED: 'failed',
  WON: 'won'
}
const FIELD_WIDTH = 16
export const useStore = create(devtools((set) => ({
  field: new Array(FIELD_WIDTH).fill('').map(() => {
    return new Array(FIELD_WIDTH).fill(null)
  }),
  state: STATE.NOT_STARTED,
  bombs: 40,
  startGame: () => set(state => ({
    field: genereateField(state.field, state.bombs, 0, 0),
    state: STATE.IN_PROGRESS
  }))
})))