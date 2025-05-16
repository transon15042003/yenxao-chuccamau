import Image from 'next/image';

type MenuProps = {
  className?: string;
  size?: number;
};

export const Menu = (props: MenuProps) => (
  <button type="button" className={`${props.className}`}>
    <Image
      priority
      src="/icon_menu.svg"
      height={props.size || 32}
      width={props.size || 32}
      alt="Menu"
    />
  </button>
);
