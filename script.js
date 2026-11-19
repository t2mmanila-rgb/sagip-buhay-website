/* ==========================================================================
   Sagip Buhay Medical Services — Multi-Page Interactive Logic
   ========================================================================== */

const SERVICE_RATES = [
  {
    category: 'Clinical Chemistry',
    items: [
      { id: 'cc-glucose', name: 'Glucose', price: 110 },
      { id: 'cc-ogtt', name: 'OGTT 75 g', price: 550 },
      { id: 'cc-bun', name: 'Blood Urea Nitrogen', price: 110 },
      { id: 'cc-bua', name: 'Blood Uric Acid', price: 110 },
      { id: 'cc-crea', name: 'Creatinine', price: 110 },
      { id: 'cc-alt', name: 'ALT', price: 195 },
      { id: 'cc-ast', name: 'AST', price: 195 },
      { id: 'cc-hba1c', name: 'HbA1C', price: 600 },
      { id: 'cc-na', name: 'Sodium (Na)', price: 190 },
      { id: 'cc-k', name: 'Potassium (K)', price: 190 },
      { id: 'cc-cl', name: 'Chloride (Cl)', price: 190 },
      { id: 'cc-p', name: 'Inorganic Phosphorus', price: 190 },
      { id: 'cc-mg', name: 'Magnesium (Mg)', price: 200 },
      { id: 'cc-lipid', name: 'Lipid Profile', price: 550 },
      { id: 'cc-tchol', name: 'Total Cholesterol', price: 110 },
      { id: 'cc-ldl', name: 'LDL Cholesterol', price: 190 },
      { id: 'cc-hdl', name: 'HDL Cholesterol', price: 190 },
      { id: 'cc-trig', name: 'Triglycerides', price: 190 },
      { id: 'cc-vldl', name: 'VLDL Cholesterol', price: 190 },
      { id: 'cc-tp', name: 'Total Protein', price: 400 },
      { id: 'cc-alb', name: 'Albumin', price: 350 },
      { id: 'cc-bili', name: 'Bilirubin (TB, DB, IB)', price: 270 },
      { id: 'cc-ical', name: 'Ionized Calcium', price: 290 }
    ]
  },
  {
    category: 'Immuno-Serology',
    items: [
      { id: 'is-hbsag', name: 'HBsAg (Screening)', price: 220 },
      { id: 'is-antihbs', name: 'Anti-HBs', price: 270 },
      { id: 'is-syphilis', name: 'Syphilis/VDRL', price: 210 },
      { id: 'is-antihcv', name: 'Anti-HCV', price: 500 },
      { id: 'is-psa', name: 'PSA', price: 850 },
      { id: 'is-t3', name: 'T3', price: 450 },
      { id: 'is-t4', name: 'T4', price: 450 },
      { id: 'is-tsh', name: 'TSH', price: 550 },
      { id: 'is-ft3', name: 'FT3', price: 550 },
      { id: 'is-ft4', name: 'FT4', price: 650 },
      { id: 'is-dengue-ns1', name: 'Dengue NS1', price: 1300 },
      { id: 'is-dengue-igg', name: 'Dengue IgG/IgM', price: 800 },
      { id: 'is-dengue-duo', name: 'Dengue Duo', price: 2200 },
      { id: 'is-hiv', name: 'HIV', price: 500 }
    ]
  },
  {
    category: 'Clinical Microscopy',
    items: [
      { id: 'cm-ua4', name: 'Urinalysis (4)', price: 100 },
      { id: 'cm-ua10', name: 'Urinalysis (10)', price: 120 },
      { id: 'cm-fecal', name: 'Fecalysis', price: 95 },
      { id: 'cm-pt-urine', name: 'Pregnancy Test (Urine)', price: 130 },
      { id: 'cm-pt-serum', name: 'Pregnancy Test (Serum)', price: 150 },
      { id: 'cm-fobt', name: 'FOBT', price: 200 }
    ]
  },
  {
    category: 'Hematology',
    items: [
      { id: 'he-cbc', name: 'CBC with Platelet Count', price: 230 },
      { id: 'he-bt', name: 'Blood Typing', price: 115 },
      { id: 'he-pt', name: 'Prothrombin Time', price: 350 },
      { id: 'he-aptt', name: 'APTT', price: 350 }
    ]
  },
  {
    category: 'Immunizations',
    items: [
      { id: 'im-flu', name: 'Flu Vaccine', price: 600 },
      { id: 'im-pneumo', name: 'Pneumococcal Vaccine', price: 1500 },
      { id: 'im-hepb', name: 'Hepatitis B Vaccine', price: 830 },
      { id: 'im-hpv', name: 'HPV Vaccine', price: 2000 },
      { id: 'im-tetanus', name: 'Tetanus Vaccine', price: 550 }
    ]
  },
  {
    category: 'Other Services',
    items: [
      { id: 'os-consult', name: 'Medical Consultation', price: 500 },
      { id: 'os-medcert', name: 'Medical Certificate', price: 350 },
      { id: 'os-ecg', name: 'Electrocardiogram (ECG)', price: 380 }
    ]
  }
];

