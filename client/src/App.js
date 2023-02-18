import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Login from "./components/afterLogin/Login";
import Register from "./components/afterLogin/Register";
import Navbar from "./components/Navbar";
import WriteBlog from "./components/WriteBlog";
import AuthContextProvider from "./authentication/authRoutes";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/register" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/BlogPlace',
      element: (
          <Home/>
      ),
    },
    {
      path: '/BlogPlace/new',
      element: (
        <>
          <Navbar />
          <WriteBlog/>
        </>
      ),
    },
    {
      path: '/BlogPlace/:id',
      element: (
        <>
          <Navbar />
          <Blog />
        </>
  
      ),
    },
    {
      path: '/BlogPlace/:id/edit',
      element: (
        <>
          <Navbar />
          <WriteBlog />
        </>
      ),
    },
    {
      path: '/BlogPlace/post/:id',
      element: (
       <Blog/>
      ),
    },
  ])
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App;
