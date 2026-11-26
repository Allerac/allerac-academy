# 3.6 Your first real contribution

## Problem

In Module 0 you opened an issue about something confusing in the course. Now you know how to create a branch, commit and open a pull request. Instead of only reporting it, could you fix it?

## Blocks

### 1. From issue to pull request
An issue says "this needs to change". A pull request says "here is the change". On a team, the two go together: the issue records the problem and the conversation, and the PR brings the solution. Anyone on the team can propose a fix, not only the person who wrote the original.

> **Tutor notes:** connect with lesson 0.4. If the issue the student opened has already been resolved, they can pick another small improvement in the course content.

### 2. Start small
The best first PR is small: a typo, a confusing sentence, a broken link. It is quick to review, easy to understand and teaches the whole path. One thing per PR.

> **Tutor notes:** discourage a big first PR ("I rewrote the whole lesson"). Suggest changes to the course text in `content/` (the student's language folder, or `content/pt/` for the original). Do not suggest touching the website's code in the first PR.

### 3. Follow the house rules
Every project has agreements. In allerac-academy:
- every change comes in through a branch and a pull request, **never straight to `main`**;
- code, file names and commit messages are in English;
- the course text is written in Portuguese first, then translated;
- the Allerac team does the merge, after the review.

> **Tutor notes:** the website editor may offer "Commit directly to the main branch". Always guide the student to choose "Create a new branch for this commit and start a pull request". If they commit to `main` by mistake, it is not the end of the world: tell the team in the course chat and move on.

### 4. Talking inside GitHub
The conversation about the change lives in the PR itself, not in a chat app: that way the whole team sees it and it stays on record. Some tools:
- write `Closes #12` in the description to link the PR to issue number 12. When the PR is merged, the issue closes on its own;
- use `@name` to call on a specific person;
- reply to review comments, even if it is just "done, thanks!".

> **Tutor notes:** the keyword (`Closes`, `Fixes`, `Resolves`) only works when the PR targets the default branch (`main`). Ask the student not to tag people without a reason. The ideal tone is the one from lesson 3.3: specific and kind.

### 5. Review is part of it
The reviewer may ask for an adjustment. That is the process working, not a rejection. You make the change on the same branch (a new commit goes into the same PR) and reply to the comment. When everything is right, the team merges it, and your name is in the history of a real project.

> **Tutor notes:** celebrate the merge as a milestone: it is the student's first real contribution to an Allerac project. To adjust a PR on the website, open **Files changed**, use the file's menu and choose edit, committing to the same branch.

## Mission

**On the GitHub website (the simplest path, on any device):**

1. Pick a small improvement in the course text: it can be your issue from Module 0, a typo or a confusing sentence. The course text lives in `content/` (one folder per language).
2. In [allerac-academy](https://github.com/Allerac/allerac-academy), open the lesson file and click the edit button.
3. Make the change. When you confirm, write a commit message in English and choose **Create a new branch for this commit and start a pull request**. Do not choose to commit directly to `main`.
4. In the PR, write a clear title and a description with what, why and how to check. If there is an issue, write `Closes #` followed by its number.
5. Follow the review and reply to comments. Do not merge it yourself: the team does that.
6. Send the tutor the link to the PR.

**On a computer, with Codespaces (optional):** if you have access to create a codespace for allerac-academy, you can make the same change there: create a branch, edit, commit, publish the branch and open the PR from Source Control.

**On a tablet or phone:** the website path works in the browser. After opening the PR, GitHub Mobile is a good way to get notified about the review and reply to comments.

**How the tutor checks:** there is a PR from the student in Allerac/allerac-academy, from a branch into `main`, with a small, focused change, a clear title, a description with what and why (and `Closes #` if there is an issue), and the student replied to any review comments.

## Go deeper

- Editing files and proposing changes on the website: [official GitHub documentation](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files). Checked on November 26, 2026.
- Linking a pull request to an issue: [official GitHub documentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue). Checked on November 26, 2026.
- Commenting on a pull request: [official GitHub documentation](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/commenting-on-a-pull-request). Checked on November 26, 2026.
