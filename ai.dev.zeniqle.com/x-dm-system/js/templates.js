// Templates Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.template-card');

    // Filter tabs functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Template action buttons
    const useButtons = document.querySelectorAll('.template-actions .btn-primary');
    const previewButtons = document.querySelectorAll('.template-actions .btn-secondary');

    useButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.template-card');
            const templateName = card.querySelector('h3').textContent;
            alert(`Template "${templateName}" selected! Redirecting to campaign setup...`);
        });
    });

    previewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.template-card');
            const preview = card.querySelector('.template-preview').textContent;
            
            // Show modal with personalized preview
            showPreviewModal(preview);
        });
    });

    function showPreviewModal(template) {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'preview-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <h3>Template Preview</h3>
                <div class="modal-preview">${template}</div>
                <div class="modal-input-group">
                    <label>Try personalization (enter your @username):</label>
                    <input type="text" placeholder="@elonmusk" class="preview-input">
                    <button class="btn btn-primary btn-generate">Generate Preview</button>
                </div>
                <div class="personalized-output"></div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .preview-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
            }
            .modal-content {
                position: relative;
                background: var(--surface);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 32px;
                max-width: 500px;
                width: 90%;
                z-index: 1;
            }
            .modal-close {
                position: absolute;
                top: 16px;
                right: 16px;
                background: none;
                border: none;
                color: var(--text-secondary);
                font-size: 24px;
                cursor: pointer;
            }
            .modal-content h3 {
                margin-bottom: 16px;
            }
            .modal-preview {
                background: var(--bg);
                border: 1px solid var(--border);
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 20px;
                font-style: italic;
            }
            .modal-input-group {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            .modal-input-group label {
                font-size: 14px;
                color: var(--text-secondary);
            }
            .modal-input-group input {
                padding: 12px;
                background: var(--bg);
                border: 1px solid var(--border);
                border-radius: 8px;
                color: var(--text);
            }
            .personalized-output {
                margin-top: 20px;
                padding: 16px;
                background: rgba(29, 155, 240, 0.1);
                border: 1px solid var(--primary);
                border-radius: 8px;
                display: none;
            }
            .personalized-output.show {
                display: block;
            }
        `;
        document.head.appendChild(style);

        // Close modal
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('.modal-overlay').addEventListener('click', () => {
            modal.remove();
        });

        // Generate preview
        modal.querySelector('.btn-generate').addEventListener('click', function() {
            const username = modal.querySelector('.preview-input').value.trim();
            if (username) {
                const output = modal.querySelector('.personalized-output');
                
                // Simulate AI personalization
                const personalizations = [
                    `Hi ${username}, I noticed your tweet about AI development. I built something that helps automate content generation - figured it might help with scaling your workflow. Happy to share if you're interested!`,
                    `Hey ${username}, quick question: are you currently exploring marketing automation? We've been working on a tool that increases response rates by 23% and I'd love your take on whether it'd be useful for your team.`,
                    `${username}, your thread on machine learning was incredibly insightful. The point about data preprocessing was something I hadn't considered. Would love to connect and hear more of your thoughts on automation.`
                ];
                
                output.innerHTML = `
                    <strong>AI-Personalized Message:</strong><br><br>
                    ${personalizations[Math.floor(Math.random() * personalizations.length)]}
                `;
                output.classList.add('show');
            }
        });
    }
});
