import axios from 'axios';
const API_URL = 'http://localhost:8001/api/v1';

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
export default {agetAllActors , aDelActor, aGetActorForId, aPutActor};
//export default agetAllActors;
//export default aDelActor;
//module.exports = { agetAllActors , aDelActor}
//module.exports = { agetAllActors, aDelActor }