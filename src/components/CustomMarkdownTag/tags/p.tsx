import { ComponentType } from "react";

const p: ComponentType<any> = ({ node, children, ...props }) => {
    return (
        <p
            style={
                {
                    // marginBottom: "10px",
                }
            }
            {...props}
        >
            {children}
        </p>
    );
};

export { p };
