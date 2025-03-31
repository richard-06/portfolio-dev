import {
  BulbOutlined,
  HomeOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// import { useState } from "react";

function NavIcon({ children, link }) {
  return (
    <Link
      to={link}
      className="my-1.5 cursor-pointer rounded-xl px-1 py-0.5 text-2xl text-amber-900 transition-all duration-200 hover:bg-amber-200 hover:text-amber-600"
    >
      {children}
    </Link>
  );
}

export function Nav() {
  return (
    <div className="absolute left-[50%] w-[100%] translate-x-[-50%]">
      <nav className="mx-auto my-10 flex w-[29%] transform justify-evenly rounded-[35px] border-2 border-amber-900 bg-white transition-all duration-400 hover:scale-115">
        <NavIcon link="/">
          <HomeOutlined />
        </NavIcon>
        <NavIcon link="/about">
          <UserOutlined />
        </NavIcon>
        <NavIcon link="/skills">
          <BulbOutlined />
        </NavIcon>
        <NavIcon link="/contact">
          <PhoneOutlined />
        </NavIcon>
      </nav>
    </div>
  );
}
