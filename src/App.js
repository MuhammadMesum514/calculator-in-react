
// import './App.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import About from './About';
import Button from './components/Button';
import Service from './Service';
import './css/style.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      previous: [],
      nextisreset:false

    }
  }
  reset = () => {
    this.setState({ current : '0',previous:[],nextisreset:false });
    // this.setState({ previous:this.state.previous.splice(0,this.state.previous.length) });

  }
  AddToCurrent = (symbol) => {
    if (['/', '*', '+', "-"].indexOf(symbol) > -1) {
      let { previous } = this.state;
      previous.push(this.state.current + symbol)
      this.setState({ previous,nextisreset:true})
    }
    else if((this.state.current==='0' && symbol!=='.')|| this.state.nextisreset)
    {
          this.setState({current:symbol,nextisreset:false});
      
    }
    else{
      this.setState({ current: this.state.current + symbol })
    }
  }
  calculate=()=>{
    let{current,previous,nextisreset}=this.state;
    if(previous.length>0){
        current=eval(String(previous[previous.length-1] + current))
        this.setState({current,previous:[],nextisreset:true})
    }
  }

  render() {
    const button = [
      { symbol: 'c', cols: 3, action: this.reset },
      { symbol: '/', cols: 1, action: this.AddToCurrent },
      { symbol: '1', cols: 1, action: this.AddToCurrent },
      { symbol: '2', cols: 1, action: this.AddToCurrent },
      { symbol: '3', cols: 1, action: this.AddToCurrent },
      { symbol: '*', cols: 1, action: this.AddToCurrent },
      { symbol: '4', cols: 1, action: this.AddToCurrent },
      { symbol: '5', cols: 1, action: this.AddToCurrent },
      { symbol: '6', cols: 1, action: this.AddToCurrent },
      { symbol: '-', cols: 1, action: this.AddToCurrent },
      { symbol: '7', cols: 1, action: this.AddToCurrent },
      { symbol: '8', cols: 1, action: this.AddToCurrent },
      { symbol: '9', cols: 1, action: this.AddToCurrent },
      { symbol: '+', cols: 1, action: this.AddToCurrent },
      { symbol: '0', cols: 2, action: this.AddToCurrent },
      { symbol: '.', cols: 1, action: this.AddToCurrent },
      { symbol: '=', cols: 1, action: this.calculate },
    ]
    return (
      <div className="App">
        {this.state.previous.length > 0 ?
          <div className="float-prev" >
            {this.state.previous[this.state.previous.length - 1]}
          </div>
          : null}
        <input type='text' className='result' value={this.state.current}>
        </input><br />

        {button.map((btn, i) => {
          return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} />
        })
        }

      </div>

    );
  }
}

export default App;
