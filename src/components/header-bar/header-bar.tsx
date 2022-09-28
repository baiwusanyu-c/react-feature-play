import reactLogo from '../../assets/svg/react.svg'

export default function renderHeader() {
  return (
        <header className="
        bg-white just
        justify-center
        text-xl
        shadow-lg
        h-14 text-white w-full flex fixed top-0 items-center">
            <a href="https://reactjs.org" target="_blank" className="mr-4 w-7" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <span className="app-title">React Feature Play</span>

        </header>
  )
}
