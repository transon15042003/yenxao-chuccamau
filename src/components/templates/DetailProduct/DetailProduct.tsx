import ImgSlider from '@/components/molecules/ImgSlider/ImgSlider';
import ProductDetailInfo from '@/components/organisms/ProductDetailInfo/ProductDetailInfo';
import ProductInfoPanel from '@/components/organisms/ProductInfoPanel/ProductInfoPanel';
import ProductSummary from '@/components/organisms/ProductSummary/ProductSummary';
import RecentlyViewedProducts from '@/components/providers/DetailProductProvider/RecentlyViewedProducts';
import RelatedProducts from '@/components/providers/DetailProductProvider/RelatedProducts';

const DetailProduct = () => (
  <div className="lg:grid lg:grid-cols-12 pb-4 lg:mt-2 bg-[#F2F2F2] lg:bg-white">
    <div className="lg:flex lg:flex-row-reverse lg:col-span-6 lg:col-start-2">
      <ProductInfoPanel className="lg:flex-1" />
      <div className="flex flex-row lg:flex-col lg:justify-start justify-center items-center lg:max-h-[640px] lg:max-w-[100px] bg-white">
        <ImgSlider />
      </div>
    </div>
    <ProductSummary className="lg:col-span-4" />
    <ProductDetailInfo className="lg:col-span-10 lg:col-start-2 col-span-1" />
    <div className="px-2 pt-3 lg:px-0 lg:col-span-10 lg:col-start-2 bg-white">
      <RelatedProducts />

      <RecentlyViewedProducts />
    </div>
  </div>
);

export default DetailProduct;
