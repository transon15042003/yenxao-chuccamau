export const isValidDateString = (dateString: string) => {
  const date = new Date(dateString);

  return !isNaN(date.getTime());
};

export const isValidNumberString = (numberString: string) => {
  const number = Number(numberString);

  return !isNaN(number);
};
