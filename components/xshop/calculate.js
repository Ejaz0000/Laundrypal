import { Button } from "@mui/material";
import Image from "next/image";
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";

import CakeIcon from "@mui/icons-material/Cake";
import Link from "next/link";
import { Settings } from "@mui/icons-material";
import { PhotoIcon, UserCircleIcon,PhoneIcon,AtSymbolIcon,StarIcon} from "@heroicons/react/24/solid";
import { useState } from "react";

import { useRouter } from "next/router";

export default function Calculate({prop, values }) {
    const router = useRouter();
    const [washService, setwashService] = useState([]);
    const [drycleanService, setdrycleanService] = useState([]);
    const [ironService, setironService] = useState([]);
    const [wNiService, setwNiService] = useState([]);
    const [dNiService, setdNiService] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({}); 

    useEffect(() => {
        
    
        switch(values.service) {
          case "Wash":
            setwashService(prevArray => [...prevArray, values]);
            break;
          case "Dry Clean":
            setdrycleanService(prevArray => [...prevArray, values]);
            break;
          case "Ironing":
            setironService(prevArray => [...prevArray, values]);
            break;
          case "WashIroning":
            setwNiService(prevArray => [...prevArray, values]);
            break;
          case "Dry CleanIroning":
            setdNiService(prevArray => [...prevArray, values]);
          break;
          default:
             
        }
        
        setTotalValue(totalValue+values.total)
        
      }, [values]);

      useEffect(() => {
        const usr = localStorage.getItem("loggedInUser");
        if (usr) {
          // alert("You are already logged in " + JSON.parse(user).name);
          setIsLoggedIn(true);
          setUser(JSON.parse(usr));
        }
        else {
          setIsLoggedIn(false);
        }
      }, []);
  
      const handleInput = async (e) => {
        e.preventDefault();
    
        
    
        
    
        const res2 = await fetch("/api/shops/addOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },  
          body: JSON.stringify({
            client: user.name,
            clientEmail: user.email,
            clientPhone: user.phone,
            clientLocation: user.location,
            clientImg: user.imageUrl,
            agent: prop.email,
            forwash: washService,
            fordryclean: drycleanService,
            foriron: ironService,
            forwashiron: wNiService,
            fordryiron: dNiService,
            cost: totalValue

          }),
        });
    
        const data2 = await res2.json();
        
        if(res2.status === 200) {
          alert(data2.message);
        } else {
          alert(data2.message);
        }
      
     
      };
    
    
  
    return (

        <div className="m-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-600 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Total Order</h5>
        
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-semibold text-gray-900 truncate dark:text-white">
                            Wash:
                        </p>
                        
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                    {washService.map((elements) => (
                           <div className="flex"><p className="font-medium mr-4">{elements.quantity} X {elements.product} = </p>${elements.total}</div>
                           
                           ))}  
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dry Clean:
                        </p>
                        
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                    {drycleanService.map((elements) => (
                           <div className="flex"><p className="font-medium mr-4">{elements.quantity} X {elements.product} = </p>${elements.total}</div>
                           
                           ))}  
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Iron:
                        </p>
                        
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                    {ironService.map((elements) => (
                           <div className="flex"><p className="font-medium mr-4">{elements.quantity} X {elements.product} = </p>${elements.total}</div>
                           
                           ))}  
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Wash & Iron
                        </p>
                        
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                    {wNiService.map((elements) => (
                           <div className="flex"><p className="font-medium mr-4">{elements.quantity} X {elements.product} = </p>${elements.total}</div>
                           
                           ))}  
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dry Clean & Iron
                        </p>
                        
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                    {dNiService.map((elements) => (
                           <div className="flex"><p className="font-medium mr-4">{elements.quantity} X {elements.product} = </p>${elements.total}</div>
                           
                           ))}  
                    </div>
                </div>
            </li>
            
            
        </ul>
        <div className="flex justify-between p-1 rounded-md border-2 border-blue-300">
        <p className="text-md font-bold text-gray-900 truncate dark:text-white"> Total:
        </p>
        <div>{totalValue}</div>
        </div>
   </div>
   <div className="my-2">
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleInput}>
              Order
            </button>
   </div>
</div>

    );
  }