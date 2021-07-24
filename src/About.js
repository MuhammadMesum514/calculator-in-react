import React,{useState,useEffect} from 'react';
function About(){
    
    let [name,setName]= useState('SAM');
    let [Age,setAge]= useState(22);

    useEffect(()=>{
        
        console.warn("hello from the hook");

    },[])
    function modifyinfo(){
        setName("Mesum");
        setAge(21);
    }
    return(

        <div>
        <h1>hello from about page</h1>
        <h1>{name}</h1>
        <h1>{Age}</h1>
        <button onClick={()=>modifyinfo()}>Update Info</button>
        
        
        </div>
    )
}
export default About;