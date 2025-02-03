import { createContext, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const TaskContext = createContext()

export const useTaskContext = () => useContext(TaskContext)

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage("tasks", [])
    const [filter, setFilter] = useLocalStorage("taskFilter", "all")

    const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now(), status: "pending" }])
    }

    const updateTask = (updatedTask) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
    }

    const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }

const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
        task.id === id ? { ...task, status: task.status === "pending" ? "completed" : "pending" } : task,
        ),
    )
    }

const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return task.status === "pending"
    if (filter === "completed") return task.status === "completed"
    return true
    })

return (
    <TaskContext.Provider
        value={{
        tasks: filteredTasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskStatus,
        filter,
        setFilter,
        }}
    >
    {children}
    </TaskContext.Provider>
    )
}

