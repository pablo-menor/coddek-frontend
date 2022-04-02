export default class BaseService {
    async get(url) {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    async post(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const dataRes = await res.json();
        return dataRes;
    }
    async put(url, data) {
        const res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const dataRes = await res.json();
        return dataRes;
    }
    async delete(url) {
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const dataRes = await res.json();
        return dataRes;
    }
}