import BaseService from "./base.service";
import AuthService from "./auth.service";

export default class DeveloperService {

    constructor() {
        this.baseService = new BaseService();
        this.authService = new AuthService();
    }
    async signUp(developer) {
        const url = `http://localhost:3008/api/developers/signup`;
        return await this.baseService.post(url, developer);
    }
    async login(developer) {
        const url = `http://localhost:3008/api/developers/login`;
        return await this.baseService.post(url, developer);
    }

    async saveOffer(id) {
        const token = this.authService.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        const url = `http://localhost:3008/api/developers/save-offer/`;
        try {
            await this.baseService.post(url, { offerId: id }, headers);
            return true;
        } catch (error) {
            return false;
        }
    }

    async deleteSavedOffer(id) {
        const token = this.authService.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        const url = `http://localhost:3008/api/developers/delete-saved-offer/`;
        try {
            await this.baseService.post(url, { offerId: id }, headers);
            return true;
        } catch (error) {
            return false;
        }
    }

    async getSavedOffers() {
        const token = this.authService.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        const url = `http://localhost:3008/api/developers/saved-offers`;
        return await this.baseService.get(url, headers);
    }

}