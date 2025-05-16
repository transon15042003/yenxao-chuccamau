export const FormLabel = ({ label, required }: { label: string; required?: boolean }) => (
  <div className="font-medium text-sm ">
    <p className="inline mr-1">{label}</p>
    {required && <span className="text-primary">*</span>}
  </div>
);
