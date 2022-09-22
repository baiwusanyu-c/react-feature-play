import React, { useState } from 'react'
import CtxChildFunc from './context-child-func'
interface IState {
  theme: string
}
export const themes = {
  default: 'default',
  primary: 'primary',
}

export const ThemeContext = React.createContext({
  theme: themes.default,
  toggleTheme: () => {},
})

export default function renderCtxParentFunc() {
  const [theme, setTheme] = useState<IState>({
    theme: themes.default,
  })

  const toggleTheme = () => {
    setTheme({ ...theme, theme: theme.theme === 'default' ? 'primary' : 'default' })
  }
  return (
      <div>
        <p className="my-2">父组件传递事件和context</p>

        <ThemeContext.Provider value={{ theme: theme.theme, toggleTheme }}>
          <CtxChildFunc />
        </ThemeContext.Provider>
      </div>
  )
}
