# 📷 QR Vision Project

A full-stack computer vision web application for generating, detecting, decoding, and experimenting with QR codes using **FastAPI**, **OpenCV**, **Next.js**, **TypeScript**, and **Tailwind CSS**.

QR Vision Project transforms academic Digital Signal and Image Processing laboratory concepts into a modern interactive web platform where users can generate QR codes, upload QR images, decode QR data, inspect API responses, and understand computer vision based QR processing.

---

## 🔗 Live Links

**Live Frontend:**  
https://qr-vision-ss.vercel.app

**Live Backend API:**  
https://qr-vision-ss-api.onrender.com/

**Swagger API Documentation:**  
https://qr-vision-ss-api.onrender.com/docs

**Main Repository:**  
https://github.com/SajjadHossainSoykot/QR-Vision-Project

---

## 🚀 Project Overview

The **QR Vision Project** is designed for students, developers, and learners who want to understand how QR code generation, detection, decoding, and image preprocessing work in a practical full-stack project.

The project combines:

- Python backend development
- FastAPI REST API
- OpenCV image processing
- QR code generation
- QR code decoding
- Image upload handling
- Jupyter Notebook experimentation
- Next.js frontend development
- TypeScript-based API integration
- Responsive UI design
- Dark/light theme toggle
- Drag-and-drop file upload
- Educational QR code theory and documentation

---

## ✨ Current Features

### Backend Features

- FastAPI backend server
- Live API deployment on Render
- QR code generation endpoint
- QR image upload endpoint
- QR decoding using QR decoding libraries
- QR decoding with preprocessing
- QR decoding with mathematical/computer vision based detection
- Temporary/in-memory file handling for deployment safety
- CORS support for frontend connection
- Swagger API documentation
- Jupyter Notebook experiments for testing logic

### Frontend Features

- Modern responsive Next.js UI
- Full-width QR generator section
- QR code generation from text or URL
- Generated QR preview
- Download generated QR image
- QR image upload section
- Drag-and-drop QR image upload
- Uploaded QR image preview
- Multiple decode methods:
  - Basic Decode
  - Preprocess Decode
  - Math Detection
- Clean decoded answer display
- API response preview section
- Proper warning state when no QR data is found
- Proper error state for failed requests
- Copy decoded result button
- CSS-variable based dark/light theme toggle
- Sticky navbar
- Mobile-friendly layout
- Webcam scanner placeholder section

---

## 🌐 Live Backend API

The QR Vision backend API is successfully deployed on Render.

**Base API URL:**

```text
https://qr-vision-ss-api.onrender.com/
```

**Swagger API Docs:**

```text
https://qr-vision-ss-api.onrender.com/docs
```

The root API endpoint returns a status response similar to:

```json
{
  "success": true,
  "message": "QR Vision API is running.",
  "storage": "Temporary/in-memory storage for deployment safety.",
  "endpoints": {
    "generate_qr": "/generate-qr",
    "decode_qr": "/decode-qr",
    "decode_qr_preprocess": "/decode-qr-preprocess",
    "decode_qr_math": "/decode-qr-math",
    "docs": "/docs"
  }
}
```

### Public API Notice

This API is publicly accessible because it is deployed online for project demonstration. Other users may be able to call the public endpoints if they know the API URL. However, they cannot modify the backend source code, deployment settings, or repository unless they have access to the owner’s GitHub or Render account.

For stronger production protection, future improvements may include:

- API key authentication
- Rate limiting
- File size restrictions
- Strict CORS configuration
- Request logging
- Abuse protection

---

## 🧠 Educational Purpose

This project is created for academic learning and practical understanding of QR code technology, digital image processing, and full-stack computer vision development.

It helps users understand:

- How QR codes store data
- How QR codes are generated
- How QR images are decoded
- How image preprocessing improves detection
- How OpenCV can be used in QR/computer vision projects
- How a FastAPI backend connects with a Next.js frontend
- How API responses are handled and displayed in a modern UI

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

This project demonstrates these ideas using Python, OpenCV, FastAPI, and a modern frontend interface.

---

## 🖼 Image Processing Concepts Used

This project may include the following digital image processing concepts:

