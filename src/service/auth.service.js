import BaseService from "./base.service";
import store from "../store";
export default class AuthService {
    constructor() {
        this.baseService = new BaseService();
        this.store = store;
    }
    getToken() {
        return this.store.state.token;
    }

    // Returns the role or sends to the login page if the token is not valid
    async getRoleOrSendToLogin(router) {
        const url = `http://localhost:3008/api/auth`;
        const token = this.getToken();
        if (token === '') {
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

    async doLogin(user) {
        const url = `http://localhost:3008/api/auth/login`;
        try {
            const res = await this.baseService.post(url, user);
            return res;
        } catch (error) {
            return null;
        }
    }

    async getRoleAndOwnership(username) {
        const url = `http://localhost:3008/api/auth/${username}`
        const token = this.getToken();
        if (token === '') {
            router.push("/login");
        }
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
        };
        try {
            return await this.baseService.get(url, headers);

        } catch (error) {
            if (error.status === 401) {
                router.push("/login");
            }
        }
    }
}
