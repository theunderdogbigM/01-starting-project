import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../../data";
export default function CoreConceptsTwo()
{
  return (<section id = "core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            {CORE_CONCEPTS.map((categoryItem)=>(<CoreConcepts key = {categoryItem.title} {...categoryItem}/>))}
        </ul>
        </section>
       );
}