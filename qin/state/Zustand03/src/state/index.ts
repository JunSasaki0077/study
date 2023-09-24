import { create } from "zustand";
import { State } from "./types";
import { createTodosSlice } from "./todo";
import { createUsersSlice } from "./users";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

export const useStore = create<State>()(
  devtools(
    immer((...args) => {
      return {
        ...createTodosSlice(...args),
        ...createUsersSlice(...args),
      };
    })
  )
);
