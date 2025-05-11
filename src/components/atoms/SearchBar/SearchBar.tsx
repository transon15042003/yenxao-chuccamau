import Image from 'next/image';

type SearchProps = {
  placeholder?: string;
  className?: string;
  iconSize?: number;
};

export const SearchBar = (props: SearchProps) => {
  const defaultIconSize: number = 20.02;

  return (
    <form className={`flex w-full items-center border-b-2 border-light ${props.className}`}>
      <input
        type="search"
        placeholder={props.placeholder || 'Tìm kiếm'}
        className="
          border-0 
          bg-transparent 
          placeholder-rose-400 
          outline-none
          w-full
        "
      />
      <button type="submit" className="w-auto h-auto">
        <Image
          src="/icon_search.svg"
          width={props.iconSize || defaultIconSize}
          height={props.iconSize || defaultIconSize}
          alt="Search icon"
        />
      </button>
    </form>
  );
};
