import React from 'react';
class Color extends React.Component{
 render(){
    return(
        <div className=' wrapper container'>
            <div className='square' style={{background: this.props.colorp }}></div>
            <div className='color-list'>{this.props.colorp}</div>
        </div>
    )
 }
}
export default Color