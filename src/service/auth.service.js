import BaseService from "./base.service";

export default class AuthService {
    constructor() {
        this.baseService = new BaseService();
    }
    getToken() {
        return localStorage.getItem('token');
    }

    // Returns the role or sends to the login page if the token is not valid
    async getRoleOrSendToLogin(router) {
        const url = `http://localhost:3008/api/auth`;
        const token = this.getToken();
        if (!token) {
            router.push("/login");
        }
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        try {
            const res = await this.baseService.get(url, headers);
                if (res) {
                   return res.role
                }
                else {
                    router.push("/login");
                }

        } catch (error) {
            router.push("/login");
        }
    }
}
