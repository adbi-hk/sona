import React , {useEffect} from 'react'
import { AiOutlineMenu ,  } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import { Cart , Chat , Notification , UserProfile, userProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider' 

const NavButton = ({title ,custoFunc , icon , color , dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' onClick={custoFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
           <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
           />
           {icon}
           
      </button>
  </TooltipComponent>
) 
const Navbar = () => {
  const {screenSize , setScreenSize , handleClick , activeMenu , setActiveMenu , isClicked , setIsClicked } = useStateContext ();
  useEffect(()=>{
  const handleResize = () => setScreenSize(window.innerWidth); window.addEventListener('resize',handleResize); handleResize()
  return() =>window.removeEventListener('resize',handleResize)}, []);
  useEffect(()=>{ if (screenSize <= 700){setActiveMenu(false)}else {setActiveMenu(true)} }, [screenSize])
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      
        <NavButton title="menu"
                   custoFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
                   color="blue" 
                   icon={<AiOutlineMenu/>}/>
        
        <div className=" flex">
                
                <NavButton title="Cart" 
                          custoFunc={() => handleClick('cart')} 
                          color="blue" 
                          icon={<FiShoppingCart/>}
                />
         
          
          
          
                <NavButton title="Chat" 
                          dotColor="#03C9D7"
                          custoFunc={() => handleClick('chat')} 
                          color="blue" 
                          icon={<BsChatLeft/>}
                />
                 
          
          
                <NavButton title="Notifications" 
                           dotColor="#03C9D7"
                           custoFunc={() => handleClick('notification')} 
                           color="blue" 
                           icon={<RiNotification3Line/>}
                />
          
          
          
                <TooltipComponent content="Profile" position='BottomCenter'>
            
                    <div className='flex items-center gap-2 curser-pointer p-1 hover:bg-light-gray rounded-lg'
                        onClick={()=>handleClick("userProfile")}>
                          <img src={avatar} 
                              className='rounded-full w-8 h-8'
                          />
                          <p>
                              <span className='text-gray-400 text-14'>Hi ,</span>  {'  '}
                              <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
                          </p>   
                          <MdKeyboardArrowDown className='text-gray-400 text-14' />
                    </div>
                </TooltipComponent>
                
                {isClicked.cart && <Cart/>}
                {isClicked.chat && <Chat/>}
                {isClicked.notification && <Notification/>}
                {isClicked.userProfile && <UserProfile/>}
        </div>
    </div>
    
  )
}

export default Navbar;