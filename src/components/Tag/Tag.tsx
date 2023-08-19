import { bg } from "@/styles";
import { tag } from "@/util/notion/type";

export const Tag = ({ tag }: { tag: tag }) => {
    return (
        <span
            className={" mr-2 p-1 px-2 text-[black] rounded-lg whitespace-nowrap text-[12px] md:text-md"}
            style={{ backgroundColor: bg(tag.color) }}
        >
            {tag.name}
        </span>
    );
};