| Concept | Purpose |
|---|---|
| Image Reading | Loads image files into memory |
| Grayscale Conversion | Simplifies image data for processing |
| Thresholding | Separates dark and light regions |
| Noise Reduction | Improves detection accuracy |
| Edge Detection | Finds strong intensity boundaries |
| Contour Detection | Locates possible QR regions |
| Perspective Transform | Corrects tilted QR images |
| Morphological Operations | Improves binary image structure |
| QR Decoding | Extracts readable data from QR images |

---

## 🧪 Notebook Experiments

The project includes Jupyter Notebook experiments for testing backend and image processing logic step by step.

Example notebook:

```text
AllExpInOne.ipynb
```

The notebook is useful for:

- Testing QR code generation
- Testing QR code detection
- Testing QR code decoding
- Testing OpenCV preprocessing
- Visualizing intermediate image outputs
- Debugging image processing logic
- Testing experiments before adding them to API endpoints

---

## 🏗 Project Structure

```text
QR-Vision-Project/
|
├── backend/
|   ├── app/
|   |   ├── main.py
|   |   ├── services/
|   |   |   ├── qr_decoder_library.py
|   |   |   ├── qr_decoder_preprocess.py
|   |   |   ├── qr_detector_math.py
|   |   |   └── qr_generator.py
|   |   └── utils/
|   |
|   ├── experiments/
|   ├── notebooks/
|   |   └── AllExpInOne.ipynb
|   |
|   ├── requirements.txt
|   └── README.md
|
├── frontend/
|   ├── src/
|   |   ├── app/
|   |   |   ├── layout.tsx
|   |   |   ├── page.tsx
|   |   |   └── globals.css
|   |   |
|   |   ├── components/
|   |   |   ├── layout/
|   |   |   |   ├── Navbar.tsx
|   |   |   |   ├── HeroSection.tsx
|   |   |   |   └── Footer.tsx
|   |   |   |
|   |   |   ├── qr/
|   |   |   |   ├── QRGeneratorForm.tsx
|   |   |   |   ├── QRDecodeUploader.tsx
|   |   |   |   ├── ResultCard.tsx
|   |   |   |   └── WebcamScanner.tsx
|   |   |   |
|   |   |   └── theme/
|   |   |       └── ThemeToggle.tsx
|   |   |
|   |   ├── lib/
|   |   |   └── api.ts
|   |   |
|   |   └── types/
|   |
|   ├── public/
|   ├── package.json
|   ├── next.config.ts
|   └── README.md
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
uvicorn app.main:app --reload
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

If your `main.py` is directly inside the `backend/` folder instead of `backend/app/`, run:

```bash
uvicorn main:app --reload
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

Create a local environment file:

```bash
touch .env.local
```

Add the local backend API URL:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
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
- CSS Variables
- Lucide React
- React Icons

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
- Render
- Vercel

---

## 🔗 API Integration

The frontend communicates with the backend using REST API requests.

Local backend base URL:

```text
http://127.0.0.1:8000
```

Live backend base URL:

```text
https://qr-vision-ss-api.onrender.com
```

Frontend local environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

Frontend production environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=https://qr-vision-ss-api.onrender.com
```

---

## 📡 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check API running status |
| POST | `/generate-qr` | Generate QR code from text or URL |
| POST | `/decode-qr` | Decode uploaded QR image using basic library method |
| POST | `/decode-qr-preprocess` | Decode uploaded QR image after preprocessing |
| POST | `/decode-qr-math` | Decode uploaded QR image using mathematical/computer vision detection |
| GET | `/docs` | Swagger API documentation |

---

## 📡 Example QR Generation Request

Frontend sends data as `FormData`:

```ts
const formData = new FormData();
formData.append("data", text);

const response = await fetch(`${API_BASE_URL}/generate-qr`, {
  method: "POST",
  body: formData,
});
```

The backend returns a QR image blob, which the frontend displays as a preview and allows users to download.

---

## 📡 Example QR Decode Request

```ts
const formData = new FormData();
formData.append("file", selectedImage);

const response = await fetch(`${API_BASE_URL}/decode-qr`, {
  method: "POST",
  body: formData,
});

