import BaseService from "./base.service";
import AuthService from "./auth.service";

export default class OfferService {
        
        constructor() { 
            this.baseService = new BaseService();
            this.authService = new AuthService();
        }
        async getAllActiveOffers() {
            const token = this.authService.getToken();
            const url = `http://localhost:3008/api/offers`;
            return await this.baseService.get(url, {'auth-token': token});
        }
        async getOffer(id) {
            const url = `http://localhost:3008/api/offers/${id}`;
            return  await this.baseService.get(url);
        }
        async createOffer(offer) {
            const url = `http://localhost:3008/api/offers`;
            return  await this.baseService.post(url, offer);
        }
        async updateOffer(offer) {
            const url = `http://localhost:3008/api/offers/${offer.id}`;
            return  await this.baseService.put(url, offer);
        }
        async deleteOffer(id) {
            const url = `http://localhost:3008/api/offers/${id}`;
            return  await this.baseService.delete(url);
        }
    }