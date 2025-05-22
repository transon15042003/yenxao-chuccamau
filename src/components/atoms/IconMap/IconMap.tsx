import { DevelopSVG } from '@/svg/DevelopSVG/DevelopSVG';
import { DiamondSVG } from '@/svg/DiamondSVG/DiamondSVG';
import { EyeSVG } from '@/svg/EyeSVG/EyeSVG';
import { LargerCalendarSVG } from '@/svg/LargerCalendarSVG/LargerCalendarSVG';
import { PriceSVG } from '@/svg/PriceSVG/PriceSVG';
import { TargetSVG } from '@/svg/TargetSVG/TargetSVG';

const IconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  LargerCalendarSVG,
  DevelopSVG,
  PriceSVG,
  EyeSVG,
  TargetSVG,
  DiamondSVG
};

export default IconMap;
