import Card from "./Card";

const cards = [
  {
    id: 1,
    name: "Medhat J Achour",
    img: "https://i.ibb.co/YydmjmK/OIG.jpg",
    Description:
      "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    id: 2,
    name: "Medhat J Achour",
    img: "https://i.ibb.co/YydmjmK/OIG.jpg",
    Description:
      "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    id: 3,
    name: "Medhat J Achour",

    img: "https://i.ibb.co/YydmjmK/OIG.jpg",
    Description:
      "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    id: 4,
    name: "medhat j achour",
    img: "https://i.ibb.co/YydmjmK/OIG.jpg",
    Description:
      "As Uber works through a huge amount of internal management turmoil.",
  },
];

const ProjectsSection = () => {
  return (
    <div className="bg-white rounded-xl mb-8 shadow-sm p-8">
      <h2 className="text-xl text-[#050F24]">Projects</h2>
      <p className="text-[#6F757E]">Architects design houses</p>
      <div className="grid grid-cols-4 gap-4  my-8">
        {cards.map((cardData, index) => (
          <Card key={index} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
