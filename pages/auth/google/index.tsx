import { Meta } from '@/components/Layout/Meta';
import { Formik } from 'formik';
import { useAuth } from '@/hooks/auth';
import { useEffect } from 'react';
import GuestLayout  from '@/components/Layout/GuestLayout'
import Swal from 'sweetalert2';
import axios from '@/lib/axios';
import Link from 'next/link';

const  formdefaultvalues  = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
  password_confirmation: "",
  currency_display:"",
  marketing_consent: "",
  timezone: ""
}

const Register = () => {
  const { user, error, googleVerify } = useAuth({
    middleware: 'google',
    redirectIfAuthenticated: '/dashboard',
  })
  const token : string | null =  typeof window !== 'undefined' ? window.localStorage.getItem("Token:") : "";

  const handleSubmit = async () => {
    const getGeolocation : any = await fetch('https://geolocation-db.com/json/');
    const geolocation =  await getGeolocation.json();
    const getLocationdata : any = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_ABSTRACT_API_TOKEN}&ip_address=` + geolocation?.IPv4); 
    const locationdata = await getLocationdata.json();

    if(!!user && !user?.timezone){
      const marketing_consent = await Swal.fire({
        title: 'Email Newsletters?',
        text: "Would you like to receive occasional emails from us with information about our water experiences?",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
      })
      
      const payload = {
        user_id: user?.id,
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        email: user?.email,
        phone: user?.phone,
        currency_display: locationdata?.currency?.currency_code || "usd",
        marketing_consent: marketing_consent.value,
        timezone: locationdata?.timezone?.name || "UTC"
      }

      try{
        let res = await axios.post('api/user',payload, {headers:{Authorization: token}});
        
        Swal.fire({
          toast: true,
          icon: 'success',
          text: res.data?.message,
          timer: 5000,
          showConfirmButton: false,
          position:"top-right",
          customClass:{
            container: "mt-20"
          }
        })
        
        window.location.href = '/dashboard';
      }catch(err: any){
        console.log(err);
      }
    }else{
      window.location.href = '/dashboard';
    }
    
  }

  useEffect(()=>{
    try{
      googleVerify(location.search);
    }catch(err){

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  
  return (
    <GuestLayout
      meta={
        <Meta
          title="Register | Boat Rental World"
          description="Search boat rentals, jet skis, yachts, pontoons, and fishing charters. Compare updated prices and availability, photos, reviews and more!"
        />
      }
    >
      <div className=" bg-chathams-blue-900 pt-32 pb-20">
        <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-white">
              Create an Account
            </h2>
            <p className="mt-2 text-center text-sm text-white">
              Or{' '}
              <Link
                href="#"
                className="font-medium text-casablanca-400 hover:text-casablanca-500"
              >
                sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Formik
                  className="space-y-6"
                  initialValues={formdefaultvalues}
                  onSubmit={handleSubmit}
              >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                    <h1 className="mt-6 grid grid-cols-1 gap-3 text-center">
                          <svg 
                            className='mx-auto'
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 48 48" width="50px" height="50px">
                              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                          </svg>
                          Signing in with Google
                    </h1>
                    {
                      user ? (
                        <>
                        
                        </>
                      ) : (
                        <h2 className="mt-6 grid grid-cols-1 gap-3 text-center">
                          {
                            error ? (
                              <>
                               There is a problem with your request.
                               </>
                            ):(
                              <>
                                Please wait while we validate your details.
                              </>
                            )
                          }
                          
                        </h2>
                      )
                    }
                   
                    <div className='mt-5'>
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-6 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
                      >
                        Continue
                      </button>
                    </div>
                    </form> 
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Register;
