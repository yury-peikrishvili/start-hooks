import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const NumeratorComponent = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            number: index + 1
        };
        console.log(child.props.innerHTML);
        return React.cloneElement(child, config);
    });
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumeratorComponent>
                <Component />
                <Component />
                <Component />
            </NumeratorComponent>
        </CollapseWrapper>
    );
};

NumeratorComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ number }) => {
    return <div>{number} Компонент списка</div>;
};

Component.propTypes = {
    number: PropTypes.number
};
export default ChildrenExercise;
