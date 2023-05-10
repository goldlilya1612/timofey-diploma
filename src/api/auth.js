export const BASE_URL = "http://localhost:8080";

export const register = (data) => {
    return fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => checkResponse(res));
};

export const login = (data) => {
    return fetch(`${BASE_URL}/api/auth/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => checkResponse(res));
};
const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
