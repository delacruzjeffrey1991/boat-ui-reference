import SearchBar from '@/components/FormInputs/SearchBar/index';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
/* Use this utils on getting data */
// import { useCustomFetcher } from '@/utils/useCustomFetcher'; 

const data : any[] = [];

const mostSearched = !!data.length ? data : [
    { name: 'Nautical Tourism', href: '#' },
    { name: 'Guyam Island', href: '#' },
    { name: 'Laboc River', href: '#' },
    { name: 'Fortune Island', href: '#' },
    { name: 'Bay of Islands', href: '#' },
];

const Index = () => {
    /* example for fetching data */
    /* const { requestData = data, loading, error } = useCustomFetcher('/endpoint') */  

  return (
    <section className="min-h-[760px] xl:min-h-[100vh]  bg-hero-bg-dark relative overflow-hidden bg-cover flex items-center">
      <div className="mx-auto max-w-screen-2xl flex-1">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 ">
            <div className="rounded-lg bg-white shadow max-w-[608px]">
              <div className="px-4 py-5 sm:p-6 lg:p-8">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  <span className="block">Discover Yacht</span>
                  Voyage Experiences
                </h1>
                <p className="mt-3 text-base text-gray-800 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>

                <div className="mt-8">
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Choose your Destination
                  </label>
                  {/* <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div> */}
                    <SearchBar withSearchButton={true}/>
                  {/* </div> */}
                  <div
                    className="mt-2 inline-flex flex-wrap items-center gap-x-2"
                    aria-label="Footer"
                  >
                    <div>
                      <span className="text-sm text-gray-800">
                        Most Searched:
                      </span>
                    </div>
                    {mostSearched.map((item,index) => (
                      <div key={index}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-800 hover:text-casablanca-900 underline font-medium"
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Index