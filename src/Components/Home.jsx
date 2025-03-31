import ghibli from "../assets/ghibli.jpg";
import {
  FileOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
} from "@ant-design/icons";

export default function Home() {
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
          <Icons
            link={
              "www.instagram.com/roshxnrichard/?igsh=eHVzdndycnBjbmU%3D&utm_source=qr#"
            }
          >
            <InstagramOutlined />
          </Icons>
          <Icons link={"x.com/rich85742?s=21"}>
            <XOutlined />
          </Icons>
          <Icons link={"www.linkedin.com/in/roshan-richard-dinesh/"}>
            <LinkedinOutlined />
          </Icons>
          <Icons link={"github.com/richard-06"}>
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
        <img
          className="h-[100%] w-[100%] justify-self-center border-white object-cover object-right transition-all hover:border"
          src={ghibli}
        />
      </div>
    </div>
  );
}

function Icons({ children, link }) {
  return (
    <div
      onClick={() => {
        window.open(`https://${link}`, "_blank", "noopener,noreferrer");
      }}
      className="bg-stone-300-500 flex h-10 w-10 rotate-20 cursor-pointer justify-center rounded-[10px] border text-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 hover:bg-amber-100"
    >
      {children}
    </div>
  );
}