const GAMOT_MEDICINES = [
  {
    category: 'Anti-Infectious',
    items: [
      'Albendazole', 'Azithromycin', 'Cefixime', 'Cefuroxime', 'Clindamycin',
      'Clotrimazole', 'Cloxacillin', 'Doxycycline', 'Erythromycin', 'Fluconazole',
      'Ketoconazole', 'Mebendazole', 'Metronidazole', 'Oseltamivir', 'Tobramycin'
    ]
  },
  {
    category: 'Anti-Hypertensive & Cardiology',
    items: [
      'Isosorbide Mononitrate', 'Methyldopa', 'Tamsulosin', 'Telmisartan',
      'Valsartan', 'Atenolol', 'Captopril', 'Clonidine', 'Diltiazem',
      'Isosorbide Dinitrate', 'Telmisartan + Hydrochlorothiazide',
      'Valsartan + Hydrochlorothiazide', 'Enalapril + Hydrochlorothiazide'
    ]
  },
  {
    category: 'Anti-Asthma & COPD',
    items: [
      'Budesonide + Formoterol', 'Montelukast', 'Tiotropium',
      'Ipratropium', 'Ipratropium + Salbutamol'
    ]
  },
  {
    category: 'Supportive / Other Therapy',
    items: [
      'Aluminum Hydroxide + Magnesium Hydroxide', 'Butamirate', 'Celecoxib',
      'Cetirizine', 'Colchicine', 'Diphenhydramine',
      'Ferrous Salt (Iron Preparations)', 'Folic acid + Iron Ferrous',
      'Ibuprofen', 'Loratadine', 'Lagundi (Vitex Negundo)', 'Mefenamic Acid',
      'Naproxen', 'Omeprazole', 'Zinc'
    ]
  },
  {
    category: 'Anti-Diabetics & Anti-Dyslipidemia',
    items: ['Dapagliflozin', 'Atorvastatin', 'Fenofibrate', 'Rosuvastatin']
  },
  {
    category: 'Anti-Thrombotics',
    items: ['Clopidogrel']
  }
];

