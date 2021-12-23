import React, { useEffect, useState, Fragment } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Typography, List, Avatar, Space, Button, Alert } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Item from 'antd/lib/list/Item';
import NewsApi from '../../NewsApi.js';
import CreateNews from './CreateNews.js';
import { type } from 'os';

function Noticias(props) {

    /* FETCH
    const [newsList, setNewsList] = useState([]);

    //Se ejecuta una sola vez, no cada vez que se cambia el estado
    useEffect(() => {

        async function fetchNewsList() {
            try {
                const n = NewsApi.getAllNews();
                setNewsList(n);
            } catch (error){
    //            setMessage('No se pudo contactar con el servidor');
                console.log(error);
            }
        }
        fetchNewsList();
    }, []);
    */

    /* ESTÁTICO
    const newsList = [];

    newsList.push({
        href: './news/id',
        title: `Luces y sombras del segundo final de La casa de papel`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'La serie se despide convertida en el mayor éxito global de la ficción televisiva española',
        content:
        'A principios de 2017 se rodaba en un polígono industrial de Colmenar Viejo (Madrid) el comienzo de un atraco que, sin saberlo, marcaría un punto de inflexión para la industria televisiva española. La misma nave que antes había acogido el rodaje de Vis a vis se había transformado en una falsa Fábrica Nacional de Moneda y Timbre en la que unos ladrones con mono rojo y careta de Dalí se acababan de atrincherar con rehenes para fabricar billetes y más billetes. La casa de papel llevaba a la pequeña pantalla el cine de atracos de toda la vida, el entretenimiento palomitero puro y duro, con una estética cinematográfica. Nadie imaginaba entonces que lo que se estaba fraguando en esa nave de Colmenar en la que hacía un frío absurdo terminaría casi cinco años después convertido en un fenómeno internacional que tendrá al menos una continuación en forma de serie derivada. Se pueden decir muchas cosas de la última tanda de capítulos de La casa de papel, cinco entregas que ha estrenado este viernes Netflix y que ponen punto final al segundo atraco de la banda de los ladrones con nombres de ciudades. Se podría decir que la serie se ha alargado bastante más de lo que debería haber durado. Que los diálogos se han ido volviendo cada vez más artificiales, con frases grandilocuentes que nadie diría en circunstancias normales (y menos en circunstancias tan extraordinarias como un atraco de esa magnitud). Que algunas interpretaciones rozan la sobreactuación. Que, si se analiza detenidamente, muchas decisiones de los personajes no tienen sentido y que la trama lleva al extremo la suspensión de la incredulidad, ese acuerdo tácito entre espectador y obra de ficción por la que el primero decide no plantearse si lo que le están contando es realmente posible. Que los bailes sensuales no vienen a cuento. Que todo parece estar rodado con el piloto automático puesto. O que, en su desenlace, deja cierta sensación de déjà vu. También se podrían decir muchas cosas que ya se han dicho antes, porque a estas alturas del juego todos sabemos a lo que venimos. Y a La casa de papel siempre se le han podido sacar pegas y también señalar bastantes virtudes. Como la conexión emocional que logra con el espectador. Porque a la acción (cada vez más frenética) se sumaban personajes con historias personales con las que identificarse, aunque esa parte emocional se había ido difuminando a favor de la acción. A lo que sí se ha mantenido fiel es a una apuesta estética contundente y a una iconografía que ya es marca de la casa (de papel). También a las secuencias cargadas de adrenalina y a los giros inesperados. Y al uso de la música para remarcar determinadas escenas y aliviar el estrés en otras. Pero todo eso es lo de menos. Porque hoy no estaríamos hablando de La casa de papel si entre aquel rodaje en aquella nave de Colmenar Viejo y este final no hubieran sucedido un montón de pequeños milagros. A finales de 2017, la serie entró en el catálogo de Netflix y el resto es historia: se convirtió en el primer gran éxito internacional de un programa de habla no inglesa en la plataforma, que decidió recuperarla para contar un nuevo robo, al Banco de España en esta ocasión. El Profesor, Tokio, Denver, Río, Nairobi e incluso Berlín (porque ni la muerte pudo alejar a un buen personaje de esta serie) tuvieron 26 capítulos extra para seguir haciendo historia. Mientras, premios de todo tipo, incluido el Emmy Internacional al mejor drama —el único logrado por una serie española— sellaron el fenómeno internacional en el que se había convertido. Los fanes reconocían a los actores allá donde iban, los vitoreaban como héroes. El público había conectado con los personajes de una forma que solo la ficción puede conseguir. La casa de papel, al fin y al cabo, era desde el principio la historia de un grupo de personas a los que ya no les quedaba nada que perder y que decide echar un pulso al sistema. Y al mismo tiempo, esta creación de Álex Pina y Esther Martínez Lobato, la primera de la productora Vancouver Media, nacida con el impulso y respaldo de Atresmedia, terminó siendo decisiva para situar a la industria española en el foco de la producción de ficción en la era de las plataformas. El éxito de La casa de papel hizo que Netflix se fijara en España, que se viera el potencial de una industria con toneladas de talento y capaz de poner en marcha proyectos con una muy buena relación calidad-precio. En la era de la televisión global, no importa de dónde surjan las buenas ideas: puede llegar a cualquier rincón; lo importante es que logre conectar con el espectador. En la última rueda de prensa antes del lanzamiento de los capítulos finales, Álex Pina destacaba cómo el salto a Netflix permitió a la serie jugar en una liga en la que antes no se podía jugar y que ha conseguido que lo local pueda competir con lo internacional. En un momento determinado, a falta de dos capítulos para el final, los ladrones supervivientes empiezan a cantar el Bella Ciao, ese himno que la serie ha hecho propio, a ritmo de batucada. Es difícil que quienes han seguido las andanzas de estos perdedores no suelten en ese momento una sonrisa de complicidad. Es la épica del perdedor. La casa de papel lo tenía todo para perder. Pero ni siquiera aquella primera vez, cuando era una serie de la televisión en abierto, ni siquiera entonces perdió: logró terminar en sus propios términos, como y cuando quería, con una primera temporada cerrada. Ahora, convertida en leyenda, vuelve a terminar. Y, como entonces, ha vuelto a ganar, y por goleada. El resto de lo que podamos decir da igual.',
        url: 'https://imagenes.elpais.com/resizer/GLfCZ8oOlfil2w-XpWWl99j8sT8=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/W5O4QHHCMBHQ5DHXSDSIPAVNFY.jpg',
    })

    for (let i = 0; i < 23; i++) {
        newsList.push({
            href: './news/id',
            title: `Luces y sombras del segundo final de La casa de papel`,
            avatar: 'https://joeschmoe.io/api/v1/random',
            description:
                'La serie se despide convertida en el mayor éxito global de la ficción televisiva española',
            content:
                '',
            url:
                'https://imagenes.elpais.com/resizer/GLfCZ8oOlfil2w-XpWWl99j8sT8=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/W5O4QHHCMBHQ5DHXSDSIPAVNFY.jpg',
        });
    }
    */

    
    console.log(props.newsList);

    const [newsList, setNewsList] = useState(props.newsList);

    const [message, setMessage] = useState("");

    const [createEscondido, setCreateEscondido] = useState("false");

    const [isShow, setIsShow] = useState("true");


    const handleClick = () => {
        setIsShow(!isShow);
    };

    const { Text, Title } = Typography;



    function onAddNews(noticia) {
        noticia.avatar = "https://joeschmoe.io/api/v1/random"
        noticia.href = "./news/id"
        noticia.author = "Periquito Pérez"
        var hoy = new Date();
        noticia.createdAt = hoy.getDay() + " de " + hoy.toLocaleString('default', { month: 'long' }) + " del " 
            + hoy.getFullYear() + " a las " + hoy.getHours() + ":" + hoy.getMinutes();
//      noticia.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend lacus auctor feugiat auctor. Morbi scelerisque velit eu tempus aliquet. Maecenas vitae ex urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vel gravida elit. Nam ac lectus id justo tempus dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque luctus aliquam arcu eu egestas. Sed sodales ante vitae leo tempus vestibulum. Vestibulum urna tellus, fermentum id nunc nec, imperdiet tincidunt neque. Nulla tincidunt ligula eget imperdiet viverra. Vivamus placerat aliquam risus in rutrum. In sed dolor metus. Vestibulum nec sodales sem. Cras pretium fermentum egestas. Vivamus eget metus in dolor scelerisque molestie sed at nisi. Phasellus commodo tristique mauris quis auctor. Quisque ultricies neque felis, sit amet accumsan mauris mollis mollis. Donec vel metus sed lacus consequat fringilla. Nunc ac luctus ante. Donec et massa dapibus, viverra nibh vitae, ullamcorper ipsum. Integer interdum libero ac metus ultrices dignissim. Donec sit amet urna nec eros sagittis ultrices vehicula sollicitudin orci. Quisque et vulputate magna. Nulla auctor, libero eu consectetur tempor, ante lacus fermentum lectus, ut sagittis urna massa eu lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus odio est, efficitur et lectus eu, dapibus interdum ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse a justo non erat lacinia maximus ut et velit. Nulla facilisi. Nunc sagittis magna quis porttitor fringilla. Donec pretium orci ut tristique lacinia. Maecenas ultricies ipsum non condimentum sagittis. Phasellus elementum tincidunt consequat. Curabitur in risus ultrices, bibendum tortor nec, consectetur nibh. Mauris eget enim pretium enim ultrices dignissim. Integer fringilla non lorem ac consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse mollis lacus quis nisl luctus consectetur. Nulla facilisi. Vivamus at leo sed nibh eleifend sagittis. Donec molestie iaculis nulla vel ornare. Fusce sodales, ipsum a auctor vestibulum, ante est blandit ante, et convallis purus purus congue ex. Vivamus a finibus sapien, at ultricies ex. Ut ornare mauris velit, et venenatis justo tincidunt sit amet."
//        noticia.text = "NOTICIA TEXT TEST"
//        noticia.url = "https://imagenes.elpais.com/resizer/GLfCZ8oOlfil2w-XpWWl99j8sT8=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/W5O4QHHCMBHQ5DHXSDSIPAVNFY.jpg";
        if (noticia.title === ''){
            setMessage('El título no debe estar vacío');
            return false;
        }

        if (newsList.find(n => n.title === noticia.title)){
            setMessage('La noticia ya existe');
            return false;
        }

        setNewsList((prevNewsList) => {
            if (! prevNewsList.find(n=> n.title === noticia.title)){
                return [...prevNewsList, noticia]
            } else {
                setMessage('La noticia ya existe');
                return prevNewsList;
            }
        });
    }

    function onNewsDelete2(noticia){
        setNewsList((prevNewsList) => {
            return prevNewsList.filter((n) => n.title !== noticia.title);
        });
    }

    function onNewsEdit(noticia){
        setMessage(noticia.title);
    }

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    function onAlertClose() {
        setMessage(null);
    }
    
     return (
        <Fragment>
            <Title level={2}>Lista de noticias</Title>

            <button onClick={() => onAlertClose()}>
                x
            </button>


            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={newsList}

                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.urlImagen}
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.text.length > 400 ? (<p>{item.text.substring(0,400).concat('...')}</p>) : (<p>{item.text}</p>)}
                        
                        {<><Text type="secondary"> Noticia creada el {item.createdAt} por {item.author}</Text><br /><br /></>}
                        <Button type="primary" onClick={() => onNewsEdit(item)}>Editar</Button>  &nbsp;&nbsp;
                        <Button type="primary" danger="True" onClick={() => onNewsDelete2(item)}>Eliminar</Button>
                    </List.Item>
                )
            }
            />
 
            <Button type="default" onClick={handleClick}> Escribir nueva noticia </Button>
            

            <>{ message ==='' ?
                <></>
                :
                <><br/><br/>
                <Alert type="warning" message={message}  showIcon 
                //onClose={onClose}
                /></>
            
            
            }</>

            <>{isShow ?            
                <></>
                :
                <CreateNews onAddNews={onAddNews}/>
                }
                
            </>
        </Fragment>
    );
}



export default Noticias;