# Question Answer Pairs

Resource: How GPT-5, Claude, and Gemini are actually trained and served - Reiner Pope

Generated: 2026-05-05T11:02:30.752Z

## What does batch size mean during inference, and how is it different from training batch size?

Marker: batch size section

### Q1

what is really meant by 'batch size'? what is the relationship between batch size and memory and compute?

### A1

Batch size in this section means the number of independent sequences/requests the system advances together in one model forward pass. In decode, each item in the batch is usually a different user/request getting its next token. Increasing batch size lets the same weight fetch serve many tokens, so weight memory cost is amortized. Compute work and KV-cache memory work grow roughly with batch size because each sequence still needs its own multiplications and its own context/KV reads. The economic sweet spot is where memory bandwidth and compute are both well used: small batches are low-latency but expensive; larger batches are cheaper per token but can add latency or queueing.

### Q2

ok - so let's keep working with my initial question

### A2

Simpler frame: batch size is how many next-token jobs ride the same train. The model weights are the train track: expensive to load, but shared by everyone in the batch. Compute and KV cache are the passengers: each request still brings its own work and history, so those grow as the batch grows. Batching helps when the shared weight-loading cost dominates; it stops helping when per-request compute/KV or waiting time dominates.

### Q3

The part where I'm confused is are we talking about batch size? Is it how many tokens are processed in pre-training? Or is this just inference, right? Because the only time you're batching is for users. In pre-training you don't have users, you just have data sets.

### A3

Here Reiner is talking about inference batch size, not pre-training batch size. Same word, different setting. In training, a batch is chunks of dataset examples processed together so you can compute gradients and update weights. In inference, a batch is live requests/sequences processed together so the server can generate next tokens efficiently. The shared idea is parallel work over many examples; the purpose is different: training batches improve learning/update efficiency, inference batches improve serving economics.

## What happens during one inference batch step, and how do memory and compute each show up?

Marker: inference batching / roofline section

### Q4

what are these two types of analysis he is talking about?

### A4

He is combining two lenses. First: roofline analysis, which asks what the hardware limit is: are we bottlenecked by compute throughput or memory bandwidth? Second: the transformer serving split, which asks where the model work comes from: reading the weights versus reading the context/KV cache. Together: hardware says what the machine can do; weights/KV says what this inference step demands from the machine.

### Q5

I think I understand the roof line analysis. Is that just to say like how high it can go before it hits a ceiling? That's kind of asking is the ceiling going to be set by compute? Well actually I don't really know what it means when it says is the hardware limited.

"Machining memory bandwidth" is referring to... Is this the ability for the model to pull the weight?

### A5

Yes, roofline is basically a ceiling model: what is the fastest this could possibly run before some hardware limit stops it? Hardware-limited means the model is waiting on a physical capacity of the machine, not on cleverness in the code. The two ceilings here are compute throughput: how fast the GPU can do multiplications, and memory bandwidth: how fast it can move bytes from GPU memory into the compute units. And yes, memory bandwidth includes pulling the model weights, plus pulling KV-cache/context data.

### Q6

Okay, so I think I mostly get this now. Like basically there's two things happening. One is like the model actually doing the multiplication, which is like, I guess this is the forward part, so it's actually producing the next token and doing the prediction. And then you also have the other side, which is the pulling, pulling from memory. I still I get the pulling from memory pot how to distinguish these things.

### A6

Good. Distinguish them as data movement versus data use. Memory bandwidth is moving the numbers into place: weights and KV-cache vectors. Compute is using those numbers: multiplying/adding them to produce the next hidden state and eventually the next-token probabilities. Same forward pass, two different bottlenecks: either the math units are busy, or the math units are waiting for the numbers.

### Q7

Just one thing happened before the other and again, I'm still getting kind of caught up here and I'm always getting caught up in what is pre-training versus what is inference? So... Okay, the batching part kind of makes sense to me now because like I guess if you're batching with users at inference you only pull the weights once per I don't know session or whatever you want to call it and then multiple users can interact with the model and the model weights and They don't need to be pulled in again So The memory is the part that's pulling the weights, right and then the compute is Doing the multiplication to use the weights. Is that the right way to think about it?

### A7

Mostly right, with one correction: not once per session. More like once per forward-pass step/layer batch. In inference, many user sequences are grouped, the system reads the relevant weights from fast GPU memory, and the compute units use those weights to do multiplications for all items in the batch. Batching helps because that same weight read is shared across many users' next-token work. Training also has batches, but there the batch is dataset examples and the goal is gradients/weight updates. Here the goal is serving next tokens cheaply.

