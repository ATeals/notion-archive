import { HeadingComponent } from "react-markdown/lib/ast-to-react";

const h1: HeadingComponent = ({ node, children, ...props }) => {
    return (
        <h1
            id={children as string}
            {...props}
        >
            {children}
        </h1>
    );
};

const h2: HeadingComponent = ({ node, children, ...props }) => {
    return (
        <h2
            id={children as string}
            {...props}
        >
            {children}
        </h2>
    );
};

const h3: HeadingComponent = ({ node, children, ...props }) => {
    return (
        <h3
            id={children as string}
            {...props}
        >
            {children}
        </h3>
    );
};

export { h1, h2, h3 };
