import { StyledHeading } from '@/components/atoms/StyledHeading';
import { ChoiceGroup } from '@/components/molecules/ChoiceGroup';

export const ProductSection = () => {
  return (
    <div
      className={`w-full py-[50px] bg-[url('/newfeed.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center`}
    >
      <StyledHeading title="Sản phẩm nổi bật" />
      <ChoiceGroup />
      <h1>ProductSection</h1>
      <button
        type="button"
        className="border-2 border-black px-4 py-2 rounded-lg text-[#2A2A40] font-semibold text-lg hover:bg-black hover:text-white"
      >
        Xem tất cả sản phẩm
      </button>
    </div>
  );
};
