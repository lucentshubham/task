import React, { Component } from 'react'

export class Comp2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div style={{
                margin:20
            }}>
                <h1>{this.props.val}</h1>
            </div>
        )
    }
}

export default Comp2
