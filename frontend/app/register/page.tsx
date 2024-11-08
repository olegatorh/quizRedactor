"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";
import {registration} from "@/app/register/registration";


export default function RegistrationPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const router = useRouter()

    const handleRegister = async (e: any) => {
        e.preventDefault();
        if (password !== password2) {
            console.error('Паролі не співпадають');
            return;
        }
        try {
            const isRegistered =  await registration(username, email, password)
            console.log('успішно зареєстрований хуєсос');
            if (isRegistered) {
                router.push('/login')
            } else console.error('Registration error')
        }
        catch (error) {
            console.log('registration error')
        }
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="Username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
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
                <div>
                    <label htmlFor="password">pass</label>
                    <input
                        type="password"
                        id="password2"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Registration</button>
            </form>
        </div>

    )

}

