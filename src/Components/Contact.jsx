import React from "react";

function Contact() {
  return (
    <div
      className="text-justify bg-gradient-to-b from-[#0B0909] to-[#210141] text-white"
      id="contact">
      <div className="mx-3 lg:mx-8">
        <h1 className="py-2 font-extrabold text-3xl text-[#B0A593] ">
          GET IN TOUCH
        </h1>
        <p className="w-[full] my-8">
          Contact me If you’re looking for someone who can effectively advocate
          for your company and developers, create engaging content, and build
          strong tech communities. I’m excited to explore how I can contribute
          to your organization. Reach out to discuss how we can work together to
          achieve your goals.{" "}
          <a className="underline my-8" href="chidinmafavournwakor@gmail.com">
            chidinmafavournwakor@gmail.com
          </a>
        </p>
        <p className="text-sm">Developed by Chidinma Nwakor😍</p>
      </div>
    </div>
  );
}

export default Contact;
