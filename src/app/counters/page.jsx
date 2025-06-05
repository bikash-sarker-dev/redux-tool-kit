"use client";

import { dec, inc } from "@/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const CounterPage = () => {
  const dispatch = useDispatch();
  const defaultValue = useSelector((state) => state.counter.value);
  console.log(defaultValue);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-x-5">
        <button
          onClick={() => dispatch(inc(5))}
          className="bg-amber-500 p-4 cursor-pointer"
        >
          +
        </button>
        <span className="text-4xl">{defaultValue}</span>
        <button
          onClick={() => dispatch(dec())}
          className="bg-amber-500 p-4 cursor-pointer"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
