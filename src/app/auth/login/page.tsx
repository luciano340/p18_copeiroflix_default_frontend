import React from "react";
import { LogoAuth } from "../shared_components/logo_auth";
import { LoginForm } from "./components/LoginForm";


export default function LoginPage() {
    return (
        <div>
            <div className='flex min-h-screen flex-col items-center justify-center py-2'>
                <LogoAuth/>
                <LoginForm/>
            </div>
        </div>
    );
};


