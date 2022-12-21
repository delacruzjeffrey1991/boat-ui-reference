import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { useAPI } from '@/hooks/useApi';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router'
import { Formik } from 'formik';


type ComponentProps = {
    isFromNav?: boolean;
    withSearchButton?: boolean;
} 

type LocationProps = {
    city: string;
    state: string;
    country: string;
}

const Index = ({isFromNav, withSearchButton} : ComponentProps) => {
    const [focused, setFocused] = useState(false)
    const [optionFocused, setOptionFocused] = useState(false)
    const [locations, setLocations] = useState<String[]>([])
    const router = useRouter()
    const onFocus = () => setFocused(true)
    const onBlur = () => {
        setOptionFocused(false)
        setFocused(false)
    }

    const requestLocation : any = useAPI('/api/search/location')
    const updateQuery = async ( e : any ) =>{ 
        /* if value is empty return empty locations and stop from fetching */
        if(!e.target.value) return setLocations([])
        
        const locations = await requestLocation.call({ data : { search: e.target.value }})
        const topLocations = locations?.data?.attributes.map((item : LocationProps)=>{
            return `${item?.city}, ${item?.state}, ${item?.country}`
        });
        setLocations(topLocations) 
    };
    
    const delayedOnChange = _.debounce(updateQuery,200);

    const handleSubmit = (FORM_DATA: any , helper: any) => {
        const search = FORM_DATA?.search?.split(',');
        const city = (search[0] || "")
        const state = (search[1] || "")
        const country = (search[2] || "")
        const isNear = FORM_DATA?.search === "Near Me"

        if(!isNear && !!state){
            router.push(`boat-rental?city=${city}&&state=${state}&&country=${country}`)
        }else if(isNear && !state){
            router.push(`boat-rental?nearby=yes`)
        }else{
            router.push(`boat-rental?search=${FORM_DATA?.search}`)
        }
    }

  return (
    <>
        <Formik   
            className="space-y-6"
            initialValues={{search:""}}
            onSubmit={handleSubmit}
        >
            {props => (
                <form id='search-form' onSubmit={props.handleSubmit}>
                    <div>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                            <div>
                                <input
                                    id="search"
                                    name="search"
                                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-gray-500 focus:border-casablanca-500 focus:text-gray-900 focus:placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-casablanca-500 sm:text-sm"
                                    placeholder="Where are you going?"
                                    onChange={(e)=>{
                                        delayedOnChange(e);
                                        props.handleChange(e);
                                        if(!e.target.value){
                                            onBlur();
                                        }
                                    }}
                                    type="search"
                                    onFocus={onFocus} 
                                    onBlur={ optionFocused ? undefined : onBlur}
                                    autoComplete="off"
                                    onKeyDown={(event)=>{
                                        if(event?.key === "Enter"){
                                            props.submitForm();
                                        }
                                        if(event?.key === "Tab"){
                                            setFocused(false)
                                            setOptionFocused(false)
                                        }
                                    }}
                                    value={props.values.search}
                                />
                                {
                                    !!locations?.length && focused ? (
                                        <div className='absolute mt-2 w-full overflow-hidden rounded-md bg-white border border-gray-300 focus:border-casablanca-500'>
                                            {
                                                locations.map((item : any, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="relative">
                                                                <div className="pointer-events-none absolute inset-y-5 left-0 flex items-center pl-3">
                                                                <MapPinIcon
                                                                    className="h-5 w-5 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                                </div>
                                                            </div>
                                                            <p
                                                                onMouseOver={()=>setOptionFocused(true)}
                                                                onMouseLeave={()=>setOptionFocused(false)}
                                                                onBlur={()=>setOptionFocused(false)}
                                                                onClick={()=>{
                                                                    props.setFieldValue('search',item)
                                                                    setOptionFocused(false)
                                                                    setFocused(false)
                                                                }} className='w-100 cursor-pointe py-2 px-3 hover:bg-slate-100 pl-10'> 
                                                                {item}
                                                            </p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                    : !locations?.length && focused ?
                                    (
                                        <>
                                        <div className='absolute mt-2 w-full overflow-hidden rounded-md bg-white border border-gray-300 focus:border-casablanca-500 '>
                                            <div className="relative">
                                                <div className="pointer-events-none absolute inset-y-5 left-0 flex items-center pl-3">
                                                <MapPinIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                </div>
                                            </div>
                                            <p
                                                onMouseOver={()=>setOptionFocused(true)}
                                                onMouseLeave={()=>setOptionFocused(false)}
                                                onBlur={()=>setOptionFocused(false)}
                                                onClick={()=>{
                                                    props.setFieldValue('search',"Near Me")
                                                    setOptionFocused(false)
                                                    setFocused(false)
                                                }} className='w-100 cursor-pointe py-2 px-3 hover:bg-slate-100 pl-10'> 
                                                Near Me
                                            </p>
                                        </div>
                                    </>
                                    ) : null
                                }
                            </div>
                        </div> 
                        {
                            !!withSearchButton && (
                                <button
                                    type='submit'
                                    className="mt-4 w-full inline-flex justify-center items-center rounded-full bg-gradient-to-r from-casablanca-200 to-casablanca-400 px-4 py-2 text-sm font-medium text-casablanca-900 shadow-sm hover:from-casablanca-400 hover:to-casablanca-400 focus:outline-none"
                                >
                                    Search
                                </button>
                            )
                        } 
                    </div>
                </form> 
            )}
        </Formik>
    </>
  )
}

export async function getServerSideProps() {
    return {
      props: {
        isFromNav: false,
        withSearchButton: false,
      }, // will be passed to the page component as props
    }
  }


export default Index