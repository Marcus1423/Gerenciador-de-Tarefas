import { createContext, useState, useEffect, useCallback, useMemo } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((data, projectId = null) => {

    setTasks(prev => [
      ...prev,
      { 
        id: Date.now(),
      title: data.title,
      description: data.description,
      category: data.category,
      completed: false,
      projectId
       }
    ]);
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }, []);

  const removeTask = useCallback((id) => {
        setTasks(prev => prev.filter(p => p.id !== id));
  }, []);

  const value = useMemo(() => ({
  tasks,
  addTask,
  removeTask,
  toggleTask
}), [tasks, addTask, removeTask, toggleTask]);

  return (
    <TaskContext.Provider value={value}>
        { children }
    </TaskContext.Provider>
  )

}



