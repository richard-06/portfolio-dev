import {
  FileOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
} from "@ant-design/icons";
import ghibli from "./assets/ghibli.jpg";

import { Nav } from "./Nav";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/skills" Component={Skills} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function About() {
  return <div> About</div>;
}
function Skills() {
  return <div> Skills</div>;
}
function Contact() {
  return <div> Contact</div>;
}

function Home() {
  // seperate
  function Icons({ children }) {
    return (
      <div className="bg-stone-300-500 flex h-10 w-10 rotate-20 cursor-pointer justify-center rounded-[10px] border text-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 hover:bg-amber-100">
        {children}
      </div>
    );
  }

  return (
    <div className="flex justify-between">
      <div className="mx-auto mt-[12%] mb-[12%] flex w-[45%] flex-col rounded-3xl border-2 border-amber-900 bg-amber-50 p-10">
        <div className="gradient-text gradient-text mb-[-10px] cursor-default text-5xl font-bold tracking-wider text-amber-400">
          Roshan
        </div>
        <div className="my-2 cursor-default text-4xl font-bold tracking-wider">
          Richard
        </div>
        <div className="mb-5 ml-1 h-3 w-[25%] bg-gradient-to-r from-amber-300 to-amber-500"></div>
        <div className="mt-10 ml-1 cursor-default text-2xl font-light">
          I am a Passionate <span className="font-bold">Full-Stack</span>
        </div>
        <div className="ml-1 cursor-default text-2xl font-bold">Developer.</div>
        <div className="mx-8 my-5 flex w-55 justify-evenly py-1">
          <Icons>
            <InstagramOutlined />
          </Icons>
          <Icons>
            <XOutlined />
          </Icons>
          <Icons>
            <LinkedinOutlined />
          </Icons>
          <Icons>
            <GithubOutlined />
          </Icons>
        </div>
        {/* <div className="relative mx-8 flex w-55 cursor-pointer justify-center rounded-[30px] border-2 border-amber-900 p-2 font-bold tracking-widest text-amber-900 transition-all duration-300 hover:border-amber-900 hover:bg-amber-300">
          <div className="absolute bottom-0.5 h-[100px] w-[100%] bg-red-500"></div>
          <div>
            <FileOutlined />
          </div>
          <div className="ml-2">View Resume</div>
        </div> */}
        <div className="group text-l relative z-10 mt-5.5 flex w-[40%] cursor-pointer justify-center rounded-3xl border-2 border-amber-900 bg-white font-bold text-amber-900">
          <div className="absolute z-1 h-[100%] w-0 rounded-[50px] bg-amber-600 opacity-0 transition-all duration-300 ease-out group-hover:w-[100%] group-hover:opacity-100"></div>
          <div className="z-10 self-center pl-1 transition-all duration-300 group-hover:text-white">
            <FileOutlined />
          </div>
          <div className="z-10 p-2 pl-1.5 transition-all duration-300 group-hover:text-white">
            View Resume
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-[40%]">
        {/* <img
          className="mt-50 h-30 w-[80%] justify-self-center rounded-2xl rounded-b-none border-white object-cover object-top transition-all hover:border"
          src={ghibli}
        />
        <img
          className="mt-2 h-30 w-[80%] justify-self-center border-white object-cover object-center transition-all hover:border"
          src={ghibli}
        />
        <img
          className="mt-2 h-30 w-[80%] justify-self-center rounded-2xl rounded-t-none border-white object-cover object-bottom transition-all hover:border"
          src={ghibli}
        /> */}
        <img
          className="h-[100%] w-[100%] justify-self-center border-white object-cover object-right transition-all hover:border"
          src={ghibli}
        />
      </div>
    </div>
  );
}

export default App;
