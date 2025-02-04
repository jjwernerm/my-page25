import {
  useState,
  useEffect,
} from 'react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/react';

import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

import {
  user,
  navigation,
  userNavigation
} from '../data/DataNavbar.jsx';

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.innerWidth >= 768) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className={`fixed w-screen top-0 left-0 z-50 bg-zinc-700 ${isScrolled ? 'md:bg-zinc-700' : 'md:bg-transparent'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="My Logo"
                    src="https://res.cloudinary.com/dqjnzfsp6/image/upload/my-page25/logo25-joa-navbar.png"
                    className="size-12"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-zinc-300 hover:border-b-2 hover:border-teal-400 
                        hover:text-yellow-100 px-3 py-2 text-sm font-medium duration-300 hover:-translate-y-1 hover:scale-100'
                      >
                        <div className='flex items-center'>
                          {item.icon}&nbsp;&nbsp;{item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-700">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src={user.imageUrl} className="size-12 rounded-full" />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            target="_blank"
                            className="block px-4 py-2 text-sm text-zinc-700 data-[focus]:bg-zinc-100 data-[focus]:outline-none"
                          >
                            <div className='flex items-center'>
                              {item.icon}&nbsp;&nbsp;{item.name}
                            </div>
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">

                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-zinc-600 p-2 text-white hover:bg-zinc-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-700">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className='text-zinc-300 hover:bg-zinc-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                >
                  <div className='flex items-center'>
                    {item.icon}&nbsp;&nbsp;{item.name}
                  </div>
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-zinc-950 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                </div>
                <div className="ml-3 text-zinc-100">
                  <div className="text-base/5 font-medium">{user.name}</div>
                  <div className="text-sm">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    target="_blank"
                    className="block rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  >
                    <div className='flex items-center'>
                      {item.icon}&nbsp;&nbsp;{item.name}
                    </div>
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  )
};