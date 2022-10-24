export const abbreviateNumber = (number: number) => {
  const numb = Math.abs(Math.round(number)).toString();
  const length = numb.length;
  return length > 9
    ? `${Number(numb.slice(0, -9)).toLocaleString()}B `
    : 9 >= length && length > 6
      ? `${Number(numb.slice(0, -6)).toLocaleString()}M `
      : 6 >= length && length > 3
        ? `${Number(numb.slice(0, -3)).toLocaleString()}K `
        : numb;
};
export function calcTotalPages(total: number, pageSize: number): number {
  const value = Math.ceil(Number(total) / Number(pageSize));

  return isNaN(value) ? 1 : value;
}