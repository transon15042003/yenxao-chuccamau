import React from 'react';

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { slug } = await params;

  return <div>Trang chi tiết sản phẩm {slug}</div>;
};

export default ProductDetailPage;
