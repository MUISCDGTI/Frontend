import axios from 'axios';

const endPoint = 'https://suscripciones-amaliof96.cloud.okteto.net/api/v1/suscripciones';
const apikey = "rottenpotatoes";
export const getSuscriptions = (email, categoria) => axios.get(
    endPoint, { params:  {email: email, category:categoria, apikey: apikey} },
).then((res) => res).catch((error) => error.response);

export const createSuscription = (suscription) => axios.post(
    endPoint, suscription, { params: { apikey: apikey } },
).then((res) => res).catch((error) => error.response);

export const updateSuscription = (suscription) => axios.put(
    `${endPoint}/${suscription._id}`, suscription, { params: { apikey: apikey } },
).then((res) => res).catch((error) => error.response);

export const deleteSuscription = ({ id }) => axios.delete(
    endPoint.concat('/', id), { params: { apikey: apikey } },
).then((res) => res).catch((error) => error.response);
