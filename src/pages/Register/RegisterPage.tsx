import { Link, redirect } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { RegisterForm } from "../../models/auth";
import { registerService } from "../../service/auth/auth.service";

import "./RegisterPage.scss";

const RegisterPage = () => {
    const { values, handleChange } = useForm<RegisterForm>({
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const resp = await registerService(values);
            if (resp) redirect("/login");

            throw new Error("Registro fallido");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="RegisterPage">
            <div className="RegisterPage__header">
                <Link className="RegisterPage__header__back" to="/login" replace>
                    Volver
                </Link>
            </div>
            <h1>RegisterPage</h1>
            <form className="RegisterPage__form" onSubmit={handleSubmit}>
                {Object.keys(values).map((key) => (
                <div className="RegisterPage__form__field">
                    <label className="RegisterPage__form__label">{key}</label>
                    <input
                    className="RegisterPage__form__input"
                    required
                    type={
                        key == "email"
                        ? "email"
                        : key == "password" || key == "confirmPassword"
                        ? "password"
                        : "text"
                    }
                    value={values[key as keyof RegisterForm]}
                    name={key}
                    onChange={handleChange}
                    />
                </div>
                ))}
                <button className="RegisterPage__form__button" type="submit">
                Register account
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
