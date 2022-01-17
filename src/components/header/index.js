import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import {useNavigate} from 'react-router-dom';

function CustomHeader () {
    const navigate = useNavigate();

    function onClickFilm() {
        navigate('/films');
    };

    function onClickNew() {
        navigate('/news');
    };

    return (
        <div>
            <div className="logo" >
                Rotten Potatoes
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['films']}>
                <Menu.Item key='films' onClick={onClickFilm}>Películas</Menu.Item>
                <Menu.Item key='news' onClick={onClickNew}>Noticias</Menu.Item>
                <Menu.Item key='user'>Usuario</Menu.Item>
            </Menu>
        </div>
    );
}

export default CustomHeader;
