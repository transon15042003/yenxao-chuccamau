declare module '*.json' {
  type Product = {
    name: string;
    link: string;
    comingSoon?: boolean;
  };

  type JsonData = {
    categories: Product[];
  };

  const value: JsonData;
  export default value;
}
