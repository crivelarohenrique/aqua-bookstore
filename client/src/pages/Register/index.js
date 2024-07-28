import { useState } from "react";
import perfilIcon from '../../assets/login-icon.png'
import passwordIcon from '../../assets/password-icon.png'
import { RegisterContainerInput,
    RegisterFormContainer,
    RegisterFormInput,
    RegisterFormSection,
    RegisterImageInput,
    RegisterParagraph,
    RegisterSectionInput, 
    RegisterStyledLink, 
    RegisterSubmitForm, 
    RegisterTextInput, 
    RegisterTitleText,
    RegisterWrapperInput, 
    RegisterWrapperParagraph, 
    RegisterWrapperTitle 
} from "./StyledRegister";
import RegisterValidation from "../../components/RegisterValidation";
import RegisterAction from "../../components/RegisterAction";

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    
    const handleChangeRegister = (event, setError, error) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const textPlaceholder = ['Usuário', 'Senha', 'Confirme Sua Senha']
    const inputText = ['Digite o seu usuário:', 'Digite a sua senha:', 'Digite sua senha novamente:']
    const imageInputForm = [perfilIcon, passwordIcon, passwordIcon]
    return (
        <RegisterAction>
            {({ handleRegister, error, setError }) => (
                <RegisterFormSection>
                <RegisterFormContainer onSubmit={(e) => { e.preventDefault(); handleRegister(formData); }}>
                    <RegisterWrapperTitle>
                        <RegisterTitleText>Cadastre-se</RegisterTitleText>
                    </RegisterWrapperTitle>
                    <RegisterSectionInput>
                        {textPlaceholder.map((placeholder, index) => (
                            <RegisterContainerInput key={index}>
                                    <RegisterTextInput>{inputText[index]}</RegisterTextInput>
                                <RegisterWrapperInput>
                                    <RegisterImageInput src={imageInputForm[index]}
                                    />
                                    <RegisterFormInput
                                    name={index === 0 ? 'username' : index === 1 ? 'password' : 'confirmPassword'}
                                    placeholder={placeholder}
                                    type={index === 0 ? 'text' : 'password'}
                                    value={index === 0 ? formData.username : index === 1 ? formData.password : formData.confirmPassword}
                                    onChange={(event) => handleChangeRegister(event, setError, error)}
                                    />
                                </RegisterWrapperInput>
                            </RegisterContainerInput>
                        ))}
                        <RegisterValidation 
                        username={formData.username} 
                        password={formData.password} 
                        confirmPassword={formData.confirmPassword}/>
                        <RegisterSubmitForm type="submit" value='Enviar'/>
                    </RegisterSectionInput>
                    <RegisterWrapperParagraph>
                        <RegisterParagraph>
                                Já possui uma conta?  
                                <RegisterStyledLink to={'/entrar'}>Entre em sua conta!
                                </RegisterStyledLink>
                        </RegisterParagraph>
                    </RegisterWrapperParagraph>
                </RegisterFormContainer>
            </RegisterFormSection>
        )}
    </RegisterAction>
    )
}

export default Register;