import React from 'react';
class Color extends React.Component{
    constructor(props){
        super(props)
    }
 render(){
    return(
        <div className=' wrapper container'>
            <div className='square' style={{background: this.props.color }}></div>
            <div className='color-list'>{this.props.color}</div>
        </div>
    )
 }
}
export default Color