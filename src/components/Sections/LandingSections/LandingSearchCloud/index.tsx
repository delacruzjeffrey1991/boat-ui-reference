import React from 'react'

const data = [
    {name:"Lorem ipsum dolor",href:""},
    {name:"Lorem ipsum dolor",href:""},
    {name:"Lorem ipsum dolor",href:""},
    {name:"Lorem ipsum dolor",href:""},
    {name:"Lorem ipsum dolor",href:""},
    {name:"Lorem ipsum dolor",href:""},
    {name:"Lorem ipsum dolor",href:""},
    {name:"Lorem ipsum dolor",href:""},
    {name:"Lorem ipsum dolor",href:""},
]

const Index = () => {

  return (
    <section className="mx-auto max-w-screen-2xl px-6 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        <span className="block">Most Searched</span>
        </h2>
        <div className="mt-8 mx-auto max-w-screen-2xl px-6 sm:px-6 flex flex-wrap justify-center lg:px-8 gap-x-2 gap-y-3">
            {
                !!data.length && (
                    data.map((item, index)=>{
                        return (
                            <button
                                key={index}
                                type="button"
                                className="inline-flex items-center rounded-full text-gray-900 bg-transparent border border-casablanca-400 px-6 py-2 text-sm font-medium leading-4 hover:text-white shadow-sm hover:bg-casablanca-400 focus:outline-none focus:ring-2 focus:ring-casablanca-400 focus:ring-offset-2"
                            >
                                {item?.name}
                        </button>
                        )
                    })
                )
            }
        </div>
    </section>
  )
}

export default Index