
import Home from '../src/views/home/home'
import HeaderBar from '../src/components/header-bar/header-bar'
import SideBar from '../src/components/side-bar/side-bar'


function App() {
  return (
    <div className="w-full h-full">
        <HeaderBar/>
        <div className='mt-12 flex'>
            <SideBar/>
            <div className='p-10 box-border'>
                <Home/>
            </div>
        </div>
    </div>
  )
}

export default App
