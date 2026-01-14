// frontend/src/services/counterService.js

const API_URL = "http://127.0.0.1:8000/api";

export const getCounter = async () => {
    const res = await fetch(`${API_URL}/counter`, {
        credentials: "include",
    });
    return res.json();
};

export const incrementCounter = async () => {
    const res = await fetch(`${API_URL}/counter/increment`, {
        method: "POST",
        credentials: "include",
    });
    return res.json();
};
