type StyledHeadingProps = {
  title: string;
  subTitle?: string;
};

export const StyledHeading = (props: StyledHeadingProps) => (
  <div className="flex flex-col items-center">
    <p className="capitalize font-bold text-5xl text-[#D62C35] mb-1">{props.title}</p>
    <p className="font-normal text-xl text-[#424B5A]">{props.subTitle}</p>
  </div>
);
