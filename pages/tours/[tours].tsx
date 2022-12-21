import { Meta } from '@/components/Layout/Meta';
import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';
import { TourType } from '@/types/tours';
import axios from '@/lib/axios';
import AppLayout from '@/components/Layout/AppLayout';
import classNames from '@/utils/classNames';
import Image from 'next/image';
import Link from 'next/link';
import { useCustomFetcher } from '@/hooks/useCustomFetcher';
import { useRouter } from 'next/router';

type PageProps = {
  tourData?: TourType
}

const Index = ({ tourData } : PageProps) => {
  const router = useRouter()
  const { tours } = router.query
  const requestData = useCustomFetcher(`/api/tours/${tours}`)
  
  const data = tourData || requestData?.data?.attributes;
  const reviews = {
    average: 4,
    totalCount: 1624,
    counts: [
      { rating: 5, count: 1019 },
      { rating: 4, count: 162 },
      { rating: 3, count: 97 },
      { rating: 2, count: 199 },
      { rating: 1, count: 147 },
    ],
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
          <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
        `,
        author: 'Emily Selman',
        avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      // More reviews...
    ],
  };

  const testimonials = [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ];


  return (
    <AppLayout
      meta={
        <Meta
          title="Boat Rentals Near You | Boat Rental World"
          description="Search boat rentals, jet skis, yachts, pontoons, and fishing charters. Compare updated prices and availability, photos, reviews and more!"
        />
      }
    >
    <div className=" bg-chathams-blue-900 pt-[56px] lg:pt-[74px]">
        <div className="bg-white pt-10 px-10">
          {/* Image gallery */}
          <div className="mx-auto max-w-2xl lg:grid lg:max-w-screen-2xl lg:grid-cols-4 lg:gap-4">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden col-span-2">
              <Image
                width={500}
                height={500}
                src={'/assets/images/yacht/yacht-3.png'}
                alt={"n/a"}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-4">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden ">
                <Image
                  width={500}
                  height={500}
                  src={'/assets/images/yacht/yacht-3.png'}
                  alt={"n/a"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden ">
                <Image
                  width={500}
                  height={500}
                  src={'/assets/images/yacht/yacht-3.png'}
                  alt={"n/a"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-4">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden ">
                <Image
                  width={500}
                  height={500}
                  src={'/assets/images/yacht/yacht-3.png'}
                  alt={"n/a"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden ">
                <Image
                  width={500}
                  height={500}
                  src={'/assets/images/yacht/yacht-3.png'}
                  alt={"n/a"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className=" mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-screen-2xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {data?.head_line}
              </h1>

              <div className="mt-2">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating, index) => (
                      <StarIcon
                        key={index}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-casablanca-500'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <Link
                    href="#"
                    className="ml-3 text-sm font-medium text-casablanca-400 hover:text-casablanca-500"
                  >
                    {reviews.totalCount} reviews
                  </Link>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0 h-fit lg:sticky lg:top-24">
              <h2 className="sr-only">Product information</h2>

              <form>
                <div>
                  <label
                    htmlFor="guests"
                    className="hidden text-sm font-medium text-gray-700"
                  >
                    guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-casablanca-500 focus:outline-none focus:ring-casablanca-500 sm:text-sm"
                    defaultValue="Select guests"
                  >
                    <option>Select guests</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="date"
                    className="hidden text-sm font-medium text-gray-700"
                  >
                    date
                  </label>
                  <select
                    id="date"
                    name="date"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-casablanca-500 focus:outline-none focus:ring-casablanca-500 sm:text-sm"
                    defaultValue="Select date"
                  >
                    <option>Select date</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="addons"
                    className="hidden text-sm font-medium text-gray-700"
                  >
                    addons
                  </label>
                  <select
                    id="addons"
                    name="addons"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-casablanca-500 focus:outline-none focus:ring-casablanca-500 sm:text-sm"
                    defaultValue="Select addons"
                  >
                    <option>Select addons</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full justify-center inline-flex items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-6 py-3 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
                >
                  Send a Booking Inquiry
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {data?.description}
                  </p>
                </div>
              </div>

              {/* <div className="mt-10">
                <h3 className="text-sm font-medium text-casablanca-400">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {tourData?.description.map((highlight:any) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

              <div className="mt-10">
                <h3 className="text-sm font-medium text-casablanca-400">
                  Details
                </h3>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{tourData?.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-sm font-medium text-casablanca-400">
                      Customer Reviews
                    </h3>
                    <div className="mt-4 flex items-center">
                      <div>
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating, index) => (
                            <StarIcon
                              key={index}
                              className={classNames(
                                reviews.average > rating
                                  ? 'text-casablanca-500'
                                  : 'text-gray-300',
                                'flex-shrink-0 h-5 w-5'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {reviews.average} out of 5 stars
                        </p>
                      </div>
                      <p className="ml-2 text-sm text-gray-900">
                        Based on {reviews.totalCount} reviews
                      </p>
                    </div>
                    <div className="mt-6">
                      <h3 className="sr-only">Review data</h3>

                      <dl className="space-y-3">
                        {reviews.counts.map((count, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm"
                          >
                            <dt className="flex flex-1 items-center">
                              <p className="w-3 font-medium text-gray-900">
                                {count.rating}
                                <span className="sr-only"> star reviews</span>
                              </p>
                              <div
                                aria-hidden="true"
                                className="ml-1 flex flex-1 items-center"
                              >
                                <StarIcon
                                  className={classNames(
                                    count.count > 0
                                      ? 'text-casablanca-500'
                                      : 'text-gray-300',
                                    'flex-shrink-0 h-5 w-5'
                                  )}
                                  aria-hidden="true"
                                />

                                <div className="relative ml-3 flex-1">
                                  <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                  {count.count > 0 ? (
                                    <div
                                      className="absolute inset-y-0 rounded-full border border-casablanca-500 bg-casablanca-500"
                                      style={{
                                        width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                                      }}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </dt>
                            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                              {Math.round(
                                (count.count / reviews.totalCount) * 100
                              )}
                              %
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-casablanca-400">
                      Share your Thoughts
                    </h3>
                    <p className="mt-4 text-sm text-gray-600">
                      If you’ve experienced this tour, share your thoughts with
                      other customers
                    </p>

                    <Link
                      href="#"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                    >
                      Write a review
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                {testimonials.map((review, reviewIdx) => (
                  <div
                    key={reviewIdx}
                    className="flex space-x-4 text-sm text-gray-500"
                  >
                    <div className="flex-none py-10">
                      <Image
                        width={500}
                        height={500}
                        src={review.avatarSrc}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-100"
                      />
                    </div>
                    <div
                      className={classNames(
                        reviewIdx === 0 ? '' : 'border-t border-gray-200',
                        'flex-1 py-10'
                      )}
                    >
                      <h3 className="font-medium text-gray-900">
                        {review.author}
                      </h3>
                      <p>
                        <time dateTime={review.datetime}>{review.date}</time>
                      </p>

                      <div className="mt-4 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating, index) => (
                          <StarIcon
                            key={index}
                            className={classNames(
                              review.rating > rating
                                ? 'text-casablanca-500'
                                : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>

                      <div
                        className="prose prose-sm mt-4 max-w-none text-gray-500"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

// export async function getServerSideProps(context: any) {
//   const res = await axios.get(`/api/tours/${context.params.tours}`);
//   const data = await res;

//   console.log(context.params.tours)

//   return {
//     props: {
//       tourData:  data?.data?.attributes
//     }
//   }
// }

export default Index