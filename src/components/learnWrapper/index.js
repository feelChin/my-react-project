import { Children } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Head from "../../components/head";

function App({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state?.title;

  return (
    <>
      <Head
        title={title}
        back={() => {
          navigate(-1);
        }}
      />
      {children}
    </>
  );
}

export default App;
