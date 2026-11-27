# Loyalty Campaign Configurator v1.4
Open index.html locally with campaign-rules.js in the same folder. For GitHub Pages upload both files to the repository root, then enable Pages from the main branch / root in Settings.

Edit campaign-rules.js to maintain campaign-specific dropdown options and delivery channel requirements. Each campaign can override online and instore arrays independently. Each entry is [channel name, status]. Empty campaign objects inherit defaultRules. Other campaigns retain their previous dropdown options and use the new delivery matrix as a provisional default. No supportability validation is implied.

No backend, authentication or storage. Use approved private hosting for confidential business rules.

Version 1.3: Spend & Stretch timing is Instant Reward or Deferred Reward. Channel icons are mapped by name in index.html; unknown channel names receive a generic icon.

Version 1.4: Welcome Offer is excluded. Spend Requirements precedes Reward Timing and can be overridden per campaign using spendRequirements. Six selections are required before delivery channels appear.