### Q8

Can you make this more tangible for me to understand? So like, is the best way to think about this on a timeline? So like, let's just say myself and 500 other users ask a question at the same time at inference in different parts of the world. Is this the right way to think about it?

### A8

Yes, timeline is the right model. At t=0, 501 requests arrive. The serving system tokenizes them and puts their active sequences into a waiting pool. At the next scheduled decode step, it forms a batch of, say, 501 sequences. For that batch, the GPU reads the needed weights and each sequence's KV cache, then does the multiplications to produce one next token for each sequence. Then it repeats: the generated token is appended, KV cache updates, and the next decode batch runs.

## What is the KV cache fetch during inference, and why does it matter?

Marker: KV cache fetch section

### Q9

Not fully understanding the KV, cache fetch

### A9

Think of the KV cache as the model's saved notes about the conversation so far. For every previous token, the model stored attention data: keys and values. When generating the next token, it does not reread/recompute the whole prompt from scratch; it fetches those saved keys/values so the new token can attend to the previous context. The fetch is the memory step: moving those saved KV vectors from GPU memory to where the attention computation can use them.

### Q10

Just give me a more fundamental understanding here. This is different to prompt caching, right? Is it the case that KV cache is always used? Like is this a fundamental part of how the language model works? So you basically have a single context window and then say every time I'm asking a question or there's a term, then the model has to look back at every previous token, which is previous words or parts of words. And it needs to be able to do that to then run everything back through the weights to perform the prediction of the next token or the next token sequence. And so the KV cache is basically storing the representation of all prior tokens. And so when the model, when I ask and when I have a new question, the model is just, it's not actually looking at every previous token, it's just looking at the KV Okay, she's out right?

### A10

Yes: KV cache is different from prompt caching. KV cache is the normal internal serving mechanism for autoregressive transformers during inference. It stores the key/value attention representations for prior tokens so the model does not recompute those prior tokens at every next-token step. The model still attends over the prior context, but it does so through cached K/V vectors rather than rerunning the whole prefix. Prompt caching is a product/system feature that reuses a prefix across requests; KV cache is the per-sequence runtime state used while generating.

### Q11

So the KBK stores the key value pairs or the numerical representations of all the previous words or tokens in the sequence so the model doesn't have to recalculate those weights again. Sorry, it doesn't have to recalculate, doesn't have to run the multiplication again for those previously performed calculations. So it's another way to think about this. Let's just say that I've asked several questions about cashmere pants. When I ask a final question, it's just having to do the multiplication to predict the tokens for that last question and not my initial two questions.

### A11

Yes, with one wording fix: it is not recalculating weights; weights are fixed at inference. KV cache avoids recomputing the prior tokens' internal attention representations. In the cashmere pants example, the earlier questions have already been transformed into cached K/V vectors. When the final question is processed, the model computes the new token's representations and attends to the cached history instead of rerunning all earlier tokens from scratch.

## What do autoregressive inference and decode mean?

Marker: autoregressive inference / decode section

### Q12

he talks about 'autoregressive inference' and 'decode' help me understand this

Can you also screenshot appropriate images from your YouTube video and add the ability to add these and also any helpful diagrams into the card, into each of the cards as an artifact when it might be helpful to do so?

### A12

Autoregressive inference means the model generates one token, then feeds that token back into the context to generate the next one. Decode is the serving/generation loop where that happens. Each decode step usually produces one next token per active sequence in the batch. The KV cache matters because it lets each new token attend to prior context without rerunning the entire prefix.

### Q13

let's go back to the card for autoregressive inference and decode.

each tokens is run through each matrix multiply? one step of decode is only for what? I don't understa this.

### A13

One decode step means: produce one new token for a sequence. During that step, the current/new token representation goes through all transformer layers, so yes, it hits the model's matrix multiplies layer by layer. But the previous tokens are not all rerun through every matrix multiply again; their attention K/V representations are fetched from the KV cache. So one decode step is not 'finish the answer'; it is 'advance each active sequence by one token.'

## What is the attention mechanism in a transformer?

Marker: attention mechanism section

### Q14

what exactly is the 'attention mechanimsm'? im lost on this to the level of I don't really know what's going on here. I've watched some of the three blue one brown videos and I've also tried to download weights from Huggingface and Run a Model. Are these just like files? So when we're talking about an attention mechanism, what is it exactly? create new card

### A14

