import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layout/Root.jsx'
import HomeInfo from './pages/HomeInfo.jsx'
import PetCare from './pages/PetCare.jsx'
import MeetExpart from './pages/MeetExpart.jsx'
import Service from './pages/Service.jsx'
import Authentication from './Layout/Authentication.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import PrivetRoute from './Provider/PrivetRoute.jsx'
import Profile from './pages/Profile.jsx'
import UpdateProfile from './component/UpdateProfile.jsx'
import ForgetPassword from './component/ForgetPassword.jsx'
import Loading from './component/Loading.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: HomeInfo
      },
      {
        path: 'tips',
        Component: PetCare,
      },
      {
        path: 'expart',
        loader: () => fetch('/expart.json'),
        Component: MeetExpart,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'services',
        loader: () => fetch('/data.json').then(res => res.json()),
        element: <PrivetRoute>
          <Service></Service>
        </PrivetRoute>,
        hydrateFallbackElement: <Loading></Loading>

      },
      {
        path: "profile",
        element: <PrivetRoute>
          <Profile></Profile>
        </PrivetRoute>
      },
      {
        path: "update",
        Component: UpdateProfile,
      }
    ]

  },
  {
    path: 'auth',
    Component: Authentication,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      },
      {
        path: "/auth/forget-password",
        Component: ForgetPassword,
      }
    ]
  },

  {
    path: "",
    element: <h3>Error page 404</h3>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
