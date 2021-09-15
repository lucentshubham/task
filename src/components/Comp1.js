import { Button } from '@material-ui/core'
import React, { Component } from 'react'

export class Comp1 extends Component {

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
                <Button variant='contained' onClick={this.props.updateVal}> Click</Button>
            </div>
        )
    }
}

export default Comp1
