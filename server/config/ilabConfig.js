import dotenv from 'dotenv';
dotenv.config();

export const ilabConfig = {
    baseURL: process.env.ILAB_BASE_URL,
    token: process.env.ILAB_API_TOKEN
}