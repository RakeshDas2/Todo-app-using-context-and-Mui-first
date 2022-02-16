import React from "react"
const TodoContext=React.createContext()
const TodoContextProvider=TodoContext.Provider
const TodoContextConsumer=TodoContext.Consumer
export default TodoContext;
export {TodoContextProvider,TodoContextConsumer}