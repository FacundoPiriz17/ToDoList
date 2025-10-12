import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'
import {ThemeContext} from './contexts/DisplayModeContext'
import {useState} from 'react'

function App() {
  const [themeSettings, setThemeSettings] = useState({
    mode: 'Detallado',
    switchMode: () => {
      setThemeSettings((prevState) => ({
        ...prevState,
        mode: prevState.mode === 'Detallado' ? 'Normal' : 'Detallado',
      }))
    },
  })
  return (
    <>
      <ThemeContext.Provider value={themeSettings}>
        <div className="w-full h-[100vh] ">
          <TaskList />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
