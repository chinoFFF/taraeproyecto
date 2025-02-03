import { useState } from "react"
import { TaskProvider } from "./context/TaskContext"
import TaskList from "./components/TaskList"
import TaskFilter from "./components/TaskFilter"
import TaskForm from "./components/TaskForm"
import Modal from "./components/Modal"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  const openModal = (task = null) => {
    setEditingTask(task)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setEditingTask(null)
    setIsModalOpen(false)
  }

  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Task Manager</h1>
            <TaskFilter />
            <button
              onClick={() => openModal()}
              className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add New Task
            </button>
            <TaskList onEditTask={openModal} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm task={editingTask} onClose={closeModal} />
        </Modal>
      )}
    </TaskProvider>
  )
}

export default App
