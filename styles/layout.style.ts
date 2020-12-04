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
    width: calc(100% - ${sidebarWidth}px);
    height: calc(100% - ${headerHeight}px - 10px);

    overflow: auto;
    padding-bottom: 20px;
  }

  .content-display {
    display: flex;
    flex-wrap: wrap;
  }
`
