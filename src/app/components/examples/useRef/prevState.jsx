import React, { useState, useRef, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
        console.log(otherState);
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev State: {prevState.current} </p>
            <p>other State: {otherState} </p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                toggle Other State
            </button>
        </CardWrapper>
    );
};
export default PrevStateExample;
