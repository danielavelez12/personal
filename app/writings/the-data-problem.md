---
title: "The data problem"
date: "2024-09-19"
subtitle: "my co-founder and I have talked to over 60 people during our customer interviews, and almost all of them have complained about data…"
source: "https://danivelez.substack.com/p/the-data-problem-d873890ab504"
---

My co-founder and I have talked to over 60 people during our customer interviews, and almost all of them have complained about **data.** whenever we touch the topic, there’s some sort of nightmare attached, with different flavors:

1. **Quality** — the data is a mess, and no one wants to clean it
2. **Retrieval** — it takes days and tedious back-and-forth to get data
3. **Noise** — too much data coming in from various streams
4. **Organization** — data is spread out across a bunch of different platforms
5. **Privacy** — PII, potential data breaches, third party dependencies

#### How did we get here?

Over the past 50 years, our data ecosystems have evolved, as a result of an explosion of the quantity of data available and the technological breakthroughs enabling its storage and usage.

In the 1960s-1970s, companies such as financial institutions (e.g. Bank of America) and telecommunications companies (AT&T) used mainframes to store and process data. They would have teams of keypunch operators whose job was to transfer data from paper documents to punched cards, the primary data input method for mainframes. Who knew that’s why you “punch” in a number on your computer keys?

![](https://substackcdn.com/image/fetch/$s_!G7jS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc43fe005-9e88-46ac-a941-4866fa1b73de_220x174.jpeg)

*IBM 704 mainframe at [NACA](https://en.wikipedia.org/wiki/National_Advisory_Committee_for_Aeronautics) in 1957*

Throughout the next 30–40 years, personal computers and data warehouses were developed, with client-server architecture available so that any computer user could access data, through methods like Enterprise Resource Planning (ERP) systems.

In the 2000s, Big Data emerged, along with cloud computing and NoSQL databases to handle all of it. Software started eating the world (and pooping it out as data). Any software we used started producing a constant stream of social media interactions, credit card transactions, or user activity.

People started obsessing over data. Not only because of the business opportunities created and the overall romanticization of big data, but also because of regulation. Companies started being ***required*** to store large amounts of data.

- Financial records in financial institutions (SOX, Dodd-Frank, Basel III)
- Patient health info in healthcare companies (HIPAA)
- Transaction data in retail and e-commerce companies (PCI DSS)

From 2000 to now, we’ve developed cost-efficient data lakes with edge computing and real-time data analytics. The moment data is input, it’s ingested by data processing pipelines and ready for use by ML training systems, analytics dashboards, or business logic.

#### How far have we actually come?

Our data systems have evolved by several orders of magnitudes. Processes that took days now take minutes. Our amounts of data are also growing exponentially:

![](https://substackcdn.com/image/fetch/$s_!VwxP!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F74ef064f-26a8-4673-8ade-a03c05b4b9a7_800x616.png)

*[https://explodingtopics.com/blog/data-generated-per-day](https://explodingtopics.com/blog/data-generated-per-day)*

With all these advancements, I’d assume that the business value we get from data has also 100xed and the painpoints have diminished (or at least remained the same). There’s obviously a lot of complexity here, but at the surface it seems like our pain has just grown and the massively successful usage of our data hasn’t occurred yet.

As a consumer, I wonder about the missed opportunities daily. Why am I still spending hours searching for flights, or clothes, or people to meet when my digital footprint contains all the context required for these decisions? Why do I have to click through UIs, re-input data everywhere, and swim through offerings that aren’t relevant to me?

In every one of my roles, I also realized we weren’t making good enough use of our data. When I worked at Meta in 2021, I helped build out their employee referral system. I used an internal ML model that suggested roles for folks based off of their resume. You might think this model learns and gets better over time, based off of employee performance and satisfaction. When I asked about this, there was no plan at all to improve the model, even though it would result in significantly better talent placement and results.

Most importantly, I’ve felt the pains I’ve heard on customer calls. At Alza, we had alerts spread out across 10 Slack channels and analytics spread out across 50+ dashboards. We were overwhelmed by data that was largely unusable — noisy, stale, unreliable, or just hastily put together into a scrappy dashboard. I got really good at skimming for important stuff (e.g. actual fraud, bugs, or system issues) and remembering which specific data tables to rely on. I’m definitely at fault for some of this as well — building perfect data pipelines and structures wasn’t my strong suit, and I cleaned and fixed data as much as I had bandwidth for.

Whenever I had a question at Alza about user trends or our retention funnel, I’d just write up a fresh SQL query. However, the decision-makers (business team) weren’t versed in SQL, and their questions would remain largely unanswered, given lack of bandwidth. I’d spend hours writing queries and passing sheets of one-time use data to our marketing and growth team members.

#### What’s the root cause of our issues?

We have loads of data, but most of it goes unused or is improperly served. I fully agree with Peter Thiel in “Zero to One” here:

> Today’s companies have an insatiable appetite for data, mistakenly believing that more data always creates more value. But big data is usually dumb data. Computers can find patterns that elude humans, but they don’t know how to compare patterns from different sources or how to interpret complex behaviors. Actionable insights can only come from a human analyst (or the kind of generalized artificial intelligence that exists only in science fiction).

More data doesn’t create more value. We’re missing the processes and systems in place to make data valuable.

Well, now that we have LLMs, could LLMs handle this?

LLMs can only go so far, we can’t just let them loose on our data warehouses and expect them to produce great business insights and automate decisioning out-of-the-box. LLMs are trained on the average. Average code, average business decisions. Not customized, and not great. If you ask an LLM to handle all your lifecycle marketing, it’ll probably miss the big picture (e.g. your brand values, what your customers specifically care about, the best tone to use, etc.) it’s only producing content based off of what might make sense, not based off of understanding of what is good and what isn’t good, as a human would do.

For AI to successfully capture value from our data, the models have to be trained on experience. E.g.

1. This is a correct way at company X to change a marketing campaign based off of this data input.
2. This is a correct action to take at company X based off of this system alert.

The models essentially need a mapping of data -> action / decision. But in order to provide it with enough training data, the human decision makers need to be making these decisions and capturing the business value in the first place.

So we’re back to square 1: how to make better use of our data?

I don’t have all the answers, but I believe the problem lies in our culture and people. If we want to be data-driven, we need data-driven people. Here’s a few ideas on how we can get there:

1. **Data education and access.**

NLP can help with the SQL language gap, but a basic understanding of data models is crucial for business teams nowadays. (although companies like [TextQL](https://www.textql.com/) are doing super cool stuff here!) I think the average corporate decision-maker should feel empowered to base any decision off of the company’s data, no intermediary required.

This also means the data needs to actually be made available beyond just the engineering team. Companies should invest in privacy-ensuring data strategies to unblock access and equip all teams with data views.

Once all teams speak the same data language, they can also discuss how to improve data models, quality, and underlying metric calculations.

**2. User-oriented data design**.

Data systems need to be designed for the consumer, not just for data storage. Engineers should know exactly how each table and datapoint might be used and which kinds of tests to build to ensure that the data is usable.

Whether it’s the compliance team or marketing team, they should communicate to engineers what their data needs and ideal workflows actually are. No more zombie dashboards and unused data!

**3. Alignment on metrics and signals**.

The “data” we look at doesn’t need to be just rows and columns. Data can be preprocessed into blocks of significant information, if we know ahead of time how to construct these. In order to do this, teams need to align on how to synthesize information. What matters, and what doesn’t?

For example, a credit card transaction with 30 columns of data can be synthesized into “successful payment for Shell gas at 2 pm on Sunday in FL.” for a system to do this summarization, it needs to know:

1. “Merchant authorization” means “successful”
2. Show merchant 5541 as “gas station”
3. We care about weekdays, not dates
4. We care about state, not address
5. We don’t care about everything else

This is all subjective, and a team needs to decide on how to translate data to make it useful. Once there’s alignment, engineers can go ahead and build these data views.

Data can also be synthesized into metrics, which are higher level blocks of information. Teams should decide early on what their decision metrics are and what they mean, even if they change over time. E.g. what is a “power user”? When has a user “activated”? With standardization comes cleanliness and usability.

#### Parting thoughts

All this to say, I think data isn’t a magic bullet. Creativity and intuition matter a lot. If my TikTok recommendation algorithm was instead a person sitting at a computer empathizing with my needs and choosing content for me, I think it would be 10x better than it already is.

However, data is powerful, and I think there’s so much value we’re not capturing from it. An improved culture around data can help lead to better products, services, organizations, and more.
