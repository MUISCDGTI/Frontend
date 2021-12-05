import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Noticias from '../components/news';
// require normalized overrides
import MainPage from '../pages/index';
import NewsList from '../pages/news';


function Router() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage/>}>
                    </Route>
                    <Route path="/news" element={<NewsList/>}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default Router;