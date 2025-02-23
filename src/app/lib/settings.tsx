import { resolve } from "path";

export interface Geo {
    lat: string;
    lng: string;
};

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
};

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};



export const getAppSettings = (): Promise<{theme:string, language:string}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: 'dark',
                language: 'ptbr',
            });
        }, 5000);
    });
}

export const getUserInfo = () : Promise <{
    name: string;
    email: string;
    age: Number;
}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Luciano Romão',
                email: 'romao@lsrimportados.com.br',
                age: 30,
            });
        }, 5000);
    });
};


export async function GetUserById(id: string): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    return user
};