import Link from 'next/link';

import { cn } from '@/lib/utils';

const breadcrumbItem = [
  { title: 'Trang chủ', href: '/' },
  { title: 'Bánh tổ yến', href: '/' },
  { title: 'Bánh tổ yến-300gram', href: '/' }
];

const Breadcrumb = () => (
  <div className="bg-[#F9F6F4] lg:grid lg:grid-cols-12 sticky z-10 top-[94px] lg:top-[99px]">
    <ul className="list-none px-2 text-[#3E4B5E] text-sm font-light py-2 lg:col-span-8 lg:col-start-2">
      {breadcrumbItem.map((el, idx) => (
        <li key={idx} className="inline-block">
          <p className="inline-block">
            <Link
              className={cn('no-underline', idx === breadcrumbItem.length - 1 && 'opacity-50')}
              href={el.href}
            >
              {el.title}
            </Link>
          </p>
          {idx !== breadcrumbItem.length - 1 && <p className="inline-block px-1">&gt;</p>}
        </li>
      ))}
    </ul>
  </div>
);

export default Breadcrumb;
