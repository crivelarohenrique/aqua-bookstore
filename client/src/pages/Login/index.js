import { useState } from "react";
import perfilIcon from '../../assets/login-icon.png'
import passwordIcon from '../../assets/password-icon.png'
import { LoginContainerInput, 
    LoginFormContainer, 
    LoginFormInput, 
    LoginFormSection, 
    LoginImageInput, 
    LoginParagraph, 
    LoginSectionInput, 
    LoginStyledLink, 
    LoginSubmitForm, 
    LoginTextInput, 
    LoginTitleText, 
    LoginWrapperInput, 
    LoginWrapperParagraph, 
    LoginWrapperTitle 
} from "./StyledLogin";
import LoginAction from "../../components/LoginAction";

function Login() {
    const textPlaceholder = ['Usuário', 'Senha']
    const inputText = ['Digite o seu usuário:', 'Digite a sua senha:']
    const imageInputForm = [perfilIcon, passwordIcon]
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e, setError) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError(false)
    };

    return (
        <LoginAction>
            {({ handleLogin, setError, error }) => (
                <LoginFormSection>
                <LoginFormContainer onSubmit={(e) => {e.preventDefault(); handleLogin(formData);}}>
                    <LoginWrapperTitle>
                        <LoginTitleText>Entrar</LoginTitleText>
                    </LoginWrapperTitle>
                    <LoginSectionInput>
                        {textPlaceholder.map((placeholder, index) => (
                            <LoginContainerInput key={index}>
                                    <LoginTextInput>{inputText[index]}</LoginTextInput>
                                <LoginWrapperInput>
                                    <LoginImageInput src={imageInputForm[index]}/>
                                    <LoginFormInput
                                    name={index === 0 ? 'username' : 'password'}
                                    placeholder={placeholder}
                                    type={index === 0 ? 'text' : 'password'}
                                    value={index === 0 ? formData.username : formData.password }
                                    onChange={(e) => handleChange(e, setError)}
                                    onError={error ? () => {} : undefined}
                                    />
                                </LoginWrapperInput>
                            </LoginContainerInput> 
                        ))}
                        <LoginSubmitForm type='submit' value='Entrar'/>
                    </LoginSectionInput>
                    <LoginWrapperParagraph>
                        <LoginParagraph>
                                Ainda não possui uma conta?  
                                <LoginStyledLink to={'/cadastre-se'}>Cadastre-se já!
                                </LoginStyledLink>
                        </LoginParagraph>
                    </LoginWrapperParagraph>
                </LoginFormContainer>
            </LoginFormSection>
        )}
    </LoginAction>
    )
}

export default Login;