---
title: "From Reasoning to Concept Creation: Three Frontiers of AI4Research"
description: "From checking an answer to testing an explanation and creating a concept. This essay uses reasoning, abduction, and abstraction discovery to examine directions for AI research."
date: "2026-11-20"
author: "Xuan Gong"
credit: "with the help of ChatGPT"
lang: "en"
permalink: "/blog/from-reasoning-to-concept-creation/"
alternate_url: "/blog/from-reasoning-to-concept-creation/zh/"
alternate_title: "从推理到创造概念：通往 AI4Research 的三层智能"
tags: ["AI4Research", "Reasoning", "Abstraction"]
cover: {"src": "/assets/images/blog/ai4research/cover-en.png", "alt": "AI4Research cover", "width": 1600, "height": 900}
---

<p class="post-lead">An opaque box sits on a scale. A tube drains into a cup off the scale. Starting with the box empty each time, you pour in 10, 20, then 30 grams of water. The scale gains exactly 10, 20, then 30 grams. You have one trial left. Would you pour in 20 grams again, or try 50?</p>

<figure>
  <img src="{{ '/assets/images/blog/ai4research/water-box-bench-en.png' | relative_url }}" alt="A box with a fill port sits on a scale. A separate cup catches outflow. In three trials starting empty, the mass gained equals the water poured." width="1440" height="828" decoding="async">
  <figcaption>A thought experiment. The increase on the scale is the water the box retains from this pour. Predict a reading, then open your trial.</figcaption>
</figure>

<details class="post-puzzle-answer">
  <summary>Repeat the 20 g pour</summary>
  <p>The scale gains 20 g again. Repeating the trial builds confidence in the reading. A colleague who thinks the box holds at most 30 g would have predicted exactly the same result.</p>
</details>

<details class="post-puzzle-answer">
  <summary>Try the 50 g pour</summary>
  <p>The scale gains 30 g. The other 20 g lands in the cup. If you predicted 50, you now know where the pattern breaks. If you predicted 30, there is still a puzzle. Can the box retain 30 g per pour, or 30 g in total?</p>
</details>

<p>Hand these readings to an AI system and consider three things it could do. Given that the empty box holds 30 g, working out how much water stays after a 50 g pour is <strong>reasoning</strong>. To distinguish a 30 g limit per pour from a 30 g limit in total, pour in 20 g twice without draining the box. The first hypothesis predicts a second gain of 20 g. The second predicts a gain of just 10 g. Using that experiment to choose between explanations is <strong>abduction</strong>. If the scale gains 20 g and then 10 g, a new variable can account for both readings: the capacity remaining before each pour. Finding a variable that also helps predict the next reading is <strong>abstraction discovery</strong>.</p>

<figure>
  <img src="{{ '/assets/images/blog/ai4research/water-box-state-en.png' | relative_url }}" alt="Two cutaways of a 30 g reservoir. Starting empty it retains all 20 g. Starting with 20 g inside it retains 10 g of the same pour and drains 10 g." width="1440" height="828" decoding="async">
  <figcaption>Cutaways under the total-capacity hypothesis. Before the second pour, the box has room for only 10 g, so another 10 g drains off the scale.</figcaption>
</figure>

<nav class="post-toc" aria-labelledby="post-toc-title" markdown="1">
<strong id="post-toc-title">On this page</strong>

1. Contents
{:toc}

<p class="post-toc-references"><a href="#references">References and further reading</a></p></nav>

## Reasoning, abduction, and abstraction {#three-frontiers}

<p>These three capabilities answer different questions. I use <strong>reasoning</strong> primarily for drawing conclusions from given premises. <strong>Abduction</strong> starts with an observed result and proposes a hypothesis that could explain it. <strong>Abstraction</strong> extracts concepts or relationships from specific experiences so they can be used in other settings.</p>

<figure class="post-original-figure">
  <img src="{{ '/assets/images/blog/ai4research/three-frontiers-en.png' | relative_url }}" alt="Three frontiers of AI research" width="1400" height="788" loading="lazy" decoding="async">
