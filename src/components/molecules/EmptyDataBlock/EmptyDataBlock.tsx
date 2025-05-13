import Image from 'next/image';
export const EmptyDataBlock = () => (
  <div>
    {/* <h3 className="text-center text-xl font-bold text-typo-1 lg:text-[2.5rem]">
      Không tìm thấy dữ liệu
    </h3> */}
    <div className="mt-2">
      <Image
        width={600}
        height={600}
        alt="error image"
        src={'/images/error/empty-data.webp'}
        className="mx-auto"
      />
    </div>
  </div>
);
