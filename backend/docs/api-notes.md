## 🌐 Live Deployment

The QR Vision Project backend API has been successfully deployed on Render.

**Live API Base URL:**  
https://qr-vision-ss-api.onrender.com/

**Swagger API Documentation:**  
https://qr-vision-ss-api.onrender.com/docs

**Available API Endpoints:**

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check API running status |
| POST | `/generate-qr` | Generate QR code from text or URL |
| POST | `/decode-qr` | Decode uploaded QR image using basic library method |
| POST | `/decode-qr-preprocess` | Decode uploaded QR image after preprocessing |
| POST | `/decode-qr-math` | Decode uploaded QR image using mathematical/computer vision detection |
| GET | `/docs` | Swagger API documentation |

The backend uses temporary/in-memory storage for deployment safety.