import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useTaskContext } from "../context/TaskContext"
import { motion, AnimatePresence } from "framer-motion"

const TaskModal = () => {
  const { isModalOpen, setIsModalOpen, addTask, updateTask, currentTask, setCurrentTask } = useTaskContext()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState({ name: "", description: "" })

  useEffect(() => {
    if (currentTask) {
      setName(currentTask.name)
      setDescription(currentTask.description)
    } else {
      setName("")
      setDescription("")
    }
  }, [currentTask])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = { name: "", description: "" }

    if (!name.trim()) {
      newErrors.name = "El nombre de la tarea es obligatorio"
    }
    if (!description.trim()) {
      newErrors.description = "La descripción de la tarea es obligatoria"
    }

    if (newErrors.name || newErrors.description) {
      setErrors(newErrors)
      return
    }

    if (currentTask) {
      updateTask({ ...currentTask, name, description })
    } else {
      addTask({ name, description })
    }
    setIsModalOpen(false)
    setCurrentTask(null)
    setName("")
    setDescription("")
    setErrors({ name: "", description: "" })
  }

  if (!isModalOpen) return null

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-opacity-75 transition-opacity pointer-events-none" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <form onSubmit={handleSubmit} className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre de la tarea
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                      errors.description ? "border-red-500" : ""
                    }`}
                    rows="3"
                  ></textarea>
                  {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                  >
                    {currentTask ? "Actualizar" : "Agregar"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false)
                      setCurrentTask(null)
                      setErrors({ name: "", description: "" })
                    }}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default TaskModal