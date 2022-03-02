import React from 'react';
import Color from './Color'
import'./main.css'
class ColorGenerator extends React.Component{
    constructor(){
        super()
        this.state={ list:[]}
    }
    
    getRandomColor=()=> {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for ( let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)]
        }
        this.setState({list:[...this.state.list,color]})
        console.log(this.state.list);
    }

       
    
    render(){
        return (
            <div className='container'>
                <button className='btn' onClick={this.getRandomColor}>Add Color</button>
                {this.state.list.map((c,i)=> <Color key={i} color={c}/>)}
            </div>
        )
        
    }
}
export default ColorGenerator 