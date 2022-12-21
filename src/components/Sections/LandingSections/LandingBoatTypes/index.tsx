import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const destinations = [
  {
    id: 1,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 2,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 3,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 4,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 5,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
  {
    id: 6,
    title: 'Boat Rentals',
    available: 20,
    image: '/assets/images/yacht/yacht-1.png',
  },
];

const Index = () => {
      
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              Boat Types and Categories
            </h2>
            <p className="mt-3 text-base text-gray-800">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui.
            </p>
            <div className="mt-4">
              <Link
                href="#"
                className="mt-4 inline-flex justify-center items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-6 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
              >
                Explore more Boats
              </Link>
            </div>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {destinations.map((destination, index) => (
              <div key={index} className="group relative">
                <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-48 max-h-64">
                  <Image
                    width={300}
                    height={300}
                    src={destination.image}
                    alt="yacht"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xs text-[#71717A] font-inter">
                      <Link href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {destination.available} Available
                      </Link>
                    </h3>
                    <p className="mt-1 text-lg text-gray-900 font-medium leading-tight">
                      {destination.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Index