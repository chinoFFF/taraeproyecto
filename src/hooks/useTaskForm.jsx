import { useState, useEffect } from "react"

function useTaskForm(initialTask = null) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

useEffect(() => {
    if (initialTask) {
        setName(initialTask.name)
        setDescription(initialTask.description)
    } else {
        setName("")
        setDescription("")
    }
}, [initialTask])

    const handleNameChange = (e) => setName(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)

    const resetForm = () => {
    setName("")
    setDescription("")
    }

return {
    name,
    description,
    handleNameChange,
    handleDescriptionChange,
    resetForm,
    }
}

export default useTaskForm