import { Meta } from '@/components/Layout/Meta';
import Swal from 'sweetalert2';
import { Formik } from 'formik';
import { isArray } from 'util';
import { useAuth } from '@/hooks/auth';
import GuestLayout  from '@/components/Layout/GuestLayout'
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
  const { register, googleAuth } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const handleSubmit = async (FORM_DATA: any , helper: any) => {
    const { setFieldError } = helper;
    const getGeolocation : any = await fetch('https://geolocation-db.com/json/');
    const geolocation =  await getGeolocation.json();
    const getLocationdata : any = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_ABSTRACT_API_TOKEN}&ip_address=` + geolocation?.IPv4); 
    const locationdata = await getLocationdata.json();

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
      first_name: FORM_DATA.first_name,
      last_name: FORM_DATA.last_name,
      email: FORM_DATA.email,
      phone: FORM_DATA.phone,
      password: FORM_DATA.password,
      password_confirmation: FORM_DATA.password,
      currency_display: locationdata?.currency?.currency_code || "usd",
      marketing_consent: marketing_consent.value,
      timezone:  locationdata?.timezone?.name || "UTC",
    }
  
    try{
      let res = await register(payload);
      
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

    }catch(err: any){

      let errors = err?.response?.data?.errors;

        for (const [key, value] of Object.entries(errors)) {
          setFieldError(key, isArray(value)? value[0]: value)
        }

        Swal.fire({
          toast: true,
          icon: 'error',
          text: err.response.data?.message,
          timer: 5000,
          showConfirmButton: false,
          position:"top-right",
          customClass:{
            container: "mt-20"
          }
        })
    }
  }
  
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
                href="/auth/login"
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
                      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <div className="mt-1">
                              <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-casablanca-500 focus:ring-casablanca-500 sm:text-sm"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.first_name}
                              />
                              {
                                props.errors.first_name &&
                                  <p className="mt-2 text-sm text-red-600" id="first_name-error">
                                      {props.errors.first_name}
                                  </p>
                              }
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <div className="mt-1">
                              <>
                                <input
                                  type="text"
                                  name="last_name"
                                  id="last_name"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-casablanca-500 focus:ring-casablanca-500 sm:text-sm"
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  value={props.values.last_name}
                                />
                                  {
                                    props.errors.last_name &&
                                      <p className="mt-2 text-sm text-red-600" id="last_name-error">
                                          {props.errors.last_name}
                                      </p>
                                  }
                              </>
                          </div>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 shadow-sm focus:border-casablanca-500 focus:outline-none focus:ring-casablanca-500 sm:text-sm"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.email}
                            />
                              {
                                props.errors.email &&
                                  <p className="mt-2 text-sm text-red-600" id="email-error">
                                      {props.errors.email}
                                  </p>
                              }
                          </div>
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone Number
                          </label>
                          <div className="mt-1">
                            <input
                              id="phone"
                              name="phone"
                              required
                              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 shadow-sm focus:border-casablanca-500 focus:outline-none focus:ring-casablanca-500 sm:text-sm"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.phone}
                            />
                             {
                                props.errors.phone &&
                                  <p className="mt-2 text-sm text-red-600" id="phone-error">
                                      {props.errors.phone}
                                  </p>
                              }
                          </div>
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>
                          <div className="mt-1">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 shadow-sm focus:border-casablanca-500 focus:outline-none focus:ring-casablanca-500 sm:text-sm"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.password}
                            />
                              {
                                props.errors.password &&
                                  <p className="mt-2 text-sm text-red-600" id="password-error">
                                      {props.errors.password}
                                  </p>
                              }
                          </div>
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="password_confirmation"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Password Confirmation
                          </label>
                          <div className="mt-1">
                            <input
                              id="password"
                              name="password_confirmation"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 shadow-sm focus:border-casablanca-500 focus:outline-none focus:ring-casablanca-500 sm:text-sm"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.password_confirmation}
                            />
                              {
                                props.errors.password &&
                                  <p className="mt-2 text-sm text-red-600" id="password_confirmation-error">
                                      {props.errors.password}
                                  </p>
                              }
                          </div>
                        </div>
                      </div>

                      <div className='mt-5'>
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-6 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
                        >
                          Register
                        </button>
                      </div>
                  </form> 
                )}
              </Formik>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div>
                    <button
                      onClick={googleAuth}
                      className="btn inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 48 48" width="30px" height="30px">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Register;
