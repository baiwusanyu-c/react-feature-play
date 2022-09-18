import type { MouseEvent } from 'react'
import React from 'react'
import { Button } from 'antd'
interface IState {
  num: number
  name: string
}
export default class EventParentClass extends React.Component<any, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      num: 0,
      name: 'baiwusanyu',
    }
  }

  handleClick = (e: MouseEvent<HTMLElement>) => {
    console.log(e)
    this.setState((state: IState) => ({
      num: state.num + 1,
    }))
  }

  preventClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    this.setState(() => ({
      name: '白雾三语',
    }))
    console.log('The link was clicked.')
  }

  render() {
    return (
            <div>
                <Button type="primary"
                        className="m-2"
                        shape="round"
                        onClick={this.handleClick}>
                    Click me {this.state.num}
                </Button>
                <Button className="m-2" shape="round">
                    <a href="#" onClick={this.preventClick}>
                        preventDefault {this.state.name}
                    </a>
                </Button>
            </div>
    )
  }
}
