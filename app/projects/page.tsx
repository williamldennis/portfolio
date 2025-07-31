export const metadata = {
  title: 'Projects',
  description: 'Some projects on the future of work and human connection.',
}

export default function ProjectsPage() {
  const h1Style = `mb-8 text-6xl font-semibold tracking-tighter text-green-800`
  const h2Style = `mt-8 mb-4 font-bold text-lg text-green-800`

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Projects
      </h1>

      <h2 className={h2Style}>
        {`Working Thesis`}
      </h2>
      <p className="mb-4">
        {`While most of the LLM applications today use a copilot model to accomplish work `}<em>with</em>{` an LLM, almost all online interactions in the future will be mediated `}<em>through</em>{` an LLM.`}
      </p>
      <p className="mb-4">
        {`To be clear, a few channels will continue to exist for human-to-human interactions (like private messaging), but most productive work (like accomplishing personal or professional tasks) will have LLMs as the primary mediator – acting both as interpreter and information router. This could look like an operating system, or it could look like an app layer.`}
      </p>
      <p className="mb-4">
        {`I've been working on a few projects that explore this idea - one on the future of work, and a few on the future of human connection.`}
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className={h2Style}>
        {`Project Dream Machine`}
      </h2>
      <div className="mb-4">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full max-w-xl rounded-lg shadow-md border border-gray-200"
          controls
        >
          <source src="/videos/dreammachine-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="mb-4">
        <a href="https://thedreammachine.ai" target="_blank" rel="noopener noreferrer" className="text-green-800 underline">
          thedreammachine.ai
        </a>
      </p>
      
      <h3 className="font-semibold text-md text-green-800 mb-2">Project Thesis</h3>
      <p className="mb-4">
        {`I believe humans can provide a ton of value to one another but the majority of that value is untapped. We all have skills, abilities, wants, and needs. Imagine a world where we each have a superconnector working nonstop to connect us with others, maximizing the value exchange within our society. I wanted to explore what this might feel like, so I built The Dream Machine.`}
      </p>

      <h3 className="font-semibold text-md text-green-800 mb-2">Approach</h3>
      <p className="mb-4">
        {`The Dream Machine takes raw user inputs in the form of unstructured offerings and needs ("dreams") and parses those into individual "entities" that are each given an embedding. When new users add dreams to the system, those dreams are scored against existing embeddings. From there, an LLM analyzes the entities themselves and decides if there is sufficient reason to connect the two parties.`}
      </p>
      <p className="mb-4">
        {`The user then receives a "match" and can decide to "connect." Once both users choose to connect, they are cc'ed via email. It's a double opt-in approach that preserves intentionality and privacy.`}
      </p>
      <p className="mb-4">
        {`It's sort of like Craigslist but delightful, exciting, and mysterious. And without the effort of searching through endless listings.`}
      </p>

      <h3 className="font-semibold text-md text-green-800 mb-2">Learnings</h3>
      <p className="mb-4">
        {`One interesting outcome from testing is where a user who needs help moving was matched with a user who has a car to offer. As a human, I may never have made that connection but… it makes some sense.`}
      </p>
      <p className="mb-4">
        {`Each individual can supply a lot of "inventory" in the form of offers and dreams, which is helpful for the cold-start problem of many social networks. And given the user identity is hidden until there's a connection and there's no user directory, the system feels bigger than it is. And when it comes to GTM feels like an easier lift than an "old school" social network.`}
      </p>

      <h3 className="font-semibold text-md text-green-800 mb-2">Questions & Issues</h3>
      <ol className="list-decimal ml-8 mb-4">
        <li><strong>Question:</strong> If this is used for shopping, does there need to be the ability to browse?</li>
        <li><strong>Question:</strong> Does this service work best as a local want-ads like Craiglist or something more like a digital social network? You could imagine spinning groups out of this.</li>
        <li><strong>Question:</strong> Not all offers and asks should exist in perpetuity. How do you thoughtfully handle this?</li>
        <li><strong>Question:</strong> What does reputation look like on a system like this? Is it needed?</li>
        <li><strong>Question:</strong> Does messaging need to live on platform? Do we need to preserve anonymity throughout the exchnage like craigslist?</li>
        <li><strong>Issue:</strong> Need to add some rate limiting / match limiting to prevent spam or matching many times between the same two people. Maybe that's ok within reason…</li>
        <li><strong>Issue:</strong> This first version doesn't have a user profile or location, which feels like a necessary filter for certain matches.</li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h2 className={h2Style}>
        {`Project Waterfall`}
      </h2>
      <div className="mb-4">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full max-w-xl rounded-lg shadow-md border border-gray-200"
          controls
        >
          <source src="/videos/waterfall-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      
      <h3 className="font-semibold text-md text-green-800 mb-2">Project Thesis</h3>
      <p className="mb-4">
        {`I believe the future work will be accomplished by managing multiple AI agents and targeting them towards a single human-centric goal. Ie "I want to build a house in upstate New York."`}
      </p>
      <p className="mb-4">
        {`The agents will then interpret this goal, break it down into tasks, and drive progress towards the goal. They will loop you in for human-centric decisions around taste, subjective quality, or personal preference. I wanted to explore how you might manage a team of agents to accomplish such a goal, so I built Waterfall.`}
      </p>

      <h3 className="font-semibold text-md text-green-800 mb-2">Approach</h3>
      <p className="mb-4">
        {`The user inputs a goal and chats with an AI until that goal is refined into a SMART goal (Specific, Measurable, Achievable, Relevant, Time-Bound). From there, the goal generates a list of tasks. Each task is then assigned one of nine Functions - like communication, research, planning, action, etc.`}
      </p>
      <p className="mb-4">
        {`Each Function has a subfunction - like communication:email or communication:phone. Then, based on the subfunction type, a unique workflow can be kicked off by an AI agent to accomplish that task, sometimes autonomously (like deep research) and with human collaboration (like decision making). The goal is to have a set of workflows that are composable to accomplish any high level goal.`}
      </p>
      <p className="mb-4">
        {`Today, in 2025, a fair amount of human collaboration in needed. But in the future, with the right workflows and the right agent context, how many tasks can be accomplished solely by agents? Then as humans we get to spend more time thinking about what we want to accomplish, versus how to accomplish it.`}
      </p>

      <h3 className="font-semibold text-md text-green-800 mb-2">Questions & Issues</h3>
      <ul className="list-disc ml-8 mb-4">
        <li><strong>Question:</strong> Does this thinking extrapolate from goals into a meta-goal or optimization function? For example, would you simply tell your team of agents to maximize profits within the bounds of the law.</li>
        <li><strong>Issue:</strong> The internet is a bit of a walled garden. If you're trying to find emails on the internet and use them in an email autonomously, what's the cleanest most reliable way to do that?</li>
        <li><strong>Question:</strong> Is the goal-task paradigm the right one to manage ongoing workflows, or are threaded conversations like slack better for organizing ongoing work? As a slack user, I hope that's not the case :)</li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className={h2Style}>
        {`Project Whomst`}
      </h2>
      <div className="mb-4">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full max-w-xl rounded-lg shadow-md border border-gray-200"
          controls
        >
          <source src="/videos/whomst.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <h3 className="font-semibold text-md text-green-800 mb-2">Project Thesis</h3>
      <p className="mb-4">
        {`I believe the future of human-to-human connection will be mediated via an LLM. This could be for things like dating, professional networking, or perhaps even email.`}
      </p>
      <p className="mb-4">
        {`To explore this idea, I wanted to start with a simple "who you should meet" use case, which could in theory extend to marketplaces, dating, professional networking, or any other scenario where two strangers need a reasonable signal to connect. Could an LLM connect you to another stranger in a system based on just a handful of user inputs? That's what I wanted to explore with Whomst.`}
      </p>

      <h3 className="font-semibold text-md text-green-800 mb-2">Approach</h3>
      <p className="mb-4">
        {`The user chats with the LLM for 10 question covering some "first date" style questions as well as some Enneagram assessments. From there, the system analyzes the transcripts against other user transcripts to find the most similar person.`}
      </p>
      <p className="mb-4">
        {`After this initial "matching step," a new level is unlocked for the user where they can "Ask & Offer" – this is an exploration of marketplace style dynamics where the LLM tries to match the asks against the offers.`}
      </p>

      <h3 className="font-semibold text-md text-green-800 mb-2">Questions & Issues</h3>
      <ul className="list-disc ml-8 mb-4">
        <li><strong>Issue:</strong> The technical problem of comparing every user to each other is an N^2 problem - so exploring an efficient use of semantic search with embeddings with a combination of decision tree may get you 90% of the way there. Then you can use the LLM for the "last mile" of matching.</li>
        <li><strong>Question:</strong> Is chatting with an AI actually the best form of user input? Or does it live as perhaps an email client that is passively listening to your messages, and is aware of your existing social network and contacts.</li>
      </ul>

      <hr className="my-8 border-gray-300" />
    </section>
  )
} 