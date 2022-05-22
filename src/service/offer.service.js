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
        return await this.baseService.get(url, { 'auth-token': token });
    }
    async getOffer(id) {
        const url = `http://localhost:3008/api/offers/${id}`;
        return await this.baseService.get(url);
    }
    async createOffer(offer) {
        const token = this.authService.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        const url = `http://localhost:3008/api/offers/create`;
        return await this.baseService.post(url, offer, headers);
    }
    async updateOffer(offer) {
        const url = `http://localhost:3008/api/offers/${offer.id}`;
        return await this.baseService.put(url, offer);
    }
    async deleteOffer(id) {
        const url = `http://localhost:3008/api/offers/${id}`;
        return await this.baseService.delete(url);
    }
    async findOfferByTitle(input) {
        const url = `http://localhost:3008/api/offers/search/${input}`;
        return await this.baseService.get(url);
    }

    // Convert salary string to number
    convertSalary(salary) {
        if (salary.includes('-')) {
            const salaryArray = salary.split('-');
            return {
                min: this.convertNumberToDots(parseInt(salaryArray[0])),
                max: this.convertNumberToDots(parseInt(salaryArray[1]))
            }
        } else {
            return this.convertNumberToDots(parseInt(salary)); 
        }
    }

    // Add separators to salary
    convertNumberToDots(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // filter offers by filters
    filterOffers(offers, filters) {
        let filteredOffers = offers;
        if(filters.salary != ""){
            
            filteredOffers = filteredOffers.filter(offer => {
                const salary = this.convertSalary(offer.salary.amount);
                let intSalary = parseInt(filters.salary);
                if( salary.min>= intSalary){
                    return offer;
                }
            })
        }
        if(filters.location != ""){
            filteredOffers = filteredOffers.filter(offer => {
                if(offer.location.toLowerCase().includes(filters.location.toLowerCase())){
                    return offer;
                }
            })
        }

        if(filters.complete){
            filteredOffers = filteredOffers.filter(offer => {
                if(offer.featured){
                    return offer;
                }
            })
        }
        
        return filteredOffers;
    }
        


}