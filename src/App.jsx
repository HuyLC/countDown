import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
var DateTimeField = require('react-bootstrap-datetimepicker');
import {Form} from 'react-bootstrap';

class App extends Component{
    constructor(props) {
    super(props);
    this.state = {
      deadline: '12/10/2017',
      format: 'MM/DD/YYYY',
      inputFormat: 'MM/DD/YYYY',
      mode: 'date',
    };
  }

  changeDeadline = (newDeadline) => {
    return this.setState({deadline: newDeadline});
  }

    render(){
        return ( 
            <div className="App">
                <div className="App-title">Count Down to {this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline}
                />
                <Form inline>
                   <DateTimeField
                        dateTime={this.state.deadline}
                        format={this.state.format}
                        viewMode={this.state.mode}
                        inputFormat={this.state.inputFormat}
                        onChange={this.changeDeadline}
                    />
                </Form>
            </div>
        )
        
    }
}

export default App;