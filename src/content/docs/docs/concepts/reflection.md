---
title: Reflection
description: Self-improvement through human-reviewable Markdown diffs.
---

Airic does not silently update hidden memory. After work is done, agents **reflect on the process** and propose changes as Markdown diffs you review and approve.

## Reflection questions

After each run, Airic asks:

- What went wrong?
- Which context caused the mistake?
- Was the process unclear?
- Was the document type missing a requirement?
- Should this human judgment become a precedent?
- Should the pack be improved?

## Patches, not prompts

Improvements become **spec patches** — visible diffs against methodology documents:

```diff
@@ -12,6 +12,11 @@
   When framing a customer problem,
   always restate it as a Job-To-Be-Done
   before generating solution candidates.

+ ## Precedent (added 2026-06-27)
+ If the user describes a workflow,
+ extract the trigger, the desired
+ outcome, and the current workaround
+ before proposing any solution.
- // TODO: revisit framing rules
```

You approve or request changes before the pack is updated. Future runs inherit the improved methodology.

## Human-approved learning

> Airic learns by editing methodology documents — with human approval.

This is the opposite of silent memory updates:

| Approach | Airic |
| --- | --- |
| Hidden prompt edits | Visible Markdown diffs |
| Automatic behavior change | Explicit approval step |
| Opaque learning | Auditable precedent library |

See the [reflection section on the landing page](/#demo) for a live mock session, or compare approaches in [vs Traditional agents](/docs/concepts/comparison/).
