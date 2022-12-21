import Image from 'next/image';
import React from 'react'

const howitworks = [
  {
      id: 1,
      name: 'Search',
      description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
      id: 2,
      name: 'Get an Offer',
      description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
      id: 3,
      name: 'Book your Destination',
      description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
];

const Index = () => {

  return (
    <section className="relative bg-chathams-blue-900 py-16 sm:py-24 lg:py-32">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <Image
              height={500}
              width={500}
              className="h-full w-full object-cover xl:absolute xl:inset-0"
              src="/assets/images/how-it-works.png"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-chathams-blue-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-screen-2xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pb-64 sm:pb-0 xl:col-start-1">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-white">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6">
            {howitworks.map((item, i) => (
              <div key={i} className="relative">
                <div>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-casablanca-500 text-white">
                    {i + 1}
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-casablanca-500">
                    {item.name}
                  </p>
                </div>
                <div className="mt-2 ml-16 text-base text-white">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index