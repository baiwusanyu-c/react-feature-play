```typescript jsx

import type { LegacyRef, Ref } from 'react'
import React from 'react'
import { Button } from 'antd'

export default class RefsDomCreateClass extends React.Component {
    private refOfElm: LegacyRef<HTMLDivElement> | undefined
    private refOfComp: Ref<HTMLElement> | undefined
    constructor(props: any) {
        super(props)
        this.refOfElm = React.createRef()
        this.refOfComp = React.createRef()
    }

    getElement = () => {
        console.log(this.refOfElm)
    }

    getComponent = () => {
        console.log(this.refOfComp)
    }

    render() {
        return (
            <div ref={this.refOfElm}>
                <Button type="primary"
                        className="m-2"
                        shape="round"
                        onClick={this.getElement}>
                    getElement
                </Button>
                <Button className="m-2"
                        ref={this.refOfComp}
                        shape="round" onClick={this.getComponent}>
                    getComponent
                </Button>
            </div>
        )
    }
}

```
