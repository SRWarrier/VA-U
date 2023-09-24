const DateThanToday = (_: any, date: string) => {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(23, 59, 59, 0);

  if (selectedDate > today) {
    return Promise.reject("Date cannot be more than today's date");
  }

  return Promise.resolve();
};

export { DateThanToday };
