import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// require normalized overrides
import AddFilmPage from '../pages/addFilm';
import MainPage from '../pages/index';
import GetFilmPage from '../pages/getFilm';


function Router() {
    
    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route path="/films/:id"  element={ <GetFilmPage/>}>
                </Route>

                <Route path="/addFilm" element={<AddFilmPage/>}> 
                </Route>

                <Route path="/films"  element={<MainPage/>}> 
                </Route>

                <Route path="/" element={<Navigate to="/films"/>} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}
export default Router;