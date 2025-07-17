from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://marinspira.github.io/mental-health-insights-dashboard/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load emotion model pipeline
emotion_classifier = pipeline(
    "text-classification",
    model="SamLowe/roberta-base-go_emotions",
    top_k=None
)

# Request schema
class NoteInput(BaseModel):
    text: str

# POST endpoint
@app.post("/analyze-emotions")
async def analyze_emotions(note: NoteInput):
    results = emotion_classifier(note.text)
    return {"emotions": results[0]}

# Initial test
# text = "I've been feeling very low and tired lately."
# results = emotion_classifier(text)

# for emotion in results[0]:
#     print(f"{emotion['label']}: {emotion['score']:.2f}")