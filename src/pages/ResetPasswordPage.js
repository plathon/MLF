import React, { Component } from "react"

import ResetPasswordForm from '../components/Password/ResetPasswordForm'

import { Row, Col } from 'antd'

class ResetPasswordPage extends Component {
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
                        <ResetPasswordForm />
                </Col>
            </Row>
        )
    }
}

export default ResetPasswordPage