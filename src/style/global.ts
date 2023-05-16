import './fonts.scss'
import './variable.scss'

export const GlobalStyle = `
body {
  font-family: Pretendard, sans-serif;
  margin: 0;
  display: flex;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

a {
  font-weight: 500;
  color: inherit;
  text-decoration: inherit;
}

a:hover {
  color: #888888;
  cursor: pointer;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }

  a:hover {
    color: #747bff;
  }

  button {
    background-color: #f9f9f9;
  }
}
`

// Device Size 정의 참고
// https://react-bootstrap.github.io/layout/breakpoints/
export const GlobalDeviceSize = {
  xs: 0, // max
  sm: 576, // max
  md: 768, // max
  lg: 992, // max
  xl: 1200, // min
}

// Divice Size BreakPoint
export const BreakPoint = {
  xs: `max-width: ${GlobalDeviceSize.sm - 1}px`, // 0 ~ 575px - Mobile
  sm: `max-width: ${GlobalDeviceSize.md - 1}px`, // 0 ~ 767px - Large Mobile
  md: `max-width: ${GlobalDeviceSize.lg - 1}px`, // 0 ~ 991px - Tablet
  lg: `max-width: ${GlobalDeviceSize.xl - 1}px`, // 0 ~ 1199px - Laptop
  xl: `min-width: ${GlobalDeviceSize.xl}px`, // 1200px ~ - Desktop
}