</figure>

<p>In the <em>Prior Analytics</em>, Aristotle gave a systematic account of deduction and how a conclusion follows necessarily from its premises. In 1878, Charles S. Peirce distinguished deduction, induction, and hypothetical inference. In later work he used abduction to describe how we come up with an explanation for a surprising observation. <a class="post-cite" href="#ref-en-22">[22]</a> <a class="post-cite" href="#ref-en-1">[1]</a> <a class="post-cite" href="#ref-en-2">[2]</a></p>

<p>Abstraction has a distinct intellectual history. John Locke considered how general ideas arise from particular experiences. In cognitive science, Gentner's structure-mapping theory explains how relationships between objects can carry over from one domain to another. In AI, Chollet proposed measuring intelligence by how efficiently a system acquires new skills from limited experience. <a class="post-cite" href="#ref-en-23">[23]</a> <a class="post-cite" href="#ref-en-3">[3]</a> <a class="post-cite" href="#ref-en-4">[4]</a></p>

<p>Tom Zahavy also uses Peirce's distinction among deduction, induction, and abduction to discuss scientific discovery in AI, with particular attention to how systems generate new hypotheses. In my framework, deduction falls under reasoning, and I treat induction as one form of abstraction. Recognizing a common pattern across examples and extending it to an unseen case already involves abstraction. <a class="post-cite" href="#ref-en-24">[24]</a></p>

<p>I extend abstraction to discovering and revising the concepts themselves. Given a set of variables, AI can infer relationships among them from observations. When a regularity breaks down in a new environment, it can reconsider which variables to keep, which to introduce, and how to use the same concepts to describe different environments. This kind of abstraction makes new candidate explanations available for the next round of abduction.</p>

## Reasoning: how verifiable feedback supports mathematical discovery {#learning-signals}

<p>Competitive programming, olympiad mathematics, and research mathematics share a useful asymmetry. Finding a solution is hard, yet a candidate can be checked once it exists. A program can run against tests, a symbolic engine can derive the consequences of a geometric construction, and a proof can undergo mathematical review or formal verification. Each gives the system grounds for pursuing one path and abandoning another. <a class="post-cite" href="#ref-en-6">[6]</a> <a class="post-cite" href="#ref-en-20">[20]</a> <a class="post-cite" href="#ref-en-21">[21]</a> <a class="post-cite" href="#ref-en-15">[15]</a></p>

<p>Several research directions exploit that asymmetry. Learning from checkable answers improves the choice of solution strategies. A learned policy can guide symbolic search toward a productive intermediate construction. More computation at inference gives a system room to backtrack and try alternatives. The resulting successes extend from contest tasks to checkable arguments for open mathematical problems. When the criterion is clear, extra compute can explore meaningfully different solutions, and successful searches can inform better policies. <a class="post-cite" href="#ref-en-6">[6]</a> <a class="post-cite" href="#ref-en-20">[20]</a> <a class="post-cite" href="#ref-en-21">[21]</a> <a class="post-cite" href="#ref-en-15">[15]</a></p>

<figure class="reasoning-proofs" id="ns-eth">
  <div class="reasoning-proof-pair">
    <div>
      <img src="{{ '/assets/images/blog/ai4research/ns-vortex-stretching.png' | relative_url }}" alt="Two schematic snapshots show a vortex core narrowing radially and stretching along its axis." width="919" height="560" loading="lazy" decoding="async">
      <strong>Navier–Stokes · Constructing a singularity</strong>
      <span>The vortex core narrows and stretches. OpenAI reports a three-dimensional flow that develops a finite-time singularity under smooth forcing.</span>
    </div>
    <div>
      <img src="{{ '/assets/images/blog/ai4research/eth-counting-assignments.png' | relative_url }}" alt="The eight assignments of a three-variable clause form a cube. Seven filled vertices satisfy it. Only the open vertex, 000, does not." width="919" height="560" loading="lazy" decoding="async">
      <strong>ETH · Proving a runtime bound</strong>
      <span>Each vertex is an assignment. OpenAI reports an exact count of satisfying assignments in time subexponential in the variable count for fixed clause width.</span>
    </div>
  </div>
  <figcaption>Conceptual illustrations. Both projects released a proof of the claimed result together with a Lean formalization. <a href="https://openai.com/index/navier-stokes-solution/">Navier–Stokes report</a> · <a href="https://openai.com/index/building-scientific-understanding-with-academic-communities/#the-exponential-time-hypothesis-is-false">ETH report</a></figcaption>
