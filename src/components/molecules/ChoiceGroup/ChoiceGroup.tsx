import { ChoiceButton } from '@/components/atoms/ChoiceButton';

type ChoiceGroupProps = {
  className?: string;
  maxWidth?: number;
};
export const ChoiceGroup = (props: ChoiceGroupProps) => {
  return (
    <div
      className="w-1/4 bg-transparent rounded-full overflow-x-hidden my-2"
      data-testid="choice-group-container"
    >
      <div className={`${props.className} p-0.2 bg-[#FFFFFF66] flex flex-row justify-between`}>
        <ChoiceButton className="snap-always snap-center" title="Bán chạy" selected={true} />
        <ChoiceButton className="snap-always snap-center" title="Mới nhất" />
        <ChoiceButton className="snap-always snap-center" title="Khuyến mãi" />
        <ChoiceButton className="snap-always snap-center" title="Combo" />
      </div>
    </div>
  );
};
