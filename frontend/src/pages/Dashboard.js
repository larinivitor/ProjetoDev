import React, { useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [nome, setNome] = useState();
    const [rua, setRua] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [data_inauguracao, setData] = useState();

    function handleRegister(e) {
        e.preventDefault()

        axios.post(`http://localhost:3333/instituicoes`, {
            nome,
            rua,
            bairro,
            cidade,
            data_inauguracao
        })
        .then(res => {
            console.warn(res)
            alert(`Cadastrado! ${res.id}`);
        })
        .catch(err => {
            alert(`Erro: ${err}`);
            console.error(err);
        })
    }

    return (
        <div>
            <div>
                Nome: <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div>
                Rua: <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
            </div>
            <div>
                Bairro: <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
            </div>
            <div>
                Cidade: <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
            </div>
            <div>
                Data de Inauguração: <input type="date" value={data_inauguracao} onChange={(e) => setData(e.target.value)} />
            </div>
            <button onClick={handleRegister}>Registrar</button>
        </div>
    );
}