export default class BaseService {
    async get(url, headers) {

        if (headers) {
            try {
                const res = await fetch(url, {
                    method: 'GET',
                    headers: headers
                });
                const dataRes = await res.json();
                return dataRes;
            } catch (error) {
                return
            }
        } else {
            const res = await fetch(url, {
                method: 'GET'
            });
            const dataRes = await res.json();
            return dataRes;
        }
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