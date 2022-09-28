import { useState } from 'react'
import reactLogo from '../../assets/svg/react.svg'

export default function renderHome() {
  const [count, setCount] = useState(0)
  return (
        <div>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
  )
}
