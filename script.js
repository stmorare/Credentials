/**
 * PORTFOLIOPRO - ARCHITECTURE SCRIPT
 */

'use strict';

const certificatesData = [
    {
        id: 'cert-mict-seta-2018',
        title: 'National Certificate: Information Technology: Systems Support',
        issuer: 'Department of Higher Education & MICT SETA',
        category: 'tertiary',
        date: '16 May 2018',
        credentialId: 'NLRD No. 48573 | SAQA ID 48573',
        level: 'NQF Level 5',
        thumbnail: 'dhet-logo.jfif',
        certImage: 'certificates/IT-National-Certificate.jpeg',
        isLogo: true,
        tags: ['NQF Level 5', 'Systems Support', 'MICT SETA', 'SAQA Accredited'],
        description: 'National qualification certified under section 9 (1)(f) of ETQA Regulations. Demonstrates core competencies in IT systems architecture, field operations, and technical support.'
    },
    {
        id: 'cert-ctu-transcript-2018',
        title: 'Academic Transcript - IT System Support MCSA',
        issuer: 'CTU Training Solutions (Auckland Park)',
        category: 'tertiary',
        date: '05 March 2018',
        credentialId: 'CTU-AP-2018-87',
        level: 'Student Average: 87.00%',
        thumbnail: 'ctu-logo.png',
        certImage: 'certificates/Academic-Transcript.jpg',
        isLogo: true,
        tags: ['Academic Transcript', 'MCSA Track', 'Server Systems', 'Windows 10'],
        description: 'Comprehensive academic transcript covering Server Network Operating Systems (96%), Windows 10 (91%), Computer Architecture (90%), and Network Architecture (88%).'
    },
    {
        id: 'cert-md102-udemy-2025',
        title: 'MD-102 Endpoint Administrator Associate Course with SIMS',
        issuer: 'Microsoft Certified Instructor / Udemy',
        category: 'microsoft',
        date: '05 October 2025',
        credentialId: 'UC-f121cfeb-df67-43c7-9bb3-ef0f07fd6b3e',
        level: '11.5 Total Hours',
        thumbnail: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop',
        certImage: 'certificates/MD-102-Endpoint-Administrator-Associate.jpg',
        tags: ['MD-102', 'Endpoint Admin', 'Intune', 'Autopilot', 'Microsoft 365'],
        description: 'Mastery of Microsoft Intune, modern endpoint deployment, Azure AD joining, compliance policies, and endpoint security configuration.'
    },
    {
        id: 'cert-aws-cloud-practitioner',
        title: 'AWS Certified Cloud Practitioner Track',
        issuer: 'Amazon Web Services',
        category: 'aws',
        date: '2024',
        credentialId: 'AWS-CCP-89012',
        level: 'Cloud Fundamentals',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
        certImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
        tags: ['AWS', 'Cloud Architecture', 'S3', 'EC2', 'IAM'],
        description: 'Comprehensive knowledge of AWS core services, security management, pricing models, and cloud architectural best practices.'
    },
    {
        id: 'cert-python-automation',
        title: 'Python for IT Administration & System Automation',
        issuer: 'Python Institute / Professional Track',
        category: 'python',
        date: '2024',
        credentialId: 'PY-AUTO-3412',
        level: 'Intermediate Scripting',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
        certImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
        tags: ['Python 3', 'Automation', 'Scripting', 'OS Module', 'REST APIs'],
        description: 'Development of operational scripts for system diagnostics, file system manipulation, automated backups, and log parsing.'
    },
    {
        id: 'cert-network-sysadmin-udemy',
        title: 'Network and Systems Administrator Technical Training',
        issuer: 'Jobskillshare Community / Udemy',
        category: 'udemy',
        date: '23 September 2025',
        credentialId: 'UC-2713f347-b8c2-41ed-8f9b-1191a6476811',
        level: '49.5 Total Hours',
        thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop',
        certImage: 'certificates/Network-and-Systems-Administrator-Technical-Training.jpg',
        tags: ['SysAdmin', 'Active Directory', 'Networking', 'Group Policy', 'DHCP/DNS'],
        description: 'Intensive 49.5-hour hands-on technical training covering enterprise Active Directory configuration, Domain Controllers, DNS, and ticketing systems.'
    },
    {
        id: 'cert-it-support-bootcamp-udemy',
        title: 'IT Support Technical Skills Bootcamp',
        issuer: 'Jobskillshare Community / Udemy',
        category: 'udemy',
        date: '30 October 2024',
        credentialId: 'UC-e2a1bae4-32f1-4346-879e-7b5e2c8c3b8f',
        level: '39.5 Total Hours',
        thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
        certImage: 'certificates/IT-Support-Technical-Skills-Bootcamp.jpg',
        tags: ['IT Support', 'Hardware Troubleshooting', 'Ticketing', 'Remote Desktop'],
        description: '39.5 hours of practical lab exercises covering tier-1 and tier-2 IT support, hardware diagnostics, and enterprise software deployment.'
    }
];

