# 4.4 Build and test before review

## Problem

You finished the task, opened the pull request and asked for review. Ten minutes later the reply arrives: "The page doesn't even open". A tag was never closed. How do you keep the review from being the first place anyone tests your work?

## Blocks

### 1. One branch for the task
Start from an up-to-date `main` and create a branch with a name that recalls the task, like `add-modules-section`. Some teams put the issue number in the name (`12-add-modules-section`), which helps find the task later.

> **Tutor notes:** link with lesson 3.2. Remind the student to update `main` first (in Codespaces, the sync button in Source Control), so they start from the latest version.

### 2. One step at a time with AI
For each step on the list, give AI context: the issue text, which step you are doing and the current file. Ask for **only that step**. Read the diff before accepting it: you sign the change.

> **Tutor notes:** link with lesson 1.3 (context). If AI rewrites the whole file for a small step, guide the student to ask again with a narrower request: "change only section X, don't touch the rest".

### 3. Test it yourself first
After each step, open the running page (`python3 -m http.server 8000`, from lesson 2.4) and check:
- did the step work?
- does what already worked still work?

At the end of the task, go through the **Done when** list item by item. To see how it looks on a phone, narrow the browser window until it is as thin as a phone screen.

> **Tutor notes:** this is manual testing, and it is the minimum before asking for review. Module 5 goes deeper with test scripts and automated tests. If the student knows the browser's developer tools (device mode), great, but it is not required.

### 4. Write down what you tested
What you checked goes into the PR description, in the **How to check** part. For example: "I opened the page, saw the new section with modules 0 to 3, narrowed the window and the text stayed readable." The reviewer knows what has already been seen and can focus on the rest.

> **Tutor notes:** "tested, it works" doesn't help the reviewer. Ask for what was done and what was seen. It is also worth writing what could **not** be tested.

### 5. The PR linked to the issue
Make one commit per step and tick the step in the issue. When you finish, open the PR into `main` and write `Closes #` followed by the issue number in the description. On merge, the issue closes by itself and stays linked to the PR.

> **Tutor notes:** link with lesson 3.6. The keyword only works when the PR targets the default branch (`main`). If the PR solves only part of the task, the student can mention the issue without the keyword (for example, "Part of #12"), and it won't close.

### 6. On a tablet or phone
You can create the branch and edit the file on github.com, making one commit per step on that branch. What you can't do is run the page: github.dev and the website editor have no terminal. For a preview, ask Claude to show the page (an artifact) with the final HTML, or check it later on a bigger screen. Write in the PR what you couldn't test.

> **Tutor notes:** same limits as lesson 2.4. Accept the AI preview on the mobile path, but make sure the student says in the PR how they checked and what was left untested. Confirm the right branch is selected before each commit.

## Mission

**On a computer (main path):**

1. In the `my-academy-journal` codespace, update `main` and create a branch for the issue from the previous lessons.
2. For each step on the list: ask AI for only that step, read the diff, apply it, run the page and check. Make one commit per step and tick the step in the issue.
3. At the end, check each **Done when** criterion and look at the page in a narrow window.
4. Publish the branch and open a PR into `main`, with what, why, **how to check** (what you tested) and `Closes #` with the issue number.
5. Don't merge yet: that is for the next lesson.
6. Send the tutor the PR link.

**On a tablet or phone:** create the branch from the github.com branch menu, edit `index.html` on that branch with AI's help, one commit per step. Use a Claude artifact as a preview. Open the PR in the browser and say in the description what you couldn't test.

**How the tutor checks:** there is a branch with clearly worded commits (ideally one per step), the steps are ticked in the issue, and there is an open PR into `main` with `Closes #` and a **How to check** part that says what was really tested.

## Go deeper

- Linking a pull request to an issue: [official GitHub documentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue). Checked on November 27, 2026.
- Forwarding ports in Codespaces: [official GitHub documentation](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace). Checked on November 27, 2026.
