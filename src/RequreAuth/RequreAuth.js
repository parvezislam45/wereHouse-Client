import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebas.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation()
    if (loading) {
        return
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    if (!user.emailVerified) {
       return  <div>
            <h1 className="text-white">Your email is Not verified</h1>
            <h1 className="text-white">Please Verified Your Emil</h1>

            <button className="text-white"
                onClick={async () => {
                     sendEmailVerification();
                     alert('Sent email');
                }}
            >
                Verify email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children
};

export default RequireAuth;