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
In the browser, commits go straight to the remote branch. Open the PR and follow the test under **Checks**. After merging, you can verify the published page on your phone.

> **Tutor notes:** Ask for links to the PR, the deployment, and the published page. Compare what the test covers with what the student verified in the browser.

## Mission

1. In Codespaces, update `main` and create a branch for the issue. Copy the [test workflow](/exercises/journal-check.yml) to `.github/workflows/journal-check.yml`. Commit the workflow by itself, use **Publish Branch** (or `git push -u origin HEAD`), and open a PR into `main`. Add `Closes #N`, replacing `N` with your issue number.
2. In the PR, open **Checks** and read the **Check journal** error. The test looks for a section with the ID `completed-modules` in the HTML. The first run should fail because the section is missing.
3. On the same branch, add `<section id="completed-modules">` with a heading and at least one completed module. Run the page, check the existing content, and try a narrow window. Make a second commit and use **Push** (or `git push`). Watch the same PR receive the commit and the test pass.
4. In the PR description, record what you checked manually. The automated test checks for the section. Check the module list and mobile readability yourself.
5. Open the public URL and confirm the section is still absent. Ask for a review if someone is available and leave the PR open for the next lesson.

**On a tablet or phone:** create the branch and make both commits in the github.com editor. Commits made there are already on the remote branch. Check the result under **Checks** and verify the layout after deployment.

## Go deeper

- Linking a pull request to an issue: [official GitHub documentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue). Checked on November 27, 2026.
- Forwarding ports in Codespaces: [official GitHub documentation](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace). Checked on November 27, 2026.
