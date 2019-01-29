import React from 'react'
import { Layout, Menu } from 'antd'

const { Header } = Layout

export default () => (
    <Header className="header" style={{ background: '#fff' }}>
        <div className="logo" style={{ float: 'left' }}>MML</div>
        <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', float: 'right' }}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
    </Header>
)