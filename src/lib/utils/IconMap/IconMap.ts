import { CupSVG } from '@/svg/CupSVG/CupSVG';
import { DevelopSVG } from '@/svg/DevelopSVG/DevelopSVG';
import { DiamondSVG } from '@/svg/DiamondSVG/DiamondSVG';
import { EyeSVG } from '@/svg/EyeSVG/EyeSVG';
import { LargerCalendarSVG } from '@/svg/LargerCalendarSVG/LargerCalendarSVG';
import { LikeSVG } from '@/svg/LikeSVG/LikeSVG';
import { MedalSVG } from '@/svg/MedalSVG/MedalSVG';
import { PriceSVG } from '@/svg/PriceSVG/PriceSVG';
import { RankSVG } from '@/svg/RankSVG/RankSVG';
import { TargetSVG } from '@/svg/TargetSVG/TargetSVG';

const IconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  LargerCalendarSVG,
  DevelopSVG,
  PriceSVG,
  EyeSVG,
  TargetSVG,
  DiamondSVG,
  RankSVG,
  MedalSVG,
  CupSVG,
  LikeSVG
};

export default IconMap;
