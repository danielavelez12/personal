---
title: "How instant payments run on asynchronous processes"
date: "2024-06-07"
source: "https://danivelez.substack.com/p/async-as-the-default-in-consumer-fintech-6fa48627af72"
---

Before working in fintech, I assumed data exchanges were instant, and the reason systems were slow was because no stakeholder had a reason to speed them up. Instead, I’ve realized data is async by default, due to the constraints of the financial system. Though user-facing experiences are synchronous (e.g. instant payments and card transactions), there are a series of async requests that occur afterwards, and this asynchronous pipeline shapes fintech code practices and company policy.

### Partner APIs

At Alza, our processes have many moving parts that make sense to run asynchronously. For example, when we analyze a user’s application we collect data from several partners and then enqueue processing of that data for compliance and risk purposes. When we receive a transaction, we enqueue any reporting and transfer of funds necessary. These “side effects” can be retried on failure, and the system as a whole is more resilient from these processes being executed independently as smaller units.

The partners we work with follow the same practices, and therefore we’re familiar with how to interface with their asynchronous processes. We use Stripe’s financial account connections to enable users to set up integrations with their other bank accounts, and we receive data from Stripe solely from webhooks. Whenever we request ownership data or a balance refresh on a user’s external bank account, we send a request to Stripe and listen for a webhook with the response.

This impacts how we design our data models. We design with the following in mind:

**Build reliable, maintainable state machines.** When a user connects an external account, we create it in our system in a pending state, after which we query Stripe and conduct reviews of our own, all reflected in the state transitions of the external account object.

**Persist all partner webhooks.** Given that webhooks are the primary way for our partners to communicate data to us, it’s critical for us to maintain receipts of these communications. These can be referenced in investigations or incidents as the source of truth for state updates and events. Webhooks, and the absence of them, typically contain important data.

**Separate immutable data from mutable objects.** We have a card transaction object that has to be mutable, since it gets updated with authorization and settlement information that we receive through Lithic webhooks. If we solely relied on this database as a record of money movement, this would be brittle and error-prone. Instead, whenever we receive a webhook and move money based off of it, we create a separate balance transaction object that we consider immutable – no one touches it after that money was shown to the user as moved in or out of their account.

### The U.S. ACH system

The other major factor in asynchronous processes is the ACH system. The Automated Clearing House (ACH) network processes transactions in batches rather than in real-time, leading to inherent delays. This batch processing allows for efficient handling of large volumes of transactions but means transactions are only processed at specific intervals. Additionally, settlement windows dictate when transactions are finalized, with most being processed same-day, next-day, or over two days. Risk management practices, such as fraud detection and error correction, require time, further contributing to delays. Regulatory and compliance requirements introduce additional processing steps to ensure security and accuracy. Finally, the ACH network’s legacy infrastructure, designed in the 1970s for batch processing, and cost considerations favoring batch over real-time processing, all contribute to the non-instantaneous nature of ACH transactions.

When Venmo supports an instant peer to peer payment, it doesn’t actually know that it’ll be able to pull the funds successfully from the originating connected bank account. In the background, Venmo initiates an ACH debit request to pull funds from the sender’s bank account. This request is part of a batch of transactions that gets processed by the ACH network, typically overnight. The ACH network sorts and routes these transactions to the respective receiving banks, and the actual funds transfer happens during the settlement process. If the sender’s bank account has insufficient funds, the transaction will eventually be returned with an error code, and Venmo will have to manage the deficit.

During my time at Alza, I’ve learned how to think about managing risk at a high level across user accounts and transactions. Risk can never be eliminated for one transaction, since there’s always a chance that an ACH transfer will have to be reversed; it’s never fully settled. Moreover, there are cases where we trust our users enough to provide credits ahead of time, rather than waiting a few business days for the clearing house to respond. This requires having a good understanding of:

1. What’s the expected range of money loss from a transfer?
2. What’s our risk threshold?
3. How quickly do our users need to receive their funds? What waiting period or risk holds will they tolerate?

Venmo, along with others like Bank of America’s Zelle, manage their risk by imposing transaction limits. They understand that fraud will occur, and they simply cap their expected value of money loss to fit their constraints.

Understanding the asynchronous nature of financial systems and the constraints of the ACH network has been critical in shaping our approach to risk management and system design at Alza. By leveraging reliable state machines, persisting partner webhooks, and separating mutable from immutable data, we ensure robust and resilient operations. These practices allow us to provide seamless user experiences while effectively managing the inherent risks of asynchronous financial transactions. Embracing this asynchronous paradigm is essential for building scalable, secure, and user-friendly fintech solutions.
