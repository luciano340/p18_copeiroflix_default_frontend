'use client';
import React, { useState, useEffect } from "react";
import { InputField } from "../../shared_components/input_field";

export function RegisterForm() {
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');

    // Função para buscar os estados
    useEffect(() => {
        const fetchEstados = async () => {
            const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
            const data = await response.json();
            setEstados(data);
        };
        fetchEstados();
    }, []);

    // Função para buscar as cidades de um estado
    useEffect(() => {
        const fetchCidades = async () => {
            if (estadoSelecionado) {
                const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/distritos`);
                const data = await response.json();
                setCidades(data);
            }
        };
        fetchCidades();
    }, [estadoSelecionado]);

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert('Registrado!')
        e.preventDefault();
    };

    return (
        <form onSubmit={HandleSubmit} className='flex w-full max-w-md flex-col space-y-4 bg-[#1984A2] bg-opacity-50 px-8 py-8 shadow-2xl rounded-lg border border-gray-300'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className="text-2xl font-bold">
                    Registro
                </h1>
                <p className='text=sm text-white'>
                    Já possui uma conta? {' '}
                    <a href='auth/login' className='text-blue-200 hover:underline'>
                        Entrar
                    </a>
                </p>
            </div>
            <InputField id='nome' name='nome' label='Nome' type='text' placeholder='Digite seu nome' />
            <InputField id='sobrenome' name='sobrenome' label='Sobrenome' type='text' placeholder='Digite seu sobrenome' />
            
            <div className="flex flex-col">
                <label htmlFor="estado" className="text-white">Estado</label>
                <select
                    id="estado"
                    name="estado"
                    value={estadoSelecionado}
                    onChange={(e) => setEstadoSelecionado(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-black"
                >
                    <option value=''></option>
                    {estados.map((estado) => (
                        <option key={estado.id} value={estado.id}>
                            {estado.nome} ({estado.sigla})
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col">
                <label htmlFor="cidade" className="text-white">Cidade</label>
                <select
                    id="cidade"
                    name="cidade"
                    value={cidadeSelecionada}
                    onChange={(e) => setCidadeSelecionada(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-black"
                >
                    <option value=""></option>
                    {cidades.map((cidade) => (
                        <option key={cidade.id} value={cidade.id}>
                            {cidade.nome}
                        </option>
                    ))}
                </select>
            </div>
            
            <InputField id='email' name='email' label='E-mail' type='email' placeholder='Digite seu e-mail' />
            <InputField id='senha' name='senha' label='Senha' type='password' placeholder='Digite sua senha' />
            <InputField id='senha_confirm' name='senha_confirm' label='Confirme sua senha' type='password' placeholder='Confirme a sua senha' />
            <div className='justify-center flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0 sm:justify-center'>
                <button type='submit' className='flex items-center justify-center w-full max-w-md rounded-lg bg-[#1984A2] hover:bg-[#3e95db] px-4 py-2 space-x-2 text-sm font-semibold sm:w-auto sm:px-8'>
                    Registrar!
                </button>
            </div>
        </form>
    );
}
