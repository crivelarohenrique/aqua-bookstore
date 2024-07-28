import { Navigate } from "react-router-dom";
import { ContainerLoading, LoadingMessage } from "./StyledPrivateRoute";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const PrivateRoute = ({ element }) => {
  const { authenticated, loading } = useContext(AuthContext);
    
    if (loading) {
      return <ContainerLoading>
                  <LoadingMessage>...</LoadingMessage>
              </ContainerLoading>
    }

    return authenticated ? element : <Navigate to="/entrar" />;
};

export default PrivateRoute;