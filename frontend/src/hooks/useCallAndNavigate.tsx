import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useApiAndNavigate = (path: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, []);
};

export default useApiAndNavigate;
