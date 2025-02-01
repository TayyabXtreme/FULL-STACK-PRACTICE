import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Delete, Edit, Save } from 'lucide-react'

const TodoSpan = ({ todos, deleteTodo, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(todos.titlemd)

    const handleSave = () => {
        if (newTitle.trim()) {
            updateTodo(todos._id, newTitle.trim())
            setIsEditing(false) // Exit edit mode after saving
        }
    }

    return (
        <span className='bg-blue-400 w-full h-12 flex rounded-md my-1 items-center justify-between p-2'>
            {isEditing ? (
                <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className='w-full text-black h-full rounded-md p-2 focus:outline-none'
                />
            ) : (
                <p>{todos.titlemd}</p>
            )}

            <div className='flex gap-2'>
                {isEditing ? (
                    <Button className='bg-green-400' onClick={handleSave}>
                        <Save />
                    </Button>
                ) : (
                    <Button className='bg-green-400' onClick={() => setIsEditing(true)}>
                        <Edit />
                    </Button>
                )}
                <Button className='bg-red-400' onClick={() => deleteTodo(todos._id)}>
                    <Delete />
                </Button>
            </div>
        </span>
    )
}

export default TodoSpan
