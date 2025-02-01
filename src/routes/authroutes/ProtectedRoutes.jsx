import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "@/contexts/auth-context";

const ProtectedRoute = ({ children }) => {
    // const auth = useContext(AuthContext);
    const [user, setUser] = [localStorage.getItem("user")];

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    return children;
};

export default ProtectedRoute;
