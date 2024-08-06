import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import Buttons from "../Buttons/Buttons";
import Section from "../Sections.jsx";
import Tab from "../Tabs.jsx";
export default function Examples()
{ 
    const [selectTopic, setSelectedTopic] =  useState();

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
    return(  <Section title = "Examples" id = "examples">
<Tab ButtonsContainer= "menu" buttons ={ <><Buttons isSelected={selectTopic === 'guards'} onClick={()=>handleSelect('guards')}>Guards</Buttons>
      <Buttons isSelected={selectTopic === 'submissions'} onClick={()=>handleSelect('submissions')}>Submissions</Buttons>
      <Buttons isSelected={selectTopic === 'escapes'} onClick={()=>handleSelect('escapes')}>Escapes</Buttons>
      <Buttons isSelected={selectTopic === 'throws'} onClick={()=>handleSelect('throws')}>Throws</Buttons></>}>{tabContent}</Tab>
    
   
  </Section>
);
}