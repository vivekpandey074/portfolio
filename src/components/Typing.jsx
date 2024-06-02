import React, { useEffect, useState } from 'react';
import "../index.css";


var iSpeed = 100; // time delay of print out
var iScrollAt = 20; // start scrolling up at this many lines

function formatParagraph(paragraph) {
    const sentences = paragraph
      .split(".")
      .filter((sentence) => sentence.trim().length > 0);
  
    return sentences;
  }

function Typing({paragraph}) {
 
   const [content,setContent]=useState('');






   


    function typewriter(arr){
     setContent("");


    var sum=0;
    for (let i = 0; i < arr.length; i++) {   
        setTimeout(()=>{
            for (let index = 0; index < arr[i].length; index++) {
                setTimeout(()=> { 
                     setContent((prev)=>prev+arr[i][index]);
                   
                   },index*10);
                }
           setContent((prev)=> prev+`\n${i===arr.length-2?"\n\n\n":""}`)
        },sum);
        sum=sum+arr[i].length*10+500;
        
    }
  
    

   
   


    }

      useEffect(()=>{
       const arr= formatParagraph(paragraph);
      
      
       typewriter(arr);
      },[])




  return (
    <p className='text-gray-300 text-xl sm:text-2xl 2xl:text-3xl leading-normal md:text-18 sm:mx-auto whitespace-pre-wrap'>
    {content} 
    </p>
  )
}

export default Typing