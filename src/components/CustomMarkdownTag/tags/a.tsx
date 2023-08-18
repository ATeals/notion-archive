import BookMark, { SkeletonBookmark } from "@/components/BookMark";
import { Suspense } from "react";
import { ComponentType } from "react-markdown/lib/ast-to-react";

const a: ComponentType<any> = ({ node, children, ...props }) => {
    return (
        <>
            <a
                className="italic font-bold mx-1 text-[#292E85]"
                style={
                    {
                        // marginBottom: "10px",
                    }
                }
                {...props}
            >
                {children}
            </a>
        </>
    );
};

export { a };
