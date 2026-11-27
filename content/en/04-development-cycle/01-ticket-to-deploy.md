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

1. In your `my-academy-journal`, check that `main` contains the `index.html` from lesson 2.4. Use a public practice repository and make sure its files and history are suitable for publishing.
   If you need a new public repository, set up a practice copy with only a simple `index.html` and no personal information, then use it for the next lessons.
2. Under **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and click **Save**.
3. Watch the deployment under **Actions**. Return to **Settings → Pages**, open **Visit site**, and save the URL. This is your journal's production site. Anyone with the link can open it.
4. Check that the current page loads. In the next missions, you'll open an issue, change the journal, and publish a new version at the same address.

You can do this in a browser on a computer, tablet, or phone. If the deployment fails, open the run under **Actions** and read the first failed step.

## Go deeper

- The GitHub workflow (GitHub flow): [official GitHub documentation](https://docs.github.com/en/get-started/using-github/github-flow). Checked on November 27, 2026.
- What GitHub Actions is: [official GitHub documentation](https://docs.github.com/en/actions/get-started/understand-github-actions). Checked on November 27, 2026.
