import React from "react";
class Button extends React.Component{
    render(){
        return <button onClick={this.props.clickHandler} style={{margin:"1em"}}>{this.props.title}</button>
    }
}
export default Button