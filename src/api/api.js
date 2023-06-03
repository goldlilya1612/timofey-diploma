export const BASE_URL = "http://localhost:8000";

export const register = (data) => {
    return fetch(`${BASE_URL}/api/v1/clients/create`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => checkResponse(res));
};

export const login = ({username, password}) => {
    return fetch(`${BASE_URL}/api/v1/clients/token`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username,
            password,
        })
    }).then((res) => checkResponse(res));
};

export const getBuildings = (token) => {
    return fetch(`${BASE_URL}/api/v1/buildings/get-all`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`
        },
    }).then((res) => checkResponse(res));
};

export const createApplication = (token, {building}) => {
    return fetch(`${BASE_URL}/api/v1/buildings/${building}/create`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    }).then((res) => checkResponse(res));
};
const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
