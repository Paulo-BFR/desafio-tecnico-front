import React from 'react';
import { useState } from "react";
import apiUser from '../../services/apiUser';
import "../../styles.css";



function Cadastro() {


    function show() {
        var senha = document.getElementById("senha");
        if (senha !== null) {
            if (senha.type === "password") {
                senha.type = "text";
            } else {
                senha.type = "password";
            }
        }
    }
    function show2() {
        var senha2 = document.getElementById("senha2");
        if (senha2 !== null) {
            if (senha2.type === "password") {
                senha2.type = "text";
            } else {
                senha2.type = "password";
            }
        }
    }


    async function criarConta() {
        if (name === "") {
            alert("insira um login!")
            return
        }

        if (password === "") {
            alert("insira uma senha!")
            return
        }
        if (password !== confimarsenha) {
            alert("Confirmação senha invalida")
            return
        }
        if (email === "") {
            alert("insira uma email válido!")
            return
        }
        try {
            const response = await apiUser.post
                ('/cadastrar', {
                    login: name,
                    password: password
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                }
                )
            window.location.href = '/'
        }
        catch (erro) {
            alert(erro)
        }
    }

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confimarsenha, setconfimarsenha] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">Cadastro</span>


                        <div className="wrap-input">
                            <input
                                className={name !== "" ? "has-val input" : "input"}
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Login"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                value={password}
                                id='senha'
                                onChange={(e) => setPassword(e.target.value)}

                            />

                            <span className="focus-input" data-placeholder="Senha" name="senha"></span>
                            <a onClick={show}>
                                <img className="olho" src="http://i.stack.imgur.com/H9Sb2.png" alt="olho" />
                            </a>
                        </div>
                        <div className="wrap-input">
                            <input
                                className={confimarsenha !== "" ? "has-val input" : "input"}
                                type="password"
                                value={confimarsenha}
                                id='senha2'
                                onChange={(e) => setconfimarsenha(e.target.value)}

                            />

                            <span className="focus-input" data-placeholder="Confirmar senha" name="Confirmarsenha"></span>
                            <a onClick={show2}>
                                <img className="olho" src="http://i.stack.imgur.com/H9Sb2.png" alt="olho" />
                            </a>
                        </div>
                        <div className="wrap-input">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button type='button' className="login-form-btn" onClick={criarConta} >Criar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Cadastro;