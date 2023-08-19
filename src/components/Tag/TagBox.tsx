import { tag } from "@/util/notion/type";
import { Tag } from "./Tag";

export const TagBox = ({ tags }: { tags: tag[] }) => {
    return (
        <div className="overflow-scroll flex flex-nowarp my-1">
            {tags.map((tag) => (
                <Tag
                    tag={tag}
                    key={tag.id}
                />
            ))}
        </div>
    );
};
