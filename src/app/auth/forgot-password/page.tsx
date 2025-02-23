import React from "react";
import { LogoAuth } from "../shared_components/logo_auth";
import { ForgotPasswordForm } from "./components/ForgotPasswordForm";


export default function ForgotPasswordPage() {
    return (
        <div>
            <div className='flex min-h-screen flex-col items-center justify-center py-2'>
                <LogoAuth/>
                <ForgotPasswordForm/>
            </div>
        </div>
    );
};


