import type { APIRoute } from 'astro';
import manuscript from '../../../paper/reflective-bootstrapping.qmd?raw';
import bibliography from '../../../paper/references.bib?raw';
import skill from '../../../paper/skills/reflective-bootstrapping/SKILL.md?raw';

export function getStaticPaths() {
  return [
    { params: { artifact: 'reflective-bootstrapping.qmd' }, props: { content: manuscript } },
    { params: { artifact: 'references.bib' }, props: { content: bibliography } },
    { params: { artifact: 'rb-skill.md' }, props: { content: skill } },
  ];
}

export const GET: APIRoute = ({ props }) =>
  new Response(props.content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
