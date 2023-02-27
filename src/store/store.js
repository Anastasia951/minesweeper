import { create } from "zustand";


const FIELD_WIDTH = 16
export const useStore = create((set) => ({
  field: new Array(FIELD_WIDTH).fill('').map(() => {
    return new Array(FIELD_WIDTH).fill(null)
  }),
  bombs: 40,
}))