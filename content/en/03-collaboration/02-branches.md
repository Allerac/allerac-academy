# 3.2 Branches: try without breaking

## Problem

Your page works. You want to try a completely new look, but you are not sure it will turn out well. If it goes wrong, the version that works needs to stay intact. How would you try it without taking a risk?

*Try to think of an answer before you go on.*

## Blocks

### 1. A branch is a parallel line
A branch is a separate line of work inside the same repository. You create a branch from the current version, change whatever you want on it, and the main version is not touched. If the experiment works, you bring it in later. If it goes wrong, you just abandon the branch.

> **Tutor notes:** analogy: drafting on a copy of the document instead of scribbling on the original. Unlike a plain copy, a branch remembers where it came from, which is why it can be merged back later.

### 2. `main` is the version that works
Almost every repository has a main branch, usually called `main`. On a team, the agreement is simple: `main` is the version that works and that everyone uses. New work goes on a branch and only goes into `main` after it is reviewed.

> **Tutor notes:** this is exactly how this course is built: every change to allerac-academy comes in through a branch and a pull request, never straight to `main`. Use this as a real example.

### 3. Give it a name that explains
A branch name says what is being done, in English, with hyphens instead of spaces:
- `try-new-colors`
- `fix-readme-typo`
- `add-contact-section`

A name like `test2` tells nothing to someone looking at the list of branches.

> **Tutor notes:** some teams use prefixes (`feature/`, `fix/`). Mention them only if the student asks. What matters is being descriptive and having no spaces.

### 4. Creating and switching branches in Codespaces
In Codespaces, the name of the current branch appears in the status bar, at the bottom left. Click it, type the name of the new branch and choose **Create new branch**. From then on, your commits go to that branch. The first time you push, the editor offers to publish the branch to GitHub (**Publish Branch**).

To go back to `main`, click the branch name again and choose `main`. The files change to that branch's version.

> **Tutor notes:** in the terminal, the equivalent is `git switch -c try-new-colors`. Show it only if the student prefers the terminal. If they are surprised that the files "changed by themselves" when switching branches, explain that each branch has its own version.

### 5. On a tablet or phone
On the GitHub website you can create a branch in the browser: on the repository page, open the branch menu (where `main` appears), type the new name and choose to create the branch. Then, with that branch selected, edit the file with the edit button and commit on it. This also works in a phone's browser; it is just more cramped.

> **Tutor notes:** the official documentation describes creating branches on the website (the branch dropdown menu). Confirm with the student that the right branch is selected before committing: on a phone it is easy to commit to `main` by accident.

## Mission

**On a computer (main path):**

1. In the `my-academy-journal` codespace, create a branch called `try-new-colors`.
2. Ask AI for a color or style change in `index.html` and apply it.
3. Commit with a clear message and publish the branch (**Publish Branch** / push).
4. On GitHub, switch between `main` and `try-new-colors` and see that `index.html` on `main` did not change.
5. Tell the tutor the branch name and the difference between the two versions.

**On a tablet or phone:** create the `try-new-colors` branch from the github.com branch menu, edit `index.html` on that branch (with AI's help, pasting the change) and commit on it. Then compare with `main`.

**How the tutor checks:** the `try-new-colors` branch exists in the repository, has at least one commit with a clear message, and `main` still has the previous version. The student explains why `main` did not change.

## Go deeper

- Creating and deleting branches on the website: [official GitHub documentation](https://docs.github.com/en/pull-requests/how-tos/commit-changes/managing-branches-within-your-repository). Checked on November 26, 2026.
- Branches, commits and push in Codespaces: [using source control in your codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace). Checked on November 26, 2026.
