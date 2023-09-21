import { combineReducers, legacy_createStore } from "redux";
import { todosReducer } from "src/state/todos";

export const store = legacy_createStore(
  combineReducers({
    todos: todosReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
