document.addEventListener('DOMContentLoaded', function () {
    // Elements to animate
    const body = document.body;
    const header = document.querySelector('header');
    const location = document.querySelector('.location');
    const textContent = document.querySelector('.text-content');
    const profileImage = document.querySelector('.profile-image');
    const gradientCircle = document.querySelector('.gradient-circle');
    const bottomLinkedin = document.querySelector('.bottom-linkedin');
    
    // About section elements
    const aboutSection = document.querySelector('.container-about-section');
    const aboutTitle = document.querySelector('.content h1');
    const aboutInfo = document.querySelector('.content .info');
    const signature = document.querySelector('.signature');
    
    // Skills and Projects section elements
    const skillsProjectsWrapper = document.querySelector('.skills-projects-wrapper');
    const sectionHeading = document.querySelector('.section-heading');
    const skillsSection = document.querySelector('.skills-section');
    const projectsSection = document.querySelector('.projects-section');
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    const skillProgress = document.querySelectorAll('.skill-progress');
    const footer = document.querySelector('.footer');

    // Initial body fade in - faster
    setTimeout(function () {
        body.style.opacity = 1;
    }, 100);

    // Force immediate visibility for main content elements
    if (location) {
        location.style.opacity = 1;
        location.style.transform = 'translateX(0)';
    }
    
    if (textContent) {
        textContent.style.opacity = 1;
        textContent.style.transform = 'translateX(0)';
    }
    
    if (profileImage) {
        profileImage.style.opacity = 1;
        profileImage.style.transform = 'scale(1)';
    }
    
    // Force header visibility
    if (header) {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }
    
    // Sequenced animations with shorter delays
    setTimeout(() => header && header.classList.add('animate-in'), 200);
    setTimeout(() => location && location.classList.add('animate-in'), 300);
    setTimeout(() => textContent && textContent.classList.add('animate-in'), 400);
    
    setTimeout(() => {
        if (profileImage) {
            profileImage.classList.add('animate-in');
            initFloatingAnimation();
        }
    }, 500);

    setTimeout(() => {
        if (gradientCircle) {
            gradientCircle.style.opacity = 1;
            initPulseAnimation();
        }
    }, 600);

    setTimeout(() => bottomLinkedin && bottomLinkedin.classList.add('animate-in'), 700);
    
    // About section sequential animations
    setTimeout(() => {
        if (aboutSection) {
            aboutSection.classList.add('animate-in');
            aboutSection.style.opacity = '1';
            aboutSection.style.transform = 'translateY(0)';
        }
    }, 800);
    
    setTimeout(() => {
        if (aboutTitle) {
            aboutTitle.classList.add('animate-in');
            aboutTitle.style.opacity = '1';
            aboutTitle.style.transform = 'translateY(0)';
        }
    }, 900);
    
    setTimeout(() => {
        if (aboutInfo) {
            aboutInfo.classList.add('animate-in');
            aboutInfo.style.opacity = '1';
            aboutInfo.style.transform = 'translateY(0)';
        } else {
            const infoElement = document.querySelector('.content p.info');
            if (infoElement) {
                infoElement.classList.add('animate-in');
                infoElement.style.opacity = '1';
                infoElement.style.transform = 'translateY(0)';
            }
        }
    }, 1000);
    
    setTimeout(() => {
        if (signature) {
            signature.classList.add('animate-in');
            signature.style.opacity = '1';
            signature.style.transform = 'translateY(0)';
        }
    }, 1100);
    
    // Force visibility for About Me section
    setTimeout(() => {
        if (aboutSection) {
            aboutSection.style.opacity = '1';
            aboutSection.style.visibility = 'visible';
            aboutSection.style.transform = 'translateY(0)';
        }
        
        const contentSection = document.querySelector('.content');
        if (contentSection) {
            contentSection.style.visibility = 'visible';
        }
        
        const paragraphs = document.querySelectorAll('.content p');
        paragraphs.forEach(p => {
            p.style.opacity = '1';
            p.style.visibility = 'visible';
            p.style.transform = 'translateY(0)';
        });
        
        if (aboutTitle) {
            aboutTitle.style.opacity = '1';
            aboutTitle.style.visibility = 'visible';
            aboutTitle.style.transform = 'translateY(0)';
        }
        
        if (signature) {
            signature.style.opacity = '1';
            signature.style.visibility = 'visible';
            signature.style.transform = 'translateY(0)';
        }
    }, 1200);
    
    // Skills and Projects section animations
    setTimeout(() => skillsProjectsWrapper && skillsProjectsWrapper.classList.add('animate-in'), 1300);
    setTimeout(() => sectionHeading && sectionHeading.classList.add('animate-in'), 1400);
    setTimeout(() => skillsSection && skillsSection.classList.add('animate-in'), 1500);
    setTimeout(() => projectsSection && projectsSection.classList.add('animate-in'), 1600);
    
    // Staggered animations for skill cards
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-in');
            card.style.opacity = 1;
        }, 1700 + (index * 100));
    });
    
    // Animate skill progress bars with their data-level attribute
    setTimeout(() => {
        skillProgress.forEach(progress => {
            progress.style.width = progress.getAttribute('data-level');
        });
    }, 2000);
    
    // Staggered animations for project cards
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-in');
            card.style.opacity = 1;
        }, 1700 + (index * 200));
    });

    // LinkedIn button functionality
    const linkedinButtons = document.querySelectorAll('.linkedin-btn');
    linkedinButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://www.linkedin.com/in/viral-shah-80388228b/', '_blank');
        });
    });

    // Social media links in footer
    const socialIcons = document.querySelectorAll('.social-icon');
    const socialLinks = {
        'fa-linkedin': 'https://www.linkedin.com/in/viral-shah-80388228b/',
        'fa-github': 'https://github.com/viralshah',
        'fa-twitter': 'https://twitter.com/viralshah',
        'fa-envelope': 'mailto:viral.shah@example.com'
    };

    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const iconClass = Array.from(icon.querySelector('i').classList)
                .find(cls => cls.startsWith('fa-'));
            
            if (iconClass && socialLinks[iconClass]) {
                window.open(socialLinks[iconClass], '_blank');
            }
        });
    });

    // Floating animation for profile image
    function initFloatingAnimation() {
        if (!profileImage) return;
        
        let floatDegree = 0;
        setInterval(function () {
            floatDegree += 0.5;
            const translateY = Math.sin(floatDegree * Math.PI / 180) * 5;
            profileImage.style.transform = `translateY(${translateY}px) scale(1)`;
        }, 50);
    }

    // Pulse animation for gradient circle
    function initPulseAnimation() {
        if (!gradientCircle) return;
        
        let pulseSize = 1;
        let growing = true;
        setInterval(function () {
            if (growing) {
                pulseSize += 0.005;
                if (pulseSize >= 1.1) growing = false;
            } else {
                pulseSize -= 0.005;
                if (pulseSize <= 0.9) growing = true;
            }
            gradientCircle.style.transform = `scale(${pulseSize})`;
        }, 50);
    }
    
    // Enhanced scroll animations for elements
    window.addEventListener('scroll', function() {
        // Force About section to be visible on scroll
        if (aboutSection && !aboutSection.classList.contains('fully-animated')) {
            const aboutPosition = aboutSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (aboutPosition < windowHeight * 0.8) {
                aboutSection.classList.add('fully-animated');
                aboutSection.style.opacity = '1';
                aboutSection.style.transform = 'translateY(0)';
                
                const paragraphs = document.querySelectorAll('.content p');
                paragraphs.forEach(p => {
                    p.style.opacity = '1';
                    p.style.transform = 'translateY(0)';
                });
                
                if (aboutTitle) {
                    aboutTitle.style.opacity = '1';
                    aboutTitle.style.transform = 'translateY(0)';
                }
                
                if (signature) {
                    signature.style.opacity = '1';
                    signature.style.transform = 'translateY(0)';
                }
            }
        }
        
        // Trigger animations for skills and projects when scrolling into view
        if (skillsProjectsWrapper && !skillsProjectsWrapper.classList.contains('fully-animated')) {
            const skillsProjectsPosition = skillsProjectsWrapper.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (skillsProjectsPosition < windowHeight * 0.8) {
                skillsProjectsWrapper.classList.add('fully-animated');
                
                // Sequenced animations on scroll
                setTimeout(() => sectionHeading && sectionHeading.classList.add('animate-in'), 100);
                setTimeout(() => skillsSection && skillsSection.classList.add('animate-in'), 200);
                setTimeout(() => projectsSection && projectsSection.classList.add('animate-in'), 300);
                
                // Animate skill cards with staggered delay
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                        card.style.opacity = 1;
                    }, 400 + (index * 100));
                });
                
                // Animate skill progress bars on scroll
                setTimeout(() => {
                    skillProgress.forEach(progress => {
                        progress.style.width = progress.getAttribute('data-level');
                    });
                }, 800);
                
                // Animate project cards with staggered delay
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                        card.style.opacity = 1;
                    }, 400 + (index * 200));
                });
            }
        }
        
        // Scroll reveal for footer
        if (footer) {
            const footerPosition = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (footerPosition < windowHeight * 0.9) {
                footer.style.opacity = 1;
                footer.style.transform = 'translateY(0)';
            }
        }
    });
    
    // Enhanced interactive effects for project cards
    projectCards.forEach(card => {
        const projectImage = card.querySelector('.project-image img');
        const projectOverlay = card.querySelector('.project-overlay');
        
        card.addEventListener('mouseenter', () => {
            if (projectOverlay) projectOverlay.style.opacity = 1;
            if (projectImage) projectImage.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            if (projectOverlay) projectOverlay.style.opacity = 0;
            if (projectImage) projectImage.style.transform = 'scale(1)';
        });
    });
    
    // Preload images for smoother visual experience
    const imagesToPreload = ['viral1.jpg', 'viral2.jpg', 'signature.png', 'sparkle.png'];
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});