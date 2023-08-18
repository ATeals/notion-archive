import { ComponentPropsWithoutRef, ComponentType } from "react-markdown/lib/ast-to-react";

const pre: ComponentType<any> = ({ node, children, ...props }) => {
    return (
        <pre
            className="bg-[#ffffff] w-full m-0 p-0"
            {...props}
        >
            {children}
        </pre>
    );
};

export { pre };
