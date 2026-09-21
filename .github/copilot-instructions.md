# Workspace Agent Instructions

## Skill discovery

- Before starting any task, scan `.agents/skills/` recursively for every `SKILL.md` file.
- Read the complete `SKILL.md` for each skill whose description or name matches the task, the files being changed, or the validation required.
- Treat the matching skill instructions as mandatory workflow guidance and follow their prerequisites, tool choices, and verification steps.
- Do not apply unrelated skills merely because they are installed. If no skill matches, use the normal repository workflow.
- When a skill points to another local reference, read that reference before relying on it.
- Re-scan the skills directory when a task mentions a new workflow, framework feature, debugging method, or validation tool.

Useful discovery command:

```bash
find .agents/skills -type f -name SKILL.md -print
```

## Project context

- This is a Next.js App Router project under `src/app/`, using TypeScript, Tailwind CSS, Turbopack, Motion, and Lucide React.
- Read the root `AGENTS.md` before changing Next.js code. It contains generated Next.js guidance and must be preserved.
- Keep portfolio content grounded in the supplied CV. Do not invent personal details, experience, projects, technologies, dates, links, or achievements.
- Preserve the black, white, and grey visual direction and the responsive, accessible design system.

## Validation

- After edits, run the narrowest relevant validation first, then `npm run lint` and `npm run build` when the change affects application code.
- For runtime changes, use the installed Next.js development-loop skill when available and verify the running page in a browser.
- Do not commit changes unless the user explicitly requests a commit.