import { use, useState } from "react"
import { useAuth } from "../contexts/auth";

export default function Login() {
    const [form, setForm] = useState({ username: '', password: '' })
    const { signed, Login } = useAuth();
    console.log(signed);

    async function handleLogin() {
        await Login({
            email: 'ducilio.manjate@test.com',
            password: '1234',
        });
    }

    return (
        <>
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}


