const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export type DecodeEndpoint =
  | "decode-qr"
  | "decode-qr-preprocess"
  | "decode-qr-math";

export async function generateQRCode(data: string): Promise<Blob> {
  const formData = new FormData();
  formData.append("data", data);

  const response = await fetch(`${API_BASE_URL}/generate-qr`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to generate QR code");
  }

  return response.blob();
}

export async function decodeQRCode(file: File, endpoint: DecodeEndpoint) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to decode QR code");
  }

  return response.json();
}

export function getApiBaseUrl() {
  return API_BASE_URL;
}