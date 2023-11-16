import { ConditionType } from './enums';

export type primitive = number | string | boolean;

export interface IIsBetweenParams {
  min: number;
  max: number;
}
export type ConditionHelperFn<T = primitive> = (
  value: primitive,
  param: T
) => boolean;

export type IConditionHelpers = {
  [key: string]: ConditionHelperFn<any>;
};
