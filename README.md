# Contact Me Form

This is a simple contact form that allows users to send messages directly from a website. It utilizes **EmailJS** to handle email delivery and **SweetAlert** for user-friendly success and error notifications.

## Features

- Sends contact form submissions directly to an email using EmailJS.
- Displays success and error messages with SweetAlert popups.
- Validates user input to ensure all required fields are filled out.

## Installation

### Prerequisites
1. **EmailJS Account**: You need an EmailJS account with a service ID, template ID, and a public key.
2. **SweetAlert Library**: Ensure you have SweetAlert available in your project to display notifications.

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/contact-me-form.git
   cd contact-me-form
   ```

2. Open `index.html` and ensure the SweetAlert CDN is included. Add this in the `<head>` section:
   ```html
   <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
   ```

3. Update `script.js`:
    - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key.
    - Replace `SERVICE_ID` and `TEMPLATE_ID` with your actual EmailJS service ID and template ID.

   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
       first_name: firstName,
       last_name: lastName,
       email: emailAddress,
       message: message,
   });
   ```

## Usage

1. Fill out the form fields for **First Name**, **Last Name**, **Email Address**, and **Message**.
2. Click **Send**. If the submission is successful, you will see a success message; otherwise, an error message will display.

### Form Structure

The contact form consists of the following fields:
- **First Name** (required)
- **Last Name** (required)
- **Email Address** (required)
- **Message** (required)

### Example Code

Here’s the basic structure of the contact form:

```html
<form id="contactForm">
    <input type="text" name="first_name" required>
    <input type="text" name="last_name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

## Error Handling

If there’s an issue with sending the message (such as missing information or an EmailJS configuration error), an error notification will display with a prompt to try again.