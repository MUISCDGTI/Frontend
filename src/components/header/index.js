import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';

const CustomHeader = () => {
    return (
        <div>
            <div>
                Rotten Potatoes
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['films']}>
                <Menu.Item key='films'>Películas</Menu.Item>
                <Menu.Item key='news'>Noticias</Menu.Item>
                <Menu.Item key='user'>Usuario</Menu.Item>
            </Menu>
        </div>
    );
}
export default CustomHeader;