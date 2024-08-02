import React from "react";
import MyPicture from "../Images/MyPicture3.JPG";
import { Link } from "react-router-dom";
function Experience() {
  return (
    <div className="px-4 py-2 bg-zinc-200">
      <h1 className="flex justify-center font-extrabold text-5xl my-12">
        Experience
      </h1>
      <div className="flex justify-between">
        <section>
          <Link to="writing">
            <div className="">
              <img
                className="outline-none rounded-2xl"
                src={MyPicture}
                alt=""
                width={"85%"}
                height={"50%"}></img>
              <div className="">
                <h1 className="font-extrabold flex justify-center">
                  Technical Writing
                </h1>
                <p className="text-justify mr-6 my-2 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores delectus mollitia facere ipsum sapiente saepe ut ea a
                  odio, adipisci quisquam atque nulla in laborum inventore
                  aliquam cum quasi temporibus.
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section>
          <Link to="video">
            <div className="">
              <img
                className="outline-none rounded-2xl"
                src={MyPicture}
                alt=""
                width={"85%"}
                height={"100%"}></img>
              <div className="">
                <h1 className="font-extrabold flex justify-center">
                  Video Contents
                </h1>
                <p className="text-justify mr-6 my-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores delectus mollitia facere ipsum sapiente saepe ut ea a
                  odio, adipisci quisquam atque nulla in laborum inventore
                  aliquam cum quasi temporibus.
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section>
          <Link to="spaces">
            <div className="">
              <img
                className="outline-none rounded-2xl"
                src={MyPicture}
                alt=""
                width={"85%"}
                height={"100%"}></img>
              <div className="">
                <h1 className="font-extrabold flex justify-center">Spaces</h1>
                <p className="text-justify mr-6 my-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores delectus mollitia facere ipsum sapiente saepe ut ea a
                  odio, adipisci quisquam atque nulla in laborum inventore
                  aliquam cum quasi temporibus.
                </p>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Experience;
