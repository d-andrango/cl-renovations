# 📧 Contact Form Setup Guide

The contact form is configured to use **Web3Forms** - a free service that sends form submissions directly to your email without needing a backend server.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get your Access Key

1. Go to [web3forms.com](https://web3forms.com)
2. Click **"Get Started for Free"**
3. Enter your email address (this is where form submissions will be sent)
4. Check your email and click the verification link
5. Copy your **Access Key** from the dashboard

### Step 2: Update the Code

Open `src/features/contact/Contact.tsx` and find this line (around line 20):

```typescript
const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'
```

Replace `'YOUR_ACCESS_KEY_HERE'` with your actual access key:

```typescript
const ACCESS_KEY = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
```

### Step 3: Test It!

1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox - you should receive the form submission!

## ✨ Features

### What's Already Working:

- ✅ **Real email delivery** - No backend needed
- ✅ **Auto-responder** - Users get instant confirmation email
- ✅ **Form validation** - Client-side validation for required fields
- ✅ **Loading states** - Spinner during submission
- ✅ **Success message** - Confirmation after sending
- ✅ **Error handling** - Shows errors if something fails
- ✅ **Spam protection** - Built into Web3Forms
- ✅ **Mobile responsive** - Works perfectly on all devices

### Email Details:

**You receive:**
- Contact name
- Email address
- Phone number (if provided)
- Message content
- Timestamp
- Subject: "New Contact from CL Renovations - [Name]"

**User receives (after you enable autoresponder):**
- Instant confirmation email
- Personalized with their name
- Custom message you configure
- Professional looking email

> **Note:** To enable auto-responder emails to users, see [AUTORESPONDER_SETUP.md](./AUTORESPONDER_SETUP.md)

## 🎨 Customization Options

### Change the "From Name"
In `Contact.tsx`, line ~43:
```typescript
from_name: 'CL Renovations Website',
```

### Change the Email Subject
In `Contact.tsx`, line ~42:
```typescript
subject: `New Contact from CL Renovations - ${form.name}`,
```

### Add Custom Fields
You can add more fields to the form. Web3Forms accepts any custom fields you send.

Example - Add a service type selector:
```typescript
body: JSON.stringify({
  access_key: ACCESS_KEY,
  name: form.name,
  email: form.email,
  phone: form.phone,
  message: form.message,
  service_type: form.serviceType, // Your new field
  subject: `New Contact from CL Renovations - ${form.name}`,
})
```

## 🔧 Advanced Configuration

### Enable CAPTCHA (Optional)
If you're getting spam, enable reCAPTCHA in your Web3Forms dashboard:
1. Go to your Web3Forms dashboard
2. Enable Google reCAPTCHA
3. Add the reCAPTCHA component to the form

### Custom Redirect After Success
Instead of showing a success message, redirect to a thank you page:
```typescript
if (result.success) {
  window.location.href = '/thank-you'
}
```

### Email Notifications to Multiple People
In your Web3Forms dashboard, you can add multiple email addresses to receive notifications.

## 📊 Usage Limits (Free Plan)

- ✅ **250 submissions/month** for free
- ✅ Unlimited forms
- ✅ No credit card required
- ✅ Email notifications
- ✅ Spam filtering

Need more? Upgrade plans start at $5/month for 1,000 submissions.

## 🐛 Troubleshooting

### Forms not sending?
1. Check your Access Key is correct
2. Verify your email is confirmed in Web3Forms
3. Check browser console for errors
4. Test with a simple message first

### Not receiving emails?
1. Check your spam folder
2. Verify your email in Web3Forms dashboard
3. Make sure email is confirmed
4. Try a different email address

### CORS errors?
Web3Forms API supports CORS by default. If you see CORS errors, check:
- You're using `https://api.web3forms.com/submit`
- Headers are set correctly
- Access key is valid

## 🆘 Support

- **Web3Forms Docs**: [web3forms.com/docs](https://web3forms.com/docs)
- **Email Support**: support@web3forms.com
- **Status Page**: [status.web3forms.com](https://status.web3forms.com)

## 🎉 You're All Set!

Once you've added your access key, your contact form is fully functional and will send emails directly to your inbox. No backend, no servers, no hassle!
