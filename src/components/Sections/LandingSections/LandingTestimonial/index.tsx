import Image from 'next/image';
import React from 'react'
import _ from "lodash";

type TestimonialProps = {
  picture: string;
  name: string;
  address: string;
  star: number;
  title: string;
  review: string;
}

const Index = () => {

  const data : TestimonialProps[] = [
    {
      picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Judith Black",
      address: "Long Beach, California",
      star: 4,
      title: "Testimonial Title Here",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    },
    {
      picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Lawrence Black",
      address: "Long Beach, California",
      star: 5,
      title: "Testimonial Title Here",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    },
    {
      picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "James Smith",
      address: "Long Beach, California",
      star: 5,
      title: "Testimonial Title Here",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    }
  ];
  
  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-screen-2xl lg:px-8">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
            Every sailing adventure is unique. Here’s ours.
          </h2>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
              !!(data?.length > 0) && (
                  data.map((item, index)=> {
                    return (
                      <div key={index}>
                        <div className="flow-root rounded-lg bg-white shadow-card-shadow px-6 pb-8">
                          <blockquote className="mt-6 md:flex md:grow md:flex-col">
                            <div className="relative text-lg text-gray-900 md:grow">
                              <svg
                                className="absolute top-[-24px] left-0 h-8 w-8 -translate-x-3 -translate-y-2 text-[#0891B2]"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                              >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                              </svg>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-start">
                                <div className="inline-flex shrink-0 rounded-full border-2 border-white">
                                  <Image
                                    width={50}
                                    height={50}
                                    className="h-12 w-12 rounded-full"
                                    src={item?.picture}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="font-semibold text-base text-gray-900">
                                      {item?.name}
                                  </div>
                                  <div className="text-xs text-[#71717A]">
                                      {item?.address}
                                  </div>
                                </div>
                              </div>
                              <div className="flex">
                                {_.times(item?.star, (i)=>{
                                  return (
                                    <span key={i}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-4 h-4 text-casablanca-500"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                  )
                                })}
                              
                              </div>
                            </div>
                            <h3 className="mt-4 text-lg font-inter text-[#0891B2]">
                              {item?.title}
                            </h3>
                            <p className="mt-2 relative text-base">
                              {item?.review}
                            </p>
                          </blockquote>
                        </div>
                      </div>
                    )
                  })
              )
            }
            
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index