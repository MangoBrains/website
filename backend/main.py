from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.message import EmailMessage
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://mangobrains.com",
        "https://www.mangobrains.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    company: str | None = None
    message: str


def send_email(data: ContactForm):
    msg = EmailMessage()
    msg["From"] = os.getenv("SMTP_FROM")
    msg["To"] = os.getenv("SMTP_TO")
    msg["Subject"] = "New Contact Form Submission"

    msg.set_content(
        f"""
Name: {data.name}
Email: {data.email}
Company: {data.company or "N/A"}

Message:
{data.message}
"""
    )

    # 🔑 TIMEOUT IS CRITICAL
    with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT")), timeout=10) as server:
        server.starttls()
        server.login(os.getenv("SMTP_USER"), os.getenv("SMTP_PASS"))
        server.send_message(msg)


@app.post("/contact")
def contact(data: ContactForm, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email, data)
    return {"ok": True}
