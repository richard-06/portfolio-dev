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
      className="my-1.5 cursor-pointer rounded-xl px-2 py-0.5 text-xl transition-all duration-200 group-hover:text-purple-600 hover:bg-purple-100"
    >
      {children}
    </Link>
  );
}

export function Nav() {
  return (
    <div className="fixed bottom-0 left-[50%] z-50 w-[100%] translate-x-[-50%] sm:absolute sm:bottom-auto">
      <nav className="group mx-auto my-10 flex w-[80%] transform justify-evenly rounded-[35px] border bg-white transition-all duration-400 hover:scale-115 hover:border-purple-600 sm:w-[320px]">
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
