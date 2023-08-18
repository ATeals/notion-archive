import { ComponentType } from "react-markdown/lib/ast-to-react";

const strong: ComponentType<any> = ({ node, children, ...props }) => {
    return (
        <strong
            className=" dark:text-[#577cf1] text-[#292E85]"
            {...props}
        >
            {children}
        </strong>
    );
};

export { strong };
