import axios from 'axios';

//tạo instance bằng axios để quản lý link api

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};
export default request;
