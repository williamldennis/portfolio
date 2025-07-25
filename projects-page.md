Projects

Working Thesis: 

While most of the LLM applications today use a copilot model to accomplish work with an LLM, the majority of online interactions in the future will be mediated through LLMs.  To be clear, a few channels will continue to exist for human-to-human interactions (like private messaging), but the majority of productive work (like accomplishing personal or professional tasks) will have LLMs at their core – as both interpreter and information router. This could look like an operating system, or it could look like an app layer. Lately I’ve been working on a few projects that explore this idea. 


Project Waterfall

[DEMO VIDEO]

Project Thesis: 
I believe the future work will be accomplished by managing multiple AI agents and targeting them towards a single human-centric goal. Ie “I want to build a house in upstate New York.” The agents will then interpret this goal, break it down into tasks, and drive progress towards the goal. They will loop you in for human-centric decisions around taste, subjective quality, or personal preference. I wanted to explore how you might manage a team of agents to accomplish such a goal, so I built Waterfall. 

Approach: 
The user inputs a goal and chats with an AI until that goal is refined into a SMART goal (Specific, Measurable, Achievable, Relevant, Time-Bound). From there, the goal generates a list of tasks. Each task is then assigned one of nine Functions - like communication, research, planning, action, etc. Each Function has a subfunction - like communication:email or communication:phone. Then, based on the subfunction type, a unique workflow can be kicked off by an AI agent to accomplish that task, sometimes autonomously (like deep research) and sometimes with human collaboration (like decision making). The goal is to have a set of workflows that are composable to accomplish any high level goal. Today, in 2025, a fair amount of human collaboration in needed. But in the future, with the right workflows and the right agent context, how many tasks can be accomplished solely by agents? Then as humans we get to spend more time thinking about what we want to accomplish, versus how to accomplish it. 

Questions Generated & Issues Found:
Question: Does this thinking extrapolate from goals into a meta-goal or optimization function? For example, would you simply tell your team of agents to maximize profits within the bounds of the law.
Issue: The internet is a bit of a walled garden. If you’re trying to find emails on the internet and use them in an email autonomously, what’s the cleanest most reliable way to do that?
Question: Is the goal-task paradigm the right one to manage ongoing workflows, or are threaded conversations like slack better for organizing ongoing work? As a slack user, I hope that’s not the case :) 


Project Whomst

[DEMO VIDEO]

Project Thesis: 
I believe the future of human-to-human connection will be mediated via an LLM. This could be for things like dating, professional networking, or perhaps even email. To explore this idea, I wanted to start with a simple “who you should meet” use case, which could in theory extend to marketplaces, dating, professional networking, or any other use case where two strangers need a reasonable signal to connect. Could an LLM connect you to another stranger in a system based on just a handful of user inputs? That’s what I wanted to explore with Whomst. 

Approach: 
The user chats with the LLM for 10 question covering some “first date” style questions as well as some Enneagram assessments. From there, the system analyzes the transcripts against other user transcripts to find the most similar person. After this initial “matching step,” a new level is unlocked for the user where they can “Ask & Offer” – this is an exploration of marketplace dynamic where the LLM analyzes the asks against the offers and tries to match them accordingly.  

Questions Generated & Issues Found:
Issue: The technical problem of comparing every user to each other is an N^2 problem - so exploring an efficient use of semantic search with embeddings with a combination of decision tree may get you 90% of the way there. Then you can use the LLM for the “last mile” of matching. 
Issue: Testing network effect products require some patient users :) 
Question: Is chatting with an AI actually the best form of user input? Or does it live as perhaps an email client that is passively listening to your messages, and is aware of your existing social network. 
