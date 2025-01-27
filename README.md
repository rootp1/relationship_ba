# Relationship Analysis Flow: Relationship Advisor (`relationship-baba`)

*An AI-guided workflow to evaluate relationship dynamics, assess challenges, and provide personalized advice for navigating relationships or breakups.*

---

## Overview

This flow acts as a structured decision-support tool for individuals at critical junctures in their relationships. By analyzing user-provided details about both parties involved, it generates insights about the relationship’s strengths, potential obstacles, and long-term viability. Powered by OpenAI’s GPT-4o, it combines emotional intelligence with logical analysis to deliver balanced perspectives.

---

## Key Features

1. **Scenario-Specific Analysis**: Tailored for either new relationships or breakup situations.
2. **Multi-Stage Evaluation**: Examines present conditions and future possibilities.
3. **Actionable Guidance**: Concludes with concrete steps rather than vague suggestions.

---

## Input Requirements

### Core Inputs

| Input Field       | Description                                                                                     |
|--------------------|-------------------------------------------------------------------------------------------------|
| **Gender**         | Helps contextualize social dynamics (e.g., "boy" or "girl").                                   |
| **Situation**      | Defines the focus area: preparing for a committed relationship or managing a breakup.          |
| **Your Perspective** | Detailed description of your emotions, intentions, and current stance.                        |
| **Partner’s Perspective** | Observations about the other person’s behavior, attitudes, and communication patterns.       |

### Example Input
```yaml
gender: "woman"
situation: "relationship"
input_me: "I value our connection but worry about differing life goals."
input_other: "They avoid discussing long-term plans despite my attempts."
