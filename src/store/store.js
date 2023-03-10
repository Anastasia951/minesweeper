import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { genereateField } from "../helpers/generateField";
import { openArea } from "../helpers/openArea";

export const STATE = {
  NOT_STARTED: 'notStarted',
  IN_PROGRESS: 'inProgress',
  FAILED: 'failed',
  WON: 'won',
}
const FIELD_WIDTH = 16
export const useStore = create(devtools(immer((set) => ({
  field: new Array(FIELD_WIDTH).fill('').map(() => {
    return new Array(FIELD_WIDTH).fill(null)
  }),
  opened: new Array(FIELD_WIDTH).fill('').map(() => {
    return new Array(FIELD_WIDTH).fill(false)
  }),
  isMouseOver: false,
  flags: {
  },
  state: STATE.NOT_STARTED,
  bombs: 40,
  freeArea: FIELD_WIDTH * FIELD_WIDTH - 40,
  startGame: (row, column) => set(state => {
    state.field = genereateField(state.field, state.bombs, row, column)
    state.state = STATE.IN_PROGRESS
  }),
  openArea: (row, column) => set(state => {
    let { field, isGameOver, counter } = openArea(state.field, state.opened, row, column, state.flags)
    state.freeArea -= counter
    state.opened = field
    if (isGameOver) {
      state.state = STATE.FAILED
    }
    if (state.freeArea === 0) {
      state.state = STATE.WON
    }
  }),
  restart: () => set((state) => {
    state.field = new Array(FIELD_WIDTH).fill('').map(() => {
      return new Array(FIELD_WIDTH).fill(null)
    })
    state.opened = new Array(FIELD_WIDTH).fill('').map(() => {
      return new Array(FIELD_WIDTH).fill(false)
    })
    state.state = STATE.NOT_STARTED
    state.bombs = 40
    state.freeArea = FIELD_WIDTH * FIELD_WIDTH - 40
    state.flags = {}
    state.isMouseOver = false
  }),
  markField: (row, column, value) => set(state => {
    if (typeof state.field[row][column] === 'number' || state.field[row][column] === null) {
      if ([row] in state.flags) {
        state.flags[row][column] = state.field[row][column]
      } else {
        state.flags[row] = {
          [column]: state.field[row][column]
        }
      }
    }
    state.field[row][column] = value
  }),
  increaseBombs: (val = 1) => set(state => {
    state.bombs += val
  }),
  decreaseBombs: (val = 1) => set(state => {
    state.bombs -= val
  }),
  setIsMouseOver: () => set(state => {
    state.isMouseOver = !state.isMouseOver
  })
}))))