const formatPHP = (amount) => `\u20B1${amount.toLocaleString('en-PH')}`;

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header & Mobile Menu
  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 12);
    }, { passive: true });
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // =========================================================================
  // FAQ Audience Tabs & Accordion (index.html)
  // =========================================================================
  const faqTabBtns = document.querySelectorAll('[data-faq-tab]');
  if (faqTabBtns.length) {
    faqTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.faqTab;
        faqTabBtns.forEach((b) => b.classList.toggle('active', b === btn));
        document.getElementById('faqPanelHr').classList.toggle('active', target === 'hr');
        document.getElementById('faqPanelEmp').classList.toggle('active', target === 'emp');
      });
    });
  }

  document.querySelectorAll('.faq-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const list = trigger.closest('.faq-list');
      const wasOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach((other) => {
        other.classList.remove('open');
        other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // =========================================================================
  // Dual-Mode Inquiry Form (index.html)
  // =========================================================================
  const tabCorporate = document.getElementById('tabCorporate');
  const tabEmployee = document.getElementById('tabEmployee');
  const panelCorporate = document.getElementById('panelCorporate');
  const panelEmployee = document.getElementById('panelEmployee');

  function switchInquiryTab(target) {
    if (!tabCorporate || !tabEmployee) return;
    const isCorp = target === 'corporate';
    tabCorporate.classList.toggle('active', isCorp);
    tabCorporate.setAttribute('aria-selected', String(isCorp));
    panelCorporate.classList.toggle('active', isCorp);
    tabEmployee.classList.toggle('active', !isCorp);
    tabEmployee.setAttribute('aria-selected', String(!isCorp));
    panelEmployee.classList.toggle('active', !isCorp);
  }

  if (tabCorporate && tabEmployee) {
    tabCorporate.addEventListener('click', () => switchInquiryTab('corporate'));
    tabEmployee.addEventListener('click', () => switchInquiryTab('employee'));

    document.querySelectorAll('[data-inquiry-tab]').forEach((el) => {
      el.addEventListener('click', () => switchInquiryTab(el.dataset.inquiryTab));
    });

    // Check if rates.html passed pre-selected tests via sessionStorage
    const pendingMode = sessionStorage.getItem('sb_inquiry_mode');
    const pendingNotes = sessionStorage.getItem('sb_inquiry_notes');
    if (pendingMode && pendingNotes) {
      switchInquiryTab(pendingMode);
      const targetNotes = pendingMode === 'corporate' ? document.getElementById('corpNotes') : document.getElementById('empNotes');
      if (targetNotes) targetNotes.value = pendingNotes;
      sessionStorage.removeItem('sb_inquiry_mode');
      sessionStorage.removeItem('sb_inquiry_notes');
    }

    const showFeedback = (el, ok, msg) => {
      el.style.background = ok ? '#EDF9F0' : '#FFF5F5';
      el.style.border = ok ? '1px solid #A7E0B5' : '1px solid #FEB2B2';
      el.style.color = ok ? '#1A5C2E' : '#9B2C2C';
      el.textContent = msg;
      el.classList.add('show');
    };

    document.getElementById('corporateForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const company = document.getElementById('corpCompany').value.trim();
      const contact = document.getElementById('corpContact').value.trim();
      const phone = document.getElementById('corpPhone').value.trim();
      const email = document.getElementById('corpEmail').value.trim();
      const headcount = document.getElementById('corpHeadcount').value;
      const fb = document.getElementById('corpFeedback');
      if (!company || !contact || !phone || !email) {
        showFeedback(fb, false, 'Please fill in Company Name, Contact Person, Phone, and Work Email.');
        return;
      }
      showFeedback(fb, true, `Thank you, ${contact}! Your corporate proposal request for ${company} (${headcount}) has been received. Our partnerships coordinator will contact you shortly.`);
      e.target.reset();
    });

    document.getElementById('employeeForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('empName').value.trim();
      const phone = document.getElementById('empPhone').value.trim();
      const service = document.getElementById('empService').value;
      const fb = document.getElementById('empFeedback');
      if (!name || !phone) {
        showFeedback(fb, false, 'Please enter your full name and mobile number.');
        return;
      }
      showFeedback(fb, true, `Thank you, ${name}! Your inquiry for "${service}" has been recorded. Call (0936) 947 3828 for immediate assistance.`);
      e.target.reset();
    });
  }

  // =========================================================================
  // Lab Rates & Estimator (rates.html)
  // =========================================================================
  const ratesContainerEl = document.getElementById('ratesContainer');
  if (ratesContainerEl) {
    let activeRateCategory = 'All';
    let rateQuery = '';
    const selectedRates = new Map();

    const ratePillsEl = document.getElementById('rateCategoryPills');
    const rateSearchEl = document.getElementById('rateSearch');
    const estimatorListEl = document.getElementById('estimatorList');
    const estimatorTotalEl = document.getElementById('estimatorTotal');
    const clearEstimateBtn = document.getElementById('clearEstimateBtn');
    const sendCorpEstimateBtn = document.getElementById('sendCorpEstimateBtn');
    const sendIndEstimateBtn = document.getElementById('sendIndEstimateBtn');

    const rateCategories = ['All', ...SERVICE_RATES.map((g) => g.category)];

    const renderRatePills = () => {
      ratePillsEl.innerHTML = rateCategories.map((cat) => `
        <button type="button" class="filter-pill ${cat === activeRateCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>
      `).join('');
      ratePillsEl.querySelectorAll('.filter-pill').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeRateCategory = btn.dataset.cat;
          renderRatePills();
          renderRates();
        });
      });
    };

    const renderRates = () => {
      const q = rateQuery.trim().toLowerCase();
      const groups = SERVICE_RATES
        .filter((g) => activeRateCategory === 'All' || g.category === activeRateCategory)
        .map((g) => ({
          category: g.category,
          items: g.items.filter((i) => i.name.toLowerCase().includes(q) || g.category.toLowerCase().includes(q))
        }))
        .filter((g) => g.items.length > 0);

      if (!groups.length) {
        ratesContainerEl.innerHTML = `<div class="card" style="text-align:center;color:var(--ink-muted);">No matching tests found for "${rateQuery}".</div>`;
        return;
      }

      ratesContainerEl.innerHTML = groups.map((g) => `
        <div class="rate-category-block">
          <div class="rate-category-head">
            <h3>${g.category}</h3>
            <span style="font-size:0.8rem;color:var(--ink-muted);font-weight:600;">${g.items.length} items</span>
          </div>
          <div class="rate-items-grid">
            ${g.items.map((i) => {
              const added = selectedRates.has(i.id);
              return `
                <div class="rate-row">
                  <span style="font-size:0.92rem;font-weight:500;">${i.name}</span>
                  <div style="display:flex;align-items:center;gap:10px;flex-shrink:0;">
                    <span class="rate-price">${formatPHP(i.price)}</span>
                    <button type="button" class="rate-add-btn ${added ? 'added' : ''}" data-id="${i.id}" data-name="${i.name}" data-price="${i.price}">${added ? '\u2713' : '+'}</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('');

      ratesContainerEl.querySelectorAll('.rate-add-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const { id, name, price } = btn.dataset;
          selectedRates.has(id) ? selectedRates.delete(id) : selectedRates.set(id, { id, name, price: Number(price) });
          renderRates();
          renderEstimator();
        });
      });
    };

    const renderEstimator = () => {
      if (!selectedRates.size) {
        estimatorListEl.innerHTML = `<li style="padding:14px 0;font-size:0.88rem;color:var(--ink-muted);">Click <strong>+</strong> on any test to build a reference list for a corporate APE quote or individual visit.</li>`;
        estimatorTotalEl.textContent = formatPHP(0);
        return;
      }
      let total = 0;
      estimatorListEl.innerHTML = [...selectedRates.values()].map((i) => {
        total += i.price;
        return `<li class="estimator-item"><span>${i.name}</span><span style="display:flex;align-items:center;gap:8px;"><strong>${formatPHP(i.price)}</strong><button type="button" data-rm="${i.id}" style="background:none;border:none;cursor:pointer;color:var(--ink-muted);font-size:1rem;">&times;</button></span></li>`;
      }).join('');
      estimatorTotalEl.textContent = formatPHP(total);
      estimatorListEl.querySelectorAll('[data-rm]').forEach((b) => {
        b.addEventListener('click', () => {
          selectedRates.delete(b.dataset.rm);
          renderRates();
          renderEstimator();
        });
      });
    };

    const saveForInquiry = (mode) => {
      if (!selectedRates.size) return;
      let total = 0;
      const lines = [...selectedRates.values()].map((i) => {
        total += i.price;
        return `- ${i.name} (Standard ref: ${formatPHP(i.price)})`;
      });
      const note = mode === 'corporate'
        ? `Requested corporate APE / group tests:\n${lines.join('\n')}\n(Standard walk-in reference: ${formatPHP(total)}/person — please quote preferential corporate group rate)`
        : `Requested tests / services:\n${lines.join('\n')}\nEstimated Total: ${formatPHP(total)}`;
      sessionStorage.setItem('sb_inquiry_mode', mode);
      sessionStorage.setItem('sb_inquiry_notes', note);
    };

    rateSearchEl.addEventListener('input', (e) => { rateQuery = e.target.value; renderRates(); });
    clearEstimateBtn.addEventListener('click', () => { selectedRates.clear(); renderRates(); renderEstimator(); });
    sendCorpEstimateBtn.addEventListener('click', () => saveForInquiry('corporate'));
    sendIndEstimateBtn.addEventListener('click', () => saveForInquiry('employee'));

    renderRatePills();
    renderRates();
    renderEstimator();
  }

  // =========================================================================
  // 54 GAMOT Medicines Directory (rates.html)
  // =========================================================================
  const botikaContainerEl = document.getElementById('botikaContainer');
  if (botikaContainerEl) {
    let activeMedCategory = 'All';
    let medQuery = '';
    const medPillsEl = document.getElementById('medCategoryPills');
    const medSearchEl = document.getElementById('medSearch');
    const medCategories = ['All', ...GAMOT_MEDICINES.map((g) => g.category)];

    const renderMedPills = () => {
      medPillsEl.innerHTML = medCategories.map((cat) => `
        <button type="button" class="filter-pill ${cat === activeMedCategory ? 'active' : ''}" data-mc="${cat}">${cat}</button>
      `).join('');
      medPillsEl.querySelectorAll('.filter-pill').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeMedCategory = btn.dataset.mc;
          renderMedPills();
          renderBotika();
        });
      });
    };

    const renderBotika = () => {
      const q = medQuery.trim().toLowerCase();
      const groups = GAMOT_MEDICINES
        .filter((g) => activeMedCategory === 'All' || g.category === activeMedCategory)
        .map((g) => ({
          category: g.category,
          items: g.items.filter((m) => m.toLowerCase().includes(q) || g.category.toLowerCase().includes(q))
        }))
        .filter((g) => g.items.length > 0);

      if (!groups.length) {
        botikaContainerEl.innerHTML = `<div class="card" style="grid-column:1/-1;text-align:center;color:var(--ink-muted);">No matching medicines found for "${medQuery}".</div>`;
        return;
      }

      botikaContainerEl.innerHTML = groups.map((g) => `
        <article class="med-category-card">
          <div class="med-cat-header">
            <h3>${g.category}</h3>
            <span style="font-size:0.78rem;font-weight:700;background:rgba(255,255,255,0.2);padding:2px 9px;border-radius:999px;">${g.items.length}</span>
          </div>
          <ul class="med-list">${g.items.map((m) => `<li>${m}</li>`).join('')}</ul>
        </article>
      `).join('');
    };

    medSearchEl.addEventListener('input', (e) => { medQuery = e.target.value; renderBotika(); });
    renderMedPills();
    renderBotika();
  }

  // =========================================================================
  // Clinic Photo Gallery Lightbox (index.html & corporate.html)
  // =========================================================================
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    document.querySelectorAll('#clinicGallery .gallery-card').forEach((card) => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = card.dataset.caption || img.alt;
        lightbox.classList.add('open');
      });
    });

    const closeLightbox = () => lightbox.classList.remove('open');
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });
  }
});
