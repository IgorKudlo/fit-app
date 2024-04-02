import React, { useState } from 'react';
import { Button, Card, Layout, Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    CalendarOutlined,
    HeartFilled,
    TrophyFilled,
    AuditOutlined,
    SettingOutlined,
    AndroidFilled,
    AppleFilled
} from '@ant-design/icons';
import fitLogo from '/fit.svg';
import './main-page.css';

const { Header, Footer, Sider, Content } = Layout;

const menuItems = [
    {
        key: '1',
        icon: <CalendarOutlined />,
        label: 'Календарь',
    },
    {
        key: '2',
        icon: <HeartFilled />,
        label: 'Тренировки',
    },
    {
        key: '3',
        icon: <TrophyFilled />,
        label: 'Достижения',
    },
    {
        key: '4',
        icon: <AuditOutlined />,
        label: 'Профиль',
    }
];

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className="layout">
            <Sider className="sider" trigger={null} collapsible collapsed={collapsed} theme='light'>
                <img className="logo" src={fitLogo} alt="Fit logo"/>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuItems}
                />
                <div className="sider-trigger" onClick={() => setCollapsed(!collapsed)}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </div>
                <Button className="exit-button" type="link" block icon={<LogoutOutlined />}>Выход</Button>
            </Sider>
            <Layout>
                <Header className="header">
                    <div className="page-title">Главная</div>
                    <div className="header-col">
                        <p className="main-title">Приветствуем тебя в Fit — приложении, которое поможет тебе добиться своей
                            мечты!</p>
                        <Button className="settings-button" type="link" icon={<SettingOutlined />}>Настройки</Button>
                    </div>
                </Header>
                <Content>
                    <div className="main-content-inner">
                        <Card className="card-regular" bordered={false}>
                            <div>С CleverFit ты сможешь:</div>
                            <div>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</div>
                            <div>— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;</div>
                            <div>— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</div>
                            <div>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</div>
                        </Card>
                        <Card className="card-bold" bordered={false}>
                            <div>CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!</div>
                        </Card>
                        <div className="cards-col">
                            <Card title="Расписать тренировки" bordered={false} className="card-with-title">
                                <a href="#" className="card-link"><HeartFilled /> Тренировки</a>
                            </Card>
                            <Card title="Назначить календарь" bordered={false} className="card-with-title">
                                <a href="#" className="card-link"><CalendarOutlined /> Календарь</a>
                            </Card>
                            <Card title="Заполнить профиль" bordered={false} className="card-with-title">
                                <a href="#" className="card-link"><AuditOutlined /> Профиль</a>
                            </Card>
                        </div>
                    </div>
                </Content>
                <Footer>
                    <a href="#">Смотреть отзывы</a>
                    <Card title={<><div style={{ color: '#2f54eb' }}>Скачать на телефон</div><div style={{ color: '#8c8c8c' }}>Доступно в PRO-тарифе</div></>}
                          bordered={false} className="card-devider">
                        <div className="card-devider__body">
                            <a href="#"><AndroidFilled/> Android OS</a>
                            <a href="#"><AppleFilled/> Apple iOS</a>
                        </div>
                    </Card>
                </Footer>
            </Layout>
        </Layout>
    );
};
