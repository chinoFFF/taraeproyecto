import { useTaskContext } from "../context/TaskContext"

const TaskFilter = () => {
  const { filter, setFilter } = useTaskContext()

  return (
    <div className="mb-6">
      <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-2">
        Filtrar tareas:
      </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="all">Todas las tareas</option>
        <option value="pending">Tareas Pendientes</option>
        <option value="completed">Tareas Finalizadas</option>
      </select>
    </div>
  )
}

export default TaskFilter
