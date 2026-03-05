// Personalization Demo JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const generateBtn = document.getElementById('generateBtn');
    const targetUsername = document.getElementById('targetUsername');
    const templateSelect = document.getElementById('templateSelect');
    const personalizationLevel = document.getElementById('personalizationLevel');
    const outputContainer = document.getElementById('outputContainer');
    const outputActions = document.getElementById('outputActions');
    const personalizationScore = document.getElementById('personalizationScore');

    // Sample profiles for demo
    const profiles = {
        '@sarahchen': {
            name: 'Sarah Chen',
            avatar: 'SC',
            handle: '@sarahchen',
            bio: 'VP of Growth @TechScale | Building scalable acquisition systems | AI enthusiast | Marathon runner 🏃‍♀️',
            tags: ['SaaS', 'Growth Marketing', 'AI/ML', 'Running'],
            recent: [
                '📝 Tweeted about "customer acquisition costs rising"',
                '💼 Posted job opening for "Growth Manager"',
                '🔥 Shared thread on "AI-powered personalization"'
            ]
        },
        '@elonmusk': {
            name: 'Elon Musk',
            avatar: 'EM',
            handle: '@elonmusk',
            bio: 'Technoking of Tesla, Imperator of Mars 🚀 | Dogecoin enthusiast | Building sustainable future',
            tags: ['Space', 'EVs', 'AI', 'Crypto', 'Mars'],
            recent: [
                '🚀 Announced new Starship launch timeline',
                '⚡ Shared Tesla supercharger updates',
                '🤖 Posted about AI safety concerns'
            ]
        },
        '@naval': {
            name: 'Naval',
            avatar: 'NV',
            handle: '@naval',
            bio: 'Co-founder @AngelList | Investor in 200+ companies | Building tools for startups and investors',
            tags: ['Startups', 'Investing', 'Philosophy', 'Tech'],
            recent: [
                '🧵 Tweeted about wealth creation principles',
                '💡 Shared startup advice thread',
                '📚 Recommended books on decision making'
            ]
        }
    };

    // Analyze button
    analyzeBtn.addEventListener('click', function() {
        const username = targetUsername.value.trim().toLowerCase();
        const profile = profiles[username] || profiles['@sarahchen'];
        
        // Show loading state
        analyzeBtn.textContent = 'Analyzing...';
        analyzeBtn.disabled = true;
        
        setTimeout(() => {
            updateProfileCard(profile);
            analyzeBtn.textContent = 'Profile Analyzed ✓';
            setTimeout(() => {
                analyzeBtn.textContent = 'Analyze Profile';
                analyzeBtn.disabled = false;
            }, 2000);
        }, 1000);
    });

    // Generate button
    generateBtn.addEventListener('click', function() {
        const username = targetUsername.value.trim().toLowerCase();
        const profile = profiles[username] || profiles['@sarahchen'];
        const template = templateSelect.value;
        const level = personalizationLevel.value;
        
        // Show loading
        generateBtn.textContent = 'Generating...';
        generateBtn.disabled = true;
        
        setTimeout(() => {
            const message = generateMessage(profile, template, level);
            displayMessage(message);
            generateBtn.textContent = '✨ Generate Personalized DM';
            generateBtn.disabled = false;
        }, 1500);
    });

    // Copy button
    document.getElementById('copyBtn')?.addEventListener('click', function() {
        const messageText = document.querySelector('.message-content').textContent;
        navigator.clipboard.writeText(messageText).then(() => {
            this.textContent = '✓ Copied!';
            setTimeout(() => {
                this.textContent = '📋 Copy';
            }, 2000);
        });
    });

    // Regenerate button
    document.getElementById('regenerateBtn')?.addEventListener('click', function() {
        generateBtn.click();
    });

    // Send button
    document.getElementById('sendBtn')?.addEventListener('click', function() {
        alert('Demo: In production, this would queue the DM for sending!');
    });

    function updateProfileCard(profile) {
        const card = document.getElementById('profileCard');
        card.innerHTML = `
            <div class="profile-header">
                <div class="profile-avatar">${profile.avatar}</div>
                <div class="profile-info">
                    <h4>${profile.name}</h4>
                    <span class="profile-handle">${profile.handle}</span>
                </div>
            </div>
            <div class="profile-bio">
                ${profile.bio}
            </div>
            <div class="profile-tags">
                ${profile.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="profile-recent">
                <h5>Recent Activity</h5>
                <ul>
                    ${profile.recent.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    function generateMessage(profile, template, level) {
        const messages = {
            'value_first': [
                `Hi ${profile.name.split(' ')[0]}, I noticed your recent thread on ${profile.tags[0].toLowerCase()}. We've built something that helps teams like ${profile.handle === '@sarahchen' ? 'TechScale' : 'yours'} improve ${profile.tags.includes('Growth') ? 'acquisition efficiency' : 'outreach conversion'} by 23%. Happy to share if you're interested!`,
                `Hey ${profile.name.split(' ')[0]}, your insights on ${profile.tags[0].toLowerCase()} really resonated with me. We've been working on a tool that ${profile.tags.includes('AI') ? 'uses AI to personalize outreach' : 'streamlines DM campaigns'} - figured it might align with what you're building at ${profile.tags.includes('Growth') ? 'TechScale' : 'your company'}.`,
                `${profile.name.split(' ')[0]}, given your background in ${profile.tags[0].toLowerCase()}, thought you'd find this interesting: we've developed a system that delivers personalized DMs at scale for $0.015 each. ${profile.tags.includes('Running') ? 'More budget for those marathon races! 🏃‍♀️' : 'Could be a game-changer for your outreach.'}`
            ],
            'question': [
                `Hey ${profile.name.split(' ')[0]}, quick question: are you currently looking to scale your ${profile.tags.includes('Growth') ? 'acquisition channels' : 'outreach efforts'}? We've been helping similar teams achieve ${profile.tags.includes('AI') ? 'AI-powered personalization' : '23% response rates'} and I'd love your take on whether it'd fit your workflow.`,
                `Hi ${profile.name.split(' ')[0]}, curious - what's your biggest challenge with ${profile.tags[0].toLowerCase()} right now? We're building solutions specifically for ${profile.tags.includes('SaaS') ? 'SaaS growth teams' : 'teams like yours'} and your input would be invaluable.`,
                `${profile.name.split(' ')[0]}, what would it mean for ${profile.tags.includes('Growth') ? 'TechScale' : 'your company'} if you could send 10,000 personalized DMs per day at $0.015 each? Worth a quick chat to explore?`
            ],
            'compliment': [
                `${profile.name.split(' ')[0]}, your ${profile.recent[0].includes('thread') ? 'thread' : 'post'} on ${profile.tags[0].toLowerCase()} was incredibly insightful. The point about ${profile.tags.includes('AI') ? 'AI implementation' : 'scalability'} really stuck with me. Would love to connect and hear more of your thoughts!`,
                `Hey ${profile.name.split(' ')[0]}, been following your work on ${profile.tags[0].toLowerCase()} for a while. Your ${profile.recent[0].includes('tweet') ? 'recent take' : 'insights'} about ${profile.tags.includes('Growth') ? 'acquisition costs' : 'the industry'} was spot-on. Always learning from your perspective!`,
                `${profile.name.split(' ')[0]}, you're absolutely crushing it with ${profile.tags[0].toLowerCase()}! Your approach to ${profile.recent[0].includes('shared') ? 'sharing knowledge' : 'building in public'} is inspiring. Would love to exchange ideas sometime.`
            ],
            'networking': [
                `Hey ${profile.name.split(' ')[0]}, noticed we're both interested in ${profile.tags[0].toLowerCase()} and ${profile.tags[1]?.toLowerCase() || 'technology'}. Your ${profile.recent[0]} really resonated. I'd love to connect and hear more about your perspective on the space!`,
                `Hi ${profile.name.split(' ')[0]}, seems like we share similar views on ${profile.tags[0].toLowerCase()}. I'm currently exploring ${profile.tags[1]?.toLowerCase() || 'new strategies'} and would value connecting with someone who thinks deeply about this stuff.`,
                `${profile.name.split(' ')[0]}, the ${profile.tags.includes('Running') ? 'marathon training' : 'work'} you're doing in ${profile.tags[0].toLowerCase()} is impressive. I'd love to add you to my network of sharp operators building interesting things.`
            ],
            'resource': [
                `Hey ${profile.name.split(' ')[0]}, came across this breakdown of ${profile.tags[0].toLowerCase()} strategies and immediately thought of you: [resource link]. Given your work at ${profile.tags.includes('Growth') ? 'TechScale' : 'your company'}, thought you might find it useful. No pitch - just paying it forward!`,
                `Hi ${profile.name.split(' ')[0]}, just read a fascinating piece on ${profile.tags[0].toLowerCase()} that reminded me of your ${profile.recent[0].includes('thread') ? 'recent thread' : 'work'}. Happy to share the link if you're interested!`,
                `${profile.name.split(' ')[0]}, stumbled upon a tool that's helping teams like yours with ${profile.tags[0].toLowerCase()}. Figured I'd pass it along since you're deep in this space. Let me know if you want the details!`
            ]
        };

        // Get random message from template category
        const templateMessages = messages[template] || messages['value_first'];
        return templateMessages[Math.floor(Math.random() * templateMessages.length)];
    }

    function displayMessage(message) {
        outputContainer.innerHTML = `
            <div class="generated-message">
                <div class="message-header">
                    <span>AI-Generated Personalized DM</span>
                    <span>${message.length} characters</span>
                </div>
                <div class="message-content">
                    ${message}
                </div>
            </div>
        `;
        
        outputActions.style.display = 'flex';
        personalizationScore.style.display = 'block';
        
        // Animate score bars
        setTimeout(() => {
            document.querySelectorAll('.score-bar div').forEach(bar => {
                bar.style.width = bar.style.width;
            });
        }, 100);
    }
});
