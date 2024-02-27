import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListTodoComponents from './components/ListTodoComponents'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLogged } from './services/AuthService'

function App() {

  function AuthenticatedRoute({children}) {
      const isAuth = isUserLogged();

      if(isAuth) {
        return children
      } else {
        return <Navigate to='/' />
      }
  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path='/' element={<LoginComponent/>} />
          <Route path='/todos' element={
            <AuthenticatedRoute>
              <ListTodoComponents/>
            </AuthenticatedRoute>
            } />
          <Route path='/add-todo' element={
            <AuthenticatedRoute>
              <TodoComponent/>
            </AuthenticatedRoute>
            } />
          <Route path='/edit-todo/:id' element={
            <AuthenticatedRoute>
              <TodoComponent/>
            </AuthenticatedRoute>
            } />
          <Route path='/register' element={<RegisterComponent/>} />
          <Route path='/login' element={<LoginComponent/>} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
      
    </>
  )
}

export default App
