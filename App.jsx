
import {useState} from 'react'
import Header from "./Components/Header/Header";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Buttons from "./Components/Buttons/Buttons";





function App() {


 const [selectTopic, setSelectedTopic] =  useState('');

 function handleSelect(selectedValue){
  setSelectedTopic(selectedValue);
 }

 let tabContent = <p>Please select a topic</p>;
 if (selectTopic){
 tabContent= <div id = 'tab-content'>
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <p>{EXAMPLES[selectTopic].comment}</p>
          </div>
 }
  return (
    <div>
     <Header/>
      <main>
        <section id = "core-concepts">
        <h2>Core Concepts</h2>
        <ul>

            {CORE_CONCEPTS.map((categoryItem)=>(<CoreConcepts key = {categoryItem.title} {...categoryItem}/>))}
        
          
        </ul>
        </section>
        <section id = "examples">

          <menu>
            <Buttons isSelected={selectTopic === 'guards'} onSelect={()=>handleSelect('guards')}>Guards</Buttons>
            <Buttons isSelected={selectTopic === 'submissions'} onSelect={()=>handleSelect('submissions')}>Submissions</Buttons>
            <Buttons isSelected={selectTopic === 'escapes'} onSelect={()=>handleSelect('escapes')}>Escapes</Buttons>
            <Buttons isSelected={selectTopic === 'throws'} onSelect={()=>handleSelect('throws')}>Throws</Buttons>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
