# 📷 QR Vision Project

A full-stack computer vision web application for learning, experimenting, and interacting with QR code generation, QR code detection, QR code decoding, and digital image processing concepts.

This project transforms academic Digital Signal and Image Processing laboratory experiments into a modern web-based interactive platform using Python, OpenCV, FastAPI, Jupyter Notebook, Next.js, TypeScript, Tailwind CSS, API integration, theory documentation, and responsive frontend design.

---

## 🔗 Links

Live Website:  
https://qr-vision-ss.vercel.app

Main Repository:  
https://github.com/SajjadHossainSoykot/QR-Vision-Project

---

## 🚀 Project Overview

The QR Vision Project is designed to help students, developers, and learners understand how QR codes and image processing systems work.

Users can generate QR codes, upload QR images, detect QR code regions, decode embedded data, and learn the theory behind QR code structure and computer vision preprocessing.

The project includes:

- Python Backend
- FastAPI API Layer
- OpenCV Image Processing
- QR Code Generation
- QR Code Detection
- QR Code Decoding
- Jupyter Notebook Experiments
- Mathematical and Theoretical Documentation
- Next.js Frontend
- API Integration
- Responsive Mobile-Friendly UI
- Academic Learning Section

---

## ✨ Live Features

This platform is planned and developed to provide an interactive interface for:

- Generating QR codes from text or URLs
- Uploading QR code images
- Detecting QR code position from images
- Decoding QR code data
- Showing processed image outputs
- Explaining QR code structure visually
- Displaying image processing theory
- Testing backend logic through Jupyter Notebook
- Connecting frontend UI with backend computer vision logic
- Providing a clean educational web experience

---

## 🧠 Educational Purpose

This project is created for academic learning and practical understanding of QR code technology and digital image processing.

It connects theory with implementation by allowing users to:

- Generate QR codes
- Scan QR images
- Decode QR information
- Understand QR code structure
- Learn image preprocessing concepts
- Explore OpenCV-based computer vision
- Understand frontend-backend API communication
- Practice full-stack computer vision project development

---

## 🧪 Core QR Code Concepts

A QR code is a two-dimensional matrix barcode that stores information using black and white square modules.

Important QR code components include:

- Finder Patterns
- Alignment Patterns
- Timing Patterns
- Format Information
- Version Information
- Data and Error Correction Codewords
- Quiet Zone
- Binary Module Representation

The three large square finder patterns help scanners detect QR code position, scale, and orientation.

---

## 🔍 How QR Code Detection Works

Basic QR code detection follows these steps:

1. Input image is uploaded or captured.
2. Image is converted into grayscale.
3. Noise reduction or thresholding may be applied.
4. QR finder patterns are detected.
5. QR code boundary is located.
6. Perspective correction may be applied.
7. QR matrix is analyzed.
8. Encoded binary data is decoded into readable text.

This project explains and demonstrates these steps using OpenCV and Python.

---

## 🖼 Image Processing Features

The backend experiments may include common digital image processing operations such as:

- Image reading
- RGB to grayscale conversion
- Thresholding
- Edge detection
- Contour detection
- Image resizing
- Noise reduction
- Perspective transformation
- QR region detection
- QR decoding
- Output visualization

These techniques help improve QR code detection from real images.

---

## 🧪 Notebook Experiments

The project includes Jupyter Notebook based experiments for testing all backend logic step by step.

Example notebook:

```text
AllExpInOne.ipynb
```

The notebook is useful for:

- Testing QR code generation
- Testing QR code detection
- Testing QR code decoding
- Testing OpenCV preprocessing
- Visualizing intermediate outputs
- Debugging image processing logic
- Testing experiments before adding them to the backend API

---

## 🏗 Project Structure

