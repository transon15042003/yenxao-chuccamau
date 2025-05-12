import Button from '@/components/atoms/Button/Button';
import { SectionHeading } from '@/components/atoms/Heading';
import ProductCart from '@/components/molecules/ProductCart/ProductCart';

interface OthersProductProps {
  className?: string;
  heading: string;
}

const OthersProduct = ({ heading }: OthersProductProps) => (
  <>
    <SectionHeading className="text-[#2A2A40] mb-2">{heading}</SectionHeading>
    <div className="flex flex-row overflow-x-auto gap-2 lg:grid lg:grid-cols-12 lg:overflow-hidden lg:gap-6 relative lg:overflow-visible">
      <Button
        variant="fill"
        className="w-[40px] h-[40px] hidden lg:block rounded-full absolute [top:30%] left-0 -translate-x-1/2 z-10"
      >
        &lt;
      </Button>
      <ProductCart className="lg:col-span-3" />
      <ProductCart className="lg:col-span-3" />
      <ProductCart className="lg:col-span-3" />
      <ProductCart className="lg:col-span-3" />
      <ProductCart className="lg:col-span-3 lg:hidden" />
      <ProductCart className="lg:col-span-3 lg:hidden" />
      <ProductCart className="lg:col-span-3 lg:hidden" />
      <Button
        variant="fill"
        className="w-[40px] h-[40px] hidden lg:block rounded-full absolute [top:30%] right-0 translate-x-1/2 z-20"
      >
        &gt;
      </Button>
    </div>
  </>
);

export default OthersProduct;
