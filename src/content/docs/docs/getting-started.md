---
title: Getting Started
description: Set up an Airic workspace and understand the project layout.
---

Airic is workspace-local and git-friendly. A typical project includes a `.airic/` directory that holds packs, specs, and runtime configuration.

## Project layout

```text
.airic/
├─ packs/
│  ├─ packsmith/
│  └─ founder-demo/
└─ specs/
   ├─ roles/
   ├─ document-types/
   ├─ processes/
   └─ precedents/
```

### `packs/`

Extension packs bundle a complete methodology: roles, document types, processes, precedents, and tool policies. Each pack is a directory of Markdown specs your agents load at runtime.

### `specs/`

Shared specification documents that define how agents behave across packs — reviewer roles, document schemas, process templates, and precedent libraries.

## Quick start

Installation and CLI commands are coming soon. For now:

1. Browse the [Founder Demo](/docs/packsmith/#founder-playbook-demo) on the landing page
2. Read [Document-defined agents](/docs/concepts/document-defined-agents/) to understand the model
3. Watch the repository at [github.com/airicdev](https://github.com/airicdev) for releases

## Next steps

- [Packsmith](/docs/packsmith/) — convert source material into a pack
- [Reflection](/docs/concepts/reflection/) — how Airic proposes spec improvements
