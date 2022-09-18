import React from 'react'
import ChildClass from './child-class'
export default class ParentClass extends React.Component {
  render() {
    return (
            <div>
                <ChildClass name="baiwusanyu"/>
            </div>
    )
  }
}
