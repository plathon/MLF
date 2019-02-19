import React, { Component } from 'react'

import LoginForm from '../components/Login/LoginForm'

import { Row, Col } from 'antd'

class LoginPage extends Component {
    render () {
        return (
            <Row>
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
                        <LoginForm />
                </Col>
            </Row>
        )
    }
}

export default LoginPage