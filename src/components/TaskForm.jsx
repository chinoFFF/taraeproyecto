import { useState, useEffect } from "react"
import { useTaskContext } from "../context/TaskContext"

const TaskForm = ({ task, onClose }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const { addTask, updateTask } = useTaskContext()

useEffect(() => {
    if (task) {
        setName(task.name)
        setDescription(task.description)
    }
}, [task])

const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return

    if (task) {
        updateTask({ ...task, name, description })
    } else {
        addTask({ name, description })
    }
    onClose()
}

return (
    <form onSubmit={handleSubmit} className="space-y-4">
    <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Task Name
        </label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
        />
    </div>
    <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
        </label>
        <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="3"
        ></textarea>
    </div>
        <div className="flex justify-end space-x-2">
        <button
            type="button"
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        >
            Cancel
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {task ? "Update Task" : "Add Task"}
        </button>
        </div>
    </form>
    )
}

export default TaskForm