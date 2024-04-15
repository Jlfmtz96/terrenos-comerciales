'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import HeroImg from '../../assets/construction-site-silhouettes.jpg'

const navigation = [
    { name: 'NOSOTROS', href: '#' },
    { name: 'CATÁLOGO', href: '#' },
    { name: 'TU ENTORNO', href: '#' },
    { name: 'COMEBI', href: '#' },
  ]

export const Hero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div className="bg-white">
            <div className="lg:h-screen overflow-hidden bg-black">
                <video loop autoPlay className="w-full h-full object-cover opacity-50">
                    <source src="/San-Gerardo.mp4" type="video/mp4" />
                </video>
                {/* <Image src={HeroImg} width={''} alt='' className='w-full h-auto object-cover' /> */}
            </div>
            <header className="fixed inset-x-0 top-0 z-50">
                <nav className={`flex items-center justify-between lg:px-8 ${scrolled ? 'bg-white text-blue-900 p-2 transition-all duration-300' : 'bg-transparent text-white p-6'}`} aria-label="Global">
                    <div className="flex lg:flex-1">
                        <h1 className="text-sm font-semibold leading-6">Terrenos y Macrolotes Comerciales</h1>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 ">
                        {item.name}
                        </a>
                    ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link href="#" className="rounded-full bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Contáctanos
                        </Link>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                                height={32}
                                width={32}
                                />
                            </Link>
                            <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                    Contáctanos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <div className="absolute inset-0 isolate px-6 lg:pt-14 lg:px-8 text-white">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="font-bold tracking-tight text-xl md:text-4xl  lg:text-6xl">
                            Terrenos y macrolotes comerciales
                        </h1>
                        <p className="mt-2 md:mt-6 leading-8 uppercase text-sm md:text-xl tracking-widest font-semibold">
                            En San Gerardo Residencial
                        </p>
                        <div className="mt-4 md:mt-10 flex items-center justify-center gap-x-6">
                            <a
                            href="#"
                            className="rounded-full bg-blue-600 px-3.5 py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Ver video
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
