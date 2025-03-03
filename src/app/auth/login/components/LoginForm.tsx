'use client';
import React, { useState } from "react";
import { InputField } from "../../shared_components/input_field";
import { useRouter } from "next/navigation";

type ServerError = {
    message: string;
}

export function LoginForm() {
    const router = useRouter();
    const [errors, setErrors] = useState<string[]>([]);

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('senha');

        try {
            const response = await fetch('/auth/login/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if(response.ok){
                router.push('/')
                return;
            }

            const payload: ServerError[] = await response.json();
            setErrors(payload.map((error) => error.message))

        } catch(error) {
            console.error('Deu ruim: ' + error);
            setErrors(['An Unkown error occurred.'])

        };
    };

    return (
        <form onSubmit={HandleSubmit} className='flex w-full max-w-md flex-col space-y-4 bg-[#1984A2] bg-opacity-50 px-8 py-8 shadow-2xl rounded-lg border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3)]'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className="text-2xl font-bold">
                    Login
                </h1>
                <p className='text=sm text-white'>
                    Novo por aqui? {' '}
                    <a href='/auth/register' className='text-blue-200 hover:underline'>
                        Registre
                    </a>
                </p>
            </div>
            <InputField id='email' name='email' label='E-mail' type='email' placeholder='Digite seu e-mail' />
            <InputField id='senha' name='senha' label='Senha' type='password' placeholder='Digite sua senha' />
            <div className='justify-center flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0 sm:justify-center'>
                <button type='submit' className='flex items-center justify-center w-full max-w-md rounded-lg bg-[#1984A2] hover:bg-[#3e95db] px-4 py-2 space-x-2 text-sm font-semibold sm:w-auto sm:px-8'>
                    Entrar
                </button>
            </div>
        </form>
    );
}
