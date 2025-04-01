import { Input } from "antd";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div className="flex h-[85vh] items-center justify-center sm:h-[100vh]">
      <div className="rounded-lg border-[0.5px] border-stone-500 py-5 pb-0">
        <form className="px-5">
          <div className="text-2xl">Send me a mail.</div>

          <div className="mt-2 w-[300px] text-[12px]">Name</div>
          <textarea
            rows={1}
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full resize-none rounded-md border-[0.5px] border-stone-400 bg-white px-2 py-2 text-sm shadow-[6px_5px_0px_rgba(0,0,0,1)] focus:outline-none"
          />
          <div className="mt-2 text-[12px]">Email</div>
          <textarea
            placeholder="Enter your mail"
            rows={1}
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            className="mt-1 w-full resize-none rounded-md border-[0.5px] border-stone-400 bg-white px-2 py-2 text-sm shadow-[6px_5px_0px_rgba(0,0,0,1)] focus:outline-none"
          />
          <div className="mt-2 text-[12px]">Your Message</div>

          <textarea
            onChange={(e) => setMsg(e.target.value)}
            rows={4}
            value={msg}
            placeholder=" Enter your message"
            className="mt-1 w-full resize-none rounded-md border-[0.5px] border-stone-400 bg-white px-2 py-1 text-sm shadow-[6px_5px_0px_rgba(0,0,0,1)] focus:outline-none"
          />
        </form>

        <div className="mx-20 my-4 cursor-pointer rounded-xl bg-black py-2 text-center text-white transition-all duration-300 hover:scale-105">
          Submit
        </div>
      </div>
    </div>
  );
}
