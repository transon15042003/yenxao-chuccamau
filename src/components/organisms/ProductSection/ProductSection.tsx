import { ChoiceGroup } from '@/components/molecules/ChoiceGroup';

export const ProductSection = () => {
  return (
    <div
      className={`w-full py-[50px] bg-[url('/newfeed.png')] bg-cover bg-no -repeat flex flex-col items-center justify-center`}
    >
      <p className="capitalize font-bold text-5xl text-[#D62C35]">Sản phẩm nổi bật</p>
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
