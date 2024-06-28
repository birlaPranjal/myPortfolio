"use client";
import { CardStack, Card } from "@/components/ui/card-stack";
import { CERTIFICATES } from "../../public/data/certificate";

export function About() {
  const cards: Card[] = CERTIFICATES.map((certificate) => ({
    id: certificate.id,
    image: certificate.image.src,
  }));

  return (
    <div className="px-[5vw] w-[93vw] lg:px-0 overflow-hidden flex items-start justify-evenly flex-wrap glap-5 ">
      <div className=" md:w-2/5 lg:w-[55%] ">
        <div className="text-2xl font-bold mb-4">About Me</div>
        <div className="text-gray-400 px-4">
          Hi, I&apos;m Pranjal Birla, a passionate software developer specializing in
          MERN Stack.I&apos;m dedicated to continuous learning and exploring new
          technologies. Currently, I&apos;m diving deeper into AI and ML, exploring
          applications that leverage data to create intelligent solutions.
          <br />
          <br />
          Actively involved in the tech community, I enjoy participating in
          various tech events and hackathons, where I collaborate with peers to
          solve real-world problems. <br />
          <br />
          I have participated in 36-hour hackathons twice, honing my skills in
          rapid prototyping and teamwork under pressure. Beyond hackathons,{" "}
          <br />
          <br />
          Let&apos;s connect and explore how technology can drive innovation
          together!
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold my-4 md:my-0 md:mb-4 ">
          Certificates
        </div>
        <CardStack images={cards} offset={1} scaleFactor={0.1} />
      </div>
    </div>
  );
}
