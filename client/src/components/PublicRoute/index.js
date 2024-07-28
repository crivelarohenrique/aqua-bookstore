import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const PublicRoute = ({ element }) => {
    const { authenticated } = useContext(AuthContext);

    return authenticated ? <Navigate to="/"/> : element
};

export default PublicRoute;