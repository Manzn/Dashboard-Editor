// styles/global.js
import css from 'styled-jsx/css'

// for dynamic use, set in _app.tsx
const headerHeight: number = 60;
const sidebarWidth: number = 100;

export default css`
  .header {
    position: fixed;
    width: 100%;
    height: ${headerHeight}px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar {
    position: fixed;
    top: 0px;
    width: ${sidebarWidth}px;
    height: 100%;
  }

  .content {
    position: fixed;
    top: ${headerHeight}px;
    left: ${sidebarWidth}px;
    width: 100%;
    height: 100%;
  }
`
