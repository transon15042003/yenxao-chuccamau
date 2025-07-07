import { ChoiceButton } from '@/components/atoms/ChoiceButton';

type ChoiceGroupProps = {
  className?: string;
};

export const ChoiceGroup = (props: ChoiceGroupProps) => {
  return (
    <div className="w-full overflow-x-auto rounded-full scrollbar-thumb-primary scrollbar-track-gray-300 scrollbar-thin mb-20">
      <div
        data-testid="choice-group-container"
        className={`${props.className} mx-auto rounded-full  p-1 bg-[#FFFFFF66] w-fit flex flex-row justify-start min-w-max`}
      >
        <ChoiceButton className="" title="Bán chạy" selected={true} />
        <ChoiceButton className="" title="Mới nhất" />
        <ChoiceButton className="" title="Khuyến mãi" />
        <ChoiceButton className="" title="Combo" />
      </div>
    </div>
  );
};
