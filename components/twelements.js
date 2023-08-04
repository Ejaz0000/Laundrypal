
import { useEffect } from "react";
import { useState } from "react";
import {
    Collapse,
    Input,
    initTE,
  } from "tw-elements";

  import {
    ArrowRightIcon,
    ShareIcon,
    StarIcon,
  
    
  } from "@heroicons/react/20/solid";

const Accordion = ({service , product, change}) => {
  const [number, setnumber] = useState();

  useEffect(() => {
    
      
      initTE({ Collapse});
    
   
  }, []);

  useEffect(() => {
      
    setnumber(service?.length)
    
  }, [service]);  

  return (

    <div id="accordionExample">
    
    {number === 1 && <Service1 prop = {service?.[0]} prod ={product} num={"One"} change={change}/>}
      {number === 2 && <Service2 prop = {service?.[0]} prop1={service?.[1]} prod ={product} change={change}/>}
      {number === 3 && <Service3 prop = {service?.[0]} prop1={service?.[1]} prop2={service?.[2]} prod ={product} change={change}/>}
      </div>
   
        

    
  );
};

const Service1 = ({prop , prod, num ,change}) => {
  useEffect(() => {
    
    
      initTE({ Collapse});
      initTE({ Input });
    
   
  }, []);
  
  const [total, setTotal] = useState(0);
  const [val, setval] = useState(0)

  useEffect(() => {
    let per = ""

    switch(prop) {
      case "Wash":
        per = prod?.wash
        break;
      case "Dry Clean":
        per = prod?.dryClean
        break;
      case "Ironing":
        per = prod?.iron
      break;
      default:
        per= "0" 
    }
    
    let con = parseInt(per, 10)
    setTotal(val*con)
  }, [val]);

  const handleInputChange = (e) => {
    change(prop , prod.name, total, val)
  };
  
  return (
    
  <div
    className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 className="mb-0" id="headingOne">
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target={`#collapse${num}`}
        aria-expanded="true"
        aria-controls={`collapse${num}`}>
        {prop}
        <span
          className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id={`collapse${num}`}
      className="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby={`heading${num}`}
      data-te-parent="#accordionExample">
      <div className="px-5 py-4">
        <div className=" inline-flex">
        <p>Number of <strong>{prod?.name}</strong> you want to {prop} :</p>
        <div class="relative ml-2 mb-4" data-te-input-wrapper-init>
            <input
              type="number"
              value={val}
              class="block w-16 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="exampleFormControlInputNumber"
              onChange={(e) => setval(e.target.value)}
              placeholder="Input Number" />
            
          </div>

          <div className="ml-16 font-semibold">
            Total: ${total}
          </div>
          </div>
          <div className="justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleInputChange}>
              ADD
            </button>
          </div>

          
      </div>
      
    </div>
  </div>

  

  );
};

const Service2 = ({prop, prop1, prod ,change}) => {
  useEffect(() => {
    
    
    initTE({ Collapse});
    initTE({ Input });
  
 
}, []);
  return (
    <>
     <Service1 prop = {prop} prod={prod} num={"One"} change={change}/>
    
     <Service1 prop = {prop1} prod={prod} num={"Two"} change={change}/>

     {prop1 === "Ironing" && <Servicejoin prop = {prop} prop1={prop1} prod={prod} num={"Three"} change={change}/>}

     
     </>
    
  );
};

const Servicejoin = ({prop, prop1, prod, num ,change}) => {
  useEffect(() => {
    
      
    initTE({ Collapse});
  
 
}, []);
 
const service = prop+prop1;
const [total, setTotal] = useState(0);
const [val, setval] = useState(0)

useEffect(() => {
  let p1 = parseInt(prod?.wash, 10)
  let p2 = parseInt(prod?.dryClean, 10)
  let p3 = parseInt(prod?.iron, 10)
  let per = 0
  switch(prop) {
    case "Wash":
      per = p1+p3
      break;
    case "Dry Clean":
      per = p2+p3
      break;
    default:
      per= "0" 
  }
  

  setTotal(val*per)
}, [val]);

const handleInputChange = (e) => {
  change(service , prod.name, total, val)
};


  return (
    <>
     <div
    className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 className="mb-0" id="headingOne">
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target={`#collapse${num}`}
        aria-expanded="true"
        aria-controls={`collapse${num}`}>
        {prop}&{prop1}
        <span
          className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id={`collapse${num}`}
      className="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby={`heading${num}`}
      data-te-parent="#accordionExample">
      <div className="px-5 py-4">
        <div className="inline-flex">
        <p>Number of <strong>{prod?.name}</strong> you want to {prop} and {prop1} :</p>
        <div class="relative ml-2 mb-4" data-te-input-wrapper-init>
            <input
              type="number"
              value={val}
              class="block w-16 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="exampleFormControlInputNumber"
              onChange={(e) => setval(e.target.value)}
              placeholder="Input Number" />
            
          </div>

          <div className="ml-16 font-semibold">
            Total: ${total}
          </div>
          </div>

          <div className="justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleInputChange}>
              ADD
            </button>
          </div>


      </div>
    </div>
  </div>
    </>
    
  );
};

const Service3 = ({prop, prop1, prop2, prod, change}) => {
  useEffect(() => {
    
      
    initTE({ Collapse});
  
 
}, []);
  return (
   <>
  <Service1 prop = {prop} prod={prod} num={"One"} change={change}/>

  <Service1 prop = {prop1} prod={prod} num={"Two"} change={change}/>

  <Service1 prop = {prop2} prod={prod} num={"Three"} change={change}/>

  <Servicejoin prop = {prop} prop1={prop2} prod={prod} num={"Four"} change={change}/>

  <Servicejoin prop = {prop1} prop1={prop2} prod={prod} num={"Five"} change={change}/>
  </> 

  );
};

export default Accordion;