import { original } from "immer"

import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { genereateField } from "../helpers/generateField";
import { openArea } from "../helpers/openArea";

export const STATE = {
  NOT_STARTED: 'notStarted',
  IN_PROGRESS: 'inProgress',
  FAILED: 'failed',
  WON: 'won'
}
const FIELD_WIDTH = 16
export const useStore = create(devtools(immer((set) => ({
  field: new Array(FIELD_WIDTH).fill('').map(() => {
    return new Array(FIELD_WIDTH).fill(null)
  }),
  opened: new Array(FIELD_WIDTH).fill('').map(() => {
    return new Array(FIELD_WIDTH).fill(false)
  }),
  state: STATE.NOT_STARTED,
  bombs: 40,
  startGame: (row, column) => set(state => {
    let field = genereateField(FIELD_WIDTH, state.bombs, row, column)
    state.field = field
    state.state = STATE.IN_PROGRESS
  }),
  openArea: (row, column) => set(state => {
    state.opened = openArea(state.field, state.opened, row, column)
  })
}))))