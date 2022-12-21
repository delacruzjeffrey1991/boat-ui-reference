import { useAuth } from '@/hooks/auth';
import { Meta } from '@/components/Layout/Meta';
import Swal from 'sweetalert2';
import { Formik } from 'formik';
import { isArray } from 'util';
import GuestLayout  from '@/components/Layout/GuestLayout'
import Link from 'next/link';

const  formdefaultvalues  = {
  email: "",
}

const Index = () => {
  const { forgotPassword } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const handleSubmit = async (FORM_DATA: any , helper: any) => {
    const { setFieldError } = helper;
    
    const payload = {
      email: FORM_DATA.email,
      password: FORM_DATA.password,
      password_confirmation: FORM_DATA.password_confirmation,
      token: FORM_DATA.token,
    }

    try{
      let res = await forgotPassword(payload);
      
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
          title="Login | Boat Rental World"
          description="Search boat rentals, jet skis, yachts, pontoons, and fishing charters. Compare updated prices and availability, photos, reviews and more!"
        />
      }
    >
      <div className=" bg-chathams-blue-900 pt-32 pb-20">
        <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-white">
               Forgot your password?
            </h2>
            <p className="mt-2 text-center text-sm text-white">
              Or{' '}
              <Link
                href="/auth/login"
                className="font-medium text-casablanca-400 hover:text-casablanca-500"
              >
                Sign in
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
                        
                        <div className="col-span-6">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
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
                        
                      </div>

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

export default Index;
