import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { AuthContext } from "@/contexts/auth-context";

const ProtectedRoute = ({ children }) => {
    // const auth = useContext(AuthContext);
    // const [user, setUser] = [localStorage.getItem("user")];
    // if (!user) {
    //     return (
    //         <Navigate
    //             to="/login"
    //             replace
    //         />
    //     );
    // }
    // return children;
    const { isAuthenticated } = useSelector((state) => state.auth);

    // return isAuthenticated ? children : <Navigate to="/login" />;
    console.log("isAthenticated", isAuthenticated);

    if (!isAuthenticated) {
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
