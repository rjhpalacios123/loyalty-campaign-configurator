// EDIT THIS FILE to change options and delivery channels by campaign.
// Campaigns without overrides inherit defaultRules.
const defaultRules = {
  cadence: ['One-time', 'Recurring'],
  types: ['Basket', 'Category', 'Product'],
  timing: ['Instant', 'Next Shop', 'End of Campaign'],
  rewardTypes: ['Dollar-value', 'Percentage', 'Bonus Points'],
  online: [
    ['Member Hub', 'Mandatory'],
    ['Push', 'Conditional'],
    ['Email', 'Conditional'],
    ['Online Checkout', 'Conditional'],
    ['eCommerce Pages', 'Conditional']
  ],
  instore: [['POS Checkout', 'Applied at checkout']]
};
const campaignRules = {
  'Spend & Stretch': {
    cadence: ['One-time', 'Multi-week'],
    timing: ['Instant', 'Reward', 'Deferred Reward'],
    rewardTypes: ['Dollar-value', 'Percentage-value'],
    rewardTypesByTiming: {
      'Deferred Reward': ['Dollar-value', 'Percentage-value', 'Bonus Points']
    },
    online: [
      ['Member Hub', 'Mandatory'],
      ['Push', 'Conditional'],
      ['Email', 'Conditional'],
      ['Online Checkout', 'Conditional'],
      ['eCommerce Pages', 'Conditional']
    ],
    instore: [['POS Checkout', 'Applied at checkout']]
  },
  'Spend Ladder': {},
  'Quest': {},
  'Welcome Offer': {},
  'Continuity': {},
  'Cross-Shop': {},
  'Challenges': {}
};
