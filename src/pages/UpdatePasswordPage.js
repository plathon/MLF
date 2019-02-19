import React, { Component } from "react"

import UpdatePasswordForm from '../components/Password/UpdatePasswordForm'

import { Row, Col } from 'antd'

class UpdatePasswordPage extends Component {
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
                        <UpdatePasswordForm />
                </Col>
            </Row>
        )
    }
}

export default UpdatePasswordPage