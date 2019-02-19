import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'

import { observer, inject } from 'mobx-react'

@inject('AuthStore')
@observer
class NormalLoginForm extends Component {

handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
    if (!err) {
        const { userName, password, remember } = values
        this.props.AuthStore.authUserLocal(userName, password, remember)
    }
    });
}

render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
        {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
        })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
        })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
        })(
            <Checkbox>Remember me</Checkbox>
        )}
        <Link className="login-form-forgot" to="/password/reset">Forgot password</Link>
        <br/>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={this.props.AuthStore.isLoading}>
            Log in
        </Button> Or <Link to="/signin">register now!</Link>
        </Form.Item>
    </Form>
    );
}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm
