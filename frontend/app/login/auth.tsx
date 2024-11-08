import {api} from "@/app/services/apiBase";
import {setCookie} from 'cookies-next';


export async function authenticate(email: string, password: string, setIsLoggedIn: (value: boolean) => void) {
    try {
        const response = await api.post(`/users/login/`, {
            email: email,
            password: password,
        });

        if (response.status === 200) {
            setCookie('access_token', response.data.access, {
                maxAge: 60 * 60 * 24,
            });
            setCookie('refresh_token', response.data.access, {
                maxAge: 60 * 60 * 24,
            });
            await getUser()

            setIsLoggedIn(true)

            console.log('login correct');
            console.log()
            return true;

        } else return false;

    } catch (error) {
        console.error('login error:', error);
        return false;
    }
}


export async function getUser() {
    try {
        const response = await api.get('/users/user/')
        if (response.status === 200) {
            console.log('response user', response)
            setCookie('id', response.data.id);
            setCookie('email', response.data.email);
            setCookie('username', response.data.username);
        }

    } catch (error) {
        console.error('get user error:', error);
        return false;
    }

}