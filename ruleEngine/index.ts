import { RuleSets } from './interfaces';
import { runRuleSets } from './utils';
import { conditionHelpers } from './conditionHelpers/constants';
import { IConditionHelpers } from './conditionHelpers/interfaces';

export const RuleEngine = <T>(
  ruleSets: RuleSets<T>,
  helpers: IConditionHelpers = conditionHelpers
): any => {
  const allHelpers = { ...helpers, ...conditionHelpers };
  const run = (data: object = {}): T | null => {
    return runRuleSets<T>(data, ruleSets, allHelpers);
  };
  return {
    run,
  };
};
