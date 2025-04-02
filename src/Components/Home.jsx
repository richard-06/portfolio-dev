import ghibli from "../assets/ghibli.png";
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
      <div className="absolute top-0 left-0 mt-2 rounded-r-2xl border-2 border-l-0 border-red-500 bg-red-300 px-4 py-1 text-[1rem] font-bold text-white">
        {" "}
        Site Under Development
      </div>
      <div className="mx-auto mt-[12%] mb-[12%] flex w-[45%] flex-col rounded-3xl p-10">
        <div className="mb-[-10px] cursor-default text-7xl font-bold tracking-wider text-purple-500">
          Roshan
        </div>
        <div className="my-2 cursor-default text-5xl font-bold tracking-wider">
          Richard
        </div>
        <div className="mb-5 ml-1 h-3 w-[25%] bg-gradient-to-r from-purple-300 to-purple-500"></div>
        <div className="mt-6 ml-1 cursor-default text-2xl font-light">
          I am a Passionate <span className="font-bold">Full-Stack</span>
        </div>
        <div className="ml-1 cursor-default text-2xl font-bold">Developer.</div>
        <div className="my-7 flex w-55 justify-between">
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

        <div className="group text-l relative z-10 flex w-[40%] cursor-pointer justify-center rounded-3xl border border-purple-500 bg-white font-bold text-purple-500">
          <div className="absolute z-1 h-[100%] w-0 rounded-[50px] bg-purple-600 opacity-0 transition-all duration-300 ease-out group-hover:w-[100%] group-hover:opacity-100"></div>
          <div className="z-10 self-center pl-1 transition-all duration-300 group-hover:text-white">
            <FileOutlined />
          </div>
          <div className="z-10 p-2 pl-1.5 transition-all duration-300 group-hover:font-light group-hover:text-white">
            View Resume
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-[43%]">
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
      className="bg-stone-300-500 flex h-10 w-10 rotate-0 cursor-pointer justify-center rounded-[10px] border text-2xl transition-all duration-300 hover:scale-105 hover:rotate-20 hover:bg-purple-100"
    >
      {children}
    </div>
  );
}
