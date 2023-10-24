import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './index.css'

const navigation = [
  { name: 'Про нас', href: '#about' },
  { name: 'Цены', href: '#price' },
  { name: 'Работы', href: '#works' },
  { name: 'Контакты', href: '#contacts' },
]

const navigation1 = [
  { name: 'Про нас', href: '#aboutmobile' },
  { name: 'Цены', href: '#pricemobile' },
  { name: 'Работы', href: '#worksmobile' },
  { name: 'Контакты', href: '#contactsmobile' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="flex lg:flex-1 absolute px-6 py-3 lg:px-8 block sm:hidden">
        <img src="./weble.svg" alt="" className='w-1/15'/>
      </div>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 hidden sm:block">
            <img src="./weble.svg" alt="" className='w-1/15'/>
          </div>
          <div className="flex lg:hidden ml-auto sm:ml-0">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-md font-norm leading-6 text-white-900 hover:text-purple-400 ease-in duration-200 hover:text-lg">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button className='text-md bg-second border-purple-400 border-2 border-solid p-2.5 px-10 rounded-full font-kot ostavitbut ease-in duration-300'>Оставить заявку</button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-main px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation1.map((item) => (
                    <a onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <a href="#contactsmobile">
                  <button className='text-md bg-second border-purple-400 border-2 border-solid p-2.5 px-10 rounded-full font-kot ostavitbut' onClick={() => setMobileMenuOpen(false)} >Оставить заявку</button>
                </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}
