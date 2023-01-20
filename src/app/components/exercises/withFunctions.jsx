import React, { useState } from "react";
import Card from "../common/Card.jsx";
const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"));
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        setIsAuth("token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        setIsAuth("");
    };

    return (
        <>
            <Card>
                <Component
                    {...props}
                    isAuth={isAuth}
                    onLogOut={onLogOut}
                    onLogin={onLogin}
                />
            </Card>
        </>
    );
};

export default withFunctions;
