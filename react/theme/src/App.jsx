import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import Buttomthm from './components/Buttomthm'

function App() {
  const {thememode,setThememode}= useState("light")
  const darkTheme= ()=>{
    return setThememode("dark")
  }
  const lightTheme= ()=>{
    return setThememode("light")
}
// actual change in theme 
useEffect(()=>{
  document.querySelector('html').classList.remove("Light", "dark")
  document.querySelector('html').classList.remove(thememode)
},[thememode])
  

  return (
    <ThemeProvider value={{thememode, darkTheme, lightTheme}}>  
    {/* app ui */}   
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* buttom theme */}
                        <Buttomthm />
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
