// Edit this file to maintain the configurator. IDs must be unique and stable.
const campaignLabel = 'Choose a Campaign';
const defaultSteps = [
  { id: 'cadence', label: 'Campaign Cadence', options: ['One-time', 'Recurring'] },
  { id: 'type', label: 'Campaign Type', options: ['Basket', 'Category', 'Product'] },
  { id: 'spend', label: 'Spend Requirements', options: ['Single transaction', 'Cumulative transaction'] },
  { id: 'timing', label: 'Reward Timing', options: ['Instant', 'Next Shop', 'End of Campaign'] },
  { id: 'reward', label: 'Reward Type', options: ['Dollar-value', 'Percentage', 'Bonus Points'] }
];
const defaultRules = {
  online: [['Member Hub','Mandatory'],['Push','Conditional'],['Email','Conditional'],['Online Checkout','Conditional'],['eCommerce Pages','Conditional']],
  instore: [['POS Checkout','Applied at checkout']]
};
const campaignRules = {
  'Spend & Stretch': {
    stepOverrides: {
      cadence: { options: ['One-time','Multi-week'] },
      timing: { options: ['Instant Reward','Deferred Reward'], conditionalOptions: [
        { when: { spend: 'Cumulative transaction' }, options: ['Deferred Reward'] }
      ] },
      reward: { options: ['Dollar-value','Percentage-value'], conditionalOptions: [
        { when: { timing: 'Deferred Reward' }, options: ['Dollar-value','Percentage-value','Bonus Points'] }
      ] }
    }
  },
  'Spend Ladder': {},
  'Quest': { outOfScope: true },
  'Continuity': {},
  'Cross-Shop': {},
  'Challenges': {}
};
