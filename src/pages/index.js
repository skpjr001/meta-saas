import Head from 'next/head'
import Layout from '../Components/Layout'

export default function Home() {
  return (
    <Layout title="Meta Generator - Website Meta Tag Checker and Generator">
      
      <section className="overflow-hidden">
        <div className="p-3 sm:p-7 md:p-10 flex flex-row justify-end">
          <h1 className="pr-3 text-base font-semibold text-gray-700 hover:text-gray-400 cursor-pointer">Why Meta Tags?</h1>
          <h1 hidden className="pr-3 text-base font-semibold text-gray-700 hover:text-gray-400 cursor-pointer">About</h1>
        </div>
        <div className = "m-5 sm:m-8 md:m-10 flex flex-col items-center text-center">
          <div className="flex flex-col text-center">
            <a href='/' className="m-3 sm:m-5 md:mb-16">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl md:font-extrabold text-indigo-600">Meta Generator</h1>
              <p className="mt-4 text-lg font-normal sm:text-xl  md:text-2xl md:font-medium text-gray-400">Simply search and generate meta tags/data.</p>
            </a>
          </div>
          <div className="inline-flex h-10">
            <input id="input" type="text" placeholder="Website Address" className="w-56 md:w-96 pl-3 outline-none rounded-l-3xl border-2 hover:border-indigo-400 focus:border-indigo-600" />
            <a className="cursor-pointer bg-indigo-400 w-10 hover:bg-indigo-600">
              <svg className="mx-auto mt-2" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 28 27">
              <g fill="#FFF">
                <path d="M27.5 12.1L16.8 0.6C16.1 0 14.7-0.3 13.9 0.5 13.1 1.2 13.1 2.7 13.9 3.4L21.4 11.5 2 11.5C0.9 11.5 0 12.4 0 13.5 0 14.6 0.9 15.5 2 15.5L21.4 15.5 13.9 23.6C13.2 24.3 13.1 25.8 13.9 26.5 14.7 27.3 16.1 27 16.8 26.4L27.5 14.9C27.8 14.5 28 14 28 13.5 28 13 27.8 12.5 27.5 12.1Z"></path>
              </g>
            </svg>
            </a>
          </div>
          <p className="mt-2 text-base font-normal text-gray-400">Try on an example: <a className=" text-indigo-400 cursor-pointer  hover:text-indigo-600">Google.com</a></p>
        </div>
        <div className="absolute bottom-0 p-4 w-screen flex items-center justify-between  bg-gray-100">
          <div className="flex">
            <h1 className="pr-3 text-base font-semibold text-gray-700 hover:text-gray-400 cursor-pointer">About</h1>
            <h1 className="pl-3 pr-3 text-base font-semibold text-gray-700 hover:text-gray-400 cursor-pointer">Privacy Policy</h1>
          </div>
          <div className=" pr-3 text-base font-semibold text-gray-700 hover:text-gray-400 cursor-pointer">
            <h1>Desinged By: Pal Labs</h1>
          </div>
        </div>
      </section>
    </Layout>
  )
}
