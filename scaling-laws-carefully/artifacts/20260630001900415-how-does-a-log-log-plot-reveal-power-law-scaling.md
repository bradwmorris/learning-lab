# How does a log-log plot reveal power-law scaling?

- Type: question
- Marker: article: log-log / power law scaling
- Created: 2026-06-30T00:19:00.415Z

## Summary

A log-log plot is related to growth patterns, but it is mainly for power laws, not exponential growth. If y = a x^b, taking logs gives log y = log a + b log x, so the curve becomes a straight line whose slope is the scaling exponent b. Biology allometry is a good analogy: many body-size relationships are power laws, so log-log plots reveal the exponent.

## Media

_No media recorded._


## Interaction

### user

Let's just make sure that I'm understanding this correctly. I'm trying to think of like a good analogy or metaphor here. Is this related to like exponential growth in a way? Scaling? I think we discussed earlier like a finding in biology that, you know what I mean? Like the log-log situation.

### assistant

Short version: close, but separate exponential from power-law scaling. Exponential growth means each equal step in x multiplies y by a constant: y = a * b^x. A power law means each multiplicative change in x produces a multiplicative change in y: y = a * x^b. Log-log plots are the power-law detector: they turn y = a * x^b into a straight line, and the slope is b. The biology analogy is allometry: if animal mass doubles, some trait changes by a predictable exponent, not by adding a fixed amount. Check-back: if compute goes up 10x and loss improves according to a power law, what would a straight line on a log-log plot be telling us?
