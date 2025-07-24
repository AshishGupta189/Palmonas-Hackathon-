import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {ToastContainer} from "react-toastify"
import {BrowserRouter} from "react-router-dom"
import { ProductProvider } from './context/ProductContext'

createRoot(document.getElementById('root')).render(
    <ProductProvider>
      <BrowserRouter>
      <App />
      <ToastContainer/>
    </BrowserRouter>
    </ProductProvider>
  )
