import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'

import '../Navbar/Navbar.css'

const Navbar = () => {

     var User = null


  return (
    <nav>
   <div className='navbar'>
 <Link to='/' className='nav-item nav-logo'>
    <img src={logo} alt="logo" />
 </Link>
 <Link to='/' className='nav-item nav-btn'>About</Link>

 <Link to='/' className='nav-item nav-btn'>Products</Link>

 <Link to='/' className='nav-item nav-btn'>For Tips</Link>
<form>
    <input type="text" placeholder='Search...' />
    <img src={search} alt="search" width="18" className='search-icon'/>
</form>
{User === null ? 

    <Link to='/Auth' className='nav-item nav-links'>Login</Link>:
    <>
    <Link style={{textDecoration : 'none'}} to='/User' className='nav-ite'><Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color="white">M</Avatar></Link>
    <button className='nav-item nav-link'>Log out</button>
    </>
}


   </div> 
   </nav>
  )
  
}

export default Navbar