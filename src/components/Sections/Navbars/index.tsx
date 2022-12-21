
import SearchBar  from '@/components/FormInputs/SearchBar/index';
import { useAuth } from '@/hooks/auth';
import classNames from '@/utils/classNames';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { NavigationProps } from './types';

type ComponentProps = {
  user?: any;
  isFromNav?: boolean;
}

const Navbars = ( {user , isFromNav} : ComponentProps) => {
  const { logout } = useAuth({});
  const [openSide, setOpenSide] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const navigations =  [
    { name: 'Dashboard', group:"main", href: '/dashboard' },
    { name: 'Messages', group:"main", href: '#' },
    { name: 'Entries', group:"main", href: '#' },
    { name: 'Favorites', group:"main", href: '#' },
    { name: 'Listings', group:"boat_owner", href: '#' },
    { name: 'Payout', group:"boat_owner", href: '#' },
    { name: 'Profile', group:"system", href: '#' },
    { name: 'Logout', group:"system", href: '#', onClick:()=>logout()},
]

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const handleButtonClick = ()=>{
    setOpenSide(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    setColorchange(false);
    setOpenSide(false);
  }, [])
  

  return (
    <>
      <nav
        className={classNames(
          'fixed lg:overflow-y-visible z-20 w-full transition-all',
          colorChange ? 'bg-white' : 'lg:bg-transparent'
        )}
      >
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-2 lg:py-0">
          <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex xl:col-span-1">
              <div className="flex shrink-0 items-center">
                <Link href="/">
                   <Image
                      className="block h-10"
                      src={colorChange ? 
                            "/assets/images/logo/logo-only-original.svg" : 
                            "/assets/images/logo/logo-only-white.svg"
                        }
                      alt="Your Company"
                      width={100}
                      height={100}
                    />
                </Link>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-5 hidden lg:block">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div
                    className={classNames('transition-all relative',
                      colorChange ? 'visible' : 'invisible'
                    )}
                  >
                    <SearchBar isFromNav={true}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
              <button
                onClick={handleButtonClick}
                className="-mx-2 inline-flex items-center justify-center rounded-md p-2 bg-casablanca-400 text-white hover:bg-casablanca-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-casablanca-500"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-6">
              <Link
                href={!!user ? "/tour" : "/auth/login"}
                className="ml-6 inline-flex items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-6 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
              >
                Register your Yacht
              </Link>
              {!user && (
                <>
                  <Link href="/auth/login">
                    <span
                      className={`ml-6 block font-medium ${
                        colorChange ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      Login
                    </span>
                  </Link>
                  <Link href="/auth/register">
                    <span
                      className={`ml-6 block font-medium ${
                        colorChange ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      Create Account
                    </span>
                  </Link>
                </>
              )}
              {!!user && (
                <>
                  <Link
                    href="#"
                    className="ml-5 shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-casablanca-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                  <Menu as="div" className="relative ml-3 shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-casablanca-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={user?.imageUrl ?? "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="py-1">
                            {navigations.map((item, index) => 
                                {
                                    if(item?.group === "main"){
                                        return (
                                            <Menu.Item key={index}>
                                            {({ active }) => (
                                                <Link
                                                href={item.href}
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block py-2 px-4 text-sm text-gray-700'
                                                )}
                                                >
                                                {item.name}
                                                </Link>
                                            )}
                                            </Menu.Item>
                                        )
                                    } else{
                                        return undefined
                                    }
                                        
                                }
                            )}
                        </div>
                        <div className="py-1">
                            {navigations.map((item, index) => 
                                {
                                    if(item?.group === "boat_owner"){
                                        return (
                                            <Menu.Item key={index}>
                                            {({ active }) => (
                                                <Link
                                                href={item.href}
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block py-2 px-4 text-sm text-gray-700'
                                                )}
                                                >
                                                {item.name}
                                                </Link>
                                            )}
                                            </Menu.Item>
                                        )
                                    } else{
                                        return undefined
                                    }
                                        
                                }
                            )}
                        </div>
                        <div className="py-1">
                            {navigations.map((item, index) => 
                                {
                                    if(item?.group === "system"){
                                        return (
                                            <Menu.Item key={index}>
                                            {({ active }) => (
                                                <Link
                                                href={item.href}
                                                onClick={item?.onClick}
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block py-2 px-4 text-sm text-gray-700'
                                                )}
                                                >
                                                {item.name}
                                                </Link>
                                            )}
                                            </Menu.Item>
                                        )
                                    } else{
                                        return undefined
                                    }
                                        
                                }
                            )}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Transition.Root show={openSide} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpenSide}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-medium text-gray-900">
                            Menu
                          </h2>
                          <button
                            type="button"
                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-casablanca-500"
                            onClick={() => setOpenSide(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export async function getServerSideProps() {

  return {
    props: {
      user: null,
    }, // will be passed to the page component as props
  }
}

export default Navbars
