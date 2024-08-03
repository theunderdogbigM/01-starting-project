


export default function CoreConcepts({title, image, description})
{
  return(<li>
    
    <h3>{title}</h3>
    <img src= {image} alt= {title} />
   <p>{description}</p>
  </li>)
}