import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// require normalized overrides
import MainPage from '../pages/index';

function Router() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage/>}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default Router;