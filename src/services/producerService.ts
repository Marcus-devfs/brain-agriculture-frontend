// src/services/producerService.ts
import api from './api';

export const createFullProducer = async (data: any) => {
    try {
        const response = await api.post('/producers', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
