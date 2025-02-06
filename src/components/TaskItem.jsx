import { useTaskContext } from "../context/TaskContext"

const TaskItem = ({ task }) => {
  const { toggleTaskStatus, deleteTask, setCurrentTask, setIsModalOpen } = useTaskContext()

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${task.status === "completed" ? "opacity-75" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3
            className={`font-semibold text-lg mb-1 ${task.status === "completed" ? "line-through text-gray-500" : "text-gray-800"}`}
          >
            {task.name}
          </h3>
          <p className="text-gray-600 text-sm">{task.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => toggleTaskStatus(task.id)}
            className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              task.status === "pending"
                ? "bg-green-100 text-green-600 hover:bg-green-200 focus:ring-green-500"
                : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200 focus:ring-yellow-500"
            }`}
          >
            {task.status === "pending" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => {
              setCurrentTask(task)
              setIsModalOpen(true)
            }}
            className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