```text
QR-Vision-Project/
|
├── backend/
|   ├── app/
|   |   ├── main.py
|   |   ├── routes/
|   |   ├── services/
|   |   └── utils/
|   |
|   ├── notebooks/
|   |   └── AllExpInOne.ipynb
|   |
|   ├── requirements.txt
|   └── README.md
|
├── frontend/
|   ├── app/
|   |   ├── page.tsx
|   |   ├── generator/
|   |   ├── scanner/
|   |   ├── theory/
|   |   ├── api-docs/
|   |   └── about/
|   |
|   ├── components/
|   |   ├── ui/
|   |   ├── layout/
|   |   ├── qr/
|   |   └── theory/
|   |
|   ├── lib/
|   |   └── api.ts
|   |
|   ├── data/
|   ├── types/
|   ├── public/
|   ├── package.json
|   └── next.config.ts
|
├── docs/
|   ├── theory.md
|   ├── qr-code-theory.md
|   └── image-processing-notes.md
|
├── README.md
├── LICENSE
└── .gitignore
```

---

## ⚙️ Backend Setup

Go to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate the virtual environment.

For macOS/Linux:

```bash
source venv/bin/activate
```

For Windows PowerShell:

```powershell
venv\Scripts\Activate.ps1
```

For Windows CMD:

```cmd
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI backend server:

```bash
uvicorn main:app --reload
```

Backend server runs on:

```text
http://127.0.0.1:8000
```

FastAPI Swagger API Docs:

```text
http://127.0.0.1:8000/docs
```

ReDoc API Docs:

```text
http://127.0.0.1:8000/redoc
```

---

## ⚙️ Frontend Setup

Go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the Next.js development server:

```bash
npm run dev
```

Frontend server runs on:

```text
http://localhost:3000
```

---

## 🧑‍💻 Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- JavaScript
- CSS

### Backend

- Python
- FastAPI
- Uvicorn
- OpenCV
- NumPy
- Pillow
- qrcode
- python-multipart

### Experiment and Development Tools

- Jupyter Notebook
- IPython
- VS Code
- Git
- GitHub
- npm
- Python Virtual Environment

---

## 🔗 API Integration

The frontend communicates with the backend using REST API requests.

Backend Base URL for local development:

```text
http://127.0.0.1:8000
```

For production, the deployed backend URL should be stored in an environment variable.

Example:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

---

## 📡 Possible API Endpoints

The backend may include endpoints such as:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check backend status |
| GET | `/health` | Health check endpoint |
| POST | `/generate-qr` | Generate QR code from text or URL |
| POST | `/detect-qr` | Detect QR code from uploaded image |
| POST | `/decode-qr` | Decode QR code data |
| POST | `/process-image` | Apply image preprocessing operation |

---

## 📡 Example QR Generation Request

Example request:

```json
{
  "text": "https://qr-vision-ss.vercel.app"
}
```

Example response:

```json
{
  "success": true,
  "message": "QR code generated successfully",
  "data": "https://qr-vision-ss.vercel.app",
  "qr_image": "generated_qr.png"
}
```

---

## 📡 Example QR Decode Response

Example response after decoding a QR code image:

```json
{
  "success": true,
  "decoded_text": "https://qr-vision-ss.vercel.app"
}
```

---

## 📡 Example Image Upload Request

Example frontend form-data request:

```ts
const formData = new FormData();
formData.append("file", selectedImage);

const response = await fetch(`${API_BASE_URL}/decode-qr`, {
  method: "POST",
  body: formData
});

const data = await response.json();
```

---

## 🎨 Frontend Features

The frontend is built with Next.js and provides a modern interactive interface for QR code and image processing learning.

### Main Features

- Modern landing page
- QR code generator section
- QR image upload section
- QR scanner section
- QR detection result display
- QR decoded text display
- Processed image preview
- API payload preview
- Copy decoded result button
- Backend connection error handling
- Responsive mobile layout
- Theory and documentation pages
- About project page
- Academic project description

---

## 📄 Pages Included

| Page | Route | Description |
|---|---|---|
| Home | `/` | Project introduction and feature overview |
| QR Generator | `/generator` | Generate QR codes from text or URL |
| QR Scanner | `/scanner` | Upload image and detect/decode QR code |
| Theory | `/theory` | Explanation of QR code structure and image processing |
| API Docs | `/api-docs` | Backend API usage documentation |
| About | `/about` | Project and author information |

---

## 🧩 Recommended Frontend Component Plan

```text
components/
├── layout/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── PageHeader.tsx
│
├── qr/
│   ├── QRGenerator.tsx
│   ├── QRScanner.tsx
│   ├── ImageUploadBox.tsx
│   ├── QRResultPanel.tsx
│   ├── ProcessedImagePreview.tsx
│   └── CopyButton.tsx
│
├── theory/
│   ├── TheoryCard.tsx
│   ├── FormulaBlock.tsx
│   ├── StepList.tsx
│   └── ExampleBlock.tsx
│
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    ├── Input.tsx
    ├── Textarea.tsx
    └── Alert.tsx
