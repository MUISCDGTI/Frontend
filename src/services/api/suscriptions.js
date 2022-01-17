import axios from 'axios';

const endPoint = 'https://suscripciones-amaliof96.cloud.okteto.net/api/v1/suscripciones';
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvdHRlbnBvdGF0b2VzIiwiaWF0IjoxNjQyNDE5Mzk3fQ.TrSSr2aRHzQyQTsVg3DVwM0NvvzixVcJw_MwyVcwy8s";
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