</figure>

## Abduction: from proposing explanations to eliminating them experimentally {#abduction-and-abstraction}

<p>Empirical science adds another difficulty. A system can reason correctly from two hypotheses and still have no grounds for choosing between them. If both explain the existing observations, the most useful next deduction identifies a new condition under which their forecasts diverge. This is where the ability to solve problems begins to serve abduction.</p>

<p>Across biomedical hypothesis generation, automated computational experiments, and cognitive theory discovery, three pieces of a research process are taking shape. Systems can synthesize testable proposals from the literature, run experiments to compare predictions, and revise an explanation in light of fresh data. Proposed interventions have gained experimental support, and revised theories have improved predictions on held-out studies. What connects these results is the role of independent evidence: it can select among model-generated explanations and change the explanations proposed in the next round. <a class="post-cite" href="#ref-en-7">[7]</a> <a class="post-cite" href="#ref-en-14">[14]</a> <a class="post-cite" href="#ref-en-17">[17]</a></p>

<figure>
  <img src="{{ '/assets/images/blog/ai4research/discriminating-experiment-en.png' | relative_url }}" alt="Two hypotheses agree on the observed points and diverge at a new condition." width="1320" height="697" loading="lazy" decoding="async">
  <figcaption>Both explanations fit the observations on the left. A measurement at the marked condition on the right can change their relative credibility.</figcaption>
</figure>

<p>The bottleneck follows directly. Proposing another hypothesis is cheap. Obtaining an observation that separates hypotheses can be expensive. Selective reporting also makes winning explanations easier to recover from papers than the reasons alternatives were discarded. In Bayesian experimental design, given data <var>D</var> and an uncertain hypothesis <var>H</var>, an equal-cost design can choose the experiment <var>a</var> maximizing <var>I(H; Yₐ ∣ D)</var>, where <var>Yₐ</var> is its unknown outcome. Random variation anticipated equally by every candidate can be hard to predict while carrying no information that distinguishes them. <a class="post-cite" href="#ref-en-8">[8]</a> <a class="post-cite" href="#ref-en-11">[11]</a></p>

## Abstraction and AGI: what transfer and continual learning require {#research-agenda}

<p>When we use information gain to choose an experiment, we measure how well its outcome can distinguish the current hypotheses. If every candidate omits the same state variable, an experiment can efficiently select the best of them while all remain systematically wrong under the same conditions. Further proposals help insofar as they can express a distinction that was previously missing. We now have to ask which concepts our explanations are built from.</p>

<p>My reason for treating abstraction as a requirement for AGI comes from generality itself. A system has finite experience and must adapt to combinations of tasks that training cannot enumerate. It has to decide which situations can share knowledge and which seemingly similar situations demand different predictions or actions. Mapping an observation history <var>X</var> to a state <var>Z = φ(X)</var> makes that decision. A useful abstraction lets superficially different experiences train a common capability while preserving distinctions that matter for the outcome. It can be implicit in a learned representation or explicit in a concept people can name. <a class="post-cite" href="#ref-en-3">[3]</a> <a class="post-cite" href="#ref-en-4">[4]</a> <a class="post-cite" href="#ref-en-13">[13]</a></p>

### Two clouds: how far a concept travels and how it changes {#two-clouds}
{: .no_toc}

