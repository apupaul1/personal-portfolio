import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init({
  duration: 1000,
  once: true,            
  easing: 'ease-in-out',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='open-sans-font'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
