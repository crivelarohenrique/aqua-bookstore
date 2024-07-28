import styled from 'styled-components';
import { theme } from '../../styles/theme';

const RegisterValidationContainer = styled.div`
    position: relative;
    width: 20%;
    bottom: 24%;
    height: auto;
    margin-left: 10%;
`;

const RVWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 2em;
    height: auto;
    margin-left: 2%;
`;


const RVFlexContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 12%;
    height: 100%;
`;

const RVText = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.6em;
    white-space: nowrap;
    color: ${(props) => (props.checked ? "green" : theme.colors.activeTextColor)};
    cursor: default;
    margin: 0 1em;

    @media (min-width: 768px) and (max-width: 1279px) {
        font-size: 1em;
    }

    @media (min-width: 1280px) {
        font-size: 1em;
    }
`;

const RVInput = styled.input.attrs({ type: 'checkbox'})`
    pointer-events: none;
`;

export {
    RegisterValidationContainer,
    RVWrapper,
    RVFlexContainer,
    RVInput,
    RVText
};
