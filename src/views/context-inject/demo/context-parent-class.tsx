import React from 'react'
import CtxChildClass from './context-child-class'
interface IState {
  theme: string
  toggleTheme: () => void
}
export const themes = {
  default: 'default',
  primary: 'primary',
}

export const ThemeContext = React.createContext({
  theme: themes.default,
  toggleTheme: () => {},
})

export default class RenderCtxParentClass extends React.Component<any, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
      theme: themes.default,
      toggleTheme: this.toggleTheme,
    }
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'default' ? 'primary' : 'default',
    }))
  }

  render() {
    return (
            <div>
                <p className="my-2">父组件传递事件和context</p>
                <ThemeContext.Provider value={this.state}>
                    <CtxChildClass />
                </ThemeContext.Provider>
            </div>
    )
  }
}

