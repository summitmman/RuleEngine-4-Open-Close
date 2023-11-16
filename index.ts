// Import stylesheets
import './style.css';
import { RuleSets } from './ruleEngine/interfaces';
import { ConditionType } from './ruleEngine/conditionHelpers/enums';
import { DEFAULT_RULE } from './ruleEngine/constants';
import { RuleEngine } from './ruleEngine';
import { IConditionHelpers } from './ruleEngine/conditionHelpers/interfaces';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Rules and output
interface IOutput {
  amount: number;
  emi: number;
}
const ruleSet: RuleSets<IOutput> = [
  {
    rules: [
      {
        key: 'tenure',
        conditionType: ConditionType.isBetween,
        conditionValue: {
          min: 0,
          max: 12,
        },
      },
      {
        key: 'location',
        conditionType: 'isEqualTo',
        conditionValue: 'Bangalore',
      },
    ],
    result: {
      amount: 10,
      emi: 5,
    },
  },
  {
    rules: [
      {
        key: 'tenure',
        conditionType: ConditionType.isBetween,
        conditionValue: {
          min: 13,
          max: 24,
        },
      },
    ],
    result: {
      amount: 20,
      emi: 8,
    },
  },
  {
    rule: DEFAULT_RULE,
    result: {
      amount: 30,
      emi: 10,
    },
  },
];

// Custom helpers
const myHelpers: IConditionHelpers = {
  isBangalore: (value: any): boolean => {
    return value === 'Bangalore';
  },
};

// Source data
const formData = {
  tenure: 12,
  location: 'Bangalore',
};

// Initialize and run rule engine
const ruleEngine = RuleEngine(ruleSet, myHelpers);
const output = ruleEngine.run(formData);
console.log(output);

appDiv.innerHTML = `
  ${appDiv.innerHTML}
  <br/>
  <div><b>Final Configuration</b>: ${JSON.stringify(output)}</div>
  <br/>
  <div><b>Rule JSON</b>: ${JSON.stringify(ruleSet)}</div>
`;
