import React, { Component } from 'react';


class Counter extends Component {

    state = {
        count: 0,
        imageURL : 'https://picsum.photos/200'
    };

    formatCount(){
        const zilch = <span> Zero </span>;
        if(this.state.count==0){
            return (zilch);
        }
    }

    styles = {

        fontSize: 390,
        fontWeight: "bold"

    }

    render() { 
        return (
        <React.Fragment>
            <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className= "btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        );
    }
}
 
export default Counter;