import "./Login.css";

export default function Login() {
    return (
        <>
            <div className="background-img">
                <img src="/public/login-background.jpg" alt="nigth" />
            </div>
            <div className="container">
                <form>
                    <div className="head">
                        <div className="logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="react logo" />
                        </div>
                        <h2>LOGIN</h2>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <label>Usuario: </label>
                            <input type="text" name="user_user" placeholder="Usuario" />
                        </div>
                        <div className="input">
                            <label>Contraseña: </label>
                            <input type="password" name="user_password" placeholder="Contraseña" />
                        </div>

                        <p className="input msg">Debe ingresar todos los campos</p>

                        <div className="input">
                            <button type="submit">
                                <span>Ingresar</span>
                                <i className="fas fa-sign-in-alt"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