const data = await response.json();
```

---

## 📡 Example QR Decode Response

Successful response:

```json
{
  "success": true,
  "data": "Sajjad Hossain Soykot",
  "bbox": [
    [
      [40, 40],
      [329, 40],
      [329, 329],
      [40, 329]
    ]
  ],
  "method": "library",
  "message": "QR code decoded successfully"
}
```

No QR data found response:

```json
{
  "success": false,
  "data": null,
  "method": "library",
  "message": "No QR code detected"
}
```

---

## 🎨 Frontend UI Layout

The current frontend layout is:

```text
Navbar
Hero Section
QR Generator Section
Decode QR Section
├── Upload / Drag-and-Drop Box
├── Decode Method Buttons
└── Uploaded QR Preview

Decoded Answer Section
API Response Preview Section
Webcam Scanner Placeholder
Footer
```

### UI Features

- Sticky navbar
- QR Vision branding
- Developer profile footer
- Dark/light theme toggle
- Full-width QR generator section
- Generated QR preview
- Download generated QR button
- Drag-and-drop QR upload
- Uploaded QR preview
- Decode method buttons
- Clean decoded answer card
- API response preview
- Warning state when no QR data is found
- Error state when backend/API fails
- Mobile responsive design

---

## 🌓 Theme System

The frontend uses CSS variables for theme switching.

Main theme variables include:

```css
:root {
  --background: #f8fafc;
  --foreground: #0f172a;
  --card: #ffffff;
  --muted: #f1f5f9;
  --border: #e2e8f0;
  --primary: #0f172a;
}

.dark {
  --background: #020617;
  --foreground: #f8fafc;
  --card: #0f172a;
  --muted: #1e293b;
  --border: #334155;
  --primary: #f8fafc;
}
```

The theme toggle stores user preference in local storage.

---

## 🧩 Main Frontend Components

| Component | Purpose |
|---|---|
| `Navbar.tsx` | Sticky top navbar with project logo and theme toggle |
| `HeroSection.tsx` | Project title and feature badges |
| `Footer.tsx` | Developer attribution and GitHub profile link |
| `QRGeneratorForm.tsx` | Generates QR codes from user input |
| `QRDecodeUploader.tsx` | Handles QR upload, drag/drop, preview, and decode buttons |
| `ResultCard.tsx` | Displays decoded answer, warning state, error state, and API preview |
| `WebcamScanner.tsx` | Placeholder for future live webcam scanning |
| `ThemeToggle.tsx` | Dark/light theme toggle button |

---

## 🧪 Backend Feature Plan

The backend supports:

- QR code generation
- QR image upload
- QR code decoding
- Image preprocessing based decoding
- Mathematical/computer vision based QR detection
- Error handling
- Image format validation
- API response formatting
- Swagger UI documentation
- CORS support for frontend connection
- Temporary/in-memory storage for deployment safety

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

## ⚠️ Backend Connection Handling

If the backend server is not running or the deployed API is sleeping, the frontend should show a proper error message instead of failing silently.

Example message:

```text
QR decoding failed. Try another image or check backend.
```

Render free-tier services may sleep after inactivity. If the API is slow on the first request, wait a few seconds and try again.

To run the backend locally:

```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload
```

---

## 🛠 Troubleshooting

### Problem: `Could not import module "main"`

Cause:

The terminal is not inside the correct backend directory or the wrong Uvicorn path is being used.

Solution:

If `main.py` is inside `backend/app/`, run:

```bash
cd backend
uvicorn app.main:app --reload
```

If `main.py` is directly inside `backend/`, run:

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
- Render backend is sleeping

Solution:

Create or update frontend `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

For production:

```env
NEXT_PUBLIC_API_BASE_URL=https://qr-vision-ss-api.onrender.com
```

Then restart the frontend server:

```bash
npm run dev
```

---

### Problem: Port already in use

If port `8000` is already being used, run the backend on another port:

