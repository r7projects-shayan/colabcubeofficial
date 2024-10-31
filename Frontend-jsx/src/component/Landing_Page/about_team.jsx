import React from "react";

const contributor = [
  {
    url: "https://images.unsplash.com/photo-1544502062-f82887f03d1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxtYW4lMjBzaWxob3VldHRlfGVufDB8MHwwfHx8MA%3D%3D",
    title: "Shayan Chakraborty",
    text: "FullStack Developer, Founder",
  },
  {
    url: "https://images.unsplash.com/photo-1707025204723-27d332fc36ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMHNpbGhvdWV0dGV8ZW58MHx8MHx8fDA%3D",
    title: "Diwakar Mainali",
    text: "CEO",
  },
  {
    url: "https://images.unsplash.com/photo-1646815211206-fd63cefe10d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwc2lsaG91ZXR0ZXxlbnwwfDB8MHx8fDA%3D",
    title: "Ayesha Virk",
    text: "Backend Developer, Tech Lead",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1710516467061-34638f713abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWFuJTIwc2lsaG91ZXR0ZXxlbnwwfDB8MHx8fDA%3D",
    title: "Anwesha Das",
    text: "Frontend Lead, FullStack Developer",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661927982818-9f7ea45c45ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwc2lsaG91ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Noman Mazhar",
    text: "AIML Developer, Generative AI Specialist",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1664461663120-b39152ba92ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHdvbWFuJTIwc2lsaG91ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Apurva Kanth",
    text: "Frontend Developer",
  },
  {
    url: "https://images.unsplash.com/photo-1629997383348-4cafdec32fd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMHNpbGhvdWV0dGV8ZW58MHwwfDB8fHww",
    title: "William Ikeji",
    text: "Blockchain Developer, Web3 Lead",
  },
  {
    url: "https://images.unsplash.com/photo-1666834621175-7fbb2b180a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMHNpbGhvdWV0dGV8ZW58MHwwfDB8fHww",
    title: "Ayobami Alaran",
    text: "Senior Backend Engineer",
  },
];

export function AboutTeam() {
  return (
    <div className="p-5 border-b-2" id="team">
      <div className="text-center">
        <h3 className="text-6xl">Meet the Team</h3>
        <h6 className="text-secondary font-light">
          These people work on making our product best.
        </h6>
      </div>
      <div className="grid lg:grid-cols-5 justify-items-center md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-20 ">
        {contributor.map((item, index) => (
          <div key={index} className="card border-0 d-flex justify-center mt-5">
            <img
              className="card-img-top border-2 h-32 object-fit-cover w-28 d-flex self-center"
              src={item.url}
            />
            {/*<img className="card-img h-28 w-25 " src={item.url}/>*/}
            <div className="card-title text-center text-2xl mt-5">
              {item.title}
            </div>
            <div className="card-body text-center text-sm -mt-3">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
