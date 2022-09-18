import PropTypes from 'prop-types'
import type { ReactNode } from 'react'

interface IAnchorProps {
  children?: ReactNode
  idVal?: string
  tagType?: string
  className: string
}
renderAnchorTitle.propTypes = {
  children: PropTypes.node,
  idVal: PropTypes.string,
  tagType: PropTypes.string,
  className: PropTypes.string,
}

export default function renderAnchorTitle(props: IAnchorProps) {
  const elmA = <a className="text-green mr-4" href={`#${props.idVal}`} aria-hidden="true">#</a>
  let renderElm = null
  if (props.tagType === 'h1') {
    renderElm = (<h1 className={`${props.className} flex`}>
            {elmA}
            <p>🪷 {props.children}</p>
        </h1>)
  }
  if (props.tagType === 'h2') {
    renderElm = (<h2 className={`${props.className} flex`}>
            {elmA}
            <p>🍵 {props.children}</p>
        </h2>)
  }
  if (props.tagType === 'h3') {
    renderElm = (<h3 className={`${props.className} flex`}>
            {elmA}
            <p>{props.children}</p>
        </h3>)
  }
  return renderElm
}
