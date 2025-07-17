# Mental Health Insights Dashboard – Backend

This project uses a **Hugging Face Transformer model** to analyze therapists' session notes and classify emotions expressed by the patient. The backend is built with **FastAPI**, leveraging **PyTorch** and **Transformers** for inference.

---

## Why I used a Virtual Environment?

I used a **virtual environment** because it isolates Python project’s dependencies from my global Python installation. This ensures:

- No version conflicts with other projects.
- Clean reproducibility for others running code.
- Easy deployment.

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/mental-health-insights-dashboard.git
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