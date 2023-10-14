'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import  {AiFillBug } from 'react-icons/ai';

import classNames from 'classnames';

const NavBar = () => {

    const links =[
                     {name:'DashBoard',href:'/'},
                     {name:'Issues',href:'/issues'}
                 ]

     const currentPath = usePathname();
     
  return (
    <div>
      <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/">
            <AiFillBug />
        </Link>
        <ul  className='flex space-x-5'>
            {links.map((link)=>(
                <li className={
                    classNames({
                        'text-blue-900' : link.href=== currentPath,
                        'text-zinc-600': link.href!==currentPath,
                        'hover:text-zinc-800':true
                        
                      }
                    )
                } 
                key={link.href}><Link href={link.href} >{link.name}</Link></li>
            ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
