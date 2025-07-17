# Mental Health Insights Dashboard

A clinician-facing web dashboard that visualizes anonymized client mental health data (mood trends, PHQ-9, GAD-7 scores, and attendance) with simulated HIPAA-aware design principles. Built as a personal project to demonstrate applied skills in healthcare technology, data visualization, and secure design.

---

## Features

- **Mood & symptom trend visualization** 
- **Risk alert system** for sudden changes or missed sessions
- **HIPAA-awareness by design** (no PII, secure design notes)
- **Modular component structure** using React + Tailwind CSS
- Uses **realistic synthetic patient data** (JSON-based)
- **Emotion Analysis Backend** using NLP (Natural Language Processing) to detect emotional tone in therapist notes. Read more in the [Backend README](https://github.com/marinspira/mental-health-insights-dashboard/blob/main/backend/README.md)

---

## Why This Project?

Mental health clinicians need quick, clear access to patient progress—without compromising privacy. This dashboard simulates a real-world tool that could be integrated into healthcare platforms, combining thoughtful UX, smart alerts, and HIPAA-aware architecture.

---

## HIPAA Awareness

| Principle              | How It’s Addressed                                  |
| ---------------------- | --------------------------------------------------- |
| No PII                 | Uses de-identified, synthetic data only             |
| Role-Based Access      | Login simulation with therapist ID                  |
| Minimum Necessary Info | Only essential health indicators and trends shown   |
| Security Banner        | “Demo only” disclaimer in UI and docs               |
| Future Proofing        | Code designed to support backend auth or encryption |

--- 

## About PHQ-9 and GAD-7 Scores

### PHQ-9 (Patient Health Questionnaire-9)

- **What:** A 9-question self-report tool used to screen for and measure the severity of **depression**.
- **Why:** Helps clinicians assess how severe a person’s depressive symptoms are, track changes over time, and guide treatment decisions.
- **How it works:** Each of the 9 items is scored 0–3 based on how often symptoms occurred in the last 2 weeks.
- **Score range:** 0 to 27  
  - 0–4: Minimal depression  
  - 5–9: Mild depression  
  - 10–14: Moderate depression  
  - 15–19: Moderately severe depression  
  - 20–27: Severe depression

### GAD-7 (Generalized Anxiety Disorder-7)

- **What:** A 7-item self-report scale that screens for and assesses severity of **generalized anxiety disorder (GAD)**.
- **Why:** It provides clinicians a quick measure to evaluate anxiety levels and monitor treatment response.
- **How it works:** Each item is scored 0–3 based on frequency of symptoms over the last 2 weeks.
- **Score range:** 0 to 21  
  - 0–4: Minimal anxiety  
  - 5–9: Mild anxiety  
  - 10–14: Moderate anxiety  
  - 15–21: Severe anxiety

---

## Future Improvements

- Real authentication (probably JWT or OAuth)
- API backend (Node + MongoDB)
- Exportable clinician reports
- Data filtering by diagnosis, score range
- Accessibility audit (WCAG)