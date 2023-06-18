'use client'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function CompanyLogo() {
    return (
        <Link href="/" className="-m-1.5 p-1.5">
            <Image
                src='/logos/company-logo-removebg-preview.png'
                alt='Company logo'
                width={150}
                height={150}
            />
        </Link>
    )
}

function LocalAuthButtons({ className }) {
    return (
        <div className={className}>
            <Link
                href="/auth/signup"
                className="rounded-sm mx-4 text-md font-semibold leading-6 text-blue-900"
            >
                Sign Up
            </Link>

            <Link
                href="/auth/login"
                className="rounded-sm bg-blue-600 px-8 py-2.5 text-md text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                Login
            </Link>
        </div>
    )
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const dropDownMenuItems = [
        { name: 'Airplane', description: 'Travel around the globe high on life', href: '#', icon: '/icons/plane-alt.svg' },
        { name: 'Passenger Train', description: 'All train and no play makes Jack a dull boy', href: '#', icon: '/icons/train-tram.svg' },
        { name: 'Cargo Train', description: 'Charter a cargo train to send goods to multiple destinations', href: '#', icon: '/icons/luggage-cart.svg' }
    ]
    const navbarLinkItems = [
        { name: 'Manage', href: '/manage' },
        { name: 'Charter', href: '/charter' },
        { name: 'Cargo', href: '/cargo' },
    ]

    return (
        <header className="bg-white">
            <nav className="flex w-full items-center justify-between px-4" aria-label="Global">
                {/* <!-- Company logo --> */}
                <div className="flex lg:flex-1">
                    <CompanyLogo />
                </div>

                {/* <!-- Mobile menu closed button --> */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* <!-- Menu --> */}
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Book
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {dropDownMenuItems.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <Image
                                                    src={item.icon}
                                                    alt='Menu icon'
                                                    width={24}
                                                    height={24}
                                                />
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    {navbarLinkItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-md font-semibold leading-6 text-gray-900"
                        >
                            {item.name}
                        </Link>
                    ))}
                </Popover.Group>

                <LocalAuthButtons
                    className={classNames('hidden lg:flex lg:flex-1 lg:justify-end items-center')}
                />
            </nav>

            {/* <!-- Mobile menu --> */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <CompanyLogo />

                        <button
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Book
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...dropDownMenuItems].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                {navbarLinkItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            <LocalAuthButtons
                                className={classNames('flex justify-between py-6')}
                            />
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}