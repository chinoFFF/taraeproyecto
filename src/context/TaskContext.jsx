import { createContext, useState, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const TaskContext = createContext()

export const useTaskContext = () => useContext(TaskContext)

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage("tasks", [])
    const [filter, setFilter] = useState("all")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentTask, setCurrentTask] = useState(null)

const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), status: "pending" }])
    }

    const updateTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleTaskStatus = (id) => {
        setTasks(
            tasks.map((task) =>
        task.id === id ? { ...task, status: task.status === "pending" ? "completed" : "pending" } : task,
        ),
    )
}

    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") return true
        return task.status === filter
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
        isModalOpen,
        setIsModalOpen,
        currentTask,
        setCurrentTask,
    }}
    >
    {children}
    </TaskContext.Provider>
    )
}