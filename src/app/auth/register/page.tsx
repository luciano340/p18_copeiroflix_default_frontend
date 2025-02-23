import React from "react";
import { LogoAuth } from "../shared_components/logo_auth";
import { RegisterForm } from "./components/registerForm";


export default function RegisterPage() {
    return (
        <div>
            <div className='flex min-h-screen flex-col items-center justify-center py-2'>
                <LogoAuth/>
                <RegisterForm/>
            </div>
        </div>
    );
};


