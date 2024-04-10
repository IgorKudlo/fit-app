import './auth.css';
import fitLogo from '/fit.svg';
import React from 'react';
import { Button, Card, Input, Tabs } from "antd";
import { useForm, Controller, SubmitHandler } from "react-hook-form"

type RegisterInputs = {
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const { handleSubmit, control } = useForm<RegisterInputs>({
        defaultValues: {
            email: '',
        },
    })
    const onSubmit: SubmitHandler<RegisterInputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input addonBefore="email" className="auth__card-input" {...field} />}
            />
            <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input.Password placeholder="Пароль" className="auth__card-input" {...field} />}
            />
            <Controller
                name="confirmPassword"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input.Password placeholder="Повторите пароль" className="auth__card-input" {...field} />}
            />
            <Button type="primary" htmlType={"submit"}>Войти</Button>
            <Button>Регистрация через Google</Button>
        </form>
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
