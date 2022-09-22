import { Button } from 'antd'
import React from 'react'
import { ThemeContext } from './context-parent-class'
export default class RenderCtxChildClass extends React.Component {
  render() {
    return (<ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
              <Button
                  type={theme as 'default' | 'primary'}
                  onClick={toggleTheme}
                  shape="round">
                  { theme }
              </Button>
          )}
      </ThemeContext.Consumer>)
  }
}
