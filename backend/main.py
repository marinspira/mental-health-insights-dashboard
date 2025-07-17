from transformers import pipeline

# This model uses safetensors, safe to load without torch>=2.6
emotion_classifier = pipeline(
    "text-classification",
    model="SamLowe/roberta-base-go_emotions",
    top_k=None
)

text = "I've been feeling very low and tired lately."
results = emotion_classifier(text)

for emotion in results[0]:
    print(f"{emotion['label']}: {emotion['score']:.2f}")