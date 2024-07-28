import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { apiCreateUser } from "../../services/UserService";

function RegisterAction({ children }) {
    const [error, setError] = useState({
        username: false,
        password: false,
        confirmPassword: false
    });

    const navigate = useNavigate();

    const handleRegister = async (formData) => {
        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                text: 'As senhas não coincidem',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'blue'
            });
            setError({
                username: false,
                password: true,
                confirmPassword: true
            });
            return;
        }

        try {
            await apiCreateUser(formData.username, formData.password);
            Swal.fire({
                icon: 'success',
                showConfirmButton: true,
                title: 'Sucesso!',
                text: 'Usuário criado com sucesso!',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'blue',
                background: 'black'
            });
            navigate('/entrar');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                showConfirmButton: false,
                title: 'Erro!',
                text: 'Erro ao criar usuário ou usuário já existe!',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'blue',
                background: 'black',
                timer: 1000
            });
            setError({
                username: true,
                password: false,
                confirmPassword: false
            });
        }
    };

    return children({ handleRegister, error, setError });
}

export default RegisterAction;
