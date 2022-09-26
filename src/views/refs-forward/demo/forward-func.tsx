import { Button } from 'antd'
import type { ForwardedRef, Ref } from 'react'
import React, { forwardRef } from 'react'

declare type IRefs = HTMLElement

const FancyButton = forwardRef((props, ref: ForwardedRef<IRefs>) => {
  return (
        <Button ref={ref as Ref<IRefs>} type="primary" shape="round" id="func_refs_forward">
            function component
        </Button>
  )
})
FancyButton.displayName = 'FancyButton'

export default function RenderForwardFunc() {
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
