import client from './client';
export const search = (keyword) => client.get(`/search/${keyword}`);
