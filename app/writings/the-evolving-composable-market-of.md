---
title: "The evolving composable market of software"
date: "2026-04-21"
source: "https://danivelez.substack.com/p/the-evolving-composable-market-of"
---

Back in high school, my friends and I built a self-powered light-up drum - as the drumsticks hit the drumpads, the mechanical energy was converted into electrical energy that powered a small LED light. Though we had set out to create something that we had never seen before, all the parts we needed already existed, and we just had to put them all together.

The critical component we used was a **piezoelectric disc.** Piezo materials are made of atoms arranged in a lopsided crystal structure, so that when the crystal is physically compressed, the atoms shift slightly and create a charge difference. We placed these directly under the drum’s surface to generate voltage on each drum hit. Thanks to years of physics research and hardware innovation, we had these fascinating little discs that served the exact purpose needed.

![How does a Piezoelectric Generator Work? – Types and Characteristics](https://substackcdn.com/image/fetch/$s_!S4uw!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1bc653cc-7c71-48c1-a315-d2ec7b30fc00_750x400.jpeg)

When it came to procuring all the parts we needed, we went into marketplaces like Ali Baba and chose vendors who could guarantee quality components. By the end, our vision came to life and we were able to show off our drum show spectacle.

Imagine, instead, we had wanted to build a fully software-based piezoelectric drum simulation. Our parts list would’ve included:

- An event listener that captures the user’s “drum hits” as keyboard presses or bluetooth drumstick signals
- A physics simulator that converts the input signal into voltage produced
- A Unity module that renders a lightshow animation representing the level of voltage input

We probably would’ve just coded these components from scratch, instead of buying them from a marketplace. Why?

There are certainly other SaaS products that make sense to buy - payroll, observability, secrets management, etc. But when it comes to product building blocks (login / signup, payments, etc.), the off-the-shelf world is much more limited.

Let us assume that niche software product components were available on software package marketplaces, like the NPM registry, PyPI, or the Unity Asset store, or in opensource repositories. Today, I'd expect to run into one of the following:

- **High product cost:** Vendors have to charge a significant amount to make a profit on highly-customized software packages that only a few people will use, especially considering ongoing maintenance involved.
- **Integration cost:** For a more general use software package, there's more work involved to integrate the functionality into our system. It might just be a barebones API that we have to build data processing and scaffolding for.
- **Lack of reliability of open source options:** Some opensource code is world-class, but there’s little incentive to maintain niche packages over time. Incentives that existed before, such as attracting documentation pageviewers, are diminishing with AI agents (e.g. [TailwindCSS](https://www.reddit.com/r/SaaS/comments/1rltbbg/tailwind_css_is_more_popular_than_ever_revenue_is/)).

The two side of this market seek the following:

**Consumer:** I want to pay a reasonably low amount for software components that are high quality, fit my exact requirements, and are easy to integrate.

**Supplier:** I want to spend a reasonably low amount in production costs to make a profit on my software components.

With AI codegen, we are now nearing this tipping point. Suppliers will now be able to utilize AI agents to build any specialized software package that a consumer might need, at a low cost. Software storefronts will have a staff of agents who are experts on the source repository to help customers find and integrate what they need. Your in-house agent will be able to ask questions to the store's integration agent while plugging in the pieces. Similar to a shopper consulting staff at Home Depot, purchasing and integration will involve interaction between systems of expertise. We're due for a more composable software market than ever.

[![](https://substackcdn.com/image/fetch/$s_!DF1y!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69c7cde6-47b0-4c92-aa27-a2fcba540987_1488x658.png)](https://substackcdn.com/image/fetch/$s_!DF1y!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69c7cde6-47b0-4c92-aa27-a2fcba540987_1488x658.png)

**Why will off-the-shelf options be better than in-house creations?**

You might ask why the consumer would not just use an AI agent themselves (e.g. Lovable, Claude Code, etc.) to make the part they need. The problem is that building good software is hard, and the supplier has unique expertise in order to evaluate whether the output serves the customer’s needs.

Consider [Auth0](https://auth0.com/), one of the most popular auth frameworks, [acquired](https://auth0.com/blog/okta-auth0-announcement/) by Okta at approx. 6.5B in 2021. Authentication is a software component that makes sense to buy off the shelf (for upwards of $240 / month). Auth0 offers:

- Multiple login paths (socials, passwordless, MFA, etc.)
- Role-based access control (RBAC)
- Enterprise login (SSO, SCIM, etc.)
- Security (bot detection, breach detection, etc.)

Among other features that are critical and hard to get right from scratch. It's been battle tested and trusted by thousands of companies. No amount of training data for foundational models can replicate the exposure and expertise that the Auth0 product receives. AI agents won't discover long-tail edge cases without real-world exposure.

Another challenge in software construction is building systems that not only are functional, but are optimized for the right goals. Do you care more about efficiency than robustness? How important is security? Does your system need to be interoperable and flexible?

Products converge to sharp tradeoffs that win in the market. At my current company, we use a platform called [Warpstream](https://www.warpstream.com/?gad_campaignid=21463289918&gbraid=0AAAAA9TLCL7g15V7PoWvJyXLyVlQmaFQG) for our data pipelines, along with one of its subproducts, [Bento](https://github.com/warpstreamlabs/bento). These are replacements for Kafka and Kafka Connect, except they're stateless, horizontally scalable, declarative, and simple. One of the tradeoffs is we sacrifice efficiency, since these add latency.

Software products, as opposed to in-house creations, have undergone the effects of market pressures. Warpstream and Bento grew as a result of optimizing certain factors very well. There's hundreds of software packages out there competing for downloads, but only the ones with a "spike” win - the ones known for being extra light, or lightning fast, or consistently reliable. Yes, you could have your AI-agent build several versions and run simulations to choose a winner, but this again suffers from a lack of real-world exposure.

Finally, a distributed marketplace will outperform a single coding agent due to the challenge of ongoing maintenance. A vendor is responsible for the proper maintenance of their product, or else they lose customers. This is stronger incentive and focus than your coding agent will have, who is spread thin across your entire system and missing strong default incentive to conduct ongoing work on existing components. Maintenance involves monitoring, migrations, compliance, and abuse handling, which when delegated to a focused entity can be done at a higher level of service.

**What does this mean for how software will change?**

We're currently in a season of code brittleness. AI slop galore, bloated codebases overloaded with tech debt, and systems failing to hold under increased load and security attacks. Engineering teams are moving faster to produce more code with less review, which is likely to be a factor in the recent incidents we've seen:

- July 2025, [Tea app KYC leak](https://en.wikipedia.org/wiki/Tea_%28app%29)
- March 2026, [Mercor data breach](https://fortune.com/2026/04/02/mercor-ai-startup-security-incident-10-billion/)
- March 2026, [LiteLLM supply chain compromise](https://www.securityweek.com/mercor-hit-by-litellm-supply-chain-attack/)
- April 2026, [Vercel incident](https://vercel.com/kb/bulletin/vercel-april-2026-security-incident)

Companies experiencing the uptick in coding agent traffic, like GitHub, are reporting increased degraded service:

![](https://substackcdn.com/image/fetch/$s_!xwcL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3bb50cf7-efbc-4918-b997-edda5a44545a_852x586.png)

*Monthly GitHub incidents from 2024–2026*

Currently, developers are the ones most in-tune with the accelerated [enshittification](https://en.wikipedia.org/wiki/Enshittification) of software (See recent study, “[An Endless Stream of AI Slop](https://arxiv.org/abs/2603.27249)”). This sentiment will fester and spread downstream to customers who are starting to deal with the consequences of AI slop, such as unreliable UX flows, leaked personal information, and overall product soullessness.

Similar to the rise in privacy-first software, we'll start to see a rise in quality-first software. Consumers both in tech and outside of tech will be yearning for software (games, enterprise platforms, e-commerce flows, etc.) that looks and feels ***well-made***. As higher quality software components become available on the market, there will be a strong push for companies to consider buying quality components rather than building them in-house.

This trend isn't unique to software. Another driving force for this kind of demand is buying power, increasing long-term around the world and prompting consumer behavior changes in everyday industries such as fashion and food. Trends like "[quiet luxury](https://en.wikipedia.org/wiki/2020s_in_fashion)” accompany an [increase in demand](https://www.businessresearchinsights.com/market-reports/luxury-fashion-market-117445) for quality materials in clothing. Diners [increasingly](https://dataintelo.com/report/global-luxury-foods-market) crave gourmet dishes with high-quality ingredients.

I'm excited for the next decade of software. Engineering teams are overhauling legacy software (HR platforms, banking flows, etc.) and spinning up magical web experiences, AI-enhanced game worlds, voice or chat driven commerce flows, and more. The barrier to building is lower than ever, which means we'll see an evolution of best-in-class software component winners to power our products.