const DOM = {
    themeToggle: document.getElementById('themeToggle'),
    hamburgerBtn: document.getElementById('hamburgerBtn'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link'),
    scrollProgress: document.getElementById('scrollProgress'),
    backToTop: document.getElementById('backToTop'),
    certSearch: document.getElementById('certSearch'),
    filterPills: document.getElementById('filterPills'),
    currentYear: document.getElementById('currentYear'),
    modal: document.getElementById('certModal'),
    modalBody: document.getElementById('modalBody'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    grids: {
        tertiary: document.getElementById('grid-tertiary'),
        microsoft: document.getElementById('grid-microsoft'),
        aws: document.getElementById('grid-aws'),
        python: document.getElementById('grid-python'),
        udemy: document.getElementById('grid-udemy')
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderAllCertificates(certificatesData);
    setupNavigation();
    setupScrollEffects();
    setupFiltering();
    setupModalEvents();
    
    if (DOM.currentYear) {
        DOM.currentYear.textContent = new Date().getFullYear();
    }
});

function renderAllCertificates(data) {
    Object.values(DOM.grids).forEach(grid => {
        if (grid) grid.innerHTML = '';
    });

    data.forEach(item => {
        const targetGrid = DOM.grids[item.category];
        if (targetGrid) {
            const cardElement = createCertificateCard(item);
            targetGrid.appendChild(cardElement);
        }
    });
}

/**
 * Smart Fallback Function for Image Loading
 */
window.handleImageFallback = function(img) {
    if (!img.dataset.tried) {
        img.dataset.tried = '1';
        const currentSrc = img.src;
        if (currentSrc.includes('certificates/')) {
            // Try looking in root directory if certificates/ subfolder path fails
            img.src = currentSrc.replace('certificates/', '');
        } else if (currentSrc.endsWith('.png')) {
            img.src = currentSrc.replace('.png', '.jfif');
        } else if (currentSrc.endsWith('.jfif')) {
            img.src = currentSrc.replace('.jfif', '.png');
        } else if (currentSrc.endsWith('.jpg')) {
            img.src = currentSrc.replace('.jpg', '.jpeg');
        } else if (currentSrc.endsWith('.jpeg')) {
            img.src = currentSrc.replace('.jpeg', '.jpg');
        }
    }
};

function createCertificateCard(item) {
    const card = document.createElement('article');
    card.className = 'cert-card';
    card.setAttribute('data-id', item.id);
    card.setAttribute('data-title', item.title.toLowerCase());

    const tagsHTML = item.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('');
    const logoClass = item.isLogo ? 'logo-img' : '';

    card.innerHTML = `
        <div class="card-thumbnail-wrapper ${item.isLogo ? 'logo-bg' : ''}">
            <img src="${item.thumbnail}" 
                 alt="${item.title} Preview" 
                 class="card-thumbnail ${logoClass}" 
                 loading="lazy"
                 onerror="handleImageFallback(this)">
            <span class="card-badge">${item.level || 'Certified'}</span>
        </div>
        <div class="card-body">
            <span class="card-issuer">${item.issuer}</span>
            <h3 class="card-title">${item.title}</h3>
            <div class="card-meta">
                <span>Issued: ${item.date}</span>
            </div>
            <div class="card-tags">
                ${tagsHTML}
            </div>
            <div class="card-footer">
                <button class="btn btn-secondary btn-card-action view-details-btn" type="button" onclick="openCertModal('${item.id}')">
                    View Credential
                </button>
            </div>
        </div>
    `;

    return card;
}

function initTheme() {
    const savedTheme = localStorage.getItem('portfoliopro_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    DOM.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfoliopro_theme', newTheme);
    });
}

