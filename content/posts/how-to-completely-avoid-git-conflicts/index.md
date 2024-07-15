+++
title = 'How to Completely Avoid Git Conflicts'
date = 2024-07-15T14:00:00+01:00
draft = false
+++

It's time to say goodbye to Git conflicts for good.

Let’s understand what causes Git conflicts and develop strategies to completely avoid, or at least dramatically reduce, encountering them.

First, let’s look at a situation that leads to a conflict.

[![Illustration of two developers working off the main branch and encountering a git conflict, part 1](images/git-conflict-illustrated-01.png)](images/git-conflict-illustrated-01.png)

[![Illustration of two developers working off the main branch and encountering a git conflict, part 2](images/git-conflict-illustrated-02.png)](images/git-conflict-illustrated-02.png)

# Simultaneous Edits on the Same Branch e.g main

You and a colleague are working on the same branch tracking to your remote Git host (be that GitHub, GitLab, or something else). When you check out the main branch, you both effectively have local copies of that branch. Notice that when you commit, GitHub (or whatever Git hosting provider you use) doesn’t see those changes until you push.

You're both assigned tasks to modify `index.js`. Unfortunately, your colleague completes their task much quicker and has already pushed their commit to the main branch.

At a slower pace, you modify and commit `index.js`. When you attempt to push, the remote main branch will reject that command and request that you "pull" (i.e., bring your branch up to date with the remote).

{{< callout emoji="💡" text="Git rejects pushes to the remote branch if yours is out-of-sync with it." >}}

You pull and —shock horror— you have a merge conflict!

## Solution

In this situation, had you pulled before modifying `index.js`, the file created by your colleague would appear in your local repo. You could then edit that file and push it back to the main branch.

So push frequently and pull frequently. However, a better solution is having a separate branch per feature (aka feature branch), e.g., feature/create-index-html, which could help with multiple developers working in isolation. When the feature is ready, it can be merged back into the main branch, ready for other developers to pull.

# Simultaneous Edits on Different Branches, Conflicts on Merging

You and a colleague both followed my first advice. You’re working on different features, so you create the branches accordingly. However, you both need to edit `index.js` and you both need to add some code to line 10.

You both merrily made your changes and, as you both have your own branches, you can push and pull with no conflicts!

However, your colleague merged their branch back into the main branch first (again!!) and now your branch is tracking behind, so you need to merge the main branch into your branch to get up to date (called a sync merge).

When you do so, you’ll encounter a merge conflict on line 10 in `index.js`. What!

## Solution

Merge the main branch into your branch regularly (aka sync merge). Had you merged the main branch straight after your colleague’s merge, you’d be completing your work on top of their changes. That is, your branch would already contain their changes and there’d be no deviation from their work, thus no conflicts. The longer the time between your last sync merge, the greater the chance that you’ll work on an out-of-date version of a file and the greater the chance of getting a merge conflict.

### Cherry picking a simultaneous edit from another branch

Cherry picking: you and a developer branch off the same point on the main branch. Developer A makes a change to a file and commits to their branch. At the same time, you’re also working on the same file at the same lines. Days later, during standup, you learn about this change and although your developer friend hasn’t merged their branch in to main, you’d very much like that change in your branch. 

Rather than duplicate their code manually in your branch (because that will definitely lead to a merge conflict) you do the right thing and cherry pick the commit, thereby obtaining the commit history which is necessary to avoid conflicts when you merge your branch back in to main.

But you get a conflict anyway! WHAT!

The reason is very similar to the branch merge conflict. 

### Solution

Again, the solution is to take changes in to your branch as early as possible, so that when you eventually start working on a file, you build on top of the latest changes. 

Another solution is for your developer friend to make smaller, more regular merges with main. IMO cherry picking individual commits across feature branches isn’t necessary (although they come in to their own on release branches) and can be avoided simply merging back in to main early and often.

# Conclusion
Evidently, the solution to completely avoiding conflicts lies in the wierd and wonderful non-engineering realm of talking with colleagues and discussing intent. Sometimes however, the overhead of keeping mentally in-sync with your peers isn't a priority, but at least you can now make the decision to go out-of-sync and thus anticipate conflicts as a matter of choice rather than surprise. 