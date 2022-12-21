import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <section className="bg-cta-bg bg-cover bg-fixed py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow max-w-[608px]">
          <div className="px-4 py-5 sm:p-6 lg:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              Let your boat earn for you today.
            </h2>
            <p className="mt-3 text-base text-gray-800">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-4 inline-flex">
              <Link
                href="#"
                className="mt-4 w-full inline-flex justify-center items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-6 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index