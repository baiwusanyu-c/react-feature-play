```typescript jsx
import { Button } from 'antd'
import type { ForwardedRef, Ref } from 'react'
import React, { forwardRef } from 'react'

declare type IRefs = HTMLElement

const FancyButton = forwardRef((props, ref: ForwardedRef<IRefs>) => {
    class FancyButtonInner extends React.Component {
        render() {
            return (
                <Button ref={ref as Ref<IRefs>}
                        type="primary"
                        shape="round"
                        id="class_refs_forward">
                    class component
                </Button>
            )
        }
    }

    return <FancyButtonInner />
})
FancyButton.displayName = 'FancyButton'

export default function RenderForwardClass() {
    const ref = React.createRef<IRefs>()
    const handleClick = () => {
        console.log(ref.current)
    }
    return (
        <div onClick={handleClick}>
            <FancyButton ref={ref}></FancyButton>
        </div>

    )
}
```