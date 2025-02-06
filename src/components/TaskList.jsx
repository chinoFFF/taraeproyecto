import { useTaskContext } from "../context/TaskContext"
import TaskItem from "./TaskItem"
import { motion, AnimatePresence } from "framer-motion"

const TaskList = () => {
  const { tasks, setIsModalOpen } = useTaskContext()

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TaskItem task={task} />
          </motion.div>
        ))}
      </AnimatePresence>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
      >
        Agregar Tarea
      </button>
    </div>
  )
}

export default TaskList
