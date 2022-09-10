import reactLogo from "../../assets/react.svg";

export default function renderHeader(){
    return (
        <header className='
        bg-header just
        justify-center
        text-lg
        h-12 text-white w-full flex fixed top-0 items-center'>
            <a href="https://reactjs.org" target="_blank" className='mr-4 w-7'>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            React Feature Play
        </header>
    )
}