```

---

## 🧪 Backend Feature Plan

The backend should support:

- QR code generation
- QR image upload
- QR code detection
- QR code decoding
- Image preprocessing
- Error handling
- Image format validation
- API response formatting
- Swagger UI documentation
- CORS support for frontend connection

---

## 🧠 QR Code Theory Summary

QR codes work by converting data into binary form and placing that binary data inside a two-dimensional grid of black and white modules.

Basic working steps:

1. Input text or URL is converted into encoded data.
2. Error correction data is added.
3. Data bits are placed inside the QR matrix.
4. Finder patterns and timing patterns help scanners locate the QR code.
5. The scanner detects the QR code from an image.
6. The QR matrix is analyzed and decoded back into readable text.

---

## 🧮 Digital Image Processing Concepts Used

This project may include the following image processing concepts:

| Concept | Purpose |
|---|---|
| Grayscale Conversion | Simplifies image data for processing |
| Thresholding | Separates dark and light regions |
| Edge Detection | Finds boundaries and strong intensity changes |
| Contour Detection | Locates possible QR regions |
| Noise Reduction | Improves detection accuracy |
| Perspective Transform | Corrects tilted QR code images |
| Morphological Operations | Improves binary image structure |
| QR Decoding | Extracts readable information |

---

## ⚠️ Backend Connection Handling

If the backend server is not running, the frontend should show a proper error message instead of failing silently.

Example error message:

```text
Backend server is not connected. Please start the FastAPI server and try again.
```

To fix this, run the backend server:

```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

---

## 🛠 Troubleshooting

### Problem: `Could not import module "main"`

Cause:

The terminal is not inside the correct backend directory.

Solution:

```bash
cd backend
uvicorn main:app --reload
```

---

### Problem: Frontend cannot connect to backend

Possible causes:

- Backend is not running
- Wrong API base URL
- `.env.local` is missing
- Wrong port number
- Browser CORS issue
- Backend crashed because of invalid input

Solution:

Create or update frontend `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

Then restart the frontend server:

```bash
npm run dev
```

---

### Problem: Port already in use

If port `8000` is already being used, run the backend on another port:

```bash
uvicorn main:app --reload --port 8001
```

Then update the frontend environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8001
```

---

### Problem: QR code is not detected

Possible causes:

- Image is blurry
- QR code is cropped
- Low contrast
- Poor lighting
- File format is unsupported
- QR code is too small
- Quiet zone around QR code is missing

Possible solutions:

- Use a clearer image
- Increase image size
- Improve contrast
- Use thresholding
- Make sure the full QR code is visible
- Keep enough white margin around the QR code

---

## 🚀 Deployment Plan

The expected live website URL is:

```text
https://qr-vision-ss.vercel.app
```

Recommended deployment approach:

### Frontend Deployment

The Next.js frontend can be deployed using:

- Vercel
- Netlify
- Render

Recommended option:

```text
Vercel
```

### Backend Deployment

The Python/FastAPI backend can be deployed using:

- Render
- Railway
- Fly.io
- VPS Server

Recommended beginner-friendly option:

```text
Render
```

---

## 📦 Environment Variables

