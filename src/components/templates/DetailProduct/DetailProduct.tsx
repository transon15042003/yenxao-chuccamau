import ImgSlider from '@/components/molecules/ImgSlider/ImgSlider';
import OthersProduct from '@/components/organisms/OthersProduct/OthersProduct';
import ProductDetail from '@/components/organisms/ProductDetailInfo/ProductDetailInfo';
import ProductInfoPanel from '@/components/organisms/ProductInfoPanel/ProductInfoPanel';
import ProductSummary from '@/components/organisms/ProductSummary/ProductSummary';

const DetailProduct = () => (
  <div className="lg:grid lg:grid-cols-12 pb-4 lg:mt-2 bg-[#F2F2F2] lg:bg-white">
    <div className="lg:flex lg:flex-row-reverse lg:col-span-6 lg:col-start-2">
      <ProductInfoPanel className="lg:flex-1" />
      <ImgSlider />
    </div>
    <ProductSummary className="lg:col-span-4" />
    <ProductDetail className="lg:col-span-10 lg:col-start-2" />

    <div className="px-2 pt-3 lg:px-0 lg:col-span-10 lg:col-start-2 bg-white">
      <OthersProduct heading="Sản phẩm liên quan" />
      <OthersProduct heading="Sản phẩm đã xem" />
    </div>
  </div>
);

export default DetailProduct;
