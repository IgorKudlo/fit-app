import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from '@redux/configure-store';

import 'normalize.css';
import 'antd/dist/antd.css';
import './index.css';
import {routes} from "./routes/routes.tsx";

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                {routes}
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
