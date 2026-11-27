# Loyalty Campaign Configurator v1.13
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

Conditional options: add `conditionalOptions: [{ when: { timing: 'Deferred Reward' }, options: ['Dollar-value','Bonus Points'] }]` to a step. Conditions reference earlier step IDs and exact option strings. First matching rule wins; otherwise the base options apply. Update conditions if you rename option values. Keep options nonempty and IDs unique. `outOfScope: true` blocks a campaign. Override `online`, `instore` and `comms` arrays to change delivery channels/statuses. Existing icons are matched by channel name; unknown names get a generic icon.

Progress and results automatically adapt to the active steps. Changing a selection clears downstream values. No configuration is stored by the site.

### Spend & Stretch reward timing
Single transaction permits Instant Reward and Deferred Reward. Cumulative transaction permits Deferred Reward only. Bonus Points remains available only for Deferred Reward.


## V1.8 — Conditional informational banners
`defaultRules.banners` contains the Flybuys notice triggered by `reward: 'Bonus Points'`. Edit its title, message or when condition as needed. Campaign-specific `banners` arrays override the default; use `banners: []` to disable. Banners do not block configuration or hide delivery channels.

## V1.9 — Delivery channel groups

Email and Push are now in the separate Comms group. Override `comms` per campaign just like `online` and `instore`. Existing statuses are unchanged.

Email and Push default to `Consent-required` (amber status).

### V1.11: Banner delivery visibility
Set `hideDelivery: true` on a banner to hide all delivery channel groups while that banner matches. The default Flybuys banner uses this setting. Changing the reward restores the groups when configuration is complete.

### V1.12
Completed selections show green checkmarks; incomplete or blocked selections retain step numbers.

## Work in progress
Set `workInProgress: true` on a campaign to show an amber WORK IN PROGRESS banner and block subsequent selections and delivery results. Set it to false or remove it to enable configuration. `outOfScope: true` takes precedence.

## V1.14: Dynamic progress tracker
Before campaign selection or after reset, the tracker displays “Select a campaign to get started” with an empty bar. After selection, the total is calculated from the active campaign steps, including the campaign selector. Blocked campaigns display “Configuration unavailable”.


### V1.15
Selected steps collapse into a compact editable row. Click the row to reopen its options; Done closes it without changing the value. Changing an option clears downstream selections. Reset clears all selections. All campaign configuration remains in campaign-rules.js.
