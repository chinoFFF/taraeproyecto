import { useTaskContext } from "../context/TaskContext"

const TaskItem = ({ task, onEdit }) => {
    const { toggleTaskStatus, deleteTask } = useTaskContext()

return (
    <li className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
        <div>
        <h3 className={`font-semibold ${task.status === "completed" ? "line-through text-gray-500" : "text-gray-800"}`}>
            {task.name}
        </h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        </div>
    <div className="flex space-x-2">
        <button
            onClick={() => toggleTaskStatus(task.id)}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
            task.status === "pending" ? "bg-yellow-200 text-yellow-800" : "bg-green-200 text-green-800"
        }`}
        >
            {task.status === "pending" ? "Pending" : "Completed"}
        </button>
        <button onClick={() => onEdit(task)} className="text-blue-600 hover:text-blue-800">
            Edit
        </button>
        <button onClick={() => deleteTask(task.id)} className="text-red-600 hover:text-red-800">
            Delete
            </button>
    </div>
    </li>
    )
}

export default TaskItem