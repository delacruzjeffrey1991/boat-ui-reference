import Footer from '@/components/Sections/Footer';
import Navbars from '@/components/Sections/Navbars';
import { useAuth } from '@/hooks/auth'
import { ReactNode } from 'react';

type PageProps = {
  meta: ReactNode;
  children: ReactNode;
};

const AppLayout = ({ meta,  children }: PageProps) => {
    const { user  } = useAuth({ middleware: 'auth' })

    return (
      <section className="w-full antialiased">
        {meta}
        <Navbars user={user} />
        {children}
      </section>
    )
    
}

export default AppLayout


