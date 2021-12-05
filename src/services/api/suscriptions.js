import axios from 'axios';

const endPoint = 'https://suscripciones-amaliof96.cloud.okteto.net/api/v1/suscripciones';

export const getSuscriptions = () => axios.get(
    endPoint,
).then((res) => res).catch((error) => error.response);

export const createSuscription = (suscription) => axios.post(
    endPoint, suscription,
).then((res) => res).catch((error) => error.response);

export const updateSuscription = (suscription) => axios.put(
    `${endPoint}/${suscription._id}`, suscription,
).then((res) => res).catch((error) => error.response);

export const deleteSuscription = ({ id }) => axios.delete(
    endPoint.concat('/', id),
).then((res) => res).catch((error) => error.response);