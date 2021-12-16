import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// require normalized overrides
import MainPage from '../pages/index';
import Ratings from '../components/ratings';

function Router() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage/>}>
                    </Route>
                    <Route path="/ratings" element={<Ratings/>}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default Router;