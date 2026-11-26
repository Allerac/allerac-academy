# 3.3 Pull requests and review

## Problem

Your new look is ready on the branch. Before it goes into the main version, you want someone on the team to look at it, comment and say "good to go". How does that person see exactly what changed and talk to you about it, without sending files back and forth by message?

## Blocks

### 1. A pull request is a proposal
A pull request (PR) is a request: "please merge my branch into `main`". It shows every change, keeps the conversation about them, and stays open until someone approves it and merges it, or closes it.

> **Tutor notes:** analogy: handing a draft to a colleague to review before publishing, with room for comments in the margin. The name is odd; do not spend time on where it comes from.

### 2. A good description
The PR title says what it does (like a commit). The description answers three questions:
- **What** changed?
- **Why** did it change?
- **How to check it?** (what the reviewer should look at or test)

You can ask AI for a draft of the description based on the changes, then adjust it in your own words.

> **Tutor notes:** show a real PR from this course in allerac-academy as an example (titles and descriptions are in English). Common mistake: an empty description or "see commits".

### 3. Reviewing: reading the diff
In the **Files changed** tab, GitHub shows the difference: removed lines in red and new lines in green. The reviewer reads calmly, can comment on a specific line and, at the end, submits the review: comments only, approval, or a request for changes.

> **Tutor notes:** stress that a review is not an exam: it is a conversation. In the personal repository, the student reviews their own PR to learn the path. In the next real PR, someone from Allerac reviews it.

### 4. Commenting kindly and clearly
A good comment is about the code, not the person, and it is specific: "This text gets cut off on a phone, could we make the font smaller?" is better than "this looks bad". When you receive a comment, reply, adjust and say thanks. Being asked for changes is normal, even for experienced people's code.

> **Tutor notes:** for a beginner, receiving "request changes" can sting. Normalize it: it is the process working. Suggest questions instead of orders ("what do you think about...?").

### 5. Merge and clean up
When the PR is approved, someone clicks **Merge pull request**. The changes go into `main` and the history keeps the whole PR, with the conversation. Afterwards, the branch can be deleted: the work is already in `main`.

> **Tutor notes:** in allerac-academy, the Allerac team does the merge, not the person who opened the PR. In the personal repository, the student merges it themselves.

### 6. On a tablet or phone
Opening, reviewing and commenting on a PR works on the GitHub website in the browser. The **GitHub Mobile** app also lets you read, review and comment on pull requests, and edit files in a PR. It is a good way to follow reviews from your phone.

> **Tutor notes:** the official GitHub Mobile documentation lists "read, review, and collaborate on issues and pull requests" and "edit files in pull requests". Do not promise that the app does everything the website does.

## Mission

**On a computer (main path):**

1. In `my-academy-journal`, open a pull request from the `try-new-colors` branch into `main` (GitHub shows a yellow banner with a **Compare & pull request** button, or use the PR icon in Source Control in Codespaces).
2. Write a clear title and a description with what, why and how to check.
3. In the **Files changed** tab, leave at least one comment on a line, as if you were the reviewer.
4. If you like the result, merge it. If you do not, close the PR without merging: that is also a valid decision.
5. Send the tutor the link to the PR.

**On a tablet or phone:** open the PR on the GitHub website in the browser, write the description and comment on a line in **Files changed**. If you prefer, use GitHub Mobile to read and comment.

**How the tutor checks:** the PR exists, has a clear title, a description with what, why and how to check, and at least one line comment. The student explains whether they merged or closed it, and why.

## Go deeper

- Creating a pull request: [official GitHub documentation](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request). Checked on November 26, 2026.
- Reviewing changes in a pull request: [official GitHub documentation](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request). Checked on November 26, 2026.
- GitHub Mobile: [official documentation](https://docs.github.com/en/get-started/using-github/github-mobile). Checked on November 26, 2026.
