import React, { useEffect, useState } from 'react'
import { completeTodo, deleteTodo, getAllTodos, incompleteTodo } from '../services/TodoService'
import { useNavigate } from 'react-router-dom'
import { isAdminUser } from '../services/AuthService'

const ListTodoComponents = () => {

    const [todos,setTodos] = useState([])

    const navigator = useNavigate();

    const isAdmin = isAdminUser();

    useEffect(()=>{
        listTodos()
    },[])

    function listTodos() {
        getAllTodos().then((response)=>{
            setTodos(response.data)
        }).catch(error=>{
            console.error(error)
        })
    }

    function addTodo() {
        navigator('/add-todo')
    }

    function editTodo(id) {
        navigator(`/edit-todo/${id}`)
    }

    function removeTodo(id) {
        deleteTodo(id).then((response)=>{
            console.log(response.data)
            listTodos()
        }).catch(error=>{
            console.error(error)
        })
    }

    function markCompleteTodo(id) {
        completeTodo(id).then((response)=>{
            console.log(response.data)
            listTodos()
        }).catch(error=>{
            console.error(error)
        })
    }

    function markInCompleteTodo(id) {
        incompleteTodo(id).then((response)=>{
            console.log(response.data)
            listTodos()
        }).catch(error=>{
            console.error(error)
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Todo-management</h2>
        {
            isAdmin &&
            <button className='btn btn-primary mb-2' onClick={addTodo}>Add Todo</button>
        }
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo)=>
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'YES' : 'NO'}</td>
                            <td>
                                {
                                    isAdmin &&
                                    <button className='btn btn-info' onClick={()=>editTodo(todo.id)}>Update</button>
                                }
                                
                                {
                                    isAdmin &&
                                    <button className='btn btn-danger' onClick={()=>removeTodo(todo.id)} style={{marginLeft:"10px"}}>Delete</button>
                                }
                                
                                <button className='btn btn-success' onClick={()=>markCompleteTodo(todo.id)} style={{marginLeft:"10px"}}>Complete</button>
                                <button className='btn btn-info' onClick={()=>markInCompleteTodo(todo.id)} style={{marginLeft:"10px"}}>InComplete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListTodoComponents