import YenVunChungTuoi from './yen-vun-chung-tuoi.mdx';

const productMarkdown = {
  'yen-vun-chung-tuoi': YenVunChungTuoi
};

export const getProductMarkdown = (slug: string) => {
  const markdown = productMarkdown[slug as keyof typeof productMarkdown];

  return markdown || null;
};
