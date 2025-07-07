export interface PolicyContent {
  heading?: string;
  contents: {
    type: 'paragraph' | 'ul' | 'ol';
    value?: string;
    values?: string[];
  }[];
}

export interface PolicyProps {
  title: string;
  content: PolicyContent[];
}
