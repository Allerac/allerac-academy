# 4.2 A task you can finish

## Problem

A ticket just says: "Improve the page". You work on it a whole afternoon, show the result and hear: "That's not quite it". Someone else, reading the same ticket, would have done a third thing. What was missing so that everyone understands the same thing?

## Blocks

### 1. A vague ticket is expensive
"Improve", "fix up", "tweak": everyone imagines something different. The time lost is not in writing the ticket, but in doing the wrong thing and redoing it. A few more minutes on the ticket save hours of work.

> **Tutor notes:** link with lesson 0.4, where the student wrote a good problem issue (what, where, what they expected). Here the focus is a task: something to build or change, not a bug.

### 2. The title says the result
A good title describes how things will be, not the activity:
- "Add a section with completed modules" instead of "Work on the page";
- "Fix the broken footer link" instead of "Links".

Whoever reads only the title already knows what will change.

> **Tutor notes:** in the personal repository, the issue can be in the student's own language. On team projects, follow the agreed language. Commits and code stay in English.

### 3. Context: the why
One or two sentences explaining why the task exists help with the small decisions along the way. "I want to show my course progress to people who visit the page" says much more than just "add section".

> **Tutor notes:** the why also helps with prioritizing (lesson 4.6). If the student doesn't know the why, maybe the task isn't important.

### 4. "Done when": the acceptance criteria
The heart of the ticket is a short list of statements you can check with "yes" or "no":

**Done when:**
- the page has a "Completed modules" section;
- the section lists the modules I have finished;
- the section is readable on a narrow screen, like a phone's.

When every answer is "yes", the task is finished. Without this list, it never ends, or it ends too early.

> **Tutor notes:** the technical name is "acceptance criteria". Each criterion needs to be checkable: "looks nice" isn't; "the text isn't cut off on a phone" is. Two to four criteria are enough for a small task.

### 5. A day's size, or less
If the "done when" list goes past five or six items, the task is probably too big. Small tasks get finished, get reviewed faster and are less scary to touch. In the next lesson, you learn to break a task into steps.

> **Tutor notes:** the "one day of work" reference is for teams. For someone studying in their breaks, think "one or two study sessions".

### 6. AI as a second reader
Before publishing the ticket, paste the text into a conversation with AI and ask: "What is ambiguous in this ticket? What questions would someone ask before starting?" It often finds gaps. You decide what to accept.

> **Tutor notes:** AI tends to inflate the ticket with ten criteria and rare edge cases. Guide the student to keep only what matters for this task.

## Mission

1. Open an issue in `my-academy-journal` titled `Add a completed modules section` and explain why readers would benefit from it.
2. Under **Done when**, list three criteria: `index.html` contains a `<section id="completed-modules">`, it lists at least one completed module, and the section appears at the public URL with the existing content still visible.
3. Ask AI to flag anything unclear, publish the issue, and save its number for the PR.

## Go deeper

- About issues: [official GitHub documentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues). Checked on November 27, 2026.
