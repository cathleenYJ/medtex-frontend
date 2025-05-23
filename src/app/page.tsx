import { BannerContainer } from "@ui/banner-container";

export default function Home() {
  return (
    <div data-home>
      <BannerContainer className="flex flex-wrap gap-[1.875rem]">
        <div className="basis-full sm:basis-(--1\/2-basis-gap-30px)"></div>
        <div className="basis-full sm:basis-(--1\/2-basis-gap-30px)"></div>
      </BannerContainer>
    </div>
  );
}
