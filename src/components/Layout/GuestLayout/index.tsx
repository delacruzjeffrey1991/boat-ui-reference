import { Footer } from '@/components/Sections';
import Navbars from '@/components/Sections/Navbars';
import { useAuth } from '@/hooks/auth';
import type { ReactNode } from 'react';

type PageProps = {
  meta: ReactNode;
  children: ReactNode;
};

const GuestLayout = ({ meta,  children }: PageProps) => {
  const { user } = useAuth({ middleware: 'guest' })

  return (
    <div className="w-full antialiased">
      {meta}
      <Navbars user={user}/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default GuestLayout ;
