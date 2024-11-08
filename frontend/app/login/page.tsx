"use client"

import {useRouter} from "next/navigation";
import {useState} from "react";
import {authenticate} from "@/app/login/auth";
import {useAuth} from "@/app/services/AuthContext";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const {setIsLoggedIn} = useAuth()

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const isAuth = await authenticate(email, password, setIsLoggedIn)
            if (isAuth) {
                router.push('/quiz')
            }
            else console.error('Authentication failed')
        }
        catch (error) {
            console.log('login error', error)
        }
    }

    return (
        <div>
            <h1>Логін</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">pass</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
