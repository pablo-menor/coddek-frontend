import BaseService from "./base.service";
import AuthService from "./auth.service";

export default class ChallengeService {
    constructor() {
        this.baseService = new BaseService();
        this.authService = new AuthService();
    }

    async save(formData) {
        const url = `http://localhost:3008/api/challenges`;
        const res = await fetch(url, {
            method: "POST",
            body: formData,
        })
        const data = await res.json();
        return data;
    }

    async getById(id) {
        const url = `http://localhost:3008/api/challenges/${id}`;
        const res = this.baseService.get(url);
        return res;
    }

    async uploadSolution(formData, offerId) {
        const url = `http://localhost:3008/api/offers/upload-solution/${offerId}`;
        const res = await fetch(url, {
            method: "POST",
            body: formData,
            headers: {
                "auth-token": this.authService.getToken(),
            }
        })
        const data = await res.json();
        return data;
    }
}