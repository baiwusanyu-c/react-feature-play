import React from 'react'
import Child from './child-func'
export default function parentCompnent() {
  return (
        <div>
            <Child name="baiwusanyu" render={(age: string) => {
              return (
                    <p>父组件中渲染的 age：{age}</p>
              )
            }}/>
        </div>
  )
}
