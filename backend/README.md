# Mental Health Insights Dashboard – Backend

This project uses a **Hugging Face Transformer model** to analyze therapists' session notes and classify emotions expressed by the patient. The backend is built with **FastAPI**, leveraging **PyTorch** and **Transformers** for inference.

---

## Features

- FastAPI backend server for emotion classification.
- Uses [`SamLowe/roberta-base-go_emotions`](https://huggingface.co/SamLowe/roberta-base-go_emotions) model from Hugging Face.
- Outputs probabilities for 28 distinct emotions.
- Designed to analyze therapists' session notes to detect emotional trends.

---

## Project Dependencies
> This project uses a combination of modern Python libraries to power a backend server for analyzing emotional tone in text (e.g. therapy session notes), using machine learning.

### Backend Web Server

| Package | Purpose |
|--------|----------|
| `fastapi==0.110.0`| Framework for building APIs in Python. It powers the web server that accepts text input for analysis. |
| `uvicorn==0.29.0` | ASGI server that runs the FastAPI app, enabling high-performance asynchronous request handling.       |


### Hugging Face Transformers & Dependencies
| Package | Purpose |
|--------|---------|
| `transformers==4.41.1` | Hugging Face's Transformers library. It provides pre-trained NLP models `SamLowe/roberta-base-go_emotions` used for emotion classification. |
| `torch==2.6.0` | PyTorch is the deep learning engine that runs the transformer models efficiently. It supports tensor computation (Math operations performed on tensors (e.g, multi-dimensional arrays)) and model inference (the act running a trained model on new input to get a prediction). |
| `safetensors==0.4.3` | Secure and fast format for storing and loading pre-trained model weights. Recommended over `.bin` for safety and performance. |

### Numeric Computation

| Package | Purpose |
|--------|---------|
| `numpy==1.26.4` | Core library for numerical operations. Required by both PyTorch and Transformers. This version is compatible with current PyTorch builds. |

> ⚠️ Note: PyTorch does **not** support NumPy 2.x yet. We pin to version `1.26.4` to avoid crashes or import errors.

---

## Virtual Environment

I used a **virtual environment** because it isolates Python project’s dependencies from my global Python installation. This ensures:

- No version conflicts with other projects.
- Clean reproducibility for others running code.
- Easy deployment.

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/marinspira/mental-health-insights-dashboard.git
cd mental-health-insights-dashboard/backend
```

### 2. Create a virtual environment
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install dependencies
```bash
pip install --upgrade pip
pip install -r requirements.txt
```