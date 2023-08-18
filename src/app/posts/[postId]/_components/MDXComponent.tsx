import CustomMarkdownTag from "@/components/CustomMarkdownTag";

import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export default (props: any) => {
    return (
        <MDXRemote
            {...props}
            components={{ ...CustomMarkdownTag, ...(props.components || {}) }}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                },
            }}
        />
    );
};
