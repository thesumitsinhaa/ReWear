

        // Simple JavaScript for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Animation for loading section
            const loadingSection = document.querySelector('.loading-section');
            
            setTimeout(() => {
                loadingSection.innerHTML = `
                    <h2>Matches Found!</h2>
                    <p>We've found 12 perfect swaps for you in your area.</p>
                    <button class="cta-button">View Matches</button>
                `;
            }, 3000);
            
            // Smooth scroll for navigation
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // CTA button click handler
            document.querySelector('.cta-button').addEventListener('click', function() {
                alert('Welcome to ReWear! Let\'s get you started with your first swap.');
            });
        });
