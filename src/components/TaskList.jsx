import { useTaskContext } from "../context/TaskContext"
import TaskItem from "./TaskItem"

const TaskList = ({ onEditTask }) => {
const { tasks } = useTaskContext()

return (
    <ul className="space-y-4">
    {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEditTask} />
    ))}
    </ul>
    )
}

export default TaskList
