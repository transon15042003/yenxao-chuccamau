import Breadcrumb from '@/components/templates/Breadcrumb/Breadcrumb';

interface SubLayoutProps {
  children: React.ReactNode;
}

const SubLayout = ({ children }: SubLayoutProps) => (
  <div>
    <Breadcrumb />
    <div>{children}</div>
  </div>
);

export default SubLayout;
