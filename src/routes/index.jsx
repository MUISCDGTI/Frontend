import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Noticias from '../components/noticias';
// require normalized overrides
import MainPage from '../pages/index';

function Router() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage/>}>
                    </Route>
                    <Route path="/newsList" element={<Noticias/>}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default Router;