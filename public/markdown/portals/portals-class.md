```typescript jsx
import { createPortal } from 'react-dom'
import { Result } from 'antd'
import React from 'react'

interface IState {
    dom: Element | DocumentFragment
}

export default class RenderPortalsClass extends React.Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            dom: document.getElementById('Portals_Class') || document.body,
        }
    }

    componentDidMount = () => {
        this.setState({
            dom: document.getElementById('Portals_Class') || document.body,
        })
    }

    render() {
        return createPortal(
            (
                <Result
                    status="success"
                    title="渲染成功"
                    subTitle="渲染到 id = &quot;Portals_Class&quot;"/>
            ),
            this.state.dom,
        )
    }
}
```