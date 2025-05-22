import { DevelopSVG } from '@/svg/DevelopSVG/DevelopSVG';
import { LargerCalendarSVG } from '@/svg/LargerCalendarSVG/LargerCalendarSVG';
import { PriceSVG } from '@/svg/PriceSVG/PriceSVG';

const IconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  LargerCalendarSVG,
  DevelopSVG,
  PriceSVG
};

export default IconMap;
