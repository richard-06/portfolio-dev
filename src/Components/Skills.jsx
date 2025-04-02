import {
  CiOutlined,
  FieldTimeOutlined,
  GithubOutlined,
  InstagramOutlined,
  JavaOutlined,
  JavaScriptOutlined,
  LeftOutlined,
  PhoneOutlined,
  PythonOutlined,
  RightOutlined,
  ScanOutlined,
} from "@ant-design/icons";
import ghibli from "../assets/ghibli.jpg";
import chess from "../assets/chess.png";
import chess2 from "../assets/chess2.png";

import projects from "../data";

import { Button, Carousel } from "antd";
import { useRef } from "react";

export function Skills() {
  const carouselRef = useRef(null);
  return (
    // <div className="mt-10 flex h-[100vh] items-center justify-center">
    <div className="flex h-[100vh] items-center">
      <div className="mt-10 flex h-[60%] flex-1/2 flex-col pl-40">
        <div className="pb-3 text-3xl tracking-wide">
          My Technical <br /> Experience/Skills.
        </div>
        <div className="mb-5 h-[10px] w-[40%] bg-gradient-to-r from-amber-300 to-amber-500"></div>

        <div className="grid-rows- mt-3 inline-grid grid-cols-7 gap-5">
          <SkillIcons item={"CPP"} />
          <SkillIcons item={"Anaconda-Dark"} />
          <SkillIcons item={"HTML"} />
          <SkillIcons item={"CSS"} />
          <SkillIcons item={"JavaScript"} />
          <SkillIcons item={"Dart-Dark"} />
          <SkillIcons item={"Python-Light"} />
          <SkillIcons item={"Figma-Dark"} />
          <SkillIcons item={"Firebase-Light"} />
          <SkillIcons item={"Flutter-Dark"} />
          <SkillIcons item={"Git"} />
          <SkillIcons item={"Github-Dark"} />
          <SkillIcons item={"Notion-Dark"} />

          <SkillIcons item={"Remix-Dark"} />
          <SkillIcons item={"Solidity"} />
          <SkillIcons item={"TailwindCSS-Dark"} />
          <SkillIcons item={"Vite-Light"} />
          <SkillIcons item={"VSCode-Dark"} />
          <SkillIcons item={"React-Light"} />
        </div>
      </div>
      <div className="mt-10 h-[60%] flex-1/2">
        <div className="mx-auto w-[300px] self-center text-center text-2xl tracking-widest uppercase">
          Projects
        </div>

        <div className="flex items-center justify-center">
          <div
            onClick={() => {
              carouselRef.current.prev();
            }}
            className="w-20px mt-8 flex h-[60px] cursor-pointer items-center rounded-xl px-3 text-3xl transition-all duration-300 hover:bg-amber-100"
          >
            <LeftOutlined />
          </div>
          <Carousel ref={carouselRef} className="w-[350px]" infinite={false}>
            {projects.map((project) => (
              <CarouselItem project={project} />
            ))}
          </Carousel>
          <div
            onClick={() => {
              carouselRef.current.next();
            }}
            className="w-20px mt-8 flex h-[60px] cursor-pointer items-center rounded-xl px-3 text-3xl transition-all duration-300 hover:bg-amber-100"
          >
            <RightOutlined />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

function CarouselItem({ project = "ss" }) {
  return (
    <div>
      <h3 className="relative my-4 flex h-[480px] w-[350px] items-center justify-center">
        <div className="absolute bottom-0 z-20 mx-auto mb-8 flex w-[50%] cursor-pointer justify-center rounded-xl bg-black py-1 text-center text-white transition-all duration-300 group-hover:scale-115 hover:scale-105">
          <div>Open Project</div>
          <GithubOutlined className="self-centeralign-middle ml-2 text-xl" />
        </div>
        <div className="group flex h-[480px] w-[300px] flex-col rounded-xl border-[0.5px] bg-white text-sm transition-all duration-300 hover:scale-105">
          <div className="relative h-[35%]">
            <img
              src={chess2}
              className="mx-[4%] mt-[4%] h-[96%] w-[92%] rounded-2xl object-cover"
            />
          </div>
          <div className="h-[65%] p-1">
            <div className="mt-3 ml-[-4px] w-[95%] pt-1 pl-4 text-2xl font-bold">
              {project.name}
            </div>

            <div className="scrollbar-hide relative mt-1 overflow-auto pr-5 pl-3 text-justify transition-all duration-300">
              {project.content}
              <br /> <br />
              {""}
            </div>
            <div className="flex h-[30%] w-[100%] flex-wrap pr-2 pl-3">
              {project["tech"].map((item) => (
                <SkillIcons2 item={item} />
              ))}
            </div>
          </div>
        </div>
      </h3>
    </div>
  );
}

// function SkillIcon({ children }) {
//   return (
//     <div className="flex h-8 w-8 items-center justify-center rounded-[6px] border-1">
//       {children}
//     </div>
//   );
// }

function SkillIcons({ item }) {
  return <img src={`./${item}.svg`} alt={item} className="h-10 w-10" />;
}
function SkillIcons2({ item }) {
  return (
    <span className="mx-1 h-6 rounded-[6px] border border-amber-500 bg-amber-300 px-2 text-white">
      {item}
    </span>
  );
  // return <img src={`./${item}.svg`} alt={item} className="h-7 w-7" />;
}
