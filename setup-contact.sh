#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║${NC}          ${GREEN}CL Renovations${NC} - Contact Form Setup              ${BLUE}║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}📧 Your contact form needs a Web3Forms access key to work!${NC}"
echo ""
echo "Follow these simple steps:"
echo ""
echo -e "${GREEN}1.${NC} Get your FREE access key:"
echo "   → Go to: https://web3forms.com"
echo "   → Click 'Get Started for Free'"
echo "   → Enter your email (where you'll receive form submissions)"
echo "   → Verify your email"
echo "   → Copy your Access Key"
echo ""
echo -e "${GREEN}2.${NC} Update the code:"
echo "   → Open: src/features/contact/Contact.tsx"
echo "   → Find line ~20: const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'"
echo "   → Replace 'YOUR_ACCESS_KEY_HERE' with your actual key"
echo ""
echo -e "${GREEN}3.${NC} Test it!"
echo "   → Run: npm run dev"
echo "   → Fill out the contact form"
echo "   → Check your email!"
echo ""
echo -e "${BLUE}════════════════════════════════════════════════════════════════${NC}"
echo ""
echo "For detailed instructions, see: SETUP_CONTACT_FORM.md"
echo ""
echo -e "${YELLOW}Note:${NC} The free tier includes 250 submissions/month - perfect for most sites!"
echo ""
