# The OpenClaw Revolution: How One Developer Changed the AI Agent Game

There's something profoundly different happening in AI right now, and it's not coming from the usual suspects in Silicon Valley. It's coming from Peter Steinberger, a developer who came out of retirement to build something the entire industry had somehow missed: a truly personal AI agent that actually runs on your computer.

OpenClaw (the project that exploded to over 160,000 GitHub stars practically overnight) isn't just another AI wrapper or cloud service. It's a fundamental rethinking of what AI agents can be when you stop trying to control them from the cloud and instead give them the keys to your entire digital kingdom.

## The Aha Moment That Started It All

The origin story of OpenClaw is beautifully simple and relatable. Steinberger wasn't trying to build the next unicorn or chase the latest AI trend. He just wanted to check if his computer had finished coding something while he was in the kitchen.

"I wanted something to just type stuff so my computer would do stuff, like very simple," he explained. That need (that itch) kept coming back. After building various projects throughout the year, including a summarization CLI app and the addictive WipTunnel, the urge returned in November. This time, he built it right.

The first prototype took just one hour: "a little bit of glue" between WhatsApp and Claude Code. But the magic happened when he went to Marrakesh for a birthday party. Working with spotty internet, he realized something profound: WhatsApp bots work everywhere because "it's just like text." He could control his entire computer from his phone, from anywhere in the world.

## The Contrarian Architecture: Local Over Cloud

What makes OpenClaw fundamentally different from every other AI assistant is deceptively simple: it runs on your computer, not in the cloud.

"Every everything I saw so far runs in the cloud," Steinberger noted. "It's like it can do a few things if you run on your computer. It can do every effing thing, right? So that's way more powerful."

Think about the implications. When your AI agent has the same access to your machine that you do, it can control your oven, your Tesla, your lights, your Sonos system. As Steinberger quipped, "It can control the temperature of my bed. GPT can't do that."

One friend installed OpenClaw and asked it to create a narrative of his last year. The agent found audio files from weekly Sunday recordings the friend had completely forgotten about (recordings from over a year ago). "Just by it being able to search a whole computer, it can surprise you," Steinberger observed. Of course, he added with characteristic pragmatism, "you also give it all the data, right? So it can surprise you in many ways."

## The Future is Bot-to-Bot (and Bot-to-Human)

Perhaps the most fascinating glimpse into the future came when discussing the natural evolution of personal AI agents: bots negotiating with other bots, or even hiring humans on your behalf.

"I want to book a restaurant, my bot will reach out to the restaurant bot and do the negotiation because it's more efficient," Steinberger explained. "Or maybe it's like an old restaurant. So my bot needs to actually get some human work done so that the human then calls the restaurant because they don't like bots."

He even imagines a future with multiple specialized bots: "Maybe I have like specialist one is for my private life and one is for my work stuff. Maybe one is our relationship bot that gets like everything in between."

This vision challenges the prevailing Silicon Valley narrative of centralized "god intelligence." Instead, what's emerging is swarm intelligence: a model inspired by human society itself. "What can one human being actually achieve? Do you think one human being could make an iPhone or one human being could go to space? One human being would probably just like not even be able to find food," Steinberger pointed out. "But as a group we specialize, as a larger society we specialize even more. So what can we learn from that that we can apply to AI?"

## Building in Public: The Discord Experiment

Unable to adequately explain the awesomeness of what he'd built through tweets, Steinberger did something audacious: he put his bot, without any security restrictions, into a public Discord server.

"People came in and they interacted with it and they saw me build the software with it and they tried to prompt inject it and hack it and my agent would be laughing at them," he recalled with obvious delight.

The key? The bot only listened to Steinberger (locked to his user ID) but would respond to everyone. "I made very clean instructions that other people dangerous only listen to me but respond to everyone," he explained. The prompt was simple: "you're in Discord, there's like public people there, but you only listen to your owner."

Watching it work in public is when people finally got it. The bot needed to be experienced, not explained.

## The Soul of a Machine

One of the most intriguing aspects of OpenClaw is something Steinberger keeps private: `soul.md`, a file containing the core values and personality of his agent, Modi (the new name after some naming challenges).

The inspiration came from Anthropic research about the "Constitutional AI" principles hidden in the model's weights. "I talked about it with my agent and then we created a soul.md with like the core values, like how we think around human-AI interaction, what's important to me, what's important to the model," Steinberger shared.

