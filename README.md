# Loyalty Campaign Configurator v1.6
Upload index.html and campaign-rules.js to the same GitHub Pages directory. Edit campaign-rules.js to maintain configuration; no HTML changes required.

## Defaults
`campaignLabel` controls the first selection name. `defaultSteps` is the ordered array of subsequent selections. Each step has a unique stable `id`, `label`, and `options` array. Do not use the reserved ID `campaign`. Add, remove or reorder entries to change all campaigns.

## Per campaign
Keys in `campaignRules` are campaign names. Add or delete keys to change the campaign list. An empty object inherits defaults. Use `stepOverrides` to change a step label or options, or set `disabled: true` to hide it. To add or reorder steps for one campaign, set `steps` to an ordered array, for example:

```js
'Continuity': {
  steps: [
    ...defaultSteps.filter(s => s.id !== 'type'),
    { id: 'frequency', label: 'Shopping Frequency', options: ['Weekly', 'Monthly'] }
  ],
  stepOverrides: { spend: { label: 'Spend Qualification' } }
}
```

Conditional options: add `conditionalOptions: [{ when: { timing: 'Deferred Reward' }, options: ['Dollar-value','Bonus Points'] }]` to a step. Conditions reference earlier step IDs and exact option strings. First matching rule wins; otherwise the base options apply. Update conditions if you rename option values. Keep options nonempty and IDs unique. `outOfScope: true` blocks a campaign. Override `online` and `instore` arrays to change delivery channels/statuses. Existing icons are matched by channel name; unknown names get a generic icon.

Progress and results automatically adapt to the active steps. Changing a selection clears downstream values. No configuration is stored by the site.

### Spend & Stretch reward timing
Single transaction permits Instant Reward and Deferred Reward. Cumulative transaction permits Deferred Reward only. Bonus Points remains available only for Deferred Reward.
