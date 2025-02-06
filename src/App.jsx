import { TaskProvider } from "./context/TaskContext"
import TaskList from "./components/TaskList"
import TaskFilter from "./components/TaskFilter"
import TaskModal from "./components/Modal"

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <header className="bg-indigo-600 text-white p-4 sm:p-6">
            <h1 className="text-3xl font-bold text-center">Administrador de Tareas</h1>
          </header>
          <main className="p-4 sm:p-6">
            <TaskFilter />
            <TaskList />
          </main>
        </div>
        <TaskModal />
      </div>
    </TaskProvider>
  )
}

export default App

