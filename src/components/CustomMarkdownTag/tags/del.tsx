import { ComponentType } from "react-markdown/lib/ast-to-react";

const del: ComponentType<any> = ({ node, children, ...props }) => {
    return (
        <>
            <del {...props}>{children}</del>
        </>
    );
};

export { del };
