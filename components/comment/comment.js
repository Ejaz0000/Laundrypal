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

export default function Comment({prop , client}) {
    
    const [comments, setComments] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          
          const res2 = await fetch("/api/shops/getcomment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: prop.email,
      
            }),
          });
          const data2 = await res2.json();
          console.log(data2);
          if(res2.status === 200) {
            setComments(data2)
            console.log(data2)
            
          }
        };
        fetchData();
      }, [prop]);

    const handlesubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/shops/addcomment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },  
          body: JSON.stringify({
            client: client.name,
            clientEmail: client.email,
            agent: prop.email,
            comment: e.target.body.value,
            
          }),
        });
        const data = await res.json();
        console.log(data);
        if(res.status === 200) {
            const fetchData = async () => {
          
                const res2 = await fetch("/api/shops/getcomment", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: prop.email,
            
                  }),
                });
                const data2 = await res2.json();
                console.log(data2);
                if(res2.status === 200) {
                  setComments(data2)
                  console.log(data2)
                  
                }
              };
              fetchData();
          
        } else {
          alert(data.message);
        }
      };


     return(
        <>
        <div class="w-full bg-white rounded-lg border p-2 my-4 mx-5">

<h3 class="font-bold">Discussion</h3>

<form method="POST" onSubmit={handlesubmit}>

    <div class="flex flex-col">

    {comments && comments.map((comment, index) => (


            <div class="border rounded-md p-3 ml-3 my-3" key={index}>
            <div class="flex gap-3 items-center">

            <Image
                className="object-cover w-8 h-8 rounded-full 
                border-2 border-emerald-400  shadow-emerald-400"
                src={"/images/user.jpg"}
                alt=""
                height={1000}
                width={1000}
                            />

                <h3 class="font-bold">
                    {comment.client}
                </h3>
            </div>


            <p class="text-gray-600 mt-2">
             {comment.comment}
            </p>

            </div>


    ))}

        





    </div>



    <div class="w-full px-3 my-2">
        <textarea
            class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body" placeholder='Type Your Comment' required></textarea>
    </div>

    <div class="w-full flex justify-end px-3">

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Post
            </button>
    </div>

   
</form>


</div>
        </>
     );
  }