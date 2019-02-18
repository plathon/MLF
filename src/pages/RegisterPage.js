import React from 'react'

import {
    Form, 
    Input, 
    Tooltip, 
    Icon, 
    Cascader, 
    Select, 
    Row, 
    Col, 
    Checkbox, 
    Button, 
    AutoComplete,
  } from 'antd';
  
  const { Option } = Select;
  
  class RegistrationForm extends React.Component {
  
    state = {
      confirmDirty: false
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  
    render() {

      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '55',
      })(
        <Select style={{ width: 70 }}>
          <Option value="55">+55</Option>
        </Select>
      );
        let testdata = 'test'
      return (
        <Row>
        <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>

          <Col xs={20} sm={16} md={12} lg={10} xl={10} style={{ marginTop: 100 }}>

          <Form onSubmit={this.handleSubmit}>

            <Form.Item
                {...formItemLayout}
                label="Name"
              >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: 'Please input your Name!',
                }],
              })(
                <Input />
              )}
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="E-mail"
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />
              )}
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="CPF"
            >
              {getFieldDecorator('cpf', {
                rules: [{
                  required: true, message: 'Please input your CPF!',
                }],
              })(
                <Input />
              )}
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="Password"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type="password" />
              )}
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="Confirm Password"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="Phone Number (Whatsapp)"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              )}
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="State"
            >
              {getFieldDecorator('state', {
                rules: [{
                  required: true, message: 'Please input your state!',
                }],
              })(
                <Input />
              )}
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="City"
            >
              {getFieldDecorator('city', {
                rules: [{
                  required: true, message: 'Please input your city!',
                }],
              })(
                <Input />
              )}
            </Form.Item>
      
            <Form.Item {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>I have read the <a href="#">agreement</a></Checkbox>
              )}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">Register</Button>
            </Form.Item>

          </Form>

          </Col>

          <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>

        </Row>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm)
  export default WrappedRegistrationForm