async function validateCredentials(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const usernameLength = /^.{8,16}$/;
    const minLengthRegex = /^.{8,}$/
    const uppercaseRegex = /[A-Z]/
    const lowercaseRegex = /[a-z]/
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    const isUsernameLengthValid = usernameLength.test(username);
    const isMinLengthValid = minLengthRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);

    if (
        isUsernameLengthValid &&
        isMinLengthValid &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecialChar 
    ) {
        next();
    } else {
        return res.status(400).json({ error: 'Nome de usuário ou senha não atende aos requisitos mínimos!'})
    }
}

module.exports = validateCredentials