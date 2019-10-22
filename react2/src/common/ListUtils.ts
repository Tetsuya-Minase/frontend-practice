export const isExistList = (list: any[]): boolean => {
  if (isNullOrUndefined(list)) {
    return false;
  }
  if (!Array.isArray(list)) {
    return false;
  }
  return list.length !== 0;
};
export const isNullOrUndefined = (target: any): boolean => (target === null || target === undefined);
export const fillter = <T>(target: (T | null | undefined)[]): T[] => (
  target.filter(v => v !== null && v !== undefined) as T[]
);
