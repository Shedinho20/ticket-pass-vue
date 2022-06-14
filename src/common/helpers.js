export const getDate = time => {
  const _date = time * 1000;

  const date = new Date(_date).toDateString();

  return `${date} `;
};
