type StyledHeadingProps = {
  title: string;
  subTitle?: string;
};

export const StyledHeading = (props: StyledHeadingProps) => (
  <div className="flex flex-col items-center">
    <p className="capitalize font-bold text-center text-5xl text-primary md:mx-0 mx-4 mb-1">
      {props.title}
    </p>
    <p className="font-normal text-xl text-typo-1 text-center">{props.subTitle}</p>
  </div>
);
