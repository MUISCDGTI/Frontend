import React from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';



// require normalized overrides
import MainPage from '../pages/index';
import LoginPage from '../pages/login';
import PerfilPage from '../pages/perfil';
import RegistroPage from '../pages/registro';
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

                    <Route path="/usuario"  element={<LoginPage/>}> 
                    </Route>

                    <Route path="/perfil"  element={<PerfilPage/>}> 
                    </Route>

                    <Route path="/registro"  element={<RegistroPage/>}> 
                    </Route>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Router;