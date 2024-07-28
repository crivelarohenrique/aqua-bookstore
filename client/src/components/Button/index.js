import { AddButton } from "./StyledButton";
import PropTypes from 'prop-types';

function Button({ onClick, width, value, icon, justifyContent, height, disabled, gap, backgroundColor}) {
    return (
        <AddButton
            onClick={disabled ? undefined : onClick}
            width={width}
            height={height}
            gap={gap}
            backgroundColor={backgroundColor}
            justifyContent={justifyContent}
            style={{
                cursor: disabled ? 'default' : 'pointer',
                opacity: disabled ? '0.7' : 1,
            }}
            disabled={disabled}
        >
            {icon} {value}
        </AddButton>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.node,
    justifyContent: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
