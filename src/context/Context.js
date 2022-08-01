import React from 'react';

export const TaskContext = React.createContext();
export const TasksContext = () => React.useContext(TaskContext);

export const ContextProvider = ({ children }) => {
  // alue={supabaseClient.auth.user()}
  return <TaskContext.Provider value={{ name: 'supers' }}>{children}</TaskContext.Provider>;
};

export default ContextProvider;
