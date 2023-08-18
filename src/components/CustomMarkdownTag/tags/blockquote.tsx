import { ComponentType } from "react-markdown/lib/ast-to-react";

const blockquote: ComponentType<any> = ({ node, children, ...props }) => {
    return (
        <blockquote
            className="my-10 mx-[15px] p-1 dark:bg-[#2A2A2A] bg-[#efefef] pt-2 pt-5"
            style={{
                borderLeft: "5px solid #577CF1",
            }}
            {...props}
        >
            {children}
        </blockquote>
    );
};

export { blockquote };
