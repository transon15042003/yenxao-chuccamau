export type ContentType = 'paragraph' | 'title' | 'ul' | 'ol';

export type ContentItemType =
  | {
      type: 'paragraph';
      value: string;
    }
  | {
      type: 'title';
      value: string;
    }
  | {
      type: 'ul';
      value: string[];
    }
  | {
      type: 'ol';
      value: string[];
    };

export type PolicyContentType = {
  heading: string;
  contents: ContentItemType[];
};
