# 4.1 From ticket to deploy

## Problem

An app you use every day got a new button. Someone had the idea, someone built it, someone checked it, and one day it showed up on your screen. What steps do you imagine between "someone had the idea" and "it's live"?

*Try to think of an answer before you go on.*

## Blocks

### 1. Every change follows a path
On a team, almost every change goes through the same steps:
1. **Ticket:** someone writes down what needs to be done.
2. **Branch:** someone picks up the task and works on a separate line.
3. **Test:** whoever built it checks that it works.
4. **Review:** another person looks at it in a pull request.
5. **Merge:** the change goes into `main`.
6. **Deploy:** the new version goes live.
7. **Follow up:** someone checks that it really worked.

You have already done several of these steps in modules 0 and 3. This module puts them together into one cycle.

> **Tutor notes:** this flow is similar to what GitHub calls "GitHub flow". Link each step to something the student has already done: the issue (0.4), the branch (3.2), the PR and the review (3.3). Don't memorize the list: the goal is to see the whole path.

### 2. The ticket: where it all starts
A ticket is the record of a task: what needs to change and why. On GitHub, the ticket is an **issue**. It keeps the conversation, shows who is taking care of it and, in the end, is linked to the pull request that solved the problem. That way, anyone can find out later why a change exists.

> **Tutor notes:** other teams use tools like Jira, Linear or Trello. The name changes, the idea is the same. Don't go into the details of those tools.

### 3. From code to review
With the ticket in hand, you create a branch, make the change, test it and open a pull request. You already know this. What is new is that everything is now linked to the ticket: the branch has a name that recalls the task, and the PR says which issue it solves.

> **Tutor notes:** stress that testing comes **before** asking for review. Lesson 4.4 covers this. Automated tests are for module 5.

### 4. Merge is not the end
After the merge, the change is in `main`, but it has not reached the people who use it yet. That is what a **deploy** is for: putting the new version live. On many teams the deploy is automatic: a robot runs on its own after every merge into `main` and publishes the new version in a few minutes. On GitHub, that robot is usually **GitHub Actions**.

> **Tutor notes:** this is how this course works: after each merge into `main` in allerac-academy, the "Deploy" workflow runs in the **Actions** tab and updates academy.allerac.ai. It only runs when the merge touches the site or the course content (the `app/`, `content/` or `tutor/` folders). Don't explain servers here: that is module 6.

### 5. Following up closes the loop
The work is only finished when someone checks the change live: did it work? Did it break something else? If it worked, the ticket is closed and the team knows. If it didn't, a new ticket is opened and the cycle starts again. This cycle repeats all the time, for big and small tasks.

> **Tutor notes:** the main point is ownership: "I merged it" is not the same as "it works for the people who use it". Lesson 4.5 goes deeper.

## Mission

**On the GitHub website (on any device):**

1. In [allerac-academy](https://github.com/Allerac/allerac-academy), open the **Pull requests** tab, click **Closed** and pick a PR with the purple **Merged** label.
2. Read the title and the description: what changed and why? Is there a linked issue?
3. Look at the commits and the **Files changed** tab.
4. Open the repository's **Actions** tab and find the "Deploy" that ran right after that merge. A green icon means it worked.
5. If the change is visible, find it on [academy.allerac.ai](https://academy.allerac.ai).
6. Tell the tutor, in your own words, the path of that change: what the problem was, where it was made, who reviewed it, when it went in and how it went live.

**On a tablet or phone:** everything works in the browser. GitHub Mobile helps you read the PR and the conversation. For the **Actions** tab, use the browser.

**How the tutor checks:** the student sends the link to a merged PR and describes the steps with real details from that PR (the problem, the branch, the review, the merge and the deploy in the Actions tab). If the PR has no issue or review, the student notices and says so.

## Go deeper

- The GitHub workflow (GitHub flow): [official GitHub documentation](https://docs.github.com/en/get-started/using-github/github-flow). Checked on November 27, 2026.
- What GitHub Actions is: [official GitHub documentation](https://docs.github.com/en/actions/get-started/understand-github-actions). Checked on November 27, 2026.
