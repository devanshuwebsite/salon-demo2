document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Nav Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    // 4. Auto Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;

    if (testimonials.length > 0) {
        setInterval(() => {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }, 4000);
    }

    // 5. Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const triggers = document.querySelectorAll('.lightbox-trigger');
    const closeBtn = document.querySelector('.lightbox-close');

    if (lightbox) {
        triggers.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });

        const closeLightbox = () => {
            lightbox.style.display = 'none';
        };

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});

// WhatsApp Form Submission Handler
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // User Inputs fetch karna
        const name = document.getElementById('custName').value.trim();
        const email = document.getElementById('custEmail').value.trim();
        const message = document.getElementById('custMsg').value.trim();

        // Phone number
        const phoneNumber = "919610025124";

        // Formatted WhatsApp Message
        const textMessage = `*New Contact Form Inquiry*%0A%0A` +
                            `*Name:* ${encodeURIComponent(name)}%0A` +
                            `*Email:* ${encodeURIComponent(email)}%0A` +
                            `*Message:* ${encodeURIComponent(message)}`;

        // WhatsApp redirect URL
        const waUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

        // WhatsApp App/Web opening in new tab
        window.open(waUrl, '_blank');
        
        // Reset form inputs after sending
        whatsappForm.reset();
    });
}
