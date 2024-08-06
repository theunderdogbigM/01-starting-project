import bjjImage from "../../assets/bjjlogo.png";
import "./Header.css";

const reactDescriptions = ['Fundamental','Crucial','Core'];
function genRandomInt(max){return Math.floor(Math.random()*(max + 1))}

export default function Header()
{
  const description = reactDescriptions[genRandomInt(2)];
  return(
  <header>
  <img src={bjjImage} alt="Stylized atom" />
  <h1>BJJ Essentials</h1>
  <p>
     {description} BJJ concepts you will need for almost any oponent!
  </p>
</header>
  );
}