At the most basic level: weights are learned numbers stored in model files. The attention mechanism is the computation that uses some of those learned numbers to decide what prior tokens matter right now. The current token makes a query. Prior tokens have keys and values. Attention compares query to keys, gets scores, then mixes the values according to those scores. So attention is not a magic memory; it is a learned lookup-and-mix operation over token representations.

### Q15

you're no longer asking me questions or engaging me in the process? do this, and update your documentation so you don't forge this

### A15

Updated the learning rules so every explanation should end with a short check-back or articulation prompt. For this attention card: try saying it back as simply as possible. Attention is the mechanism that lets the current token decide what?

### Q16

I'm still confused here, right? Like, you're saying attention is a mechanism that's the current token decide what prior context matters. But usually, always if somebody has a question, it's more than one token, right? It's multiple tokens. So why are you saying one token? Because isn't it always like a sequence of tokens? In which case, how does that work? Because then, this just doesn't apply in most situations. What doesn't apply is, when is ever the case of the current token is just a token.

### A16

Good catch. There are two phases. During prompt/prefill, the model processes many prompt tokens at once, and attention is computed for many token positions in parallel. Each token position asks: what earlier positions matter for me? During decode, after the prompt is processed, the model generates one new token at a time. That is when I say 'the current token.' So attention applies to sequences; the one-token framing is specifically the decode step.

### Q17

So, "prefill handles the sequence." What does it actually mean, "prefill"? What is being "prefilled"?

### A17

Prefill means: before the model starts generating new tokens, it processes the prompt tokens and fills the KV cache with their key/value representations. What is being prefilled is the cache/state needed for decode. After prefill, decode can generate token 1, token 2, token 3, etc. by attending to that already-filled history instead of recomputing the prompt.

### Q18

So, prefill is basically cache creation. So a sequence of tokens go in, which in the example we're talking about here is like a question or query that I have. Maybe I'm asking, are cache mere pants usually expensive? Okay, so that string of tokens now has its KV representations stored or cached and then the decode process starts, which is basically just token generation. It's generating one token at a time using the KV cache stored values, which was my sequence of tokens of my question.

### A18

Yes. That is the right model. Small addition: during decode, the KV cache is not only used; it also grows. Your prompt tokens are cached during prefill. Then each generated token also gets its own K/V added to the cache, so the next generated token can attend to both the original question and the answer-so-far.

### Q19

Prefill is the process of taking input sequence of tokens and creating key value pairs. Load is the process of producing one token after the next and extending those key value pairs.

### A19

Yes, with one word corrected: decode, not load. Prefill processes the input token sequence and creates the initial K/V cache. Decode produces one new token at a time, uses that cache, and extends it with K/V for each generated token.

## What does bytes per second mean in the memory-bandwidth calculation?

Marker: memory calculation / bandwidth section

### Q20

help me really understand the memory calculation here > what does the 'bytes per second refer to'?

### A20

Bytes per second is the memory bandwidth of the GPU system: how many bytes can be moved from GPU memory into the compute units each second. In the equation, memory time = bytes you need to fetch / bytes per second the hardware can deliver. So if you need to fetch model weights plus KV cache, the denominator is the hardware's data-moving speed, not the model's intelligence.

### Q21

let's take a step back, what are we calculating here, and why is it important?

### A21

We are calculating a lower bound on how long one inference step must take. Reiner splits it into two possible bottlenecks: time to move data and time to do math. The memory calculation estimates the data-moving part: how long to fetch weights and KV cache from GPU memory. It matters because token latency and cost depend on whether the hardware is waiting on memory or busy computing.

### Q22

i don't fully understand 'one inference step' - what does this mean?

### A22

In this part, one inference step means one decode step: the model advances each active sequence by one token. If there are 500 sequences in the batch, one step produces 500 next tokens total: one per sequence. It does not mean the whole answer; it is one tick of the generation loop.

### Q23

are we talking about inference or pre-training

### A23

Inference. Specifically serving/decode: taking already-trained model weights and using them to generate tokens for live sequences. Pre-training is where weights are updated from dataset batches. In this section, the weights are fixed; the question is how fast and cheaply the hardware can use them.

### Q24

So the weights are fixed and we're talking about inference. I guess I'm not understanding that we're talking here, we're talking about a batch. Does that mean that I, along with 500 other users in one batch, get one extra token each? And that one extra token is produced by one GPU.

### A24

Yes on the batch idea: if there are 500 active sequences in the batch, one decode step produces one next token for each sequence. Small correction: not necessarily one GPU. For frontier models, one batch step may run across many GPUs because the model weights are split across chips. So better: one coordinated GPU cluster step produces one token per sequence.

