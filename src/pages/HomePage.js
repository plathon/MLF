import React, { Component } from "react"
import { observer } from 'mobx-react'

@observer
class HomePage extends Component {
    render () {
        console.log(this.props)
        return <div>Home Page and data: {this.props.store.data[0]}</div>
    }
}

export default HomePage