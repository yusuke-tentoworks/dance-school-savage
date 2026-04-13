document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileBtn.classList.toggle('active'); // Add active state for button animation if needed
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Scroll Header Background
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll Fade-in Animation
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-title, .about-content, .genre-grid, .price-container, .access-content, .contact-content');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Form Conditional Validation
    const ageSelect = document.getElementById('age');
    const guardianNameInput = document.getElementById('guardian_name');
    const guardianRequiredBadge = document.getElementById('guardian-required');
    const inquiryRadios = document.querySelectorAll('input[name="inquiry_type"]');
    const trialDateInput = document.getElementById('trial_date');
    const trialDateRequiredBadge = document.getElementById('trial-date-required');

    if (ageSelect && guardianNameInput) {
        const updateGuardianRequirement = () => {
            const ageValue = ageSelect.value;
            const needsGuardian = ageValue && !['18歳', '19歳', '20歳以上'].includes(ageValue);
            
            if (needsGuardian) {
                guardianNameInput.required = true;
                guardianRequiredBadge.style.display = 'inline-block';
            } else {
                guardianNameInput.required = false;
                guardianRequiredBadge.style.display = 'none';
            }
        };

        ageSelect.addEventListener('change', updateGuardianRequirement);
        updateGuardianRequirement(); // Initial check
    }

    if (inquiryRadios.length > 0 && trialDateInput) {
        const updateTrialDateRequirement = () => {
            let isTrialSelected = false;
            inquiryRadios.forEach(radio => {
                if (radio.checked && radio.value === '体験申し込み') {
                    isTrialSelected = true;
                }
            });

            if (isTrialSelected) {
                trialDateInput.required = true;
                trialDateRequiredBadge.style.display = 'inline-block';
            } else {
                trialDateInput.required = false;
                trialDateRequiredBadge.style.display = 'none';
            }
        };

        inquiryRadios.forEach(radio => {
            radio.addEventListener('change', updateTrialDateRequirement);
        });
        updateTrialDateRequirement(); // Initial check
    }
});

