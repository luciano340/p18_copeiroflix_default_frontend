'use client';
import React from "react";
import { InputField } from "../../shared_components/input_field";

export function ForgotPasswordForm() {
    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('Enviado')
        e.preventDefault();
    };

    return (
        <form onSubmit={HandleSubmit} className='flex w-full max-w-md flex-col space-y-4 bg-[#1984A2] bg-opacity-50 px-8 py-8 shadow-2xl rounded-lg border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3)]'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className="text-2xl font-bold">
                    Recuperação de senha
                </h1>

            </div>
            <InputField id='email' name='email' label='E-mail' type='email' placeholder='Digite seu e-mail' />
            <div className='justify-center flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0 sm:justify-center'>
                <button type='submit' className='flex items-center justify-center w-full max-w-md rounded-lg bg-[#1984A2] hover:bg-[#3e95db] px-4 py-2 space-x-2 text-sm font-semibold sm:w-auto sm:px-8'>
                    Recuperar
                </button>
            </div>
        </form>
    );
}
