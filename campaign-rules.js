// Edit this file to maintain the configurator. IDs must be unique and stable.
const campaignLabel = 'Choose a Campaign';
const defaultSteps = [
  { id: 'cadence', label: 'Campaign Cadence', options: ['One-time', 'Recurring'] },
  { id: 'type', label: 'Campaign Type', options: ['Basket', 'Category', 'Product'] },
  { id: 'spend', label: 'Spend Requirements', options: ['Single transaction', 'Cumulative transactions'] },
  { id: 'timing', label: 'Reward Timing', options: ['Instant Reward', 'Deferred Reward'] },
  { id: 'reward', label: 'Reward Type', options: ['Dollar-value', 'Percentage'] }
];
const defaultRules = {
  online: [['Member Hub','Mandatory'],['Online Checkout','Conditional'],['eCommerce Pages','Conditional']],
  instore: [['POS Checkout','Applied at checkout']]
  comms: [['Push','Conditional'],['Email','Conditional']]
};
const campaignRules = {
  'Spend & Stretch': {
    stepOverrides: {
      cadence: { options: ['One-time','Multi-week'] },
      timing: { options: ['Instant Reward','Deferred Reward'] },
      reward: { options: ['Dollar-value','Percentage-value'], conditionalOptions: [
        { when: { timing: 'Deferred Reward' }, options: ['Dollar-value','Percentage-value'] }
      ] }
    }
  },
  'Spend Ladder': {},
  'Quest': { outOfScope: true },
  'Continuity': {},
  'Cross-Shop': {},
  'Challenges': {}
};
