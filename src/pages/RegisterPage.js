import React, { Component } from 'react'

import RegisterForm from '../components/Register/RegisterForm'

import { Row, Col } from 'antd'

class RegisterPage extends Component {
  render () {

    return <Row>
      <Col xs={2}
           sm={4}
           md={6}
           lg={6}
           xl={6}></Col>

      <Col xs={20}
           sm={16}
           md={12}
           lg={10}
           xl={10}
           style={{ marginTop: 100 }}>
        
        <RegisterForm store={this.props.store}/>

      </Col>
    </Row>
  }
}

export default RegisterPage