function setupNavigation() {
    if (DOM.hamburgerBtn) {
        DOM.hamburgerBtn.addEventListener('click', () => {
            const isExpanded = DOM.hamburgerBtn.getAttribute('aria-expanded') === 'true';
            DOM.hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            DOM.navMenu.classList.toggle('open');
        });
    }

    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (DOM.navMenu) DOM.navMenu.classList.remove('open');
            if (DOM.hamburgerBtn) DOM.hamburgerBtn.setAttribute('aria-expanded', 'false');

            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    e.preventDefault();

                    if (targetSection.style.display === 'none') {
                        const allFilterBtn = document.querySelector('.filter-btn[data-category="all"]');
                        if (allFilterBtn) {
                            allFilterBtn.click();
                        } else {
                            filterCertificates('', 'all');
                        }
                    }

                    setTimeout(() => {
                        const navHeight = document.getElementById('navbar')?.offsetHeight || 72;
                        const elementPosition = targetSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navHeight - 15;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }, 30);
                }
            }
        });
    });
}

function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (DOM.scrollProgress) {
            DOM.scrollProgress.style.width = `${scrollPercent}%`;
        }

        if (DOM.backToTop) {
            if (scrollTop > 400) {
                DOM.backToTop.classList.add('visible');
            } else {
                DOM.backToTop.classList.remove('visible');
            }
        }

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            if (section.style.display === 'none') return;

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                DOM.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    if (DOM.backToTop) {
        DOM.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function setupFiltering() {
    if (DOM.certSearch) {
        DOM.certSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            filterCertificates(query, getActiveCategory());
        });
    }

    if (DOM.filterPills) {
        DOM.filterPills.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });

                e.target.classList.add('active');
                e.target.setAttribute('aria-selected', 'true');

                const category = e.target.getAttribute('data-category');
                const searchQuery = DOM.certSearch ? DOM.certSearch.value.toLowerCase().trim() : '';
                
                filterCertificates(searchQuery, category);
            }
        });
    }
}

function getActiveCategory() {
    const activeBtn = document.querySelector('.filter-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-category') : 'all';
}

function filterCertificates(searchQuery, category) {
    const allSections = document.querySelectorAll('.cert-section');

    allSections.forEach(section => {
        const sectionCategory = section.getAttribute('data-section-category');
        const cards = section.querySelectorAll('.cert-card');
        let visibleCardsInSection = 0;

        cards.forEach(card => {
            const certId = card.getAttribute('data-id');
            const itemData = certificatesData.find(c => c.id === certId);

            if (!itemData) return;

            const matchesCategory = (category === 'all' || sectionCategory === category);
            const matchesSearch = searchQuery === '' || 
                itemData.title.toLowerCase().includes(searchQuery) ||
                itemData.issuer.toLowerCase().includes(searchQuery) ||
                itemData.tags.some(t => t.toLowerCase().includes(searchQuery));

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                visibleCardsInSection++;
            } else {
                card.style.display = 'none';
            }
        });

        if (visibleCardsInSection === 0) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}

function setupModalEvents() {
    if (DOM.modalCloseBtn) {
        DOM.modalCloseBtn.addEventListener('click', closeCertModal);
    }

    if (DOM.modal) {
        DOM.modal.addEventListener('click', (e) => {
            if (e.target === DOM.modal) {
                closeCertModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.modal && DOM.modal.classList.contains('active')) {
            closeCertModal();
        }
    });
}

function openCertModal(id) {
    const item = certificatesData.find(c => c.id === id);
    if (!item || !DOM.modalBody) return;

    const tagsHTML = item.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('');
    const docImage = item.certImage || item.thumbnail;

    DOM.modalBody.innerHTML = `
        <div class="modal-cert-viewer">
            <img src="${docImage}" 
                 alt="${item.title} Full Certificate Document" 
                 class="modal-full-cert-img" 
                 onerror="handleImageFallback(this)">
        </div>
        <div class="modal-details">
            <span class="card-issuer">${item.issuer}</span>
            <h3 id="modalTitle">${item.title}</h3>
            <div class="modal-meta-bar">
                <span><strong>Date Issued:</strong> ${item.date}</span>
                <span><strong>Credential ID:</strong> ${item.credentialId}</span>
            </div>
            <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">${item.description}</p>
            <div class="card-tags" style="margin-bottom: 2rem;">
                ${tagsHTML}
            </div>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="${docImage}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    Open Full Document
                </a>
                <button class="btn btn-secondary" onclick="closeCertModal()">
                    Close View
                </button>
            </div>
        </div>
    `;

    DOM.modal.classList.add('active');
    DOM.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    if (!DOM.modal) return;
    DOM.modal.classList.remove('active');
    DOM.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}