# How is harness engineering different from other RSI routes?

- Type: question
- Marker: Introduction / scope of post
- Created: 2026-07-08T21:31:12.503Z

## Summary

Weng is separating different routes toward recursive self-improvement. Harness engineering improves the system around the model: tools, workflows, memory, evaluation, and execution loops. Self-play, synthetic data, test-time training, and continual learning are more model/training-centered routes: they improve the model through new data, practice, adaptation, or ongoing learning. The post focuses on harness engineering, while acknowledging those other routes also fit the broader RSI vision.

## Media

_No media recorded._


## Interaction

### user

I don't fully understand this:

This one post will focus on research around harness engineering and how it contributes to RSI. Much recent work on auto-research, self-improving agents, and evolutionary program search can be organized around this question. Other work on model self-play, synthetic data, test-time training and a broader theme of continual learning also matches the RSI vision (e.g. [Yuan et al. 2024](https://arxiv.org/abs/2401.10020), [Chen et al. 2024](https://arxiv.org/abs/2401.01335)), [Zhao et al. 2025](https://arxiv.org/abs/2505.03335), [Choi et al. 2026](https://openreview.net/forum?id=lTbBFAoPSA))) but they will not be the focus of this post.

is 
She's saying that harness engineering is one way to achieve rsi - whereas those other methods - sef-play, continual learning etc? are another?

### assistant

Yes, that's basically right. She's carving the RSI landscape into routes. Harness engineering is one route: improve the system around the model, such as tools, workflows, memory, evals, permissions, and execution loops. That can make the overall AI system better without changing the model weights. The other methods are also RSI-flavored, but they work closer to the model/training side: self-play means the model practices against itself or generated problems; synthetic data means better models help create training data for future models; test-time training means the model adapts while solving a task; continual learning means the model keeps learning over time instead of being fixed after training. So her scope is: this post is about the outside-the-model route, not the model-training routes. Check-back: if an AI coding agent gets better because we add better tools and memory, is that harness engineering or model training? If it gets better because its weights are updated from new practice data, which bucket is that?
