import { initial, createState } from "./store.js";

const state = createState(initial);
console.log(state.getState());


state.value = state.ADD(state.value)
state.value = state.ADD(state.value)
console.log(state.value);


state.value = state.SUBTRACT(state.value)
console.log(state.value);


state.value = state.RESET(state.value)
console.log(state.value);