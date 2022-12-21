import { useEffect, useState } from 'react'
import axios from '@/lib/axios';

type hookProps = {
  middleware?: string;
  redirectIfAuthenticated?: string;
} 

export const useAuth = ({ middleware, redirectIfAuthenticated } : hookProps ) => {
    const [user, setUser] = useState<any>(undefined);
    const [error, setError] = useState<any>(undefined);
    const token : string | null =  typeof window !== 'undefined' ? window.localStorage.getItem("Token:") : "";
    
    const authenticate = async () => {
      try {
        let res = await axios.get('/api/authenticate');
        setUser(res?.data?.attributes);
      } catch(err: any){
        setError(err?.response?.data?.message || "Server Error");
      }
    }


    const register = async (payload: any) => {
      let res = await axios.post('/api/register', payload);

      if(res?.status === 200){
        setUser(res?.data?.attributes?.user);
        if(typeof window !== 'undefined'){
          window.localStorage.setItem("Token:", 'Bearer ' + res?.data?.attributes?.token)
        }
      }

      return res;
    }

    const googleAuth = async () => {
      let res = await axios.get('/api/auth/google');

      if(res?.status === 200){
        setUser(res?.data?.attributes?.user);
        if(typeof window !== 'undefined'){
          window.location.href = res?.data?.url;
        }
      }
    }

    const googleVerify = async (search : string) => {
      try {
        if(!user && !token){
          let res = await axios.get('/api/auth/callback' + search);
          if(res?.status === 200){
            setUser(res?.data?.attributes?.user);
            if(typeof window !== 'undefined'){
              window.localStorage.setItem("Token:", 'Bearer ' + res?.data?.attributes?.token)
            }
          } 
        } 
      }catch(err: any){
        setError('Authentication Error')
      }
    }

    const login = async (payload: any) => {
      let res = await axios.post('/api/login', payload);

      if(res?.status === 200){
        setUser(res?.data?.attributes?.user);
        if(typeof window !== 'undefined'){
          window.localStorage.setItem("Token:", 'Bearer ' + res?.data?.attributes?.token)
        }
      }

      return res;
    }

    const forgotPassword = async (payload: any) => {
      let res = await axios.post('/api/forgot-password', payload);

      return res;
        
    }

    const resetPassword = async (payload: any) => {
      let res = await axios.post('/api/reset-password', payload);

      if(res?.status === 200){
        setUser(res?.data?.attributes?.user);
        if(typeof window !== 'undefined'){
          window.localStorage.setItem("Token:", 'Bearer ' + res?.data?.attributes?.token)
        }
      }

      return res;
    }


    const logout = async () => {
      try{
        if (! error && user) {
          let res = await axios.post('/api/logout');
          if(res?.status === 200){
            setUser(undefined);
            if(typeof window !== 'undefined'){
              window.localStorage.removeItem("Token:")
            }
          } 
        }
        window.location.pathname = '/auth/login'
      }catch(err:any){
        console.log(err?.response?.data?.message)
      }
      
    }

    useEffect(()=>{
      if(!user){
        authenticate()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        if (middleware === 'guest' && !!redirectIfAuthenticated && !!user) {
          window.location.href = redirectIfAuthenticated;
        }
        if (middleware === 'auth' && error) logout()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, error])

    return {
        user,
        error,
        register,
        googleAuth,
        googleVerify,
        login,
        forgotPassword,
        resetPassword,
        logout,
    }
}
