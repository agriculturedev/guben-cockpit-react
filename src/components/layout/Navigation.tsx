import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import {HomeIcon, ListBulletIcon, MapIcon, Squares2X2Icon} from "@heroicons/react/24/outline";



export const Navigation = () => {
    const linkStyle = "h-full p-3 flex items-center justify-center w-auto rounded-xl group hover:bg-[#cd1421]";

    return (
        <div className="w-full h-[80px] bg-white sticky top-0 z-10 shadow p-0 m-0 rounded-b flex flex-row items-center justify-between">
            <div id="logo" className="flex-1 flex justify-start items-start h-full pl-5">
                <Link to="/" className="h-full flex justify-center items-center">
                    <img src="/guben-logo.jpg" alt="logo" className={"h-[70%]"}/>
                </Link>
            </div>
            <ul className="flex-1 flex flex-row h-full items-center justify-center self-center">
                <li>
                    <Link to="/" className={linkStyle}>
                        <HomeIcon className="icon h-[20px] w-[20px] text-[#cd1421] group-hover:text-white"/>
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className={linkStyle}>
                        <Squares2X2Icon className="icon h-[20px] w-[20px] text-[#cd1421] group-hover:text-white"/>
                    </Link>
                </li>
                <li>
                    <Link to="/map" className={linkStyle}>
                        <MapIcon className="icon h-[20px] w-[20px] text-[#cd1421] group-hover:text-white"/>
                    </Link>
                </li>
                <li>
                    <Link to="/events" className={linkStyle}>
                        <ListBulletIcon className="icon h-[20px] w-[20px] text-[#cd1421] group-hover:text-white"/>
                    </Link>
                </li>
            </ul>
            <div className="flex-1"></div>
        </div>
    )
}
