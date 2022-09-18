// 子组件
import PropTypes from 'prop-types'

interface IChildProps {
  name?: string
  age?: number
}
childComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}
childComponent.defaultProps = {
  name: '',
  age: 18,
}
export default function childComponent(props: IChildProps) {
  return (
        <div>
            <p>年龄：{props.age}</p>
            <p>姓名：{props.name}</p>
        </div>
  )
}
