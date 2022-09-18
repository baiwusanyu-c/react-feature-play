import React from 'react'
import ChildClass from './child-class'
export default class RenderParentClass extends React.Component {
  render() {
    return (
            <div>
                <ChildClass name="baiwusanyu" render={(age: string) => {
                  return (
                        <p>在父组件中渲染的 age：{age}</p>
                  )
                }}/>
            </div>
    )
  }
}
