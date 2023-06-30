import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider} from './contexts/ThemeContext.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter basename="/odontologos-en-la-zona">
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
