import clsx from "clsx";
import { CustomButton } from "@ui/button";
import { Card } from "@ui/card";
import { Section } from "@ui/section";
import { serverFetch } from "@/data/server";
import type { RecommandedItem } from "@/types";

export const Recommended: React.FC = async () => {
  const data = await serverFetch.basic.recommended();
  return (
    <Section title="Recommended">
      {data.map((props) => (
        <RecommendedCard key={`recommended-${props.id}`} {...props} />
      ))}
    </Section>
  );
};

const RecommendedCard: React.FC<RecommandedItem> = ({ name, position, theme, image, date }) => {
  return (
    <Card styles={{ "--product": `url(${image})` } as React.CSSProperties} className={clsx("h-[22.5rem] py-[3.125rem] flex flex-col bg-white/50 basis-full sm:basis-(--1-2-basis-gap-4) lg:basis-(--1-4-basis-gap-4)", image && "bg-(image:--product) bg-cover bg-[center_top_100%] bg-no-repeat", position === "bottom" && "flex-col-reverse")}>
      <div data-card-theme={theme} className={clsx("flex flex-col gap-4", position === "center" ? "basis-full" : "basis-1/2")}>
        <div className="text-center px-4 grow flex flex-wrap text-(--card-text)">
          <div className="basis-full text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: name.replace(/\n/g, "<br/>") }} />
          <div className="basis-full text-[1.375rem] font-light">{date}</div>
        </div>
        <div>
          <CustomButton className="bg-(--card-btn-bg) text-(--card-btn-text) text-sm block rounded-lg px-4 py-2.5 mx-auto">{date ? "Add to your Calender" : "Find out more"}</CustomButton>
        </div>
      </div>
      {position !== "center" && <div className="basis-1/2"></div>}
    </Card>
  );
};
