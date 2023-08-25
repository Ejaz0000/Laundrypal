import ViewProfile from "../../components/profile/profile_view";
import {
  ArrowTrendingUpIcon,
  HomeIcon,
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

import { BsFillCaretDownFill as Upvote } from "react-icons/bs";
import { BsFillCaretUpFill as Downvote } from "react-icons/bs";

import { Button } from "@mui/material";
import Image from "next/image";
import { Input } from "@material-tailwind/react";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ViewProfilePage() {
  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className="lg:col-span-12 xl:col-span-10 border-l">
            <ViewProfile/>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}