import BaseService from "./base.service";

export default class DeveloperService {
    
    constructor() { 
        this.baseService = new BaseService();
    }
    async signUp(developer) {
        const url = `http://localhost:3008/api/developers/signup`;
        return  await this.baseService.post(url, developer);
    }
    async login(developer) {
        const url = `http://localhost:3008/api/developers/login`;
        return  await this.baseService.post(url, developer);
    }
}