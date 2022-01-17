import React from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Noticias from '../components/news';



// require normalized overrides
import MainPage from '../pages/index';
import NewsList from '../pages/news';
import AddFilmPage from '../pages/addFilm';
import GetFilmPage from '../pages/getFilm';


function Router() {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/films"/>} />
                    <Route path="/news" element={<NewsList />}>
                    </Route>

                    <Route path="/films/:id"  element={ <GetFilmPage/>}>
                    </Route>

                    <Route path="/addFilm" element={<AddFilmPage/>}> 
                    </Route>

                    <Route path="/films"  element={<MainPage/>}> 
                    </Route>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Router;