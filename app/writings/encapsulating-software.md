---
title: "Encapsulating software"
date: "2024-04-22"
subtitle: "I love organizing — my favorite store ever is The Container Store (I would stay here overnight if I could hide from the mall security…"
source: "https://danivelez.substack.com/p/encapsulating-software-79ad3ae84947"
---

I love organizing — my favorite store ever is The Container Store (I would stay here overnight if I could hide from the mall security guards). Now I get to live my organization dreams by being a software engineer. As part of the engineering team at Alza, I think a lot about encapsulating software, and it’s both intellectually and aesthetically satisfying.

At Alza, we receive a lot of information from our partners (e.g. card processor, ACH transfer provider, KYC data provider, etc.) and have to parse, persist, and handle it. We *could* run this all in one service with a set of handlers, but what if…

- A process goes wrong halfway through? How do you retry it?
- This service’s secrets are exposed and suddenly all our secrets are compromised?
- This service is suddenly overloaded by webhooks?
- Someone pushes a bug while coding up a low-priority handler and takes down our core processes?
- A long-running process takes up all service resources?

These are the questions that would keep us up at night if we were to proceed with this approach. Not to mention the cognitive overload of taking in a huge codefile with long functions that do 10 different things.

Instead, we rely on a microservices architecture. This enables us to do lots of things, one thing being running processes asynchronously as much as possible. There are only a few processes that need to run synchronously when triggered, such as card authorizations and API responses (mostly only fast DB operations). For all other processes, we embrace asynchronous modularity. Our customer application processing has a sequential chain of asynchronous components: receiving the application, fetching third party data, and evaluating the application. Below is a common structure in our codebase: a webhook handler that only parses and persists, and then enqueues an event for the consumer to actually handle the webhook data.

![](https://substackcdn.com/image/fetch/$s_!cI3P!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3dcabbd3-2d50-4e0a-86ee-db7295f24073_800x371.png)

Structures like these have emerged from our way of thinking about software encapsulation in general. When encapsulating a service or a function, we think about the following:

**Request source**

Services respond to requests. Each service ideally should respond to one type of request, just like you might have an email address for all the product spam and another for important emails. We have an *admin* service that responds only to our Retool API requests, such as our ops team actioning on a customer’s application. We don’t have to worry about downtime for this service as much and we’re able to rapidly deploy new images to the *admin* service with incremental feature updates. Isolating services based on higher or lower criticality requests can enable efficiency and reliability where it matters. Kubernetes also allows us to configure each service to have different parameters, such as compute allocation and retry policy, based on the nature of each type of request.

**Dependencies**

Each service might have different dependencies — separating services based on dependencies needed enhances security and reduces errors. We use a dependency injection tool called [FX](https://medium.com/@devops-guy/how-to-build-large-golang-applications-using-fx-3ccfac153fc1) that makes it really easy to instantiate each service without having to pass in all the dependencies needed. It’s simple to create a new service and rely on FX to pass in the correct subset of dependencies. By looking at each service’s dependencies in its implementation struct attributes, you can easily tell whether those should be there or not. If our card processor service is a dependency for our lifecycle marketing service, that… shouldn’t be there.

**Testable units**

You should ask, can each piece of synchronous code be tested easily? If you make a change to a function and break it, is it easy to identify where it went wrong? If there’s a bunch of intermediary outputs between the function inputs and outputs, this means you’ll be in the debugger trenches for a while. My favorite functions either transform the inputs once to produce deterministic outputs, or enqueue one or two testable side effects. Chunking code like this can also help remediate issues in production. Say a certain function in an asynchronous pipeline failed; you’re not able to easily re-run it but you’re able to get the system to the correct expected state after that function. Since this function was well scoped, you can easily construct its outputs and run the next function with those, restoring the pipeline.

**Resources needed**

I touched on this in the request source section, but services can have very different resource needs (e.g. compute, memory, execution timespan, etc.), and you might not want to give infinite resources to each service. We designate a cron job for each separate process and try to limit the resources provided to each cron job. I recently tried using [Modal](https://modal.com/) for a hackathon project, which made it really easy to offload processes to the cloud. Infrastructure like this is especially relevant for compute-intensive ML processes (inference, training, etc.) that should be containerized and optimized on their own.

I’m a big fan of splitting code down into modular parts — you can find me kicking back and refactoring our codebase while slacking off from my real feature work. It provides maintainability, security, and reliability, among other invaluable benefits. It’s our secret weapon as a fintech startup, which embraces “build fast, *don’t* break things.”
