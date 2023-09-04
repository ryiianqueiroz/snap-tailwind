import React, { useState, useRef, useEffect } from 'react'
import Logo from './images/logo.svg'
import Databiz from './images/client-databiz.svg'
import Audiophile from './images/client-audiophile.svg'
import Maker from './images/client-maker.svg'
import Meet from './images/client-meet.svg'
import HeroDesktop from './images/image-hero-desktop.png'
import HeroMobile from './images/image-hero-mobile.png'
import IconMenu from './images/icon-menu.svg'
import CloseMenu from './images/icon-close-menu.svg'
import ArrowUp from './images/icon-arrow-up.svg'
import ArrowDown from './images/icon-arrow-down.svg'
import Planning from './images/icon-planning.svg'
import Calendar from './images/icon-calendar.svg'
import Reminder from './images/icon-reminders.svg'
import Todo from './images/icon-todo.svg'

function App() {

  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [MenuExpanded, setMenuExpanded] = useState(false);
  const [FeatureExpanded, setFeatureExpanded] = useState(false);
  const [CompanyExpanded, setCompanyExpanded] = useState(false);
  //const [Outside, setOutside] = useState(false)

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
  })

  const refOne = useRef(null)
  const refTwo = useRef(null)

  const handleClickOutside = (e) => {
    if(refTwo.current.contains(e.target)) {
      console.log("Clicou na refTwo")
    }

    if(refOne.current.contains(e.target)) {
      console.log("Clicou na refOne")
    }
    
    if(FeatureExpanded === true && !refTwo.current.contains(e.target)){
      setFeatureExpanded(false)
      console.log("Desativar")
    }

    if(CompanyExpanded === true && !refOne.current.contains(e.target)){
      setCompanyExpanded(false)
      console.log("Desativar")
    }
    
  }

  const Hamburger = () => {
    if (isHamburgerActive === false) {
      setIsHamburgerActive(true)
      setMenuExpanded(true)
    }
    else {
      setIsHamburgerActive(false)
      setMenuExpanded(false)
    }
  };
  
  const Feature = () => {
    if (FeatureExpanded === false) {
      
      if (CompanyExpanded === true) {
        setCompanyExpanded(false)
      }

      setFeatureExpanded(true)
    }
    else {
      setFeatureExpanded(false)
    }
  }



  const Company = () => {
    if (CompanyExpanded === false) {
      
      if (FeatureExpanded === true) {
        setFeatureExpanded(false)
      }

      setCompanyExpanded(true)
    }
    else {
      setCompanyExpanded(false)
    }
  }


  return (
    <div className="min-h-screen relative p-7 pt-3">
      <div className="container">
        
        <nav className='flex w-full max-h-[70px] justify-between items-center'>
          <div className='flex'>  
            <img src={Logo} alt="#" className='object-contain md:mt-[10px]'/>

              <ul className={`flex md:flex-col md:absolute right-0 bg-white h-screen w-52 p-5 md:text-[19px] md:font-light ${MenuExpanded ? "md:block" : "md:hidden"}`}>
                <li className='m-auto md:mt-[-40px]'>
                  <p className='flex ml-10 mx-5 m-auto cursor-pointer text-[#242424] hover:text-black hover:font-medium lg:ml-2 lg:mx-3 md:mt-20 md:ml-0' onClick={Feature} ref={refTwo}>Features <img src={ArrowDown} alt="#" className={`${FeatureExpanded ? "hidden" : "block md:w-4 md:mt-3"} w-5 h-2 m-2`}/> <img src={ArrowUp} alt="#" className={`${FeatureExpanded ? "block md:w-4 md:mt-3" : "hidden"} w-5 h-2 m-2`} ref={refOne}/></p>
                  <ol className={`bg-white absolute ml-2 px-8 rounded-xl mt-4 shadow-2xl ${FeatureExpanded ? "block" : "hidden"} lg:ml-[-20px] md:relative md:shadow-none`}>
                    <li className='mt-2 flex cursor-pointer'> <img src={Todo} alt="#" className='mx-2 w-4 h-5'/> Todo List</li>
                    <li className='mt-2 flex cursor-pointer'> <img src={Calendar} alt="#" className='mx-2 w-4 h-5'/> Calendar</li>
                    <li className='mt-2 flex cursor-pointer'> <img src={Reminder} alt="#" className='mx-2 w-4 h-5'/> Reminders</li>
                    <li className='mt-2 mb-2 flex cursor-pointer'> <img src={Planning} alt="#" className='mx-2 w-4 h-5'/> Planning</li>
                  </ol>
                </li>
                <li className='m-auto md:mt-3'>
                  <p className='flex mx-5 m-auto cursor-pointer text-[#242424] hover:text-black hover:font-medium lg:mx-3 md:ml-0 md:mt-0' onClick={Company} ref={refOne}>Company <img src={ArrowDown} alt="#" className={`${CompanyExpanded ? "hidden" : "block md:w-4 md:mt-3"} w-5 h-2 m-2`}/> <img src={ArrowUp} alt="#" className={`${CompanyExpanded ? "block md:w-4 md:t-3" : "hidden"} w-5 h-2 m-2`}/></p>
                  <ol className={`bg-white absolute ml-2 px-8 rounded-xl mt-4 shadow-2xl ${CompanyExpanded ? "block" : "hidden"} lg:ml-[-20px] md:relative md:shadow-none`}>
                    <li className='mt-2 cursor-pointer'>History</li>
                    <li className='mt-2 cursor-pointer'>Our Team</li>
                    <li className='mt-2 mb-2 cursor-pointer'>Blog</li>
                  </ol>
                </li>
                <li className='mx-5 m-auto cursor-pointer text-[#242424] hover:text-black hover:font-medium lg:mx-3 md:mx-0 md:mt-3'>Careers</li>
                <li className='mx-5 m-auto cursor-pointer text-[#242424] hover:text-black hover:font-medium lg:mx-3 md:mx-0 md:mt-3'>About</li>
              </ul>
            </div>

            <div className={`flex ${isHamburgerActive ? "md:block" : "md:hidden"} md:absolute md:right-8 ${FeatureExpanded ? "md:top-[420px]" : "md:top-[290px]"} ${CompanyExpanded ? "md:top-[420px]" : "md:top-[290px]"}`}>
              <h3 className='mx-5 cursor-pointer m-auto md:mx-14 md:mb-3'>Login</h3>
              <button className='mx-5 border-2 border-black px-5 py-2 rounded-2xl cursor-pointer md:px-11 md:ml-[0px] md:absolute'>Register</button>
            </div>

          <div className={`hidden ${isHamburgerActive ? "" : "md:block md:order-last md:absolute md:right-8"}`} onClick={Hamburger}>
            <img src={IconMenu} alt="#" id='icon-menu'/>
          </div>

          <div className={`hidden ${isHamburgerActive ? "md:block md:order-last md:absolute md:right-8" : ""}`} onClick={Hamburger}>
            <img src={CloseMenu} alt="#" id='icon-menu'/>
          </div>
        </nav>

        <div className="flex justify-center items-center max-w-[1100px] m-auto max-h-[500px] mt-10 lg:mt-2 md:flex-col-reverse md:mt-0 md:max-h-[1000px]">
          <div className="w-1/2 flex flex-col md:items-center md:justify-center">
            <h1 className='text-[65px] font-bold mt-20 leading-[4rem] max-w-[400px] lg:text-[50px] md:text-center md:text-[40px] md:leading-[3rem] md:w-80 md:mt-5 sm:text-[30px]'>Make remote work</h1>
            <p className='text-[17px] mt-7 max-w-[300px] lg:text-[14px] md:text-center md:w-60 sm:text-[12px]'>Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.</p>
            <button className='bg-black w-[9rem] text-white py-3 rounded-2xl font-medium mb-16 mt-10 sm:w-[7rem] sm:text-[14px] hover:bg-white hover:border-2 hover:border-black hover:text-black'>Learn more</button>

            <div className="flex items-center lg:max-w-[150px] md:justify-center md:mb-[70px]">
              <img src={Databiz} alt="#" className='mr-3 w-20 sm:w-14'/>
              <img src={Audiophile} alt="#" className='mr-3 w-20 sm:w-14'/>
              <img src={Maker} alt="#" className='mr-3 w-20 sm:w-14'/>
              <img src={Meet} alt="#" className='w-20 sm:w-14'/>
            </div>
          </div>

          <div className="max-w-[500px] lg:max-w-[400px] lg:mt-20">
            <img src={HeroDesktop} alt="#" className='max-w-sm h-full lg:max-w-xs md:hidden'/>
            <img src={HeroMobile} alt="#" className='hidden md:block'/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
