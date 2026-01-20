from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

from fastapi.middleware.cors import CORSMiddleware


load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","https://mangobrains.com","https://www.mangobrains.com"],  # Vite dev URL
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"],
)
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    company: str | None = None
    message: str

@app.post("/contact")
def send_contact_email(data: ContactForm):
    try:
        msg = EmailMessage()
        msg["Subject"] = "New Contact Form Submission"
        msg["From"] = os.getenv("SMTP_USER")
        msg["To"] = os.getenv("SMTP_USER")
        msg["Reply-To"] = data.email

        body = f"""
Name: {data.name}
Email: {data.email}
Company: {data.company or 'N/A'}

Message:
{data.message}
        """
        msg.set_content(body)

        with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
            server.starttls()
            server.login(
                os.getenv("SMTP_USER"),
                os.getenv("SMTP_PASS")
            )
            server.send_message(msg)

        return {"status": "success"}

    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to send email")
