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

    async getAppliedOffers(userId) {
        const token = this.authService.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        const url = `http://localhost:3008/api/developers/applied-offers/${userId}`;
        return await this.baseService.get(url, headers);
    }

    async updateAbout(about) {
        const token = this.authService.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };

        const url = `http://localhost:3008/api/developers/update-dev`;
        return await this.baseService.put(url, { about }, headers);
    }
    async updateLinks({ github, linkedin }) {
        const token = this.authService.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        const url = `http://localhost:3008/api/developers/update-dev`;
        return await this.baseService.put(url, { github, linkedin }, headers);
    }

    async updateAvatar(formData) {
        const token = this.authService.getToken();
        const headers = {
            'auth-token': token
        };
        // const url = `http://localhost:3008/api/developers/update-dev`;
        // return await this.baseService.put(url, { avatar }, headers);
        fetch("http://localhost:3008/api/developers/update-avatar", {
            method: "PUT",
            body: formData,
            headers: headers
        }).then((response) => {
            console.log(response);
            return response
        });
    }
    async getProfilePicture(fileName) {
        const url = `http://localhost:3008/${fileName}`;
        return await fetch(url);    
    }

    async getCVs() {
        const token = this.authService.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        const url = `http://localhost:3008/api/developers/cvs`;
        return await this.baseService.get(url, headers);
    }

    async deleteCV(cvId){
        const token = this.authService.getToken();
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        const url = `http://localhost:3008/api/developers/delete-cv/${cvId}`;
        return await this.baseService.delete(url, headers);
    }

    async createCV(formData) {
        const token = this.authService.getToken();
        const headers = {
            'auth-token': token
        };
        fetch("http://localhost:3008/api/developers/upload-cv", {
            method: "PUT",
            body: formData,
            headers: headers
        }).then((response) => {
            console.log(response);
            return response
        });
    }
}