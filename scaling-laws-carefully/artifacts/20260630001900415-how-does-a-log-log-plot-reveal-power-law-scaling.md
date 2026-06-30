# How does a log-log plot reveal power-law scaling?

- Type: question
- Marker: article: log-log / power law scaling
- Created: 2026-06-30T00:19:00.415Z

## Summary

Scaling laws existed long before deep learning. The deep-learning version is a specific empirical scaling law: training loss changes predictably as compute, model size, and dataset size scale. The broader idea appears across physics, biology, urban systems, and economics: one quantity changes as a power of another, often forming a straight line on a log-log plot. Biology allometry, such as Kleiber-style metabolism vs body mass, is a classic pre-ML analogy.

## Media

_No media recorded._


## Interaction

### user

Let's just make sure that I'm understanding this correctly. I'm trying to think of like a good analogy or metaphor here. Is this related to like exponential growth in a way? Scaling? I think we discussed earlier like a finding in biology that, you know what I mean? Like the log-log situation.

### assistant

Short version: close, but separate exponential from power-law scaling. Exponential growth means each equal step in x multiplies y by a constant: y = a * b^x. A power law means each multiplicative change in x produces a multiplicative change in y: y = a * x^b. Log-log plots are the power-law detector: they turn y = a * x^b into a straight line, and the slope is b. The biology analogy is allometry: if animal mass doubles, some trait changes by a predictable exponent, not by adding a fixed amount. Check-back: if compute goes up 10x and loss improves according to a power law, what would a straight line on a log-log plot be telling us?

### user

The opening says scaling laws are one of the most critical empirical findings in deep learning... did scaling laws exist before deep learning?

### assistant

Yes. Scaling laws absolutely existed before deep learning. Deep learning inherited the mathematical/statistical pattern and found a very important instance of it. In the broad sense, a scaling law says: when one thing gets bigger by a multiplier, another thing changes by a predictable multiplier. Biology is the accessible analogy: body mass and metabolism follow an approximate power law, so plotting them on log-log axes makes the relationship roughly straight. In deep learning, the quantities are compute, data, model size, and loss. Same kind of relationship, different domain. Check-back: in the article opening, what are the variables playing the role of body mass and metabolism?
