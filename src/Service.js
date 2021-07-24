import React from 'react';
class Service extends React.Component{
    constructor(){
        super();
     console.warn("hello from the constructor");
     this.state={
         name:"Sam",
         Age:21
     }       
    }
    componentDidMount(){
        console.warn("Component mounted");
    }

    
    componentDidUpdate(){
        console.warn("value updated",this.state.name,this.state.Age);
    }
    render(){
        return(
            <div>
        <h1>hello from Service page</h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.Age}</h1>
        {/* <h1>{Age}</h1> */}
        <button onClick={()=>{this.setState({name:"Mesum",Age:22})}}>Update Info</button>
        
        
        </div>
        )
    }
}
export default Service;