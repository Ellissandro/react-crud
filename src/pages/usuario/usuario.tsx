import React, { useEffect, useState } from 'react';
import '../../pages/usuario/usuario.scss'
import api from '../../shared/services/serverService'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

interface Usuario {
    idusuario: number;
    primeironome: string;
    sobrenome: string;
    email: string;
    idade: number;
    sexo: string;
}

const Usuario = () => {
    const [users, setUsers] = useState<Usuario[]>([]);
    let particles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < 1000; i++) {
        particles.push(i)
    }
    useEffect(() => {
        api.get('user').then(response => {
            setUsers(response.data);
        },
        )
    }, [])



    return (
        <section>
            <div>
                <div className="card card-custom"></div>
                <div className="container" style={{ marginTop: '-360px' }}>
                    <div className="card p-5">
                        <div className="d-flex justify-content-end">
                            <Fab className="bg-theme" color="secondary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th className="text-center" scope="col">Idade</th>
                                    <th className="text-center" scope="col">Sexo</th>
                                    <th className="text-center" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => (
                                    <tr key={user.idusuario} className="animate__animated animate__fadeIn">
                                        <td>{i + 1}</td>
                                        <td>{user.primeironome} {user.sobrenome}</td>
                                        <td>{user.email}</td>
                                        <td className="text-center">{user.idade}</td>
                                        <td className="text-center">{user.sexo.charAt(0)}</td>
                                        <td className="text-center">
                                            <button title="Editar" className="mr-2 valign-middle">
                                                <div className="d-flex align-items-center">
                                                    <EditIcon className="color-theme" />
                                                </div>
                                            </button>
                                            <button title="Excluir" className="text-danger valign-middle">
                                                <div className="d-flex align-items-center">
                                                    <DeleteIcon />
                                                </div>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                            <div id="particle-container">
                                {particles.map((p, i) => (
                                    <div key={i} className="particle"></div>
                                ))}
                            </div>


                        </table>
                        {
                            users.length === 0 ?
                                <div className="text-muted mt-3 text-center">
                                    <span>Nenhum registro encontrado</span>
                                </div>
                                : <div></div>
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Usuario;