---
description: Create a git commit with conventional commits format
---

Create a git commit using Conventional Commits format. First run 'git add .' to stage all changes. Then create a commit message following the Conventional Commits specification (https://www.conventionalcommits.org/). The commit message should start with one of: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert - followed by an optional scope in parentheses and then a colon and a short description. If a description parameter was provided, focus on that aspect in your commit message: '${parameters.description}'. If no description was provided, analyze the changes and create an appropriate commit message.