import { IConditionHelpers } from './interfaces';
import {
  isEqualTo,
  isBetween,
  isLessThan,
  isLessThanEqualTo,
  isMoreThan,
  isMoreThanEqualTo,
} from './helpers';
import { ConditionType } from './enums';

export const conditionHelpers: IConditionHelpers = {
  [ConditionType.isEqualTo]: isEqualTo,
  [ConditionType.isBetween]: isBetween,
  [ConditionType.isMoreThan]: isMoreThan,
  [ConditionType.isLessThan]: isLessThan,
  [ConditionType.isMoreThanEqualTo]: isMoreThanEqualTo,
  [ConditionType.isLessThanEqualTo]: isLessThanEqualTo,
};
