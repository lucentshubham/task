import React, { Component } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
export class Maincomp extends Component {

    constructor(props) {
        super(props)
        this.state = {
             val:0
        }
    }

    render() {
        return (
            <div style = {{
                display:"flex",
                flexDirection:"row"
        
            }}>
                <Comp1 updateVal = {()=>{this.setState({val:this.state.val+1})}} />
                <Comp2  val={this.state.val}/>
            </div>
        )
    }
}

export default Maincomp
