import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    Modal,
  Ripple,
  Datepicker,
  Input,
  initTE,
  } from "tw-elements";

  import {
    ArrowRightIcon,
    ShareIcon,
    StarIcon,
  
    
  } from "@heroicons/react/20/solid";

const Model = ({clientinfo, agent}) => {
  

  useEffect(() => {
    
      
      initTE({ Modal, Ripple, Datepicker, Input });
    
   
  }, []);

  const [client, setClient] = useState({});
  const [pickup, setpickup] = useState(null) 
  const [delivery, setdelivery] = useState(null);

  useEffect(() => {
    
      
    setClient(clientinfo)
  
 
}, [clientinfo]);

const acceptorder = async () => {
    
    const res2 = await fetch("/api/shops/acceptorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify({
          client : client.client,
          clientEmail : client.clientEmail,
          clientPhone : client.clientPhone,
          agent : agent.name,
          agentEmail : agent.email,
          pickup : pickup?.toISOString(),
          delivery : delivery?.toISOString(),
        }),
      });
  
      const data2 = await res2.json();
      
      if(res2.status === 200) {

        const res = await fetch("/api/clients/removeclient", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },  
          body: JSON.stringify({
            id : client._id,
            
          }),
        });
    
        const data = await res.json();

        if(res2.status === 200) {
        alert("Order Accepted");
        window.location.href = "/agent/";
        }
        else {
          alert(data.message);
        }
      } else {
        alert(data2.message);
      }
 
  };

  const handleDelivery = (date) => {
    setdelivery(date);
  };

  const handlePickup = (date) => {
    setpickup(date);
  };

  return (
    <>
    <div class="inline-flex ">
    <div className="mr-2"> 
    <button
    type="button"
    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    data-te-toggle="modal"
    data-te-target="#exampleModalCenteredScrollable"
    data-te-ripple-init
    data-te-ripple-color="light">
    Check order
    </button>
    </div>   
    <div> 
   <button
    type="button"
    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    data-te-toggle="modal"
    data-te-target="#exampleModalCenter"
    data-te-ripple-init
    data-te-ripple-color="light">
    Accept order
   </button>
   </div>
   </div>

    <div
  data-te-modal-init
  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModalCenteredScrollable"
  tabindex="-1"
  aria-labelledby="exampleModalCenteredScrollable"
  aria-modal="true"
  role="dialog">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
    <div
      class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalCenteredScrollableLabel">
          Order details
        </h5>
        
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      
      <div class="relative p-4">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    
                    <div className="flex-1 min-w-0">
                        <p classNamme="text-sm font-semibold text-gray-900 truncate dark:text-white">
                            Wash:
                        </p>
                        
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                    {client.forwash?.map((elements) => (
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
                    {client.fordryclean?.map((elements) => (
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
                    {client.foriron?.map((elements) => (
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
                    {client.forwashiron?.map((elements) => (
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
                    {client.fordryiron?.map((elements) => (
                           <div className="flex"><p className="font-medium mr-4">{elements.quantity} X {elements.product} = </p>${elements.total}</div>
                           
                           ))}  
                    </div>
                </div>
            </li>
            
            
        </ul>
      </div>

    
      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <p className="text-lg font-bold text-gray-900 truncate dark:text-white"> Total:
        </p>
        <div className="ml-2 text-lg font-bold text-gray-900 truncate dark:text-white">${client.cost}</div>
      </div>
    </div>
  </div>
</div>


<div
  data-te-modal-init
  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModalCenter"
  tabindex="-1"
  aria-labelledby="exampleModalCenterTitle"
  aria-modal="true"
  role="dialog">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
    <div
      class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalScrollableLabel">
          Accept order
        </h5>
        
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      
      <div class="relative p-4">
        <h2 className="mt-2 mb-6 text-xl font-semibold">Set up Dates</h2>
        <div className="inline-flex my-3">
        <p>Pickup date:</p>
        <DatePicker
            selected={pickup}
            onChange={(date) => handlePickup(date)}
            dateFormat="yyyy-MM-dd"
            />

         
        </div>

        <div className="inline-flex my-3">
        <p>Delivery date:</p>
        
        <DatePicker
            selected={delivery}
            onChange={(date) => handleDelivery(date)}
            dateFormat="yyyy-MM-dd"
            />

         
        </div>
      </div>

      
      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        
        <button
          type="button"
          class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={acceptorder}>
          Confirm
        </button>
      </div>
    </div>
  </div>
</div>

    
</> 

    
  );
};

export default Model;