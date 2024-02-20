"use client"

import { Minus, Plus } from "lucide-react"
import { decrement, increment, selectCount } from "@/stores/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store"
const Counter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  return (
    <div className="space-y-2">
      <div className="py-2 px-4 rounded-lg bg-muted text-center ">
        {count}
      </div>
      <div className="flex gap-4">
        <button onClick={() => dispatch(increment())} className="p-2 rounded-lg bg-muted text-violet-400" >
          <Plus className="w-5 h-5" />
        </button>
        <button onClick={() => dispatch(decrement())} className="p-2 rounded-lg bg-muted text-violet-400">
          <Minus className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
export default Counter
