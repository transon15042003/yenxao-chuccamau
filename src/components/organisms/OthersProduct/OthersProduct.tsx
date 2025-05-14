import { Button } from '@/components/atoms/Button';
import { SectionHeading } from '@/components/atoms/Heading';
interface OthersProductProps {
  className?: string;
  heading: string;
}

const OthersProduct = ({ heading }: OthersProductProps) => (
  <>
    <SectionHeading className="text-[#2A2A40] mb-2">{heading}</SectionHeading>
    <div className="flex flex-row overflow-x-auto gap-2 lg:grid lg:grid-cols-12 lg:overflow-hidden lg:gap-6 relative lg:overflow-visible">
      <Button
        variant="primary"
        fill="fill"
        className="w-[40px] h-[40px] hidden lg:block rounded-full absolute [top:30%] left-0 -translate-x-1/2 z-10"
      >
        &lt;
      </Button>
      {/* <ProductCard className="lg:col-span-3" />
      <ProductCard className="lg:col-span-3" />
      <ProductCard className="lg:col-span-3" />
      <ProductCard className="lg:col-span-3" />
      <ProductCard className="lg:col-span-3 lg:hidden" />
      <ProductCard className="lg:col-span-3 lg:hidden" />
      <ProductCard className="lg:col-span-3 lg:hidden" /> */}
      <Button
        variant="primary"
        fill="fill"
        className="w-[40px] h-[40px] hidden lg:block rounded-full absolute [top:30%] right-0 translate-x-1/2 z-20"
      >
        &gt;
      </Button>
    </div>
  </>
);

export default OthersProduct;
