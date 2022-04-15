import BaseService from "./base.service";

export default class CompanyService {
    
    constructor() { 
        this.baseService = new BaseService();
    }
    async signUp(company) {
        const url = `http://localhost:3008/api/companies/signup`;
        return  await this.baseService.post(url, company);
    }
    async login(company) {
        const url = `http://localhost:3008/api/companies/login`;
        return  await this.baseService.post(url, company);
    }
}