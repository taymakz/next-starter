import type { RootState } from "@/stores/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner"


export interface CounterState {
  count: number
}
const initialState = {
  count: 0
} as CounterState

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      if (state.count > 0)
        state.count -= 1
      else
        toast('مقدار نمی تواند زیر 0 باشد')
    },
  }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.count

export default counterSlice.reducer
