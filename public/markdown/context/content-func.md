```typescript jsx
// 父组件
import React, { useState } from 'react'
import CtxChildFunc from './context-child-func'
interface IState {
  theme: string
}
export const themes = {
  error: 'error',
  success: 'success',
}

export const ThemeContext = React.createContext({
  theme: themes.error,
  toggleTheme: () => {},
})

export default function renderCtxParentFunc() {
  const [theme, setTheme] = useState<IState>({
    theme: themes.error,
  })

  const toggleTheme = () => {
    setTheme({ ...theme, theme: theme.theme === 'error' ? 'success' : 'error' })
  }
  return (
      <div>
        <p>父组件传递可事件和context</p>
        <ThemeContext.Provider value={{ theme: theme.theme, toggleTheme }}>
          <CtxChildFunc />
        </ThemeContext.Provider>
      </div>
  )
}

// 子组件

import { Button } from 'antd'
import { ThemeContext } from './context-parent-func'
export default function renderCtxChildFunc() {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <Button
                    type={theme as 'default' | 'primary'}
                    onClick={toggleTheme}
                    shape="round">
                    { theme }
                </Button>
            )}
        </ThemeContext.Consumer>
    )
}


```