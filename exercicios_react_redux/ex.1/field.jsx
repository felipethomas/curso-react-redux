import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {
    render() {
        return (
            <div>
                <label htmlFor="entrada">{this.props.value}</label><br />
                <input id="entrada" type="text" onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)