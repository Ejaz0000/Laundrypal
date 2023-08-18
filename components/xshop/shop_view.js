import { Button } from "@mui/material";
import Image from "next/image";
import dynamic from 'next/dynamic';
import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import Link from "next/link";
import { Settings } from "@mui/icons-material";
import { PhotoIcon, UserCircleIcon,PhoneIcon,AtSymbolIcon,StarIcon} from "@heroicons/react/24/solid";
import { useState } from "react";

import { useRouter } from "next/router";

const DynamicComponents = dynamic(() => import('../twelements'), { ssr: false });


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}




const Shirts =({prop1, prod ,change}) => {

  

  return (
    <div>
<div className="m-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-600 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Price per Items</h5>
        
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Wash
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.wash}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dry Clean
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.dryClean}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Iron
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.iron}
                    </div>
                </div>
            </li>
            
            
        </ul>
   </div>
</div>

<div>
<DynamicComponents service={prop1} product= {prod} change={change}/>
</div>

</div>

);

};

const Tops =({prop1, prod ,change}) => {

  

  return (
    <div>
<div className="m-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-600 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Price per Items</h5>
        
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Wash
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.wash}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dry Clean
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.dryClean}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Iron
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.iron}
                    </div>
                </div>
            </li>
            
            
        </ul>
   </div>
</div>



<div>
<DynamicComponents service={prop1} product= {prod} change={change}/>
</div>

</div>

);

};

const Bottoms =({prop1, prod ,change}) => {

  

  return (
    <div>
<div className="m-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-600 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Price per Items</h5>
        
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Wash
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.wash}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dry Clean
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.dryClean}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Iron
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.iron}
                    </div>
                </div>
            </li>
            
            
        </ul>
   </div>
</div>

<div>
<DynamicComponents service={prop1} product= {prod} change={change}/>
</div>

</div>

);

};


const Suits =({prop1, prod ,change}) => {

  

  return (
    <div>
<div className="m-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-600 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Price per Items</h5>
        
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Wash
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.wash}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dry Clean
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.dryClean}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Iron
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.iron}
                    </div>
                </div>
            </li>
            
            
        </ul>
   </div>
</div>

<div>
<DynamicComponents service={prop1} product= {prod} change={change}/>
</div>

</div>

);

};

const Dressess =({prop1, prod ,change}) => {

  

  return (
    <div>
<div className="m-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-600 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Price per Items</h5>
        
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Wash
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.wash}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dry Clean
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.dryClean}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Iron
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.iron}
                    </div>
                </div>
            </li>
            
            
        </ul>
   </div>
</div>

<div>
<DynamicComponents service={prop1} product= {prod} change={change}/>
</div>

</div>

);

};

const Children =({prop1, prod ,change}) => {

  

  return (
    <div>
<div className="m-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-600 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Price per Items</h5>
        
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Wash
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.wash}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dry Clean
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.dryClean}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Iron
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.iron}
                    </div>
                </div>
            </li>
            
            
        </ul>
   </div>
</div>

<div>
<DynamicComponents service={prop1} product= {prod} change={change}/>
</div>

</div>

);

};

const BedSheets =({prop1, prod ,change}) => {

  

  return (
    <div>
<div className="m-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-600 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Price per Items</h5>
        
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Wash
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.wash}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Dry Clean
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.dryClean}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Iron
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ${prod?.iron}
                    </div>
                </div>
            </li>
            
            
        </ul>
   </div>
</div>

<div>
<DynamicComponents service={prop1} product= {prod} change={change}/>
</div>

</div>

);

};



export default function ViewShop({prop ,change}) {
  const router = useRouter();

  const [tabs, setTabs] = useState([
    { name: "Shirts", href: "#", current: true },
    { name: "Tops", href: "#", current: false },
    { name: "Bottoms", href: "#", current: false },
    { name: "Suits", href: "#", current: false },
    { name: "Dresses", href: "#", current: false },
    { name: "Children", href: "#", current: false },
    { name: "Bed Sheets", href: "#", current: false },
  ]);

  const handleTabClick = (index) => {
    const newTabs = tabs.map((tab, i) => {
      if (i === index) {
        return { ...tab, current: true };
      } else {
        return { ...tab, current: false };
      }
    });
    setTabs(newTabs);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [services, setservices] = useState(['empty','empty','empty']);
  const [shop, setShop] = useState({});
  

  useEffect(() => {
    const fetchData = async () => {
        
      const res = await fetch("/api/shops/getItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify({
          email: prop.email,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setShop(data);
        
      }
     
    };
    fetchData();
    setservices(prop.services)
    },[prop]);
  
  

  return (
    <div className="bg-slate-100  rounded-lg">
      
      <div className="flex border-b justify-between ">
        <div className="p-4 flex-shrink-0">
          <Image
            className="rounded-xl"
            src={prop.imageUrl}
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className="p-4 pl-0 flex-shrink-0">
          <h1 className="font-medium text-3xl">{prop.name}</h1>
          
          <div className="flex">
            <PhoneIcon className="text-gray-500 hover:text-gray-900 h-4 w-4 m-1" />
            <p className="mt-1 text-gray-500 text-sm">
              {prop.phone}
            </p>
          </div>
          <div className="flex">
            <AtSymbolIcon className="text-gray-500 hover:text-gray-900 h-4 w-4 m-1" />
            <p className="mt-1 text-gray-500 text-sm">
              {prop.email}
            </p>
          </div>
          

          
        </div>
        
          <div className="p-4 flex-shrink-0 ml-auto">
          <span className="inline-flex items-center">
               <StarIcon
                className="h-3 w-3 m-1 "
                 aria-hidden="true"
               />
                <span className="font-medium text-sm text-gray-500">
                  {prop.rating}/5
                   </span>
                </span>
          </div>
        
      </div>
      <div className="mt-3 pl-4">
        <div className="sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                // href={tab.href}
                onClick={() => handleTabClick(index)}
                className={classNames(
                  tab.current
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:text-gray-700",
                  "px-3 py-2 font-medium text-sm rounded-full"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {tabs[0].current && <Shirts prop1 = {services} prod = {shop.shirt} change={change}/>}
      {tabs[1].current && <Tops prop1 = {services} prod = {shop.top} change={change}/>}
      {tabs[2].current && <Bottoms prop1 = {services} prod = {shop.bottom} change={change}/>}
      {tabs[3].current && <Suits prop1 = {services} prod = {shop.suit} change={change}/>}
      {tabs[4].current && <Dressess prop1 = {services} prod = {shop.dress} change={change}/>}
      {tabs[5].current && <Children prop1 = {services} prod = {shop.child} change={change}/>}
      {tabs[6].current && <BedSheets prop1 = {services} prod = {shop.bedsheet} change={change}/>}
      
    </div>
  );
}
