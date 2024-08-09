import { Icon } from "@iconify/react";
import photo1 from "../assets/images/team/african-5505598_1920.jpg";
import photo2 from "../assets/images/team/fashion-1835871_1920.jpg";
import photo3 from "../assets/images/team/girl-4664440_1920.jpg";
import photo4 from "../assets/images/team/african-5505598_1920.jpg";
import photo5 from "../assets/images/team/african-5505598_1920.jpg";
import photo6 from "../assets/images/team/african-5505598_1920.jpg";
import photo7 from "../assets/images/team/african-5505598_1920.jpg";
import photo8 from "../assets/images/team/african-5505598_1920.jpg";
import { Link } from "react-router-dom";

const teams = [
  {
    member: "Makeda",
    funct: "Web developer",
    facebook: "https://www.facebook.com/makeda.banza.9/",
    twitter: "https://x.com/MakBanza16",
    linkedIn: "https://www.linkedin.com/in/makeda-banza-ba33b9248/",
    date: "20121031",
    photo: photo1,
  },
  {
    member: "Judith",
    funct: "Google developer",
    facebook: "/",
    twitter: "/",
    linkedIn: "/",
    date: "20111231",
    photo: photo2,
  },
  {
    member: "John",
    funct: "Web designer",
    facebook: "/",
    twitter: "/",
    linkedIn: "/",
    date: "20240322",
    photo: photo3,
  },
  {
    member: "Graceful",
    funct: "Web developer",
    facebook: "/",
    twitter: "/",
    linkedIn: "/",
    date: "20121031",
    photo: photo4,
  },
  {
    member: "Ruth",
    funct: "Google developer",
    facebook: "/",
    twitter: "/",
    linkedIn: "/",
    date: "20111231",
    photo: photo5,
  },
  {
    member: "Ackeem",
    funct: "Web designer",
    facebook: "/",
    twitter: "/",
    linkedIn: "/",
    date: "20240322",
    photo: photo6,
  },
  {
    member: "Paulin",
    funct: "Web developer",
    facebook: "/",
    twitter: "/",
    linkedIn: "/",
    date: "20121031",
    photo: photo7,
  },
  {
    member: "Jenifer",
    funct: "Google developer",
    facebook: "/",
    twitter: "/",
    linkedIn: "/",
    date: "20111231",
    photo: photo8,
  },
];

function TeamMember({ member }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-80 h-96 overflow-hidden rounded-xl">
        <img
          className="object-cover h-full w-full"
          src={member.photo}
          alt="Profil member"
        />
      </div>
      <div className="pt-4">
        <h3 className="font-medium text-xl font-poppins  text-center">
          {member.member}
        </h3>
        <p className=" font-poppins text-sm text-center">
          {member.funct}
        </p>
      </div>
      <div className="flex flex-row">
        <Link to={member.facebook} target="_blank" rel="noopener noreferrer">
          <Icon className=" mt-2 w-8 h-8" icon="mdi:facebook" />
        </Link>
        <Link to={member.twitter} target="_blank" rel="noopener noreferrer">
          <Icon className=" mt-2 w-8 h-8" icon="mdi:twitter" />
        </Link>
        <Link to={member.linkedIn} target="_blank" rel="noopener noreferrer">
          <Icon className=" mt-2 w-8 h-8" icon="mdi:linkedin" />
        </Link>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="flex flex-col w-[90%] mx-auto space-y-10">
      <div className="flex flex-col space-y-4">
        <p className="font-poppins text-3xl text-center font-medium">
          Notre équipe
        </p>
        <p className="font-poppins text-md mx-auto text-center lg:w-1/3">
        Notre équipe est composée de professionnels dévoués dans le domaine de l'assistance sociale, du droit, et de la communication.
        </p>
      </div>
      <div>
        <div className="grid lg:grid-cols-4 gap-10">
          {teams.map((data, index) => (
            <TeamMember key={index} member={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
