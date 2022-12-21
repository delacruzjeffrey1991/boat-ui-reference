import AppLayout from '@/components/Layout/AppLayout';
import { Meta } from '@/components/Layout/Meta';
import Link from 'next/link';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Messages', href: '#', current: false },
  { name: 'Entries', href: '#', current: false },
  { name: 'Favorites', href: '#', current: false },
  { name: 'Listings', href: '#', current: false },
  { name: 'Payout', href: '#', current: false },
  { name: 'Profile', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Index = () => {
  return (
    <AppLayout
      meta={
        <Meta
          title="About Us | Boat Rental World"
          description="Search boat rentals, jet skis, yachts, pontoons, and fishing charters. Compare updated prices and availability, photos, reviews and more!"
        />
      }
    >
      <div className="min-h-full bg-gray-200">
        <div className="bg-chathams-blue-900 pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-screen-2xl lg:px-8 ">
            <div className="pt-20 py-5">
              <div className="flex items-center gap-8 overflow-x-auto">
                <nav className="flex space-x-4">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-white' : 'text-indigo-100',
                        'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <main className="-mt-24 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-screen-2xl lg:px-8">
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-3">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="overflow-hidden rounded-lg bg-white">
                    <div className="p-6 min-h-[100vh]">
                      {/* Your content */}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
};

export default Index;
