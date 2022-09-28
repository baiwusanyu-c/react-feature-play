import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../../assets/svg/react.svg'
export default function renderHome() {
  const navigate = useNavigate()
  const routerSwitch = (path: string) => {
    navigate(path)
  }
  return (
        <div>
            <div>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <div className="card">
                <Button onClick={() => routerSwitch('/introduce')}>
                    start
                </Button>
            </div>
        </div>
  )
}
