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
"It worked on my branch" is not the same as "it works on `main`". After the merge, check the version people will use. On a team with automatic deploys, wait for the deploy to finish (in the **Actions** tab), open the live site and go through the **Done when** criteria again. In your personal repository, go back to `main`, update it and run the page.

> **Tutor notes:** in allerac-academy, this means waiting for "Deploy" to turn green in the Actions tab and opening academy.allerac.ai. Publishing the personal page on the internet is for module 6.

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
Merging, deleting the branch, checking that the issue closed and commenting all work on the GitHub website in the browser. GitHub Mobile helps you follow notifications and reply to comments. Without a terminal, you can't run the `main` page on a phone: open `index.html` on `main` on github.com and use a Claude artifact as a preview, or check later on a bigger screen.

> **Tutor notes:** accept checking via the preview on the mobile path, as long as the student says how they checked. Don't promise the app does everything the website does.

## Mission

**On a computer (main path):**

1. On the PR from lesson 4.4, do one last review in the **Files changed** tab.
2. Merge it and delete the branch.
3. Check that the issue closed by itself and that the list of steps is fully ticked.
4. In the codespace, go back to `main`, update it, run the page and check each **Done when** criterion again.
5. Leave a short comment on the issue saying what you checked after the merge.
6. Send the tutor the issue link.

**Extra (optional):** if your PR from lesson 3.6 in allerac-academy has already been merged, open the repository's **Actions** tab, find the "Deploy" that ran after the merge and look for your change on [academy.allerac.ai](https://academy.allerac.ai).

**On a tablet or phone:** merge and delete the branch in the browser, check the issue and use a Claude artifact with `index.html` from `main` as a preview. In the comment, say how you checked.

**How the tutor checks:** the PR is merged, the issue closed linked to it, the branch was deleted, and there is a comment on the issue saying what was checked after the merge (and how, on the mobile path).

## Go deeper

- Reverting a pull request: [official GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request). Checked on November 27, 2026.
- Status checks on a pull request: [official GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks). Checked on November 27, 2026.
