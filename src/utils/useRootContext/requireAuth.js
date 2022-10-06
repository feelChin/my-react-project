import { useLocation, Navigate } from "react-router-dom";
import userContext from "./userContext";

function RequireAuth({ children }) {
    const rootProvider = userContext();
    const { user } = rootProvider;
    const location = useLocation();

    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

export default RequireAuth