export const FormTextArea = ({ line }: { line: number | undefined }) => (
  <textarea
    className={`w-full focus:outline-none px-4 py-3 mb-1.5 rounded-lg border-2 border-[#424B5A] bg-transparent`}
    rows={line}
  />
);
