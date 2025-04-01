import {
  CiOutlined,
  FieldTimeOutlined,
  InstagramOutlined,
  JavaOutlined,
  JavaScriptOutlined,
  LeftOutlined,
  PhoneOutlined,
  PythonOutlined,
  RightOutlined,
  ScanOutlined,
} from "@ant-design/icons";
import { Button, Carousel } from "antd";
import { useRef } from "react";

export function Skills() {
  const carouselRef = useRef(null);
  return (
    <div className="mt-10 flex h-[100vh] items-center justify-center">
      <div className="mr-10 flex h-[75vh] w-[590px] flex-col rounded-3xl border-2 border-amber-900 bg-amber-50 px-10 pt-10">
        <div className="flex-1/3">
          <div className="text-2xl font-bold">Skills</div>
          <div className="h-[3px] w-[100%] bg-gradient-to-r from-amber-300 to-amber-500"></div>

          <div className="mt-3 inline-grid grid-cols-5 grid-rows-2 gap-3">
            <SkillIcon>
              <JavaScriptOutlined />
            </SkillIcon>
            <SkillIcon>
              <JavaOutlined />
            </SkillIcon>
            <SkillIcon>
              <ScanOutlined />
            </SkillIcon>
            <SkillIcon>
              <InstagramOutlined />
            </SkillIcon>
            <SkillIcon>
              <JavaOutlined />
            </SkillIcon>
            <SkillIcon>
              <FieldTimeOutlined />
            </SkillIcon>
            <SkillIcon>
              <PhoneOutlined />
            </SkillIcon>
            <SkillIcon>
              <CiOutlined />
            </SkillIcon>
            <SkillIcon>
              <JavaOutlined />
            </SkillIcon>
            <SkillIcon>
              <JavaOutlined />
            </SkillIcon>
            <SkillIcon>
              <PythonOutlined />
            </SkillIcon>
          </div>
        </div>
        <div className="flex-1/2">
          <div className="text-2xl font-bold">Projects</div>
          <div className="h-[3px] w-[100%] bg-gradient-to-r from-amber-300 to-amber-500"></div>

          <div className="flex items-center justify-center">
            <div
              onClick={() => {
                carouselRef.current.prev();
              }}
              className="w-20px mt-8 flex h-[60px] cursor-pointer items-center rounded-xl px-3 text-3xl transition-all duration-300 hover:bg-amber-100"
            >
              <LeftOutlined />
            </div>
            <Carousel ref={carouselRef} className="w-[250px]" infinite={false}>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
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
    </div>
  );
}

function CarouselItem() {
  return (
    <div>
      <h3 className="mt-8 flex h-[230px] w-[250px] items-center justify-center">
        <div className="flex h-[230px] w-[180px] flex-col rounded-xl border-2 border-amber-900 text-sm">
          <div className="h-[35%] bg-amber-100"></div>
          <div className="h-[65%] p-1">
            <div className="my-1 ml-[-4px] w-[70%] rounded-r-xl bg-amber-400 py-1 pl-2 font-bold">
              The chess
            </div>
            <div>
              The chess was the mss ffeef fw fwef fwfaa fafa fafa fafefw efewa
              faewff fafe
            </div>
          </div>
        </div>
      </h3>
    </div>
  );
}

function SkillIcon({ children }) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-[6px] border-1">
      {children}
    </div>
  );
}
