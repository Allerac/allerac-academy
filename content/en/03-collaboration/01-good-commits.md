# 3.1 Commits that tell a story

## Problem

You open a project's history to find out when a piece of text changed. The list says: "update", "fix", "changes", "asdf", "this time for real". Which of those commits changed the text? How would you write them so the answer is obvious?

*Try to think of an answer before you go on.*

## Blocks

### 1. History is for the future
Each commit is a snapshot of the work with a message. The person who reads that message is almost never you today: it is someone on the team a month from now, or you a year from now, trying to understand what happened. A good message saves that person time.

> **Tutor notes:** connect with lesson 0.3, where the student made their first commit. Analogy: labels on moving boxes. "Stuff" does not help; "Kitchen: plates and glasses" does.

### 2. A short title that says what you did
The first line of the commit is the title. It is short (about 50 characters), in English, and starts with a verb in the imperative, as if it completed the sentence "this commit will...":
- `Add contact section to personal page`
- `Fix typo in README introduction`
- `Change page title color to dark blue`

Not: `update`, `fix`, `changes`.

> **Tutor notes:** the imperative (Add, Fix, Change, Remove) is the most common convention. Do not be strict about the character limit: what matters is being clear and specific. If the student gets stuck on the English, they can ask AI for help.

### 3. The why, when it is not obvious
After the title, you can leave a blank line and write a short body explaining **why** you made the change. The code already shows the "what"; only you know the "why". Not every commit needs a body: use one when the reason is not obvious.

> **Tutor notes:** example: title `Make buttons larger on small screens`, body `Users on phones were tapping the wrong button.` Codespaces and the GitHub website both have a description field for this.

### 4. One commit, one idea
If you fixed a typo and also changed the whole layout, those are two ideas. In two commits they are easier to understand, review and, if needed, undo one at a time.

> **Tutor notes:** do not expect perfection from a beginner. The goal is the habit: before committing, ask "is this one thing?".

### 5. AI helps you write, you check
You can show AI what changed and ask: "Write a short commit message in English, in the imperative." Then read it: does the message really describe what you did? AI does not know your why unless you tell it.

> **Tutor notes:** Codespaces may show a button to suggest a message with AI. Using it is fine, as long as the student reads and adjusts it. Common mistake: accepting a generic message that AI made up.

## Mission

**On a computer (main path):**

1. Open the codespace for `my-academy-journal`.
2. In `README.md`, add a line about something you learned in Module 2.
3. Commit with a clear title in English, in the imperative (for example, `Add Module 2 learning to README`). If you like, ask AI to help you write it, then check it.
4. Push and open the repository's commit history on GitHub.
5. Send the tutor your message and rewrite these three bad messages in a better way: `update`, `fix`, `page changes`. For these, make up a plausible change.

**On a tablet or phone:** edit `README.md` directly on github.com (the edit file button), write the message in the commit field and confirm. The rest of the mission is the same.

**How the tutor checks:** the new commit exists, with a specific title in English, and the three rewritten messages clearly say what changed.

## Go deeper

- About Git and version history: [official GitHub documentation](https://docs.github.com/en/get-started/using-git/about-git). Checked on November 26, 2026.