<p>In a 1900 lecture, Lord Kelvin described two unresolved problems in physics as clouds. One concerned the relative motion of the ether and material bodies, and the other concerned the equipartition of energy. I borrow the metaphor for abstraction in AI. Once a concept works on its original task, two questions remain. Can it transfer to unfamiliar settings? Can it be revised when it meets a counterexample? <a class="post-cite" href="#ref-en-10">[10]</a></p>

<p>The first cloud is <strong>generalization</strong>. Many representations can fit the training experience equally well. A change of environment separates predictions that previously coincided and reveals which regularities the model relied on. If it retained relationships that tasks share, only the details specific to the new environment need to be learned. If those details became part of the rule, each shift forces the system to learn the same underlying skill again. Abstraction matters because it can spare the system that repeated work. <a class="post-cite" href="#ref-en-4">[4]</a></p>

<p>The second cloud is <strong>continual learning</strong>. When transfer fails, the system has to locate the failure in an inference, a proposed mechanism, or a state representation shared by several tasks. A parameter update may fix a local discrepancy. Splitting a concept can change many earlier predictions. To decide which relationships to carry forward and which to revise, the system has to learn the conditions under which earlier knowledge still holds.</p>

<figure class="post-original-figure">
  <img src="{{ '/assets/images/blog/ai4research/discovery-cycle-en.png' | relative_url }}" alt="Two clouds and the discovery–revision cycle" width="1400" height="788" loading="lazy" decoding="async">
</figure>

<p>Embodied AI offers an example. More demonstrations of the same kind can improve a robot's performance in familiar settings, with limited gains when the objects or surroundings change. Experiments with physical robots find that greater diversity in objects and environments helps transfer. This makes me suspect that some apparent scaling bottlenecks begin with the choice of what to learn. If the goal is for the same skill to work on different robots, a system needs to learn the task relationships that their different actions have in common. <a class="post-cite" href="#ref-en-18">[18]</a> <a class="post-cite" href="#ref-en-19">[19]</a></p>

## Conclusion {#research-directions}

### Why reasoning comes before abduction and abstraction
{: .no_toc}

<p id="conclusion">I see <strong>reasoning → abduction → abstraction</strong> as a sequence of dependencies. Reasoning makes a hypothesis testable by spelling out what we should observe if it holds. Abduction uses those predictions to choose experiments and their outcomes to revise the relative credibility of competing hypotheses. When rival hypotheses repeatedly fail to predict outcomes under the same kinds of conditions, we have reason to ask whether their shared concepts miss a distinction that matters. Abstraction revises those concepts, yielding new explanations and predictions for the next round of reasoning and experiment.</p>

<figure>
  <img src="{{ '/assets/images/blog/ai4research/three-capabilities-cycle-en.png' | relative_url }}" alt="Reasoning derives testable predictions from hypotheses. Abduction uses experiments to compare them. Repeated failures across rival hypotheses can motivate revisions to their shared concepts. The revised concepts generate hypotheses for the next round of tests." width="1200" height="370" loading="lazy" decoding="async">
</figure>

### How each capability advances
{: .no_toc}

<p><strong>Reasoning already has a scaling recipe that works.</strong> Pretraining scaling laws describe how model size, data, and training compute affect language-model prediction loss. On top of that foundation, reinforcement learning with verifiable rewards can improve solution strategies. Additional compute at inference lets the model compare more paths, backtrack, and check intermediate results. Together, these mechanisms have delivered substantial gains on tasks with checkable answers, including mathematics and programming. <a class="post-cite" href="#ref-en-25">[25]</a> <a class="post-cite" href="#ref-en-6">[6]</a> <a class="post-cite" href="#ref-en-21">[21]</a></p>

