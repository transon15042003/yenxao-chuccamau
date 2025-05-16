import contactData from '@/data/contact.json';

type ContactType = {
  icon: string;
  label: string;
  details: string[];
};

type BranchType = {
  'branch-name': string;
  data: ContactType[];
};

type ContactDataFile = BranchType[];

export const getContactInfo = async (): Promise<ContactDataFile> => {
  const data: ContactDataFile = contactData as ContactDataFile;

  return Promise.resolve(data);
};
