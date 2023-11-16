import { primitive, IIsBetweenParams, ConditionHelperFn } from './interfaces';

export const isEqualTo: ConditionHelperFn = (
  value: primitive,
  param: primitive
): boolean => {
  return value === param;
};
export const isMoreThan: ConditionHelperFn = (
  value: primitive,
  param: primitive
): boolean => {
  return value > param;
};
export const isLessThan: ConditionHelperFn = (
  value: primitive,
  param: primitive
): boolean => {
  return value < param;
};
export const isMoreThanEqualTo: ConditionHelperFn = (
  value: primitive,
  param: primitive
): boolean => {
  return isEqualTo(value, param) || isMoreThan(value, param);
};
export const isLessThanEqualTo: ConditionHelperFn = (
  value: primitive,
  param: primitive
): boolean => {
  return isEqualTo(value, param) || isLessThan(value, param);
};
export const isBetween: ConditionHelperFn<IIsBetweenParams> = (
  value: primitive,
  param: IIsBetweenParams
): boolean => {
  return (
    isMoreThanEqualTo(value, param.min) && isLessThanEqualTo(value, param.max)
  );
};
