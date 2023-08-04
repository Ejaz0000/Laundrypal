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

const ProfileInfo = () => {
  const tabs = [
    { name: "New", href: "#", current: true },
    { name: "Old", href: "#", current: false },
    { name: "Rep", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const usr = localStorage.getItem("loggedInUser");
    if (usr) {
      setIsLoggedIn(true);
      setUser(JSON.parse(usr));
    } else {
      setIsLoggedIn(false);
    }
    const tempFunc = async () => {
      const res = await fetch("/api/user/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        localStorage.setItem("loggedInUser", JSON.stringify(data));
      }
    };
    tempFunc();
  }, [user.username]);
  const [trquestions, setTrQuestions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {

      const res = await fetch("/api/question/get_question_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setTrQuestions(data);
      }
    };
    fetchData();
  }, [user]);
  function getDate(datetime) {
    const date = new Date(parseInt(datetime));
    const options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  }
  return (
    <div>
      <div className="flex p-4">
        <div>
          <h1 className="text-2xl mb-2">Stats</h1>
          <div className="border rounded px-4 py-2 mt-4">
            <div className="flex space-x-10">
              <div>
                <h1 className="text-center font-medium">{user.reputation}</h1>
                <h3>reputation</h3>
              </div>
              <div>
                <h1 className="text-center font-medium">{user.views}</h1>
                <h3>views</h3>
              </div>
            </div>
            <div className="flex space-x-10 mt-4">
              <div>
                <h1 className="text-center font-medium">
                  {user.questionCount}
                </h1>
                <h3>questions</h3>
              </div>
              <div>
                <h1 className="text-center font-medium">{user.answerCount}</h1>
                <h3>answers</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10">
          <h1 className="text-2xl mb-2">About</h1>
          <h3>{user.bio}</h3>
        </div>
      </div>
      <div className=" bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Top Questions
            </h3>
          </div>
          {/* <div className="ml-4 mt-2 flex-shrink-0">
            <div className="hidden sm:block">
              <nav
                className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
                aria-label="Tabs"
              >
                {tabs.map((tab, tabIdx) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700",
                      tabIdx === 0 ? "rounded-l-lg" : "",
                      tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                      "group relative min-w-0 flex-1 overflow-hidden bg-white py-2 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    <span>{tab.name}</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        tab.current ? "bg-indigo-500" : "bg-transparent",
                        "absolute inset-x-0 bottom-0 h-0.5"
                      )}
                    />
                  </a>
                ))}
              </nav>
            </div>
          </div> */}
        </div>
        <div>
          <ul role="list" className="space-y-2 mt-2">
            {trquestions && trquestions.slice(0,5).map((question) => (
              <li
                key={question._id}
                className="bg-white px-4 py-2 shadow sm:rounded-lg sm:p-2"
              >
                <div className="grid grid-cols-12 text-sm">
                  <h1 className="col-span-1 rounded bg-blue-400 text-white text-center">
                    {question.vote}
                  </h1>
                  <Link className="ml-2 col-span-9" href={"/question/view/"+question.post_id} >
                  <h1 >{question.title}</h1></Link>
                  <h1 className="ml-4 col-span-2">
                    {getDate(question.date)}
                  </h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


const Shirts =({prop1, prod}) => {

  

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
                            T-Shirt
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $1
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Polo Shirt
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Shirt
                        </p>
                        
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $6
                    </div>
                </div>
            </li>
            
            
        </ul>
   </div>
</div>

<div>
<DynamicComponents service={prop1} product= {prod}/>
</div>

</div>

);

};

export default function ViewShop({prop}) {
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
      
      {tabs[0].current && <Shirts prop1 = {services} prod = {shop.shirt}/>}
      {tabs[1].current && <ProfileActivity />}
      {tabs[2].current && <ProfileSave />}
      {tabs[3].current && <ProfileEdit />}
    </div>
  );
}
