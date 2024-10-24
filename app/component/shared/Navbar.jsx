import Image from "next/image";
import Link from "next/link";
import { IoCartSharp,IoSearchSharp  } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    {
      title:'Home',
      path:'/'
    },
    {
      title:'About',
      path:'/about'
    },
    {
      title:'Services',
      path:'/services'
    },
    {
      title:'Blog',
      path:'/blog'
    },
    {
      title:'Contacts',
      path:'/contacts'
    },
  ];
  return (
    
  <div className=" text-stone-600 mx-auto ">
     <div className="navbar container px-16 ">
  <div className="navbar-start">
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> */}
    <Link href='/'>
    
    <Image  alt='loge-image' src='/assets/images/logo.svg' height={80} width={70}></Image>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className= 'flex justify-between gap-6 '>
    {
      navItems.map((item)=><Link className="font-semibold hover:text-primary duration-300" href={item.path} key={item.path}>{item.title}</Link>)
    }
    </div>
  </div>
  <div className="navbar-end">
    <div className="flex items-center space-x-3">
    <IoCartSharp className="text-xl"/>
    <IoSearchSharp className="text-xl"/>
    <a className="btn btn-outline btn-primary">Appointment</a>
    </div>
      
  </div>
</div>
  </div> 
    
  );
};

export default Navbar;
