import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Navbar() {
   
    var Links = [
        {name: "Home", link: "/"},
        {name: "Services", link: "#services"},
        {name: "Skills", link: "#skills"},
        {name: "Projects", link: "#projects"},
    ];

    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    }
   
    return (
       <header className='bg-slate-500 dark:bg-slate-800'>
        <nav className='container flex justify-between items-center p-5'>
            <div>
                <a href="/" id='Logo' className='md:text-2xl text-xl font-bold text-white'>JM<span className='text-color-primary'>Div.</span></a>
            </div>

            <ul className={`md:flex md:items-center md:space-x-8 absolute md:static left-0 z-[-1]  md:z-auto pb-7 md:pb-0 text-center bg-slate-800 md:bg-transparent w-full md:w-auto ${open ? 'top-14' : 'top-[-490px]'} transition-all duration-500`}>
                {
                    Links.map((Link) => (
                        <li key={Link} className='my-8 md:my-0'>
                            <a href={Link.link} onClick={handleLinkClick} className='font-medium tracking-wider text-white hover:text-blue-300 ease-in duration-200'>{Link.name}</a>
                        </li>
                    ))
                }
                <div className='md:px-0 px-4'>
                    <a href="#contacts"><button onClick={handleLinkClick} className='py-2 px-6 bg-color-primary w-full md:w-auto font-medium text-white rounded hover:opacity-85 ease-in duration-200'>Contacts</button></a>
                </div>
            </ul>

            <div className='md:hidden w-8 h-8 text-white cursor-pointer' onClick={() => setOpen(!open)}>
                {
                    open ? <BarsArrowUpIcon /> : <BarsArrowDownIcon />
                }
            </div>
        </nav>
       </header>
    );
}