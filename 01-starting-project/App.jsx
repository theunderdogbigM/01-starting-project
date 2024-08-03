
import Header from "./Components/Header";
import CoreConcepts from "./Components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";






function App() {

  return (
    <div>
     <Header/>
      <main>
        <section id = "core-concepts"></section>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts title = {CORE_CONCEPTS[0].title}
           description = {CORE_CONCEPTS[0].description}
           image ={CORE_CONCEPTS[0].image}/>

           <CoreConcepts {...CORE_CONCEPTS[1]}/>

           <CoreConcepts {...CORE_CONCEPTS[2]}/>

           <CoreConcepts {...CORE_CONCEPTS[3]}/>
           //comment
        </ul>
      </main>
    </div>
  );
}

export default App;
