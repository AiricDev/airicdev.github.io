---
title: Document-defined agents
description: Agent behavior lives in editable Markdown specs, not hidden prompts.
---

In Airic, **agent behavior is defined by documents** — roles, processes, precedents, and tool policies stored as Markdown files in your workspace.

## Why documents?

Modern agents can code, research, and automate. But serious work depends on methodology: how to frame problems, make decisions, review results, and improve over time. That knowledge should be:

- **Editable** — change a role spec, not a buried system prompt
- **Versionable** — track methodology changes in git
- **Inspectable** — anyone on the team can read what the agent will do
- **Composable** — packs combine roles, document types, processes, and precedents

## Spec types

| Spec | Purpose | Example path |
| --- | --- | --- |
| Roles | Who the agent is and how it decides | `specs/roles/reviewer.md` |
| Document types | Schemas for task and output documents | `specs/document-types/task.md` |
| Processes | Step-by-step execution flows | `specs/processes/discovery-loop.md` |
| Precedents | Captured judgment for future runs | `specs/precedents/jtbd-framing.md` |

## Extension packs

A pack packages a full methodology:

```text
packs/<your-method>/
├─ roles/
├─ document-types/
├─ processes/
├─ precedents/
└─ tool-policies/
```

Packsmith helps you build packs from source material. See [Packsmith](/docs/packsmith/) for the extraction pipeline.

## Executable documents

Airic turns clarified intent into **task documents** agents act on — durable artifacts, not ephemeral chat messages:

```text
task.md → run()
```

The agent loads the relevant pack, selects a role and process, and produces output documents you can review before committing.
