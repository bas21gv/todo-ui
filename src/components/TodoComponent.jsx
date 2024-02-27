import React, { useEffect, useState } from 'react'
import { addTodo, getTodo, updateTodo } from '../services/TodoService'
import { useNavigate, useParams } from 'react-router-dom'

const TodoComponent = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [completed,setCompleted] = useState(false)

    const navigator = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        if (id) {
            getTodo(id).then((response)=>{
                setTitle(response.data.title)
                setDescription(response.data.description)
                setCompleted(response.data.completed)
            }).catch(error=>{
                console.error(error)
            })
        }
    },[id])

    function createTodo(e) {
        e.preventDefault()

        const todo = {title, description, completed}

        if(id) {
            updateTodo(id, todo).then((response)=>{
                console.log(response.data)
                navigator('/todos')
            }).catch(error=>{
                console.error(error)
            })
        } else {
            addTodo(todo).then((response)=>{
                console.log(response.data)
                navigator('/todos')
            }).catch(error=>{
                console.error(error)
            })
        }
    }

    function pageTitle() {
        if(id) {
            return <h2 className='text-center py-3'>Update Todo</h2>
        } else {
            return <h2 className='text-center py-3'>Add Todo</h2>
        }
    }

  return (
    <div className='container'>
        {pageTitle()}
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <div className='card-body'>
                    <form>
                        <div className='form-body md-2'>
                            <label className='form-label'>Title:</label>
                            <input
                                type='text'
                                name='title'
                                value={title}
                                className='form-control'
                                onChange={(e)=>setTitle(e.target.value)}
                            />
                        </div>
                        <div className='form-body md-2'>
                            <label className='form-label'>Description:</label>
                            <input
                                type='text'
                                name='description'
                                value={description}
                                className='form-control'
                                onChange={(e)=>setDescription(e.target.value)}
                            />
                        </div>
                        <div className='form-body md-2'>
                            <label className='form-label'>Completed:</label>
                            <select
                                className='form-control'
                                value={completed}
                                onChange={(e)=>setCompleted(e.target.value)}
                            >
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>
                        <button className='btn btn-success mb-2' onClick={(e)=>createTodo(e)}>submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoComponent