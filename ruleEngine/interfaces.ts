import { IIsBetweenParams } from './conditionHelpers/interfaces';
import { ConditionType } from './conditionHelpers/enums';

export type Only<M, O> = { [key in keyof M]: M[key] } & {
  [key in keyof O]?: never;
};
export type Either<T1, T2> = Only<T1, T2> | Only<T2, T1>;

export interface IRule {
  key: string;
  conditionType: ConditionType | string;
  conditionValue?: number | string | boolean | IIsBetweenParams;
}

interface IRules {
  rules: Array<IRule>;
}
interface IDefaultRule {
  rule: string;
}
interface IResult<T> {
  result: T;
}
export type RuleSet<T> = IResult<T> & Either<IRules, IDefaultRule>;
export type RuleSets<T> = Array<RuleSet<T>>;
