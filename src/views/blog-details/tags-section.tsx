import { Badge } from "@/components/ui/badge";
import { TBlogPost } from "@/types/cms/blog";

type Props = {
  tags: TBlogPost["tags"];
};

const TagsSection = (props: Props) => {
  const { tags } = props;
  return (
    <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:max-w-[400px]">
      <span className="text-lg uppercase font-semibold font-heading text-muted-foreground">
        Tags:
      </span>
      <div className="flex items-center flex-wrap gap-1">
        {tags.map((tag, index) => (
          <Badge
            variant={"secondary"}
            className="text-base px-5 py-2 font-heading text-muted-foreground"
            key={index}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TagsSection;
