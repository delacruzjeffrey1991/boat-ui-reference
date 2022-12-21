
import axios from '@/lib/axios';
import useSWR from 'swr'

const fetcher = (URL:string) => axios.get(URL).then(res => res.data);

export const useCustomFetcher = (URL:string, config: any) =>{
  const  { data, error, mutate }  = useSWR(URL, fetcher, config);
  const  loading = !error && !data ? true : false;

  if (error) return null;
  
  return {
    data,
    error,
    loading,
    mutate,
  };
}