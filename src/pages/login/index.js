import { useState } from "react";
import apiUser from '../../services/apiUser';

import jpIMG from "../../assets/jp.png";
import "../../styles.css";


function Login() {


    async function fazerLogin() {
        try {
            const response = await apiUser.post
                ('/login', {
                    login: name,
                    password: password,
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                }
                )
            window.location.href = '/home'
        }
        catch (erro) {
            alert("login ou senha invalidos!")
        }
    }


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
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title"> Bem vindo </span>

                        <span className="login-form-title">
                            <img src={jpIMG} alt="Jovem Programador" />
                        </span>
                        <div className="wrap-input">
                            <input
                                className={name !== "" ? "has-val input" : "input"}
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Nome"></span>
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

                        <div className="container-login-form-btn">

                            <button type="button" className="login-form-btn" onClick={fazerLogin}>Login</button>

                        </div>

                        <div className="text-center">
                            <span className="txt1">Não possui conta? </span>
                            <a className="txt2" href="/cadastro">
                                Criar conta
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;