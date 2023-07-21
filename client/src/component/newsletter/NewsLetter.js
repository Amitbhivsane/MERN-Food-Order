import React from "react";
import "./Newslette.css";
import { AiOutlineSend } from "react-icons/ai";
import newsletterIllustration from "../../assets/get-newsletter-updates.svg";
const NewsLetter = () => {
  return (
    <section id="contacts" className="container-n">
      <div className={"wrapper-n"}>
        <h4 className={"subtitle-n"}>Get our latest offers</h4>
        <h2 className={"title-n"}>Newsletter</h2>
        <div className={"inputContainer-n"}>
          <input type="text" placeholder="Enter email..." />
          <AiOutlineSend className={"sendIcon-n"} />
        </div>
        <img src={newsletterIllustration} className={"illustration-n"} alt="" />
      </div>
    </section>
  );
};

export default NewsLetter;
