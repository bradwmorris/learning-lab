# Can harness improvements later improve model weights?

- Type: insight
- Marker: Section: Joint Optimization with Model Weights
- Created: 2026-07-09T01:40:30.000Z

## Summary

Yes: this is the bridge from harness-only improvement to joint optimization. A harness can improve capability without changing weights, but it also produces trajectories, failure logs, successful workflows, tool-use traces, eval outcomes, and preference data. Those artifacts can later become training or adaptation data for model weights, if the system has a trusted process for selecting high-quality data.

## Interaction

### user

one thing im thinking > does she discuss this? > another interesting thing > even if the harness improvements aren't immediately touching the weights > strong case that the data may at some point be used to improve the weights

### assistant

Yes, this is basically the joint-optimization bridge. Harness changes may start as non-parametric improvements, but the harness also creates reusable data: trajectories, failures, fixes, eval results, and examples of good process. Later, that data can be used to update or train model weights.
