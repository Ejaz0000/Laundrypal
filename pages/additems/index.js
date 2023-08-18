import Link from "next/link";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { useState } from "react";
import {useEffect} from 'react';
import { useRouter } from 'next/router';
import {
  ArrowRightIcon,
  ShareIcon,
  StarIcon,
  
} from "@heroicons/react/20/solid";

export default function Additems() {

  const router = useRouter()
  const email = router.query.email
  const name = router.query.name

  const [agent, setAgent] = useState({});
  

    useEffect(() => {
      const fetchData = async () => {
        
        const res = await fetch("/api/shops/getshop_one", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },  
          body: JSON.stringify({
            email: email,
          }),
        });
        const data = await res.json();
        console.log(data);
        if(res.status === 200) {
          setAgent(data);
          
        }
       
      };
      fetchData();
      console.log(email);
    }, [email]);
    
   

  const handleSignup = async (e) => {
    e.preventDefault();

    
    
      const shirts ={
      name: "Shirts", 
      wash: e.target.shirtWash?.value, 
      dryClean: e.target.shirtDryClean?.value, 
      iron: e.target.shirtIroning?.value, 
    }

    const tops ={
      name: "Tops",
      wash: e.target.topsWash?.value, 
      dryClean: e.target.topsDryClean?.value, 
      iron: e.target.topsIroning?.value, 
    }

    const bottoms ={
       
      name: "Bottoms",
      wash: e.target.bottomsWash?.value, 
      dryClean: e.target.bottomsDryClean?.value, 
      iron: e.target.bottomsIroning?.value, 
    }

    const suits ={
      
      name: "Suits",
      wash: e.target.suitWash?.value, 
      dryClean: e.target.suitDryClean?.value, 
      iron: e.target.suitIroning?.value, 
    }

    const dresses ={
      
      name: "Dresses", 
      wash: e.target.dressWash?.value, 
      dryClean: e.target.dressDryClean?.value, 
      iron: e.target.dressIroning?.value, 
    }

    const bedsheets ={
      name: "BedSheets",
      wash: e.target.bedWash?.value, 
      dryClean: e.target.bedDryClean?.value, 
      iron: e.target.bedIroning?.value, 
    }

    const child ={
      name: "Child Clothes",
      wash: e.target.childWash?.value, 
      dryClean: e.target.childDryClean?.value, 
      iron: e.target.childIroning?.value, 
    }


    

    const res2 = await fetch("/api/shops/additems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },  
      body: JSON.stringify({
        name: name,
        email: email,
        shirt: shirts,
        top: tops,
        bottom: bottoms,
        suit: suits,
        dress : dresses,
        child : child,
        bedsheet : bedsheets
      }),
    });

    const data2 = await res2.json();
    
    if(res2.status === 200) {
      alert("Account setup successful");
      window.location.href = "/auth/loginagent";
    } else {
      alert(data2.message);
    }
  
 
  };
    return (
      <>
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
              className="hidden mx-auto h-12 w-auto"
              src={logo}
              alt="qoverflow"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Set up your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter the prices of following items.{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                
              </a>
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-slate-50 py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST" onSubmit={handleSignup}>


              <div>
                 <div className="flex items-center justify-between mb-4">
                       <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Price per Items</h5>
        
                </div>
                <div className="flow-root">
                      <ul role="list" className="divide-y divide-gray-200 ">
                      <div className="my-5"><div className="font-bold text-base text-blue-700 m-2">Shirts</div>
                          <li className="py-3 sm:py-4">
                              <div className="flex flex-wrap items-center ">
                              
                              {agent.services?.map((service , index) => (
                                
                                  <div className="flex items-center min-w-0 mr-5 mt-3">
                                  <div className="m-2 flex">
                                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      For {service} 
                                  </p>
                                  <ArrowRightIcon className="h-3 w-3 m-1 " aria-hidden="true"/>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  <div className="mr-1">$</div>
                                  
                                  <input
                                
                                  name={`shirt${service.replace(/\s+/g, "")}`}
                                  type="text"
                                  
                                    className="block w-14 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                  />
                              </div>
                                  
                              </div>

                              ))} 
                </div>
                
            </li>
            </div>

            <div className="mt-8"><div className="font-bold text-base text-blue-700 m-2">Tops</div>
            <li className="py-3 sm:py-4">
                <div className="flex flex-wrap items-center ">
                    
                {agent.services?.map((service , index) => (
                                
                                <div className="flex items-center min-w-0 mr-5 mt-3">
                                <div className="m-2 flex">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    For {service} 
                                </p>
                                <ArrowRightIcon className="h-3 w-3 m-1 " aria-hidden="true"/>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <div className="mr-1">$</div>
                                
                                <input
                              
                                name={`tops${service.replace(/\s+/g, "")}`}
                                type="text"
                                
                                  className="block w-14 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                                
                            </div>

                            ))} 

                    
                </div>
                
            </li>
            </div>
            
            <div className="mt-8"><div className="font-bold text-base text-blue-700 m-2">Bottoms</div>
            <li className="py-3 sm:py-4">
                <div className="flex flex-wrap items-center ">
                    
                {agent.services?.map((service , index) => (
                                
                                <div className="flex items-center min-w-0 mr-5 mt-3">
                                <div className="m-2 flex">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    For {service} 
                                </p>
                                <ArrowRightIcon className="h-3 w-3 m-1 " aria-hidden="true"/>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <div className="mr-1">$</div>
                                
                                <input
                              
                                name={`bottoms${service.replace(/\s+/g, "")}`}
                                type="text"
                                
                                  className="block w-14 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                                
                            </div>

                            ))} 

                    
                </div>
                
            </li>
            </div>
            
            <div className="mt-8"><div className="font-bold text-base text-blue-700 m-2">Suits</div>
            <li className="py-3 sm:py-4">
                <div className="flex flex-wrap items-center ">
                    
                {agent.services?.map((service , index) => (
                                
                                <div className="flex items-center min-w-0 mr-5 mt-3">
                                <div className="m-2 flex">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    For {service} 
                                </p>
                                <ArrowRightIcon className="h-3 w-3 m-1 " aria-hidden="true"/>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <div className="mr-1">$</div>
                                
                                <input
                              
                                name={`suit${service.replace(/\s+/g, "")}`}
                                type="text"
                                
                                  className="block w-14 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                                
                            </div>

                            ))} 

                    
                </div>
                
            </li>
            </div>

            <div className="mt-8"><div className="font-bold text-base text-blue-700 m-2">Dresses</div>
            <li className="py-3 sm:py-4">
                <div className="flex flex-wrap items-center ">
                    
                {agent.services?.map((service , index) => (
                                
                                <div className="flex items-center min-w-0 mr-5 mt-3">
                                <div className="m-2 flex">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    For {service} 
                                </p>
                                <ArrowRightIcon className="h-3 w-3 m-1 " aria-hidden="true"/>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <div className="mr-1">$</div>
                                
                                <input
                              
                                name={`dress${service.replace(/\s+/g, "")}`}
                                type="text"
                                
                                  className="block w-14 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                                
                            </div>

                            ))} 

                    
                </div>
                
            </li>
            </div>

            <div className="mt-8"><div className="font-bold text-base text-blue-700 m-2">Children</div>
            <li className="py-3 sm:py-4">
                <div className="flex flex-wrap items-center ">
                    
                {agent.services?.map((service , index) => (
                                
                                <div className="flex items-center min-w-0 mr-5 mt-3">
                                <div className="m-2 flex">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    For {service} 
                                </p>
                                <ArrowRightIcon className="h-3 w-3 m-1 " aria-hidden="true"/>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <div className="mr-1">$</div>
                                
                                <input
                              
                                name={`child${service.replace(/\s+/g, "")}`}
                                type="text"
                                
                                  className="block w-14 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                                
                            </div>

                            ))} 

                    
                </div>
                
            </li>
            </div>

            <div className="mt-8"><div className="font-bold text-base text-blue-700 m-2">BedSheets</div>
            <li className="py-3 sm:py-4">
                <div className="flex flex-wrap items-center ">
                    
                {agent.services?.map((service , index) => (
                                
                                <div className="flex items-center min-w-0 mr-5 mt-3">
                                <div className="m-2 flex">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    For {service} 
                                </p>
                                <ArrowRightIcon className="h-3 w-3 m-1 " aria-hidden="true"/>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <div className="mr-1">$</div>
                                
                                <input
                              
                                name={`bed${service.replace(/\s+/g, "")}`}
                                type="text"
                                
                                  className="block w-14 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                                
                            </div>

                            ))} 

                    
                </div>
                
            </li>
            </div>
        </ul>
   </div>
</div>

  
                
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
  
              

               

              </div>
            </div>
          </div>
        
      </>
    )
  }