<p><strong>Abduction is moving from proposing hypotheses to closing the experimental loop.</strong> The environment is central to this progress. Laboratories, simulators, and computational research environments determine which interventions AI can make, what it can observe, and how much a result costs. An environment that supplies evidence distinguishing rival explanations lets the system update its judgment and choose the next experiment. Without that feedback, each new proposal adds another candidate awaiting a test. <a class="post-cite" href="#ref-en-11">[11]</a> <a class="post-cite" href="#ref-en-17">[17]</a></p>

<p><strong>The path for abstraction is still open.</strong> I don't yet know what kind of learning process would let AI reliably discover when a concept needs redefining, or how to tell whether a revision has captured structure that transfers. The two clouds give us two ways to assess progress. Does the new concept work in previously unseen environments? When the system encounters a counterexample, can it revise the concept while preserving the knowledge that still holds?</p>

## References and further reading {#references}
{: .no_toc}

<ol class="post-references">
<li id="ref-en-1">Peirce, C. S. (1878). <a href="https://cspeirce.omeka.net/items/show/7">Deduction, Induction, and Hypothesis</a>. <em>Popular Science Monthly, 13, 470–482</em>. — Historical source for deduction, induction, and hypothetical inference.</li>
<li id="ref-en-2">Douven, I. (2011; rev. 2025). <a href="https://plato.stanford.edu/entries/abduction/">Abduction</a>. <em>Stanford Encyclopedia of Philosophy</em>. — Modern interpretation of explanatory reasoning and its relation to other inference types.</li>
<li id="ref-en-3">Gentner, D. (1983). <a href="https://doi.org/10.1207/s15516709cog0702_3">Structure-Mapping: A Theoretical Framework for Analogy</a>. <em>Cognitive Science, 7(2), 155–170</em>. — Relational structure mapping in analogy and cross-domain transfer.</li>
<li id="ref-en-4">Chollet, F. (2019). <a href="https://arxiv.org/abs/1911.01547">On the Measure of Intelligence</a>. <em>arXiv:1911.01547</em>. — Skill-acquisition efficiency, generalization, and the ARC benchmark.</li>
<li id="ref-en-5">Stanford Encyclopedia of Philosophy (rev. 2022). <a href="https://plato.stanford.edu/entries/scientific-discovery/">Scientific Discovery</a>. <em>Stanford Encyclopedia of Philosophy</em>. — Philosophy of scientific discovery, including selective vs. creative abduction.</li>
<li id="ref-en-6">Guo, D., et al. (2025). <a href="https://doi.org/10.1038/s41586-025-09422-z">DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning</a>. <em>Nature, 645, 633–638</em>. — Empirical example of verifiable-reward RL for mathematical and coding reasoning.</li>
<li id="ref-en-7">Gottweis, J., et al. (2026). <a href="https://doi.org/10.1038/s41586-026-10644-y">Accelerating scientific discovery with Co-Scientist</a>. <em>Nature, 655, 487–496</em>. — Example of AI hypothesis generation, critique, and experimental validation.</li>
<li id="ref-en-8">Rosenthal, R. (1979). <a href="https://doi.org/10.1037/0033-2909.86.3.638">The “File Drawer Problem” and Tolerance for Null Results</a>. <em>Psychological Bulletin, 86(3), 638–641</em>. — Classic discussion of selective reporting and missing null results.</li>
<li id="ref-en-9">Locatello, F., et al. (2019). <a href="https://proceedings.mlr.press/v97/locatello19a.html">Challenging Common Assumptions in the Unsupervised Learning of Disentangled Representations</a>. <em>ICML / PMLR, 97, 4114–4124</em>. — Limits of identifiability in unsupervised disentangled representation learning.</li>

