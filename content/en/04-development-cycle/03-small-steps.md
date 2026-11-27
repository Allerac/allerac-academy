# 4.3 Small steps

## Problem

Your task is "Add a section with completed modules". You ask AI for everything at once, it returns two hundred new lines, you paste them, and the page breaks. Where is the mistake? How could you have worked so you never end up there?

*Try to think of an answer before you go on.*

## Blocks

### 1. Small step, small mistake
When you change a little at a time and check after each change, a mistake can only be in the last step. Instead of searching two hundred lines, you search ten. Working in small steps feels slower, but it almost always finishes sooner.

> **Tutor notes:** analogy: assembling furniture by checking each step of the manual, instead of tightening every screw at the end and finding out one piece went in backwards.

### 2. Every step ends in something that works
A good step leaves the page working and is easy to check. For example:
1. Add the section title.
2. Add the list of modules.
3. Adjust the style for narrow screens.

After each one, you open the page and see the result. If you stop halfway, what is already done still stands.

> **Tutor notes:** a step that leaves the page broken ("first I delete the old section, then I write the new one") is a sign it can be split another way.

### 3. AI helps break it down
Paste the issue text into a conversation with AI and ask: "Break this task into 3 to 5 small steps. Each step must leave the page working and be easy to check." Then review: does the order make sense? Is any step still big? Is any step unnecessary?

> **Tutor notes:** AI often suggests too many steps or things out of scope ("add automated tests", "set up a framework"). Encourage the student to cut. The student decides the plan.

### 4. The list of steps inside the issue
On GitHub, you can write a task list in the issue description:

```
- [ ] Add section title
- [ ] Add list of modules
- [ ] Adjust style for narrow screens
```

GitHub shows checkboxes that you tick as you go, and the issue shows the progress. Everyone can see where the task stands.

> **Tutor notes:** the syntax is `- [ ]` (with a space inside the brackets) and `- [x]` for checked. For big tasks, GitHub also has sub-issues; mention them only if the student asks.

### 5. One step, one commit
Each step usually becomes a commit, with a clear message (lesson 3.1). That way the history tells the story of the task, and if one step goes wrong you can undo just that one.

> **Tutor notes:** don't be rigid: sometimes a step becomes two commits, or two small steps become one. The important habit is checking and committing often.

## Mission

**On the GitHub website (on any device):**

1. Open the issue you created in lesson 4.2.
2. Paste its text into a conversation with AI and ask it to break the task into 3 to 5 small steps. Cut, merge or reorder whatever you need.
3. Edit the issue description and add a **Steps** section with a task list (`- [ ] ...`).
4. Tell the tutor why you chose that order and how you will check each step.

**On a tablet or phone:** editing the issue works in the browser. On a phone, typing `- [ ]` is fiddly, but it works: check the **Preview** to see whether the checkboxes appeared.

**How the tutor checks:** the issue has a list of 3 to 5 steps with checkboxes, each step is small and leaves the page working, and the student explains the order and how they will check each one.

## Go deeper

- Task lists on GitHub: [official GitHub documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#task-lists). Checked on November 27, 2026.
