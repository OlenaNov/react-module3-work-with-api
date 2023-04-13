import axios from 'axios';

axios.defaults.baseURL = 'https://6435ab5d83a30bc9ad671d0f.mockapi.io'

export const addMaterial = async values => {
    const response = await axios.post('/materials', values);
    return response.data;
};

export const getMaterials = async () => {
    const response = await axios.get('/materials');
    return response.data;
};

export const deleteMaterial = async id => {
    const response = await axios.delete(`/materials/${id}`);
    return response.data;
};

export const updateMaterial = async field => {
    const response = await axios.put(`/materials/${field.id}`, field);
    return response.data;
};