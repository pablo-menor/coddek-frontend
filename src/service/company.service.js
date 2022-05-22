import BaseService from "./base.service";
import AuthService from "./auth.service";

export default class CompanyService {

    constructor() {
        this.baseService = new BaseService();
        this.authService = new AuthService();
    }
    async signUp(company) {
        const url = `http://localhost:3008/api/companies/signup`;
        return await this.baseService.post(url, company);
    }
    async login(company) {
        const url = `http://localhost:3008/api/companies/login`;
        return await this.baseService.post(url, company);
    }

    async updateWeb(website) {
        const token = this.authService.getToken();
        const headers = {
            'auth-token': token,
            'Content-Type': 'application/json',
        };
        const url = `http://localhost:3008/api/companies/update-company`;
        return await this.baseService.put(url, { website }, headers);
    }

    async updateAbout(about) {
        const token = this.authService.getToken();
        const headers = {
            'auth-token': token,
            'Content-Type': 'application/json',
        };
        const url = `http://localhost:3008/api/companies/update-company`;
        return await this.baseService.put(url, { about }, headers);
    }
    async updateAvatar(formData) {
        const token = this.authService.getToken();
        const headers = {
            'auth-token': token
        };
        // const url = `http://localhost:3008/api/developers/update-dev`;
        // return await this.baseService.put(url, { avatar }, headers);
        fetch("http://localhost:3008/api/companies/update-avatar", {
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
}