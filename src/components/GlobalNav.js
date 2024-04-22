import React from "react";

import { Disclosure } from "@headlessui/react";
import {  MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLinkWebsite from "./NavLinkWebsite";

//import { Link } from "react-router-dom";


const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about"},
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact"},
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function GlobalNav() {
  return (
    <Disclosure as="nav" className="bg-green">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>

                
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-5 w-auto"
                    src="../pubic/logo192.png"
                    alt="PYRON "
                  />
                  <img
                    className="hidden lg:block h-5 w-auto"
                    src="../public/logo512.png"
                    alt=""
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                  {navigation.map((item) => (
                      <div className="px-1 py-2" key={item.name}>
                  <NavLinkWebsite to={item.href} match>
                  {item.name}
                    </NavLinkWebsite>
                    </div>
                      ))}
                
                  
              
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="bg-geen-900 p-1 rounded-full text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                  
                  
                  <div
                    className={
                      "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden"
                    }
                  >
                
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                      <li className="flex items-center">
                        <a
                          className="hover:text-green-500  text-green-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          href="https://www.facebook.com/people/Birhan-Aschalew/pfbid02djV5DMAcXJzJtLzw3pTATs959tWmfijuuaXcLHKVqgj9ZffpKSe9c7Qb3L3orF8sl/?mibextid=ZbWKwL"
                          target="_blank" rel="noopener noreferrer" 
                        >
                          <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg  " />
                          <span className="lg:hidden inline-block ml-2">
                            Share
                          </span>
                        </a>
                      </li>

                      <li className="flex items-center">
                        <a
                          className="hover:text-green-500  text-green-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          href="https://twitter.com/" rel="noopener noreferrer" 
                          target="_blank"
                        >
                          <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                          <span className="lg:hidden inline-block ml-2">
                            Tweet
                          </span>
                        </a>
                      </li>


                      <li className="flex items-center">
                        <a
                          className="hover:text-green-500  text-green-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          href="https://www.instagram.com/_birhan_aschalew/"
                          target="_blank" rel="noopener noreferrer" 
                        >
                          <i className="text-blueGray-400 fab fa-instagram text-lg leading-lg " />
                          <span className="lg:hidden inline-block ml-2">
                            Tweet
                          </span>
                        </a>
                      </li>
                      <li className="flex items-center">
                        <a
                          className="hover:text-green-500  text-green-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          href="https://www.linkedin.com/company/payron/"
                          target="_blank" rel="noopener noreferrer" 
                        >
                          <i className="text-blueGray-400 fab fa-linkedin-in text-lg leading-lg " />
                          <span className="lg:hidden inline-block ml-2">
                            post
                          </span>
                        </a>
                      </li>
                    </ul>
                
                  </div>
                
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <link 
                key={item.name}
                to={item.href}
                className="block px-1 py-2">
                
                </link>



              //   <Disclosure.Button
              //     key={item.name}
              //     as="a"
              //     href={item.href}
              //     className={classNames(
              //       item.current
              //         ? "bg-green-900 text-white"
              //         : "text-green-900 hover:bg-green-700 hover:text-white",
              //       "block px-3 py-2 rounded-md text-base font-medium"
              //     )}
              //     aria-current={item.current ? "page" : undefined}
              //   >
              //     {item.name}
              //   </Disclosure.Button>
              ))}


            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
