# 🏠 Dynasty 8 Real Estate Lead Management

A simple yet effective real estate lead submission platform built with **Next.js**, integrated with **Google Sheets** and **Discord** via **n8n** automation. This project helps agents collect lead information efficiently and stay notified about upcoming appointments.

---

## 🚀 Features

- 🌐 User-friendly lead submission website
- 📋 Collects data: name, phone number, email, budget, location, and appointment date
- 📄 Automatically stores lead data in Google Sheets
- 🔔 Sends instant notifications to Discord when a new lead submits
- ⏰ Sends reminders to agents 1 hour before the scheduled appointment
- 🗺️ Includes Google Maps link of the lead's interested location in Discord reminders

---

## 📂 Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS
- **Automation:** n8n (Webhook + Discord + Google Sheets integration)
- **Database:** Google Sheets (for lead collection)

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/AstroDOG3/Brainiacs.git
cd Brainiacs
```

Install dependencies
```bash
npm install
```

Run the development server
```bash
npm run dev
```

🛠️ Setup Instructions
Ensure your Google Sheets and Discord webhook setup is complete in n8n

Your route.ts inside /app/api/submit/ sends POST data to n8n webhook

n8n handles:

Adding the lead to Google Sheets

Sending Discord notification instantly

Scheduling a follow-up reminder 1 hour before the appointment

<div align="center">
  <strong>Made with 1% logic, 99% panic. by <a href="https://github.com/AstroDOG3">AstroDOG3</a></strong>
</div>