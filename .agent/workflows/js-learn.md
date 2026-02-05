---
description: Start a daily JavaScript/Node.js learning session
---

# Daily JavaScript & Node.js Learning Session

This workflow starts your daily learning session to deepen JavaScript and Node.js knowledge.

## Steps

1. **Load the JS/Node.js mentor skill**
   - Read the skill file at `.agent/skills/js-nodejs-mentor/SKILL.md`
   - Follow the teaching methodology and session structure

2. **Check learning progress**
   - Review `.agent/skills/js-nodejs-mentor/curriculum.json` to see what you've completed
   - If the file doesn't exist, create it with initial structure

3. **Choose today's topic**
   - Suggest the next topic based on curriculum progress
   - OR let the user choose from available categories:
     - JavaScript Fundamentals
     - Advanced JavaScript
     - Node.js Core
     - Node.js Ecosystem
     - Modern JavaScript (ES6+)

4. **Create learning workspace**
   - Create a new file in `js-learning/` directory with format: `YYYY-MM-DD-topic-name.js`
   - This is where you'll write code examples during the session

5. **Run the learning session**
   - Follow the 5-part session structure from the skill:
     1. Topic Introduction
     2. Core Concepts
     3. Hands-On Practice
     4. Deep Dive Questions
     5. Summary & Next Steps

6. **Update progress**
   - After completion, update `curriculum.json` with:
     - Topic completed
     - Date
     - User's difficulty rating
     - Key insights

## Example Usage

```
User: /js-learn
Agent: Loads skill, checks progress, suggests today's topic (e.g., "Closures")
      Creates learning file, guides through session
```

## Tips

- Sessions are designed for 45-60 minutes of focused learning
- You can pause and resume sessions
- Request to revisit topics anytime
- Ask for more examples or deeper explanations as needed
