export const features = [
  {
    title: 'Document-defined agents',
    desc: 'Agent behavior lives in editable Markdown, not hidden prompts.',
    snip: 'specs/roles/reviewer.md',
  },
  {
    title: 'Extension packs',
    desc: 'Package a methodology as roles, document types, processes, precedents, and tool policies.',
    snip: 'packs/<your-method>/',
  },
  {
    title: 'Packsmith',
    desc: 'Convert a playbook, SOP, course, or expert workflow into an Airic extension pack.',
    snip: 'airic pack from ./source',
  },
  {
    title: 'Executable documents',
    desc: 'Turn clarified intent into task documents agents can act on.',
    snip: 'task.md → run()',
  },
  {
    title: 'Visible reflection',
    desc: 'Agents review their own work and surface friction, failure patterns, and missing rules.',
    snip: 'reflect --run last',
  },
  {
    title: 'Human-approved learning',
    desc: 'Improvements become reviewable Markdown diffs before changing future agent behavior.',
    snip: '+ added precedent #014',
  },
] as const;

export const pipeline = [
  'Source Method',
  'Method Map',
  'Airic Entities',
  'Extension Pack',
  'Simulation',
  'Reflection',
  'Improved Pack',
] as const;

export const packsmithInputs = [
  'startup playbooks',
  'engineering workflows',
  'company SOPs',
  'consulting frameworks',
  'course materials',
  'expert interviews',
  'existing skill repos',
] as const;

export const demoStages = [
  'idea validation',
  'problem hypothesis',
  'customer discovery',
  'MVP scope',
  'launch readiness',
  'GTM planning',
  'reflection and improvement',
] as const;

export const reflectionQuestions = [
  'What went wrong?',
  'Which context caused the mistake?',
  'Was the process unclear?',
  'Was the document type missing a requirement?',
  'Should this human judgment become a precedent?',
  'Should the pack be improved?',
] as const;

export const comparison: readonly [string, string][] = [
  ['Hidden prompts', 'Editable Markdown behavior'],
  ['One-off chats', 'Durable executable documents'],
  ['Skills as isolated procedures', 'Packs as full methodology systems'],
  ['Silent memory', 'Human-approved spec patches'],
  ['Runtime supervision', 'Reflection-driven improvement'],
  ['Tool-first automation', 'Method-first collaboration'],
  ['Vendor black box', 'Open source, workspace-local'],
];

export const audiences = [
  'AI-native builders',
  'open-source hackers',
  'software architects',
  'startup founders',
  'consultants',
  'educators',
  'methodology authors',
  'teams turning SOPs into agent workflows',
] as const;

export const scatteredSources = [
  'books.pdf',
  'notion-wiki',
  'company.sop',
  'deck-v7.key',
  'expert.brain',
  'playbook.md',
  'course-101',
  'team.lore',
  'checklists/',
] as const;

export const heroSessionSteps = [
  ['Source', 'methodology'],
  ['Pack', 'airic extension'],
  ['Work', 'guided execution'],
  ['Reflection', 'review the run'],
  ['Patch', 'spec diff → approve'],
] as const;

export const siteMeta = {
  title: 'Airic — Methodology runtime for document-defined agents',
  description:
    'Airic is an open-source methodology runtime. Convert playbooks, SOPs, and expert workflows into document-defined agent packs you can run, reflect on, and improve.',
  ogDescription: 'Turn methodology into executable agents. Document-defined, editable, versionable.',
  githubUrl: 'https://github.com/airicdev',
} as const;
