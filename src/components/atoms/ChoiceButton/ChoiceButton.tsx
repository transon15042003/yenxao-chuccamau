type ChoiceButtonProps = {
  className?: string;
  title: string;
  selected?: boolean;
};
export const ChoiceButton = (props: ChoiceButtonProps) => (
  <button
    type="button"
    className={`${props.className || ''} p-3 rounded-full text-lg mx-1 my-2 inline-flex flex-none ${props.selected ? 'font-bold bg-gradient-to-b from-[#E6B522] via-[#FFF788] to-[#FFE059]' : ''}`}
  >
    <p>{props.title}</p>
  </button>
);
