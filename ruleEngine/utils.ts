import _ from 'lodash';
import { RuleSets, RuleSet } from './interfaces';
import { DEFAULT_RULE } from './constants';
import { conditionHelpers } from './conditionHelpers/constants';
import {
  ConditionHelperFn,
  IConditionHelpers,
} from './conditionHelpers/interfaces';

export const runRuleSets = <T>(
  data: object,
  ruleSets: RuleSets<T>,
  helpers: IConditionHelpers = conditionHelpers
): T | null => {
  let defaultRuleSet: RuleSet<T> | null = null;
  for (let i = 0; i < ruleSets.length; i++) {
    const ruleSet = ruleSets[i];

    if (ruleSet.rule === DEFAULT_RULE) {
      defaultRuleSet = ruleSet;
      continue;
    }

    let conditionOutput: boolean | null = null;
    for (let j = 0; j < ruleSet.rules.length; j++) {
      const rule = ruleSet.rules[j];
      const value = _.get(data, rule.key);
      if (value === undefined) {
        continue;
      }

      const helper: ConditionHelperFn<any> | undefined =
        helpers[rule.conditionType];
      if (!helper) {
        continue;
      }

      conditionOutput =
        (conditionOutput ?? true) && helper(value, rule.conditionValue);
    }

    if (conditionOutput) {
      return ruleSet.result;
    }
  }

  if (defaultRuleSet) {
    return defaultRuleSet.result;
  }

  return null;
};
