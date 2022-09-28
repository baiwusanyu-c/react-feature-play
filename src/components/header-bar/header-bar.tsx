import { GithubOutlined } from '@ant-design/icons'
import reactLogo from '../../assets/svg/react.svg'
import packageJson from '../../../package.json'
export default function renderHeader() {
  return (
        <header className="
        bg-white
        justify-center
        text-xl
        shadow-lg
        px-10rem
        h-14  w-full flex fixed top-0 items-center">
            <div className="flex w-1/3">
                <a href="https://reactjs.org" target="_blank" className="mr-4 w-7" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <span className="app-title">React Feature Play</span>
            </div>
            <div className="flex w-2/3 justify-end">
                {/* TODO: algia */}
                <a className="cursor-pointer mx-4 hover:text-green hover:font-bold" href="#/home" > 首页 </a>
                <a className="cursor-pointer mx-4 hover:text-green hover:font-bold"
                   href={packageJson.homepage}
                   target="_blank" rel="noreferrer">
                    <GithubOutlined style={{ fontSize: '1.5rem' }}/>
                </a>
            </div>

        </header>
  )
}