### Q25

ok, back to what we're initially trying to calculate here

### A25

We are calculating the minimum time for that one coordinated batch decode step. For batch size 500, that means the minimum time to produce 500 next tokens total: one per sequence. Reiner estimates two lower bounds: memory time, how long to fetch weights plus KV cache, and compute time, how long to do the multiplications. The step cannot be faster than the slower bottleneck.

### Q26

Just help me re-ground in what we're trying to calculate here and why it matters and the implications. We're basically saying that like everybody is trying to get more compute. And more memory. Is that right? Everyone needs more compute and more memory because... So that's just a thing because with more compute you can do more... at these multiplications and with more memory you can do... you can pull the weights in more efficiently. So this is about trying to balance those two things given the hardware constraints.

### A26

Yes, but split memory into two ideas. Memory capacity is how much data fits: weights and KV cache. Memory bandwidth is how fast that data can be moved. This calculation is mostly about bandwidth versus compute. Compute lets you do more multiplications per second. Memory bandwidth lets you feed the compute units with weights/KV faster. If one side is weak, the other is wasted. The implication: inference speed/cost is about balancing math throughput, data movement, batch size, and context length.

## What do the three inference timing equations mean?

Marker: three equations / fit lines section

### Q27

Okay, I need to make sure that I understand the three equations that he's referring to, what they are, what the implications are, and what it means that they are enough to draw some fit lines. What does each of these three equations mean? What do they show? What are the implications?

### A27

The three equations are three time costs for one batch decode step. Compute time asks how long the math takes: batch size times active parameters divided by FLOPs per second. Weight-fetch time asks how long it takes to move the model weights: weight bytes divided by memory bandwidth. KV-fetch time asks how long it takes to move cached context: batch size times context length times bytes per token divided by memory bandwidth. They are enough for fit lines because they show how each cost changes when batch size changes.

### Q28

Well, doesn't the compute time, yeah the compute time and the kvk'sh fetch time depend on the context length. So the fixed variable is compute time I guess because we're talking about inference whereas the... sorry, not the compute time. The fixed thing is the weight fetch time because the weights are pre-done.

Okay, so my understanding here is what we're trying, so the original question was why is it that some model providers are able to provide cheaper tokens? And so what the answer, the TLDR is to do with batching, and batching is about running multiple queries or multiple input token sequences at the same time. And any of the providers ability to do this depends on these two things. So, compute time, i.e. how long it takes to perform the calculations or the multiplications, and how long it takes to get the weights into the memory to use. in the KVK's time. This is quite hard to have quite wrapped my head around this yet.

### A28

You corrected the key part: the fixed term is weight fetch time. In this simplified model, compute time grows with batch size and active parameters; KV fetch grows with batch size and context length; weight fetch is mostly fixed per decode step. Cheaper tokens come from batching because the same weight-fetch cost is shared across many sequences. But batching does not make compute or KV free: each sequence still needs math and its own context fetch.

### Q29

now let me answer this question >

Batching helps most with the ___ cost, but not as much with ___ and ___.


So, let me just go back a second. So the three calculations that we're looking at, well, there's two calculations, right? The time it takes to perform the computation, which is, I think, the forward passing that we're talking about. And then there's also the time it takes to perform the memory part, which is how long it takes to pull the weights in. And you're asking me what batching helps the most with. I don't know.

### A29

Good reset. First principles: there are two buckets, compute and memory, but memory splits into two different fetches: weight fetch and KV fetch. Batching helps most with weight fetch because the same weight read can serve many sequences in the batch. It helps less with compute because each sequence still needs math. It helps less with KV fetch because each sequence has its own context to read.

### Q30

So weight fetch is more shareable because it's fixed. The weights are fixed whereas the KVKs depend on the context which is being built over time.

### A30

Yes. More precise: weights are fixed and shared across every sequence using that model. KV cache is different for each sequence because each user has a different prompt and answer-so-far. So batching amortizes the shared weight fetch, but KV fetch remains mostly per-sequence.

### Q31

I'm assuming like the white fetch would just amortize well because it's fixed, whereas the compute depends. It's variable.

### A31

Yes, close. Weight fetch amortizes because it is a shared fixed read for the batch. Compute does not amortize the same way because each sequence still needs its own multiplications to produce its own next token. Batching makes that compute efficient on GPUs, but it does not make the per-sequence math disappear.

### Q32

