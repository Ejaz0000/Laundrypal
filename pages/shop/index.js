import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import ViewShop from "../../components/xshop/shop_view";

import { useRouter } from "next/router";
import { useState } from "react";
import React, { useEffect } from "react";

import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
  InformationCircleIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";


import { Button } from "@mui/material";
import Image from "next/image";
import { Input } from "@material-tailwind/react";
import Calculate from "@/components/xshop/calculate";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: false },
  { name: "Tags", href: "/tags", icon: ArrowTrendingUpIcon, current: false },
  { name: "Users", href: "/users", icon: UserGroupIcon, current: true },
  {
    name: "Contact",
    href: "/contact",
    icon: ChatBubbleBottomCenterTextIcon,
    current: false,
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const communities = [
  { name: "React", href: "#" },
  { name: "Flutter", href: "#" },
  { name: "Next JS", href: "#" },
  { name: "Android", href: "#" },
  { name: "JavaScript", href: "#" },
  { name: "Java", href: "#" },
];

const quicklinks = [
  { name: "Facebook", href: "#" },
  { name: "Github", href: "#" },
  { name: "Twitter", href: "#" },
];





function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ShopPage() {
    const router = useRouter()
    const email = router.query.email
    
    const [agent, setAgent] = useState({});
    const [info, setInfo] = useState({
      service: "",
      product: "",
      total: 0,
      quantity:0
    });
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

    

  const change = (prop, prod, total , val) => {
    setInfo({
      ...info,
      
      service: prop,
      product: prod,
      total: total,
      quantity: val

    });
  };
  
  return (
    <>
      <div className="flex bg-indigo-600 min-h-full flex-col justify-between ">
        <div className="py-10 px-16">
          <div className="mx-8 grid  grid-cols-5 gap-4 px-8">
            
            <main className="col-span-3">
            <ViewShop prop = {agent} change={change}/>
            
            </main>
            <div className="col-span-2">
            <Calculate prop = {agent} values={info}/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
