# 3.4 When two changes meet

## Problem

You and a colleague edited the same sentence in the same file, each in a different way, on different branches. When it is time to merge, GitHub warns: "This branch has conflicts". Which of the two versions is right? And who decides?

*Try to think of an answer before you go on.*

## Blocks

### 1. What a conflict is
Most of the time Git merges branches on its own: if you changed different parts, it combines everything. A conflict happens when both branches changed **the same lines** in different ways. Then Git does not guess: it stops and asks a person to decide.

> **Tutor notes:** reassure the student: a conflict is nobody's mistake and does not "break" the project. It is a sign that two people worked in the same place. On a team, it happens every week.

### 2. Reading the conflict markers
The file shows both versions, separated by markers:

```
<<<<<<< try-new-title
# My learning journey
=======
# My Academy Journal
>>>>>>> main
```

Between `<<<<<<<` and `=======` is one version; between `=======` and `>>>>>>>`, the other. The name next to the marker says which branch each part came from.

> **Tutor notes:** the branch name shown in the markers depends on the tool. What matters is understanding that there are two sides. The markers must be deleted at the end: if one is left, the file contains junk.

### 3. Three possible outcomes
For each conflict, you choose:
- keep the version from one side;
- keep the version from the other side;
- write a third version that combines both.

Then you delete the `<<<<<<<`, `=======` and `>>>>>>>` markers. The decision belongs to a person, because it depends on what the project needs, not on which line is newer.

> **Tutor notes:** on a real team, when the choice is not obvious, the person talks to whoever made the other change before deciding. Connect with lesson 3.3: the PR is the place for that conversation.

### 4. AI explains, you decide
Paste the conflicting section into a conversation with AI and ask: "Explain what each side of this conflict changes and suggest a version that combines both." Read the explanation, check that the suggestion makes sense, and choose. AI does not know what the team agreed on; you do, or you ask.

> **Tutor notes:** reinforce lesson 2.5: do not paste passwords, keys or customer data along with the section. For a code conflict, ask AI to explain in plain words what each side does before suggesting anything.

### 5. Resolving on GitHub itself
For simple conflicts (lines changed on both sides), GitHub has a conflict editor in the browser. In the PR, click **Resolve conflicts**, edit the file, delete the markers, click **Mark as resolved** and then **Commit merge**. More complicated conflicts need the Codespaces editor or the command line, and that is a good moment to ask the team for help.

> **Tutor notes:** the official documentation says the GitHub editor resolves "simple merge conflicts that involve competing line changes"; other cases go to the command line. If the **Resolve conflicts** button is disabled, it is a complex conflict: do not force it, ask for help. In Codespaces, VS Code also shows conflicts with buttons to accept one side or the other.

### 6. On a tablet or phone
GitHub's conflict editor works in the browser, so you can resolve a simple conflict on a tablet. It also opens on a phone, but the small screen makes it hard to see both versions: if you can, do this lesson on a bigger screen. Never resolve a conflict without reading both sides all the way through.

> **Tutor notes:** do not require the phone. If the student only has a phone, accept that they create the conflict and resolve it calmly in the browser, scrolling; check the final result together.

## Mission

You will create a conflict on purpose in your repository, to see one up close in a safe place.

**On a computer (main path):**

1. In `my-academy-journal`, create the `try-new-title` branch and change the first line of `README.md` (the title) to new text. Commit and push.
2. Go back to `main` and change **the same line** to different text. Commit on `main` (in your personal repository, and only for this exercise, that is fine).
3. Open a PR from `try-new-title` into `main`. GitHub will warn that there is a conflict.
4. Click **Resolve conflicts**. Paste the section into AI and ask it to explain both sides and suggest a combination.
5. Choose the final version, delete the markers, click **Mark as resolved** and **Commit merge**. Then merge the PR.
6. Tell the tutor what the two sides were, what you chose and why.

**On a tablet or phone:** do the same steps on the GitHub website: create the branch and edit using the branch menu and the edit button, and resolve the conflict in the browser's conflict editor. On a phone, scroll calmly to see both sides in full.

**How the tutor checks:** the PR had a conflict, it was resolved with no `<<<<<<<`, `=======` or `>>>>>>>` markers left in `README.md`, and the student explains both sides and the decision they made.

## Go deeper

- Resolving a merge conflict on GitHub: [official documentation](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-on-github). Checked on November 26, 2026.
