import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './style/global'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import 'bootstrap/scss/bootstrap.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

const CommonGlobalStyles = createGlobalStyle`
    ${GlobalStyle}
    ${reset}
  `

root.render(
  <StrictMode>
    <CommonGlobalStyles />
    <App />
  </StrictMode>
)
