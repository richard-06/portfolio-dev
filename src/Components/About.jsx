import { UserOutlined } from "@ant-design/icons";

export function About() {
  return (
    <div className="mt-10 flex h-[100vh] items-center justify-center">
      <div className="mr-10 h-[75vh] w-[490px] rounded-3xl border-2 border-amber-900 bg-amber-50 px-10 pt-10">
        <div className="mb-10 w-25 rounded bg-amber-900 text-center text-white">
          <UserOutlined /> About me
        </div>
        <div className="text-4xl">Full-Stack</div>
        <div className="gradient-text mt-[-6px] text-4xl">Developer</div>
        <div className="mt-1 text-3xl">
          Based In <span className="font-bold">UK.</span>
        </div>
        <div className="mt-3 mb-6 h-2 w-[35%] bg-gradient-to-r from-amber-300 to-amber-500"></div>
        <div className="text-justify">
          I am a self-taught Full-Stack Developer currently living in United
          kingdom. Currently with an year of experience in different technoloies
          which i learnt through building several projects and still learning. I
          am very compfortable with adapting to new software and technoloies.
          With a strong passion for innovation and a keen eye for detail, I'm
          confident in my ability to collaborate with cross-functional teams,
          drive projects forward and deliver high quality results
        </div>
      </div>
      <div className="h-[75vh] w-[300px] rounded-3xl border-2 border-amber-900 bg-amber-50 px-10 pt-10">
        <div className="text-2xl">Nationality</div>
        <div className="h-[3px] w-[100%] bg-gradient-to-r from-amber-300 to-amber-500"></div>
        <div className="mt-2 mb-4">
          <Bullet item={"Indian"} />
        </div>
        <div className="text-2xl">Languages</div>
        <div className="h-[3px] w-[100%] bg-gradient-to-r from-amber-300 to-amber-500"></div>
        <div className="mt-2 mb-4">
          <Bullet item={"English"} />
          <Bullet item={"Tamil"} />
          {/* <Bullet item={""} /> */}
        </div>
        <div className="text-2xl">Hobbies</div>
        <div className="h-[3px] w-[100%] bg-gradient-to-r from-amber-300 to-amber-500"></div>
        <div className="mt-2">
          <Bullet item={"Building small full-stack side projects"} />
          <Bullet item={"Exploring new web frameworks and design tools"} />
          <Bullet item={"Puzzle Solving / Logic Games"} />
          <Bullet item={"Reading latest tech news"} />
          <Bullet item={"Taking on small freelancing projects"} />
        </div>
      </div>
    </div>
  );
}

function Bullet({ item }) {
  return (
    <div className="flex">
      <div className="mt-[10px] mr-2 flex h-5 flex-1/8 justify-end self-start">
        <div className="h-[8px] w-[8px] rounded-2xl border-1"></div>
      </div>
      <div className="text-l flex-7/8 font-light">{item}</div>
    </div>
  );
}
