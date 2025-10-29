import { useForm } from "react-hook-form";
import { accRegister } from "../../../services/auth";

const useRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();

  const handleRegister = async (data) => {
    const res = await accRegister(data);

    const json = await res.json();

    console.log(json);
  };

  return {
    register,
    handleSubmit,
    isSubmitting,
    handleRegister,
    errors,
    watch,
  };
};

export default useRegister;
