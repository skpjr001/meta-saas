import React, {useState} from 'react'
import Link from 'next/link'
export default function Header({headerBar}) {

  return (
    <>
    {headerBar=="true"
      ?<HeaderBar/>
      :<div className="pt-3 sm:pt-7 sm:pr-7 flex flex-row justify-end">
        <Link href="/"><a><h1 className="pr-3 text-base font-semibold text-gray-700 hover:text-gray-400 cursor-pointer">Why Meta Tags?</h1></a></Link>
        <Link href="/about"><a><h1 hidden className="pr-3 text-base font-semibold text-gray-700 hover:text-gray-400 cursor-pointer">About</h1></a></Link>
      </div>
    }
    </>
  )

  function HeaderBar(){
    const [address, setAddress] = useState("");
    const example = "Google.com"

    const submitOnEnter = (e) => {
      if(e.keyCode == 13){
        setAddress(address.length>3? address : "figma.com")
        document.getElementById("inputButton").click();
      
      }
    }

    const handleAddress = (e) => {
      setAddress(e.target.value);
    }

    return(
      <div className="mt-8 flex flex-col items-center sm:flex-row justify-evenly">
        <Link href="/"><a><h1 className="font-bold text-4xl p-3 sm:text-6xl text-indigo-600">Meta Tags</h1></a></Link>
        <div className="inline-flex h-8 sm:h-10">
          <input id="input" type="text" placeholder="Website Address" value={address} className="w-44 md:w-56 pl-3 outline-none rounded-l-3xl border-2 hover:border-indigo-400 focus:border-indigo-600" onChange={handleAddress} onKeyDown={(e)=>submitOnEnter(e)} />
          <Link href={"/meta?url="+address}><a type="button" id="inputButton" className="cursor-pointer bg-indigo-400 w-10 hover:bg-indigo-600">
            <svg className="mx-auto mt-1 sm:mt-2" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 28 27">
            <g fill="#FFF">
              <path d="M27.5 12.1L16.8 0.6C16.1 0 14.7-0.3 13.9 0.5 13.1 1.2 13.1 2.7 13.9 3.4L21.4 11.5 2 11.5C0.9 11.5 0 12.4 0 13.5 0 14.6 0.9 15.5 2 15.5L21.4 15.5 13.9 23.6C13.2 24.3 13.1 25.8 13.9 26.5 14.7 27.3 16.1 27 16.8 26.4L27.5 14.9C27.8 14.5 28 14 28 13.5 28 13 27.8 12.5 27.5 12.1Z"></path>
            </g>
            </svg>
          </a></Link>
        </div>
      </div>
    )
  }
}