For frontend production deployment:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api-url.onrender.com
```

For local development:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

---

## ✅ Current Project Status

| Module | Status |
|---|---|
| Repository Setup | Completed |
| Backend Folder | Added |
| Frontend Folder | Added |
| Docs Folder | Added |
| Jupyter Notebook Experiments | In Progress |
| QR Code Generation | In Progress |
| QR Code Detection | In Progress |
| QR Code Decoding | In Progress |
| Frontend UI | In Progress |
| API Integration | Planned |
| Theory Documentation | In Progress |
| Deployment | Planned |

---

## 🌱 Future Improvements

Possible future improvements:

- Add drag-and-drop image upload
- Add camera-based QR scanner
- Add downloadable generated QR image
- Add QR code customization
- Add color QR generation
- Add batch QR decoding
- Add processed image preview
- Add detection bounding box overlay
- Add image preprocessing controls
- Add `/health` backend endpoint
- Add `/docs` frontend documentation page
- Add Docker support
- Add unit tests
- Add deployment documentation
- Add dark/light mode toggle
- Add better error messages
- Add mobile camera scanner support

---

## 🧪 Recommended Unit Test Structure

```text
tests/
├── test_generate_qr.py
├── test_detect_qr.py
├── test_decode_qr.py
├── test_image_processing.py
└── test_api.py
```

Example test idea:

```python
def test_generate_qr():
    result = generate_qr("https://qr-vision-ss.vercel.app")
    assert result is not None
```

---

## 🧾 Documentation Plan

The `docs/` folder can contain:

```text
docs/
├── theory.md
├── qr-code-theory.md
├── image-processing-notes.md
├── api-documentation.md
└── experiment-notes.md
```

Documentation topics:

- How QR codes work
- QR code structure
- Finder patterns
- Timing patterns
- Error correction
- Image preprocessing
- OpenCV QR detection
- Backend API usage
- Frontend integration

---

## ⚠️ Disclaimer

This project is created for:

- Academic Learning
- Digital Image Processing Practice
- QR Code Technology Demonstration
- Computer Vision Experimentation
- Full-Stack Project Development Practice

This project is not intended for high-security QR verification, payment validation, banking authentication, or production-level identity verification systems.

The QR code detection and decoding logic is developed for educational and experimental purposes.

---

## ⚖️ License

This project is licensed under the AGPL-3.0 license.

You must:

- Include the LICENSE file
- Provide proper attribution
- Follow the terms of the AGPL-3.0 license
- Keep derivative works open according to the license terms

---

## 🙌 Acknowledgment

- ICT-4104 Digital Signal and Image Processing Laboratory
- Department of Information and Communication Technology
- Islamic University, Bangladesh
- OpenCV Documentation
- Python Documentation
- QR Code Learning Resources
- Next.js Documentation
- FastAPI Documentation
- Open-Source Tools and Libraries
- AI Tools such as ChatGPT and GitHub Copilot for development assistance

---

## 📌 Author

Sajjad Hossain Soykot  

GitHub:  
https://github.com/SajjadHossainSoykot

Repository:  
https://github.com/SajjadHossainSoykot/QR-Vision-Project

Live Website:  
https://qr-vision-ss.vercel.app

---

## 🤖 Project Prompt for Another AI

Use this prompt if another AI needs to understand or extend this project:

```text
I am building a QR Vision Project using a Python/FastAPI backend and a Next.js frontend.

The project focuses on:
- QR code generation
- QR code detection
- QR code decoding
- OpenCV image processing
- Jupyter Notebook experiments
- QR code theory
- Digital image processing learning

The repository structure includes:
- backend/
- frontend/
- docs/
- README.md

The frontend should be built using:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Responsive UI

The backend should be built using:
- Python
- FastAPI
- OpenCV
- qrcode
- Pillow
- NumPy

The frontend must include:
- Home page
- QR Generator page
- QR Scanner page
- Theory page
- API Docs page
- About page

The backend should expose endpoints like:
- GET /
- GET /health
- POST /generate-qr
- POST /detect-qr
- POST /decode-qr
- POST /process-image

Please use this documentation as the main project planning guide.
```

---

## ⭐ Final Note

The QR Vision Project is an educational full-stack computer vision project that combines QR code theory, Python image processing, OpenCV experiments, Jupyter Notebook testing, FastAPI backend development, and a modern Next.js frontend.

It is designed as a learning platform where users can understand, generate, detect, and decode QR codes interactively.