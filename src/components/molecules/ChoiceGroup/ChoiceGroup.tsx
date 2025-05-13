import { ChoiceButton } from '@/components/atoms/ChoiceButton';

type ChoiceGroupProps = {
  className?: string;
};

export const ChoiceGroup = (props: ChoiceGroupProps) => {
  return (
    <div
      className="md:w-1/4 w-full bg-transparent rounded-full overflow-x-auto snap-x snap-mandatory my-2 scrollbar-thumb-primary scrollbar-track-gray-300 scrollbar-thin"
      data-testid="choice-group-container"
    >
      <div
        className={`${props.className} p-1 bg-[#FFFFFF66] flex flex-row justify-start min-w-max`}
      >
        <ChoiceButton className="snap-always snap-center" title="Bán chạy" selected={true} />
        <ChoiceButton className="snap-always snap-center" title="Mới nhất" />
        <ChoiceButton className="snap-always snap-center" title="Khuyến mãi" />
        <ChoiceButton className="snap-always snap-center" title="Combo" />
      </div>
    </div>
  );
};
