import { useState } from 'react'

const useForm = (initialData) => {
    const [formData, setFormData] = useState(initialData ?? {})

    const setInput = (e) => {
        const newData = {
            ...formData,
            [e.target.dataset.name ?? e.target.name]: e.target.value
        }
        setFormData(newData)
    }

    return [formData, setInput]
}

export default useForm