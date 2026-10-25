---
title: "On the other side of the coding interview"
date: "2025-04-09"
source: "https://danivelez.substack.com/p/on-the-other-side-of-the-coding-interview"
---

Due to a scheduling oversight, I was scheduled to run 15+ coding interviews for engineering interns in the past few weeks, and so I did. Every time, I ask the same question and give the candidate ~45 mins to build a solution, typically in Python. It’s a good question that one of my teammates designed, and it’s led me to only pass a few of the candidates I’ve interviewed.

Looking back, I think about the coding interviews I bombed as a college student. When I forgot how to write basic Javascript function syntax and froze for the rest of the interview. Or when I got lost in a recursive debugging rabbithole and the interviewer waited an hour and a half before stopping me. How it felt going into the last few minutes of the interview pretending to still be interested in the company, knowing they’ll be promptly rejecting me when the call ends. I remember the feeling of anxiety and not feeling like I’ve leetcoded enough.

Now, I wish I could go back and redo those interviews I failed. Here’s a few things I’ve realized a couple years into being a full-time early-stage engineer.

**No need to overanalyze and explain**

As an interviewee, I remember talking a lot through my thought process. I’d clarify my understanding of the problem, talk through every possible edge case, and ask a lot of questions. I’d also consider multiple ways of approaching the problem, and debate pros and cons. It seemed to me that these were easy ways to score bonus points off the bat - I was excited to show the interviewer how good of a collaborator I could be.

These days, I prefer for candidates to just think and code.

1. Software engineers don’t actually collaborate real-time often, especially in an early-stage environment. I believe startup engineering teams work best when there’s only one engineer building code on each project because of the gained ownership, accountability, and execution speed. So during an interview, I’m not looking for candidates to ask me if their approach sounds good or walk me through every line they’re adding.
2. Some candidates spend a lot of time verbalizing and pseudocoding, and it typically ends up in them failing to finish the solution on time. They’ll over-index on what I think of them as they’re solving the problem, instead of focusing on solving the problem.
3. Candidates will often ask a lot of questions about how to handle edge cases. This doesn’t really matter - just assume an expected input and settle on some way to handle unexpected input, whether it’s returning null or throwing an error. Edge cases are actually not interesting problems, in real codebases they’re just handled with input validation. If candidates are spending time on things that aren’t purely problem solving, that’s not a good sign.

**But, thinking thoroughly is important**

Candidates still need to *think* through the problem, though.

Almost all candidates go through the interview thinking that the solution is simple, and then realize it needed to be recursive in order to fully meet the problem requirements. Some even miss or forget about the more basic problem requirements. This results in a last-minute scramble when I let them know their solution is incomplete, but they’ve spent the whole time on their initial solution.

This is probably the MOST common trap I’ve fallen into as a real software engineer, and so I now watch for candidates who avoid this. Operating in an early-stage environment means there’s always complex and evolving business requirements, with a sprawling, poorly documented codebase that you need to integrate your solution into. This means you have to think extra hard about whether your solution meets the requirements. Use the examples - what exactly is the expected behavior with different inputs?

**Naive, simple, and incremental always wins**

It’s so satisfying when candidates build modularly. Plan out steps for development, execute and test each. A couple of candidates have gone straight for the recursive solution, and are worse off than those who built in steps, because they’re overwhelmed by the bug debt.

I’m surprisingly impressed when candidates organize their code well, not just because it’s a sign of clean coding habits, but also because it shows organized thinking. As I’m watching a candidate write out a solution, I feel like I’m watching a movie of their thinking process, with logic blocks materializing and helper functions sprouting on the sides. It’s probably the closest depiction of what someone’s brain looks like. Code that is modular and tidy is a sign of clear thinking.

**Speed matters**

Candidates could have good problem solving skills and build incrementally, but they still will be a no from me because they weren’t able to get a functional solution in time. Lots of factors contribute to this, but here’s some I’ve noticed:

1. Unfamiliarity with the language - This is where repetition, drilling, and knowledge helps. Candidates who are fluent in Python have a significant leg up from those who need to remember Python data structure and string manipulation functions.
2. Hesitation to look things up - Some candidates end up introducing bugs instead of just making a quick google search for syntax documentation. I think experienced engineers are able to query quickly for what they need and get back to coding.
3. Quick problem understanding - This is what math kids are good at. They’ll read a problem and immediately understand the “game rules”, objectives, and interesting challenges to overcome in the solution. Leetcode helps for this or even just puzzles.

**The coding challenge is just a proxy**

By the end of the interview, I want to know: would this candidate write good code effectively and efficiently at our company? This doesn’t necessarily correlate with acing the coding challenge. These are some details I personally look for:

1. Can they navigate the IDE and independently get code running and tested? If they’ve only done Leetcode and pressed the “Run” button, they’ll ask me how to “verify” the solution instead of just writing a test themselves. But if they’ve worked well in a production environment and built side projects, they’re often pretty well situated in the coding interface.
2. Can they describe a complex solution well? If the candidate doesn’t get to the recursive part in time, I ask them to explain how they would build it. Some candidates will just hand-wave away the recursion explanation, as if it’s an implementation detail. But the more thoughtful candidates can visualize what the solution might look like, and explain to me step-by-step the conditions in which they would recurse or return.
3. Are they curious and excited by a challenge? Candidates will have different reactions when they realize there’s a recursive component. My favorite reactions are those that are like - oh, this is a good coding interview question. Candidates that do well often are excited to figure out a solution for this part.

I’m still learning a lot about how to interview well, and there’s a whole other discussion to be had around how to interview engineers in the AI age. But for now, I’ll be trying not to become a jaded interviewer and continue to cheer on candidates for doing the hard thing of putting themselves out there.
