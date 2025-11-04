import { useForm } from "react-hook-form";
import { login } from "../../../services/auth";
import useAccountStore from "../../../stores/useAccountStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();
  const { setToken, setAccount } = useAccountStore();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Login Fail");
      }
      setToken(json.token);
      setAccount(json.user);
      navigate("/dashboard");
      toast.success("User Login successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Login Fail");
    }
  };

  return {
    register,
    handleSubmit,
    isSubmitting,
    handleLogin,
    errors,
    watch,
  };
};

export default useLogin;
