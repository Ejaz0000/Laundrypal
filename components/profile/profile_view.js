import Image from "next/image";
import React, { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import Link from "next/link";
import { useState } from "react";
import ProfileEdit from "./profile_edit";
import { useRouter } from "next/router";

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

    return (
        <div>
            <div className="flex p-4">
                <div>
                    <h1 className="text-2xl mb-2">Stats</h1>
                    <div className="border rounded px-4 py-2 mt-4">
                        <div className="flex space-x-10">
                            <div>
                                
                                <h3 className="font-bold text-lg">City</h3>
                                <h2 className="text-center font-medium">{user.city}</h2>
                            </div>
                            <div>
                                
                                <h3 className="font-bold text-lg">Location</h3>
                                <h2 className="text-center font-medium">{user.location}</h2>
                            </div>
                        </div>
                        <div className="flex space-x-10 mt-4">
                            <div>
                                
                                <h3 className="font-bold text-lg">Email</h3>
                                <h2 className="text-center font-medium">
                                    {user.email}
                                </h2>
                            </div>
                            <div>
                                
                                <h3 className="font-bold text-lg">Phone</h3>
                                <h2 className="text-center font-medium">{user.phone}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">

                </div>

            </div>
        </div>
    );
};

export default function ViewProfile() {
    const router = useRouter();

    const [tabs, setTabs] = useState([
        { name: "Profile", href: "#", current: true },
        { name: "Settings", href: "#", current: false },
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
    const [user, setUser] = useState({});
    useEffect(() => {
        const usr = localStorage.getItem("loggedInUser");
        if (usr) {
            setIsLoggedIn(true);
            setUser(JSON.parse(usr));
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    function getDurationString(dateString) {
        const startDate = new Date(dateString);
        const endDate = new Date();
        const diffTime = Math.abs(endDate - startDate);
        const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
        const diffMonths = Math.floor(
            (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
        );

        return `Member for ${diffYears} years, ${diffMonths} months`;
    }

    return (
        <div>
            <div className="flex border-b justify-between ">
                <div className="p-4 flex-shrink-0">
                    <Image
                        className="rounded-xl"
                        src={user.imageUrl}
                        width={150}
                        height={150}
                        alt=""
                    />
                </div>
                <div className="p-4 pl-0 flex-shrink-0">
                    <h1 className="font-medium text-3xl">{user.name}</h1>
                    <h1 className="my-2 font-light text-2xl">{user.title}</h1>
                    <div className="flex">
                        <CakeIcon className="text-gray-500 hover:text-gray-900" />
                        <p className="mt-1 ml-2 text-gray-500">
                            {getDurationString(user.createdAt)}
                        </p>
                    </div>

                    <div className="flex space-x-2 mt-2 items-center">
                        <Link
                            href={user.facebook ? user.facebook : ""}
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link
                            href={user.twitter ? user.twitter : ""}
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link
                            href={user.github ? user.github : ""}
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link
                            href="#"
                            className="pb-1 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <LocationOnIcon fontSize="small" />
                            {user.location}
                        </Link>
                    </div>
                </div>
                {isLoggedIn ? (
                    <div className="p-4 flex-shrink-0 ml-auto">
                        <button
                            type="button"
                            onClick={() => handleTabClick(1)}
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Edit Profile
                        </button>
                    </div>
                ) : (
                    <div className="p-4 flex-shrink-0 ml-auto"></div>
                )}
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
            {tabs[0].current && <ProfileInfo />}
            {tabs[1].current && <ProfileEdit />}
        </div>
    );
}