```bash
uvicorn app.main:app --reload --port 8001
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
- Make sure the full QR code is visible
- Keep enough white margin around the QR code
- Try the preprocessing decode method
- Try the mathematical detection method

---

### Problem: Theme toggle does not change colors

Possible causes:

- CSS variables are not applied
- `.dark` class is not added to `<html>`
- Browser cache issue
- Development server needs restart

Solution:

Open browser dev tools and check:

```html
<html class="dark">
```

If the class appears, CSS variables should update. Restart the frontend server if needed:

```bash
npm run dev
```

---

## 🚀 Deployment

### Frontend Deployment

Recommended platform:

```text
Vercel
```

Production frontend URL:

```text
https://qr-vision-ss.vercel.app
```

### Backend Deployment

Backend platform:

```text
Render
```

Production backend API URL:

```text
https://qr-vision-ss-api.onrender.com
```

Production frontend environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=https://qr-vision-ss-api.onrender.com
```

---

## 🔐 Public API Access Note

The backend API is publicly hosted for demonstration and portfolio showcasing. Anyone with the API URL may be able to send requests to the public endpoints.

However:

- They cannot access the backend source code unless it is public on GitHub.
- They cannot change the deployment.
- They cannot modify the Render service.
- They cannot access private environment settings.
- They can only call the public API routes.

For production-level security, add:

- API authentication
- Request rate limiting
- Stricter CORS origins
- File upload size limits
- Request validation
- Server logging and monitoring

---

## ✅ Current Project Status

| Module | Status |
|---|---|
| Repository Setup | Completed |
| Backend Folder | Completed |
| Frontend Folder | Completed |
| Docs Folder | Completed |
| Jupyter Notebook Experiments | Completed |
| QR Code Generation Backend | Completed |
| QR Code Decoding Backend | Completed |
| Preprocessing Decode Backend | Completed |
| Math Detection Decode Backend | Completed |
| Backend API Deployment | Completed |
| Frontend UI | Completed |
| API Integration | Completed |
| Theme Toggle | Completed |
| Drag-and-Drop Upload | Completed |
| Decoded Answer UI | Completed |
| API Response Preview UI | Completed |
| Responsive Mobile Layout | Completed |
| Webcam Scanner | Planned / Placeholder |
| Frontend Deployment | Planned / In Progress |

---

## 🌱 Future Improvements

Possible future improvements:

- Add camera-based QR scanner
- Add live webcam QR scanning
- Add QR code customization
- Add QR foreground/background color options
- Add logo inside generated QR
- Add batch QR decoding
- Add processed image preview
- Add detection bounding box overlay
- Add image preprocessing controls
- Add `/health` backend endpoint
- Add frontend documentation pages
- Add Docker support
- Add unit tests
- Add deployment documentation
- Add better production error logging
- Add API key protection
- Add rate limiting
- Add stricter CORS for production
- Add mobile camera scanner support

---

## 🧪 Recommended Unit Test Structure

```text
tests/
├── test_generate_qr.py
├── test_decode_qr.py
├── test_decode_qr_preprocess.py
├── test_decode_qr_math.py
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
- Deployment notes

---

## ⚠️ Disclaimer

This project is created for:

- Academic Learning
- Digital Image Processing Practice
- QR Code Technology Demonstration
- Computer Vision Experimentation
- Full-Stack Project Development Practice

This project is not intended for high-security QR verification, payment validation, banking authentication, banking login verification, or production-level identity verification systems.

The QR code detection and decoding logic is developed for educational and experimental purposes.

---

## ⚖️ License

This project is licensed under the **AGPL-3.0 license**.

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
- Render
- Vercel
- Open-Source Tools and Libraries
- AI Tools such as ChatGPT and GitHub Copilot for development assistance

---

## 📌 Author

**Sajjad Hossain Soykot**

GitHub:  
https://github.com/SajjadHossainSoykot

Repository:  
https://github.com/SajjadHossainSoykot/QR-Vision-Project

Live Frontend:  
https://qr-vision-ss.vercel.app

Live Backend API:  
https://qr-vision-ss-api.onrender.com/

API Documentation:  
https://qr-vision-ss-api.onrender.com/docs

---

## ⭐ Final Note

The **QR Vision Project** is an educational full-stack computer vision project that combines QR code theory, Python image processing, OpenCV experiments, Jupyter Notebook testing, FastAPI backend development, and a modern Next.js frontend.

It is designed as a learning platform where users can understand, generate, detect, and decode QR codes interactively.