<li id="ref-en-10">Kelvin, Lord (1901; lecture 1900). <a href="https://doi.org/10.1080/14786440109462664">Nineteenth Century Clouds over the Dynamical Theory of Heat and Light</a>. <em>Philosophical Magazine, 2(7), 1–40</em>. — Historical inspiration for the two-cloud perspective adopted in this essay.</li>
<li id="ref-en-11">Lindley, D. V. (1956). <a href="https://www.jstor.org/stable/2237191">On a Measure of the Information Provided by an Experiment</a>. <em>The Annals of Mathematical Statistics, 27(4), 986–1005</em>. — Foundational information-theoretic account of experimental value.</li>
<li id="ref-en-12">Schölkopf, B., et al. (2021). <a href="https://doi.org/10.1109/JPROC.2021.3058954">Toward Causal Representation Learning</a>. <em>Proceedings of the IEEE, 109(5), 612–634</em>. — Learning high-level causal variables from observations for transfer and generalization.</li>
<li id="ref-en-13">Tishby, N., Pereira, F. C., &amp; Bialek, W. (1999). <a href="https://mlanthology.org/misc/1999/tishby1999misc-information/">The Information Bottleneck Method</a>. <em>Allerton Conference on Communication, Control, and Computing</em>. — Compress representations while retaining task-relevant information.</li>
<li id="ref-en-14">Lu, C., et al. (2024). <a href="https://arxiv.org/abs/2408.06292">The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery</a>. <em>arXiv:2408.06292</em>. — A pioneering example of an automated scientific research workflow.</li>
<li id="ref-en-15">OpenAI (2026). <a href="https://github.com/openai/math/tree/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026">The Quasi-Riemann Hypothesis: A Zero-Free Half-Plane Re(s) &gt; 7/8</a>. <a href="https://github.com/openai/math/blob/main/lean/docs/003.md">Statement and scope of the Lean formalization</a>.</li>
<li id="ref-en-16">Baker, M. (2026). <a href="https://mattbaker.blog/2026/10/08/some-early-morning-thoughts-on-the-openai-dump/">Some early morning thoughts on the OpenAI dump</a>. Records Alex Kontorovich’s assessment of the quasi-Riemann result.</li>
<li id="ref-en-17">Jagadish, A. K., et al. (2026). <a href="https://arxiv.org/abs/2606.26448">Closing the Loop to Discover Psychological Theories with an Automated Cognitive Scientist</a>. <em>arXiv:2606.26448</em>.</li>
<li id="ref-en-18">Lin, F., et al. (2024, rev. 2026). <a href="https://arxiv.org/abs/2410.18647">Data Scaling Laws in Imitation Learning for Robotic Manipulation</a>. <em>arXiv:2410.18647</em>.</li>
<li id="ref-en-19">Physical Intelligence (2025). <a href="https://www.pi.website/blog/pi05">π₀.₅: a VLA with Open-World Generalization</a>. </li>
<li id="ref-en-20">Trinh, T. H., et al. (2024). <a href="https://www.nature.com/articles/s41586-023-06747-5">Solving olympiad geometry without human demonstrations</a>. <em>Nature</em>.</li>
<li id="ref-en-21">OpenAI (2024). <a href="https://openai.com/index/learning-to-reason-with-llms/">Learning to reason with LLMs</a>.</li>
<li id="ref-en-22">Aristotle. <a href="https://classics.mit.edu/Aristotle/prior.1.i.html">Prior Analytics, Book I</a>. — An account of premises and deduction.</li>
<li id="ref-en-23">Locke, J. (1690). <a href="https://barryfvaughan.org/text/philtext/locke/bk2/11.html">An Essay Concerning Human Understanding, Book II, Chapter XI, §9</a>. — How general ideas arise from particular experiences.</li>
<li id="ref-en-24">Zahavy, T. (2026). <a href="https://proceedings.mlr.press/v306/zahavy26a.html">Position: LLMs can’t jump</a>. <em>Proceedings of the 43rd International Conference on Machine Learning</em>. — Applies the distinction among deduction, induction, and abduction to scientific discovery in AI.</li>
<li id="ref-en-25">Kaplan, J., et al. (2020). <a href="https://arxiv.org/abs/2001.08361">Scaling Laws for Neural Language Models</a>. <em>arXiv:2001.08361</em>. — Empirical relationships between language-model prediction loss and the scale of models, data, and training compute.</li>
</ol>
