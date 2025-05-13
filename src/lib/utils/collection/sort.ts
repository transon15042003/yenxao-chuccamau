export const sortByDateField = <T>(data: T[], field: keyof T, order: 'asc' | 'desc' = 'asc') => {
  return data.sort(
    (a, b) =>
      (order === 'asc' ? 1 : -1) *
      (new Date(a[field] as string).getTime() - new Date(b[field] as string).getTime())
  );
};

export const sortByNumberField = <T>(data: T[], field: keyof T, order: 'asc' | 'desc' = 'asc') => {
  return data.sort((a, b) => (order === 'asc' ? 1 : -1) * (Number(a[field]) - Number(b[field])));
};

export const sortByStringField = <T>(data: T[], field: keyof T, order: 'asc' | 'desc' = 'asc') => {
  return data.sort(
    (a, b) => (order === 'asc' ? 1 : -1) * (a[field] as string).localeCompare(b[field] as string)
  );
};
