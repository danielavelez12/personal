---
title: "Startup learnings"
date: "2024-07-25"
source: "https://danivelez.substack.com/p/startup-learnings-a024e69651cd"
---

A year ago, I joined a neobank startup helping Latin Americans open bank accounts and send money abroad. I’m now writing this from the other side.

We grew from 500 to 2000+ customers from September through March. Ultimately we didn’t have enough activated users, resulting in a high cost per funded user. It wasn’t clear to investors how we would reach 1M in ARR in the next year.

We found PMF with some users who used us as their main bank account in order to receive their salary, purchase items daily, send P2P to friends and family, and send money abroad. However, most users dropped off before activating, and either went to competitors or settled for their original alternative.

This was due to two main problems:

1. **Some users didn’t need us.**

Users were already using our competitors. We entered the LatAm neobank space late, after competitors had established their presence. It was possible for us still reach enough market share, but not in the short amount of time we had.

Our media presence brought users in for the wrong reasons. We advertised to the entire Latin American population across TV channels with our founder as the face of the product. Many users onboarded to support the mission and community, but not because they needed our product.

There was a mismatch in expectations. Users onboarded thinking that our product was primarily a cross border transfer platform, but then realized that they had to open a bank account, which they didn’t want to do.

Our social media ads weren’t reaching the right people. We configured our social media advertising algorithm to only optimize off of application submissions, in order to provide it with more data. However, we should’ve chosen iterated on this optimization target and chosen events more indicative of user activation.

**2. For the users that did need us, there was too much friction to submit an application and fund their account. They never reached an “aha” moment.**

Our value proposition was unclear in our app experience. Users were confused about how to use our product effectively.

Users ran into UX issues during onboarding.

- Our app can’t be downloaded by people with phones still set in LatAm — common for new entrants to the U.S. We could have negotiated our compliance constraints in order to make the app available in LatAm.
- Our UX wasn’t friendly enough for non-tech native users. We found out users would try to use their WhatsApp camera to scan the app install QR code instead of their normal camera.
- We had some localization gaps that resulted in an unfriendly UX for Spanish speakers. We realized users were unfamiliar with what an SSN is. Some of our partner SDKs (e.g. Stripe’s bank account linking SDK) weren’t fully localized.
- We asked for identity documents and SSN / ITIN as part of the onboarding flow, before gaining user trust, and users didn’t feel comfortable uploading their documents.

Users got busy and forgot to continue or lost momentum.

- Due to ops team bottlenecks, there was an average approval delay of a few days after application submission.
- There were multiple day delays for connecting an external account, depositing a check, or receiving an ATM fee reimbursement, due to fraud mitigation strategies and ops team bandwidth constraints.
- We didn’t have recurring reminders to complete an application or fund an account. Users have busy schedules and forgot to continue our processes.

Users became frustrated during their app experience.

- Users would go straight to our cross-border product, and receive an insufficient funds error. This resulted in too much friction, and they abandoned us.
- Users weren’t sure how to fund their account. Our interface was confusing for users.
- Users struggled to integrate us into their existing financial stack. They wanted to use Zelle, but already had Zelle linked with another account.

We definitely did many things right and enabled many people to onboard onto the U.S. financial system. However, if I could go back in time, I believe the following would have given us a better shot:

**Launch in one local, small community. Grow from there.**

We eventually built a partnership with a transit entity in a California town with many Latino immigrants looking to open their first bank accounts. This was a clear use case— use our product to receive your salary and then tap into the bus, instead of struggling with cash. We should have done this from the start.

- **Optimize your product and UX for one user persona.** Ideally, this user would know exactly how to make the most of our product and which steps to take in which order. Confusion amongst users is a sign that your product is trying to cater to too many types of users.
- **Constraints breed creativity.** We often had decision paralysis because we had no constraints; we were trying to continue to support both immigrant and bicultural folks and basically all U.S. Latinos. With a constrained use case, it’s much easier to iterate quickly on product and marketing. You need to be able to easily put yourself into the user’s shoes and think about what else they might need.
- **Geographic focus is powerful.** That’s how Bank of America started. Focus in one region and make sure that people are seeing and hearing about you everywhere. Organic growth is so much better than adspend-driven growth — it leads to happier and more invested users, and is significantly cheaper.
- **Test for PMF as fast as possible.** Starting with a powerful use case and targeting all resources in a small, local area can help show the best possible scenario for your product. If you didn’t reach PMF that way, pivot.

We had an ambitious vision and a great team. Unfortunately, the market has been tough and our execution could have been better. The good thing is there’s others out there continuing to provide for this community, and we know our users will be in good hands.
