import axios from 'axios';
const API_URL = 'http://localhost:8002/api/v1';

const agetAllActors = () => {
    return axios.get(`${API_URL}/actors`).then((response) => response.data);
}

const aDelActor = (id) => {
    return axios.delete(`${API_URL}/actor/${id}`).then((response) => response.data);
}

const aGetActorForId = (id) => {
    return axios.get(`${API_URL}/actor/${id}`).then((response) => response.data);
}

const aPutActor = (id, actor) => {
    return axios.put(`${API_URL}/actor/${id}`, actor).then((response) => response.data);
}

const aInsertActor = (actor) => {
    return axios.post(`${API_URL}/actor/`, actor).then((response) => response.data);
}
export default {agetAllActors , aDelActor, aGetActorForId, aPutActor, aInsertActor};
//export default agetAllActors;
//export default aDelActor;
//module.exports = { agetAllActors , aDelActor}
//module.exports = { agetAllActors, aDelActor }