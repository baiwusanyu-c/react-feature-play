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