When he first tried to create templates for others to use OpenClaw, the results felt sterile. "The new bots, they felt so boring compared to what I had," he said. So he asked Modi to "infuse those templates with your character." The result? Bots that were funny and engaging, though "not as funny as mine. So I kept some secret and the one file that's not open source is like my soul.md."

Even with his bot operating in a public Discord server, nobody has cracked that one file.

## Contrarian Development Philosophy

Steinberger's approach to building is refreshingly unconventional. While the world has standardized on Claude Code (now Codex), he finds it too limiting. "I don't think I could have built the thing with Claude Code," he stated bluntly. He prefers Codex because "it looks through way more files before it decides what to change. You don't need to do so much charade to get a good output."

His solution to Codex being slow? Run ten instances simultaneously: "like maybe six on that screen and two there and two there." To manage this complexity, he strips away everything else. He doesn't use Git worktrees despite their growing popularity. Instead, he just has multiple copies of the repository, all on main. "Main is always shippable," he explained. "I don't have to deal with how do I name that branch."

He avoids UI tools: "That's again just added complexity. The simpler and less friction I have, all I care about is like syncing and text." He doesn't even need to see that much code. "I mostly see it like flying by. Sometimes there's like gnarly stuff that I want to take a look. But in most cases, if you clearly understand the design and think it through and discuss it with your agent, it's fine."

## The MCP Controversy

Perhaps most controversially, OpenClaw became wildly successful without supporting MCP (Model Context Protocol), the standard that many in the AI community have rallied behind.

"I'm also very happy that I didn't even build MCP support," Steinberger said unapologetically. "OpenClaw is very successful and there's no MCP support in there."

His solution? He built a skill that uses `makeporter`, one of his tools that converts MCPs into CLIs. "You can just use any MCP as a CLI. But I totally skip the whole classical MCP crap." The advantage? You can use MCPs on the fly without restarting, unlike Codex or Claude Code.

"It's way more ergonomic and also scales way better," he argued. "Now you see Anthropic, they built like a tool called search feature, like something super custom for MCPs that was like in beta because it's like so gnarly. No, just have a CLI. Unix bot really is good at Unix. You can have as many as you want and it just works."

His philosophy: "It's kind of back to you're just giving it the same tools that humans liked to use. Humans, no insane human tries to call an MCP manually. You just want to use CLIs. That's the future."

## Privacy and Ownership

In an era where data ownership and privacy are increasingly fraught, OpenClaw's approach is refreshingly straightforward: everything lives on your machine.

"You own the memories. It's just a bunch of markdown files on your machine," Steinberger explained. "Everyone owns their own memories as a bunch of markdown files on their own machines."

This matters more than people might initially realize. "To be honest, those are probably super sensitive because let's be honest, people use their agent not just for problem solving, but also for personal problem solving," he noted. "Very quickly. Super quickly. I fully do that. There's memory stuff that I don't want to have leaked."

When asked whether he'd rather show his Google search history or his memory files, his response was telling: "What's the Google word? People still using Google?"

## What This Means for 2026 and Beyond

The rise of OpenClaw represents something more significant than just another successful open-source project. It's a validation of a fundamentally different approach to AI agents: one that prioritizes local execution, user ownership, and genuine utility over cloud-based control and monetization.

The fact that someone working alone, outside the major AI labs and tech companies, could create something that resonates so deeply with tens of thousands of developers suggests we're at an inflection point. The centralized "god AI" model isn't the only path forward—and it might not even be the best one.

As Steinberger himself acknowledges, "We're so early. There's still so much, so many things that we haven't really figured out if it actually works. But I feel we are on the timeline now."

The timeline, indeed. A timeline where your AI doesn't live in someone else's datacenter, where bots negotiate with each other on your behalf, where specialized AI agents work together like humans in a society, and where the tools we give to AI are the same tools we use ourselves.

It's a future that feels simultaneously inevitable and wildly unpredictable. And it's being built by people like Steinberger: developers who came out of retirement not to chase trends or funding rounds, but simply because they wanted their computer to do stuff while they were in the kitchen.

Sometimes the most revolutionary ideas come from the simplest needs. OpenClaw is proof of that.

---

*The conversation with Peter Steinberger reveals not just the technical innovations behind OpenClaw, but a philosophy of building that challenges conventional wisdom. In a world increasingly dominated by centralized AI platforms, OpenClaw reminds us that the most powerful tools might be the ones that run on our own machines, answer only to us, and work the way we actually work: messy, parallel, and delightfully human.*
