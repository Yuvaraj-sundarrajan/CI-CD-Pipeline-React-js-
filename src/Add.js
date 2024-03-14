
import './App.css';
import React from 'react'; 

class Add extends React.Component{ 

 

  constructor(props){ 

    super(props); 

    this.state={Num1:"",Num2:"",Result:""}; 

  } 

  Add=()=>{ 

    var num1=parseInt(this.state.Num1); 

    var num2=parseInt(this.state.Num2); 

    var sum=num1+num2; 

    this.setState({Result:sum}); 

  } 

  render(){ 

    return( 

<> 
<div className="App">
{/* <div data-testid="Heading">
      <h1>Welcome to Jest testing</h1>
      <br/>
      <h1 data-testid ="Mybold">Hello Yuvaraj</h1>
     </div> */}

<h1 data-testid="Heading">Adding two number</h1> 

<label data-testid="Label1">Enter the number 1:</label> 

<input type="number"value={this.state.Num1} data-testid="input1"onChange={(e)=>{this.setState({Num1:e.target.value})}}/> 

<br></br> 

<label data-testid="Label2">Enter the number 2:</label> 

<input type="number"value={this.state.Num2} data-testid="input2" onChange={(e)=>{this.setState({Num2:e.target.value})}}/> 

<br></br> 

<input type='button' value="Add" data-testid="Button"onClick={this.Add}/> 

<br></br> 

<b data-testid="result">sum:<span Style={"color:red"}>{this.state.Result}</span></b> 

</div>

</> 

    ); 

  } 

} 

 

export default Add; 

