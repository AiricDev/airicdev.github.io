---
name: reflective-bootstrapping
description: Learn from a completed or meaningfully interrupted agent task by identifying experience-grounded knowledge and preparing scoped improvement proposals for human review. Use for reflection on work, human corrections, repeated friction, or the quality of earlier learning.
---

# Reflective Bootstrapping

Turn experience from the selected task into knowledge that future work can inherit. Use the available task trajectory, relevant guidance, and prior reflection cases. A live conversation is sufficient when its relevant events remain accessible. State material gaps after compaction or handoff; do not reconstruct missing events from the final artifact alone.

## Discover what practice revealed

Find informative episodes: unexpected tool behavior, retries, workarounds, repeated search, human corrections, or successful exploration. Recover the expectation from the task, instructions, plan, or precedent and compare it with what happened. Distinguish explicit expectations from your reconstruction.

Choose reflection questions appropriate to the episode. Available precedents can suggest lenses such as workflow, capability, context, authority, or generalization. Compare materially different interpretations and use counterexamples or rejected cases where available. With no precedent collection, derive the questions from the episode. Respect any focus requested by the user.

For each worthwhile finding, describe a Knowledge Delta in concise prose:

- Observation and short exact evidence excerpts.
- Interpretation, plausible alternatives, and what is new relative to the guidance available during the task.
- Applicability, uncertainty, and evidence that would confirm or revise the claim.
- Intended change to future behavior.

An episode may justify a local observation, a narrower rule, or no change. Do not turn one successful workaround into a universal procedure.

## Attribute and prepare a proposal

First finish the semantic finding. Then resolve supporting evidence and possible destinations using the tools and source versions actually available.

Verify quotes against the trace. Use recorded provenance when available; label text-search matches as candidate correspondence. Preserve ambiguous or unresolved locations. Do not infer that a document conditioned the run merely because matching text exists in it now. Exact event IDs, offsets, and hashes belong to resolver tools when provided, not to invented model output.

Identify which mechanism should change and why: a procedure, criterion, tool description, context route, precedent, reflection instruction, or an engineering change outside the guidance. Source location alone does not establish this attribution. An addition may have no existing passage to anchor; identify an owner and applicability instead.

Prepare a concrete proposed revision against an inspected version when possible. Include the trigger or context route that will make it available next time and a proportionate validation step. If the target or source cannot be established, present a semantic proposal with that limitation rather than a speculative patch.

## Synchronize with the reviewer

Explain what happened, what was learned, why it matters, where it applies, and what would change. Show the decisive evidence and uncertainty before asking for a decision. Make the lesson understandable without replaying the entire trajectory. Invite corrections to both the interpretation and its scope.

Persistent changes to shared guidance, including this skill, require human acceptance of the concrete proposal. Preparation of a proposal does not itself authorize adoption. Honor acceptance already provided for that proposal and scope; do not request it again. Keep constitutional instructions, permission enforcement, and audit mechanisms outside reflective modification.

When the reviewer decides, preserve the decision, rationale, evidence, scope, and accountable reviewer in the agreed proposal record or governance system. Apply accepted changes only through available authorized mechanisms. In later relevant work, check whether the change was reached and whether the predicted benefit appeared.

Earlier reflections and review outcomes are also evidence. If they expose a defective lens, attribution rule, or generalization habit, propose a scoped revision to the learning method through the same review process.
