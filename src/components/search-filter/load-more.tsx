import { CustomButton } from "@ui/button";

export const LoadMore: React.FC<{ loadMore: () => void; currentPage: number; maxPage: number }> = ({ loadMore, currentPage, maxPage }) =>
  currentPage < maxPage && (
    <CustomButton onClick={loadMore} className="text-white bg-white/20 hover:bg-white/30 shadow-sm shadow-white/50 transition-colors px-10 py-4 rounded-xl w-max max-w-full mx-auto">
      Load more
    </CustomButton>
  );