Okay, so the two buckets are essentially computation and memory. The memory is split into two parts. Obviously, the first part is pulling the actual weights. The second part is the KV cache, which is pulling the, what kind of recording and storing the representation of the previous sequence of tokens so that it doesn't have to recalculate it. So they're the two parts of memory. The computation, where's the computation bucket is just about running the multiplication, performing the prediction. No, on the, the batching is most effective for the weight pulling part of the memory bucket.

You could say that the weight, the fetching of the weights can become a shared cost. Whereas the Kvk, she's dependent on the sequence of context. And the compute is also dependent on the sequence. Just so I understand this, can we clarify exactly what we're meaning here by sequence? We're literally talking about if I have a question or a query, then that is a sequence of tokens.

### A32

Yes: a sequence is one active stream of tokens for one request/conversation. It includes the prompt/query tokens and, during decode, the answer-so-far tokens too. So your question is a sequence initially; once the model starts replying, the sequence becomes question plus generated answer-so-far. In a batch, there are many such sequences being advanced together.

## How does the batch size vs latency graph show the bottleneck switch?

Marker: batch size vs latency graph

### Q33

Hey, I need some help understanding the current graph that is being drawn here. We're measuring latency and my understanding is that the memory latency starts above zero because we need to pull the weights, right? But at a certain threshold, well not at a threshold, at a certain batch size, compute catches the memory and then compute becomes the actual bottleneck. Am I thinking about this the right way?

### A33

Yes, you are thinking about it the right way. First-principles version: the graph is timing one batch decode step. Memory starts above zero because weight fetch is a fixed cost. Memory is not perfectly flat because KV cache fetch grows with batch size. Compute grows because more sequences means more multiplications. Whichever line is higher is the bottleneck; once compute crosses memory, compute becomes the limiter.

## Why do the cost-per-token curves become constants after dividing by batch size?

Marker: cost per token graph / around 12:40

### Q34

right now, we're discussing the cost $ value

this is the second graph for cost per token

i don't really understand how you get from one graph to the other?

why does it become a constant?

### A34

The move is: second graph = first graph divided by batch size. If batch size is B, one decode step produces B tokens, so cost per token is total batch time divided by B. Compute time grows like cB because each extra sequence adds its own math. Divide by B and you get c, a constant. KV fetch also grows like kB because each extra sequence brings its own context, so kB/B = k. Weight fetch is different: it is mostly fixed for the batch, w, so w/B gets smaller as B grows. Check-back: if a cost doubles when batch size doubles, what happens to that cost per token after dividing by batch size?

### Q35

Toolcast makes the comment that "Claude code slow" or "Codex slow" live on the lower bound line. I don't understand.

### A35

He means: if you are willing to wait, the provider can form a larger batch, which makes the shared weight-fetch cost cheaper per token. But after the batch is large enough, weight fetch has mostly been amortized away. The remaining cost per token is compute plus KV fetch, and those are tied to each token/sequence. That flat part is the lower bound line. A slow mode would live there because waiting longer can help you reach that line, but cannot go much below it. Check-back: which part of the cost is slow mode trying to amortize: weight fetch, compute, or KV fetch?

### Q36

what does amortize key values over batch mean?

### A36

To amortize something over a batch means: pay one shared cost, then spread it across many batch items. Weights can be amortized because every sequence uses the same model weights. KV values mostly cannot be amortized because each sequence has different prior tokens, so each one has its own KV cache. If the batch has 2,000 sequences, the system does not fetch one shared KV cache and reuse it 2,000 times; it fetches 2,000 different histories. Check-back: why are weights shareable across users, but KV cache not shareable in the same way?

### Q37

amortize = simple?

### A37

Yes: amortize = spread one cost across many things. Example: if reading the weights costs $100 for one batch, and the batch has 1 token, that is $100/token. If the batch has 100 tokens, that same shared weight-read is $1/token. That is amortization. Check-back: in this graph, what cost is being spread across many tokens?

### Q38

It's to pull the KV cache?

### A38

Not quite: the thing being amortized is mainly pulling the model weights. The weights are shared across every sequence in the batch, so one weight fetch can serve many next-token predictions. KV cache fetch is different because each sequence has its own prior context, so adding another sequence adds another KV cache to fetch. Check-back: why can the same weights serve all users in the batch, but the same KV cache cannot?

### Q39

Yes, sorry, I did know that. So the weights can be reused because this is going to be the same weights used by all users because it's just the model weights and they are fixed, whereas the cache is dependent on the previous context per user.

