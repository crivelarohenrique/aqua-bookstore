import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function LoginAction({ children }) {
    const { login } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        try {
            await login({ username: formData.username.toLowerCase(), password: formData.password });
            navigate('/');
            Swal.fire({
                icon: 'success',
                showConfirmButton: true,
                confirmButtonColor: 'blue',
                text: `Bem vindo ${formData.username.charAt(0).toUpperCase() + formData.username.toLowerCase().slice(1)}`,
                background: 'black',
                color: 'white'
            });
        } catch (error) {
            setError(true);
            Swal.fire({
                icon: 'error',
                showConfirmButton: false,
                title: 'Erro!',
                text: 'Usuário ou senha incorretos!',
                timer: 1000,
                background: 'black',
                color: 'white'
            });
        }
    };

    return children({ handleLogin, error, setError });
}

export default LoginAction;
