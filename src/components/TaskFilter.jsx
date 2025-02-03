import { useTaskContext } from "../context/TaskContext"

const TaskFilter = () => {
    const { filter, setFilter } = useTaskContext()

return (
    <div className="mb-4">
        <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
            <option value="all">All Tasks</option>
            <option value="pending">Pending Tasks</option>
            <option value="completed">Completed Tasks</option>
        </select>
    </div>
    )
}

export default TaskFilter