import React from 'react';
import { Link  ,   useMatch,
    useResolvedPath } from 'react-router-dom';


export default function NavLinkWebsite({ to, children }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
        to={to}
         
            className={
                match
                    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-brandHeadline text-sm text-brandHeadline font-medium leading-5 focus:outline-none focus:border-brandHeadline transition duration-150 ease-in-out'
                    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-gray-900 text-sm font-medium leading-5 hover:text-brandHeadline hover:border-brandHeadline focus:outline-none focus:text-brandHeadline focus:border-brandHeadline transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
