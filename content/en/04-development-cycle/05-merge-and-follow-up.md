# 4.5 Merge and follow up

## Problem

The pull request was approved and merged. Everyone moves on to the next task. A week later, someone notices the change never reached the people who use it, or that it broke something else. Whose job was it to check?

## Blocks

### 1. One last look before merging
Before clicking **Merge pull request**, reread the **Files changed** tab as if you were the reviewer. On many projects, automatic checks also show up on the PR, with a green ✓ or a red ✗. With everything green and the review approved, the change can go in.

> **Tutor notes:** in allerac-academy, `main` is protected: changes only go in through a PR with one approval, and nobody pushes straight to `main`. Automatic checks (CI) are a topic for module 5; here it is enough to know they exist.

### 2. The merge closes the issue
If the PR description has `Closes #` with the issue number, the merge closes the issue by itself and links the two. After the merge, GitHub offers to delete the branch: go ahead, the work is already in `main`.

> **Tutor notes:** if the issue didn't close, the keyword was probably misspelled or the PR didn't target `main`. The student can close the issue by hand and mention the PR in a comment.

### 3. Check after the merge
After merging, wait for the GitHub Pages deployment under **Actions**. Open your journal's public URL and go through the **Done when** criteria again.

> **Tutor notes:** Ask for links to the PR, the deployment, and the published page. Compare what the test covers with what the student verified in the browser.

### 4. If something went wrong
It happens, even to experienced people. Stay calm and pick a path:
- if the fix is small and obvious, open an issue and a new PR with the fix;
- if the change gets in the way of the people who use it, undo it: on a merged PR, the **Revert** button creates a new PR that undoes that change.

Nothing is lost: the history keeps everything, including what was undone.

> **Tutor notes:** **Revert** doesn't erase history; it creates a new change that undoes the previous one, and that change also goes through a PR. Reassure the student: undoing quickly is a sign of maturity, not failure.

### 5. Close the loop with the team
A short comment on the issue or the PR lets everyone know: "It's in and live. I checked the new section on a phone and on a computer." Whoever asked for the task finds out, and whoever comes later understands what happened. Then you pick up the next task.

> **Tutor notes:** the tone is the one from lessons 3.3 and 3.6: specific and brief. No need to tag anyone in a personal repository.

### 6. On a tablet or phone
In your phone browser, you can merge the PR, follow the deployment, open the published site, and comment on the issue.

> **Tutor notes:** Ask for links to the PR, the deployment, and the published page. Compare what the test covers with what the student verified in the browser.

## Mission

1. In the PR from lesson 4.4, review **Files changed**, any review you received, and the green result under **Checks**. Merge into `main` and confirm that the issue closed.
2. Under **Actions**, open the Pages deployment triggered by the merge. If it fails, read the failed step and record what needs fixing.
3. When the deployment finishes, open the same URL from lesson 4.1. Check that the new section appears, lists a completed module, and leaves the existing content visible. Open it on a phone or narrow the window as well.
4. Comment on the issue with links to the PR, the deployment run, and the public page. State what you checked on the live site.

**On a tablet or phone:** follow the same steps in a browser and open the published page on your device.

## Go deeper

- Reverting a pull request: [official GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request). Checked on November 27, 2026.
- Status checks on a pull request: [official GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks). Checked on November 27, 2026.
