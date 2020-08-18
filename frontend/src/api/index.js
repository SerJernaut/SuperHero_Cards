import axiosInstance from "./interceptors";

export const createSuperHeroCard = async data => axiosInstance.post('/create_superhero_card', data);
export const getSuperHeroCards = async data => axiosInstance.post('/get_paginated_cards', data);
export const getSuperHeroCardCardById = async data => axiosInstance.post('/get_card_by_id', data);
export const updateCardById = async data => axiosInstance.post('/update_card_by_id', data)