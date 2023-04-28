import { useState } from 'react';
import Header from './header';
import SideBar from './sideBar';



export const AdminLayout = () => {
const [isShowMenu,setIsShowMenu]=useState(false);


const handleToggleMenu=()=>{
    setIsShowMenu(!isShowMenu)
}

    return (
        <div >
            {/* <Header /> */}
            <SideBar isShowMenu={isShowMenu} header={<Header toggleMenu={handleToggleMenu}/>}/>
        </div>


    )


}