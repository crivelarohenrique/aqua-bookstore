import { useEffect, useState } from "react";
import { RegisterValidationContainer, 
    RVFlexContainer, 
    RVInput, 
    RVText, 
    RVWrapper, 
} from "./StyledRegisterValid";

function RegisterValidation({ username, password, confirmPassword }) {
    const [validCriteria, setValidCriteria] = useState({
        usernameLength: false,
        hasUppercase: false,
        hasNumber: false,
        hasLowercase: false,
        hasSpecialChar: false,
        passwordLength: false,
        passwordMatch: false,
    });

    const ValidInputText = [
        'Usuário 8-16 caracteres',
        'Senha mínimo de 8 caracteres',
        'Senha com uma maiúscula',
        'Senha com uma minúscula',
        'Senha com um número',
        'Senha com um caractere especial',
        
        'As senhas coincidem'
    ];

    useEffect(() => {
        const validateUsername = () => {
            setValidCriteria(prevState => ({
                ...prevState,
                usernameLength: username.length >= 8 && username.length <= 16,
            }));
        };

        const validatePassword = () => {
            setValidCriteria(prevState => ({
                ...prevState,
                passwordLength: password.length >= 8,
                hasUppercase: /[A-Z]/.test(password),
                hasNumber: /[0-9]/.test(password),
                hasLowercase: /[a-z]/.test(password),
                hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            }));
        };

        const validatePasswordMatch = () => {
            setValidCriteria(prevState => ({
                ...prevState,
                passwordMatch:
                 password === confirmPassword && 
                 password.length >= 7,
            }))
        }

        validateUsername();
        validatePassword();
        validatePasswordMatch();
    }, [username, password, confirmPassword]);

    return (
        <RegisterValidationContainer>
            <RVWrapper>
            {ValidInputText.map((text, index) => {
                const isChecked = (() => {
                    switch (index) {
                        case 0: return validCriteria.usernameLength;
                        case 1: return validCriteria.passwordLength;
                        case 2: return validCriteria.hasUppercase;
                        case 3: return validCriteria.hasLowercase;
                        case 4: return validCriteria.hasNumber;
                        case 5: return validCriteria.hasSpecialChar;
                        case 6: return validCriteria.passwordMatch;
                        default: return false;
                    }
                })();
                return (
                        <RVFlexContainer key={index}>
                            <RVInput checked={isChecked} readOnly />
                            <RVText checked={isChecked}>{text}</RVText>
                        </RVFlexContainer>
                );
            })}
            </RVWrapper>
        </RegisterValidationContainer>
    );
}

export default RegisterValidation;
