import React from 'react'
import { Button } from 'antd'

export default class RefsDomCreateCb extends React.Component {
  private refOfElm: HTMLDivElement | null = null
  private refOfComp: HTMLDivElement | null = null

  getElement = () => {
    console.log(this.refOfElm)
  }

  getComponent = () => {
    console.log(this.refOfComp)
  }

  resolvedElem = (element: HTMLDivElement | null) => {
    this.refOfElm = element
  }

  resolvedComp = (comp: HTMLDivElement | null) => {
    this.refOfComp = comp
  }

  render() {
    return (
            <div ref={this.resolvedElem}>
                <Button type="primary"
                        className="m-2"
                        shape="round"
                        onClick={this.getElement}>
                    getElement
                </Button>
                <Button className="m-2"
                        ref={this.resolvedComp}
                        shape="round" onClick={this.getComponent}>
                    getComponent
                </Button>
            </div>
    )
  }
}
