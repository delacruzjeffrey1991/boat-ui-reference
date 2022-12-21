import { MapPinIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
/* Use this utils on getting data */
// import { useCustomFetcher } from '@/utils/useCustomFetcher'; 
const data : any[] = [];

const features = [
    {
      name: 'Best Price Guarantee',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque',
      image: '/assets/images/icon/feature-icon-1.svg',
    },
    {
      name: 'Curated Destinations',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque',
      image: '/assets/images/icon/feature-icon-2.svg',
    },
    {
      name: '24/7 Customer Service',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque',
      image: '/assets/images/icon/feature-icon-3.svg',
    },
    {
      name: '100% Verified Boats',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque',
      image: '/assets/images/icon/feature-icon-4.svg',
    },
];

const Index = () => {
    /* example for fetching data */
    /* const { requestData = data, loading, error } = useCustomFetcher('/endpoint') */  

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
    <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-screen-2xl lg:px-8">
      <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="relative">
          <div className="mx-auto max-w-screen-2xl lg:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              Find and book boat rentals, jet skis, yachts, pontoon boats, and
              fishing charters.
            </h2>
            <p className="mt-3 text-base text-gray-800">
              For captained experiences and drive-it-yourself rentals,
              GetMyBoat is the easiest way to find fun on the water anywhere
              in the world. Connect directly with boat owners and captains to
              securely book online.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="flex items-center">
                  <div className="flex h-16 w-16 items-center justify-center text-white">
                    <Image src={feature.image} alt="feature icon" width={50} height={50} />
                  </div>
                  <p className="ml-4 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="gap-x-4 mt-12 flex">
            <Image
              width={200}
              height={200}
              className="h-12"
              src="/assets/images/icon/app-store-icon.png"
              alt="app store"
            />
            <Image
              width={200}
              height={200}
              className="h-12"
              src="/assets/images/icon/google-play-icon.png"
              alt="google play"
            />
          </div>
        </div>
        <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
          <Image
            width={500}
            height={500}
            className="ml-4 lg:ml-0 relative mx-auto w-full"
            src="/assets/images/mobile-app.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  );
};


export default Index