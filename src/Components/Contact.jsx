import React from "react";
import Navbar from "./Navbar";
import GithubSvg from "../Svg_File/GithubLogoSvg.svg";
import linkedin from "../Svg_File/linkedInSvg.svg";
import email from "../Svg_File/email-files-letter.svg";
import instagramSvg from "../Svg_File/instagram-1-svgrepo-com.svg";
import locationSvg from "../Svg_File/location.svg";
import emailjs from "emailjs-com";
const Contact = () => {
  function sendData(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ydfs0am",
        "template_3cd45lw",
        e.target,
        "lzGMDBvi2naPnxELZ"
      )
      .then((result) => {
        console.log("message has been sent", result.text);
      })
      .catch((error) => {
        console.error(error.text);
      });
    e.target.reset();
  }
  return (
    <div>
      <section
        className="w-full h-full py-5 px-9 text-black"
        style={{ background: "var(--bgColor)" }}
      >
        <Navbar />
        <div>
          <h1 className="font-black text-6xl dShadow  pt-9 text-center text-black pb-11">
            Contact
          </h1>
        </div>
        <div className="flex justify-around max-md:flex-col-reverse max-md:gap-9">
          {/* left------Section */}
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-4">
              <img src={GithubSvg} alt="" />
              <div>
                <h1 className="text-xl">Github</h1>
                <a
                  href="https://github.com/Vishal-gitthub"
                  target="_blank"
                  className="text-gray-600 hover:text-black"
                >
                  @Vishal-gitthub
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={linkedin} alt="" />
              <div>
                <h1 className="text-xl">LinkedIn</h1>
                <a
                  href="https://www.linkedin.com/in/vishal-sharma-426018244/"
                  target="_blank"
                  className="text-gray-600 hover:text-black"
                >
                  @VishalSharma
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={email} alt="" />
              <div>
                <h1 className="text-xl">Email</h1>
                <a
                  href="mailto:vssv8808@gmail.com"
                  className="text-gray-600 hover:text-black"
                >
                  vssv8808@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={instagramSvg} alt="" />
              <div>
                <h1 className="text-xl">Instagram</h1>
                <a
                  href="https://www.instagram.com/vishu_._x?igsh=MWVjcThseXplaHExaw=="
                  target="_blank"
                  className="text-gray-600 hover:text-black"
                >
                  vishal sharma
                </a>
              </div>
            </div>
          </div>

          {/* Right----section */}
          <form onSubmit={sendData}>
            <div>
              <input
                type="text"
                name="to_name"
                className="hidden"
                value="Vishal"
                id="myName"
              />
              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-4 max-md:flex-col max-md:items-center max-md:w-full">
                  <div className="bg-pink-300 px-4 py-2 rounded-md max-md:w-full">
                    <div>Name</div>
                    <input
                      type="text"
                      name="from_name"
                      className="bg-pink-300 outline-0 w-full"
                    />
                  </div>

                  <div className="bg-pink-300 px-4 py-2 rounded-md max-md:w-full">
                    <div>Email</div>
                    <input
                      type="email"
                      name="email"
                      className="bg-pink-300 outline-0 w-full"
                    />
                  </div>
                </div>

                <div className="bg-pink-300 px-4 py-2 rounded-md w-full">
                  <div>Project</div>
                  <input
                    type="text"
                    name="project"
                    className="bg-pink-300 outline-0 w-full"
                  />
                </div>

                <div className="bg-pink-300 px-4 py-2 rounded-md w-full">
                  <textarea
                    name="discription"
                    id=""
                    className="my-4 w-full bg-pink-300 outline-0 placeholder-black h-36"
                    placeholder="Write Your Message..."
                  ></textarea>
                </div>
              </div>

              <button className="SecButton mt-4" type="submit">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color="rgb(202, 255, 185)"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      />
                    </svg>
                  </div>
                </div>
                <span style={{ color: "rgb(202, 255, 185)" }}>Send</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
