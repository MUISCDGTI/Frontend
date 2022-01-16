import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// require normalized overrides
import AddFilmPage from '../pages/addFilm';
import MainPage from '../pages/index';

function Router() {
    
    return (
        <BrowserRouter>
            <div>
            <Routes>
                <Route path="/addFilm" element={<AddFilmPage/>}> 
                </Route>

                <Route path="/films"  element={<MainPage/>}> 
                </Route>
                
                <Route path="/" element={<Navigate to="/films"/>} />
            </Routes>
            </div>
        </BrowserRouter>
    );
}
export default Router;