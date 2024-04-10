import './auth.css';
import fitLogo from '/fit.svg';
import React from 'react';
import {Button, Card, Input, Tabs} from "antd";

const Register = () => {
    return (
        <>
            <Input addonBefore="email" className="auth__card-input" />
            <Input.Password placeholder="Пароль" className="auth__card-input" />
            <Input.Password placeholder="Повторите пароль" className="auth__card-input" />
            <Button type="primary">Войти</Button>
            <Button>Регистрация через Google</Button>
        </>
    )
}

const itemsTab = [
    { label: 'Вход', key: 'auth', children: 'Content 1' },
    { label: 'Регистрация', key: 'registration', children: <Register /> },
];

export const Auth: React.FC = () => {
    return (
        <div className="auth">
            <Card className="auth__card">
                <div className="auth__card-logo">
                    <img src={fitLogo} alt="Fit"/>
                </div>
                <Tabs items={itemsTab} className="auth__card-tabs" />
            </Card>
        </div>
    )
}