### A39

Exactly. That is the distinction. Weights are fixed model state shared by all users of the model, so their fetch cost can be spread across the batch. KV cache is runtime state for a particular sequence, built from that user's prior tokens, so it mostly scales with the number of sequences. Tiny caveat: systems can sometimes reuse identical prefixes through prompt caching, but that is separate from the normal per-sequence KV cache point here. Check-back: if batch size doubles, which cost falls per token: weight fetch, KV fetch, or compute?

### Q40

weight fetch

### A40

Yes. Weight fetch falls per token because the same model weights are shared across more tokens in the batch. Compute and KV fetch do not fall the same way because each sequence still needs its own math and its own context read. Next check: why does that make the cost curve drop at first, then flatten out?

## How does Reiner solve for the batch size where compute equals memory?

Marker: batch size balance equation / after cost-per-token graph

### Q41

now you see this new part, I don't understand what he is doing now?

Number of total parameters over memory bandwidth = batch size x number active parameteres/ computer performance??

model params over hardware params?

### A41

He is solving for the balance batch size: the point where weight-fetch time equals compute time. Left side: total parameters over memory bandwidth means how long it takes to read the model weights. Right side: batch size times active parameters over compute performance means how long it takes to do the matrix multiplications for B sequences. Setting them equal asks: how big must the batch be before compute work catches up to the fixed weight-read cost? Rearranging separates hardware from model: FLOPs/memory bandwidth is a hardware ratio; active/total parameters is a model sparsity ratio. Check-back: what does setting the two sides equal mean physically: one happens before the other, or they take the same amount of time?

### Q42

1 why is weight fetch time = compute time? Doesn't compute time also include the other stuff?

2 in this part, I don't understand total parameters/memory bandwidth? I understand modal parameters and that you would need to divide something by the modal parameters but why memory bandwidth?
total parameters / memory bandwidth
means: how long to read the model weights from memory.

3 give me the simple explainer of 'flops' again? how are flows related to the weights and to memory etc?

### A42

1. Weight fetch time is not always equal to compute time. He is choosing the equality to solve for the crossover point. Compute time here is simplified to the weight matrix multiplies; he is deliberately ignoring KV fetch and smaller attention compute so the algebra gives a clean batch-size estimate. 2. Total parameters / memory bandwidth means amount to move / movement speed. Parameters are the weights, stored as bytes in GPU memory. Memory bandwidth is how many bytes per second the hardware can feed into the compute units. Bytes divided by bytes/second gives seconds. 3. FLOPs are floating-point operations. In this context, think: how many multiply/add math operations the GPU can do per second. Weights are the numbers used in the multiplies. Memory bandwidth gets those numbers into place; FLOPs are how fast the chip can do math once it has them. Check-back: in your own words, what is the difference between memory bandwidth and FLOPs?

### Q43

most gpu's are around 300? what is this part?

### A43

The "around 300" is a hardware ratio: compute throughput divided by memory bandwidth, after converting units so they are comparable. Roughly: for each unit of weight data the GPU can pull from memory, how many multiply operations can it do? Reiner says modern GPUs land around 300 for this ratio. That matters because the balance batch size is tied to this number: if hardware has lots of compute relative to memory bandwidth, you need a larger batch to create enough compute work to keep up with the weight fetch. Check-back: does a higher 300-like ratio mean the GPU has relatively more compute or relatively more memory bandwidth?

## How do A100, H100, B100/B200, Blackwell, and Rubin fit together?

Marker: NVIDIA GPU generations / A100 H100 B100 Rubin

### Q44

a100, h100, b100

these are nvidia chips? and now we're at which one?

I've only really heard of the H100. How does this fit into the picture with Ruben and the other names?

### A44

Yes: A100, H100/H200, and B100/B200 are NVIDIA data-center GPUs or GPU families. Simple ladder: A100 = Ampere generation; H100/H200 = Hopper generation; B100/B200/GB200 = Blackwell generation; Rubin/Vera Rubin = next platform generation after Blackwell. As of May 2026, H100 is the famous widely deployed one, Blackwell/B200/GB200 is the current frontier deployment generation, and Rubin/Vera Rubin has been announced and is moving into production/shipping as the next wave. Reiner mentions them because he is asking whether the compute-to-memory-bandwidth ratio changes across generations; his point is that both compute and memory bandwidth improve, but the ratio has stayed roughly in the same ballpark. Check-back: in the equation, are these chip names mainly about the model parameters, or the hardware side of compute and memory bandwidth?
