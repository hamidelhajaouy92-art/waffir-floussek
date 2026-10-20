import React, { useState } from "react";
import "./App.css";

type Lang = "ar" | "fr";

const copy = {
  ar: {
    home: "الرئيسية", featuresNav: "مميزات المنصة", how: "كيفية العمل", faq: "الأسئلة الشائعة",
    contact: "تواصل معنا", login: "تسجيل الدخول", signup: "إنشاء حساب جديد",
    badge: "منصتك الرقمية الجديدة", title1: "وفّر فلوسك،", title2: "واصنع مستقبلك!",
    subtitle: "منصة رقمية تساعدك على متابعة أموالك ومعاملاتك وإدارة أهدافك المالية بسهولة ووضوح.",
    create: "إنشاء حساب جديد", signIn: "تسجيل الدخول", demo: "معاينة توضيحية",
    balance: "الرصيد التجريبي", available: "الرصيد المتاح", growth: "متابعة أهدافك",
    transactions: "المعاملات", withdraw: "سحب", invite: "إحالة", deposit: "إيداع",
    recent: "آخر الأنشطة", depositLabel: "طلب إيداع تجريبي", referralLabel: "مكافأة إحالة تجريبية",
    goalsLabel: "هدف الادخار", statsTitle: "منصة واضحة وسهلة الاستخدام",
    stat1: "إدارة شخصية", stat2: "متابعة المعاملات", stat3: "واجهة ثنائية اللغة", stat4: "الخصوصية أولاً",
    howTitle: "كيف تعمل المنصة؟", howSub: "خطوات بسيطة لتنظيم حسابك ومتابعة طلباتك.",
    step1: "أنشئ حسابك", step1d: "ابدأ بملف شخصي آمن ومعلومات صحيحة.",
    step2: "تابع رصيدك", step2d: "راجع الرصيد التجريبي وسجل الأنشطة من لوحة واحدة.",
    step3: "قدّم طلباً", step3d: "استعرض نموذج الإيداع أو السحب التجريبي.",
    step4: "تابع الحالة", step4d: "تعرّف على حالة كل طلب بوضوح.",
    featuresTitle: "كل ما تحتاجه في مكان واحد", featuresSub: "تجربة أولية مصممة لتكون بسيطة ومتجاوبة.",
    feature1: "حساب شخصي", feature1d: "واجهة لإدارة بيانات الحساب.",
    feature2: "نظام الإحالات", feature2d: "عرض رابط الدعوة وإحصائيات تجريبية.",
    feature3: "الرصيد والمعاملات", feature3d: "سجل واضح للأنشطة والطلبات.",
    feature4: "الشفافية والأمان", feature4d: "عرض الحالات بوضوح مع تنبيهات مناسبة.",
    testimonialsTitle: "تجربة سهلة من البداية", testimonialsSub: "نصوص تجريبية للعرض فقط، وليست تقييمات حقيقية.",
    quote1: "واجهة واضحة تساعدني على فهم حالة الطلبات.", quote2: "من السهل الوصول إلى أهم الأقسام.", quote3: "التنقل بين العربية والفرنسية بسيط.",
    faqTitle: "الأسئلة الشائعة", q1: "هل الرصيد المعروض حقيقي؟", a1: "لا. هذه نسخة واجهة تجريبية، ولا تتصل ببنك أو مزود أداء.",
    q2: "هل يمكنني إجراء إيداع أو سحب؟", a2: "يمكنك تجربة النماذج فقط؛ لا يتم تحويل أي أموال في هذه النسخة.",
    q3: "هل تدعم المنصة الفرنسية؟", a3: "نعم، يتوفر تبديل تجريبي بين العربية والفرنسية.",
    ctaTitle: "ابدأ بتنظيم تجربتك المالية", ctaSub: "أنشئ حساباً تجريبياً واستكشف الواجهة.",
    footer: "© 2026 وفّر فلوسك. نموذج أولي تجريبي.",
    modalTitle: "إنشاء حساب تجريبي", name: "الاسم الكامل", email: "البريد الإلكتروني", password: "كلمة المرور",
    cancel: "إلغاء", submit: "متابعة تجريبية", modalNote: "لن تُحفظ بياناتك أو تُرسل إلى خادم.",
    requestTitle: "طلب تجريبي", amount: "المبلغ", sendRequest: "إرسال الطلب التجريبي",
    requestSent: "تمت إضافة الطلب إلى العرض التجريبي فقط.", close: "إغلاق",
    referralLink: "رابط الإحالة التجريبي", copy: "نسخ الرابط", copied: "تم النسخ (في حال دعم المتصفح).",
    language: "العربية"
  },
  fr: {
    home: "Accueil", featuresNav: "Fonctionnalités", how: "Comment ça marche", faq: "FAQ",
    contact: "Contact", login: "Connexion", signup: "Créer un compte",
    badge: "Votre nouvelle plateforme numérique", title1: "Épargnez mieux,", title2: "préparez l’avenir !",
    subtitle: "Une interface pour suivre vos fonds, vos opérations et vos objectifs financiers en toute clarté.",
    create: "Créer un compte", signIn: "Connexion", demo: "Aperçu de démonstration",
    balance: "Solde de démonstration", available: "Solde disponible", growth: "Suivi de vos objectifs",
    transactions: "Opérations", withdraw: "Retrait", invite: "Parrainage", deposit: "Dépôt",
    recent: "Activités récentes", depositLabel: "Demande de dépôt fictive", referralLabel: "Bonus de parrainage fictif",
    goalsLabel: "Objectif d’épargne", statsTitle: "Une plateforme claire et simple",
    stat1: "Gestion personnelle", stat2: "Suivi des opérations", stat3: "Deux langues", stat4: "Confidentialité d’abord",
    howTitle: "Comment ça marche ?", howSub: "Quelques étapes pour organiser votre espace et suivre vos demandes.",
    step1: "Créez votre compte", step1d: "Commencez avec un profil et des informations correctes.",
    step2: "Suivez votre solde", step2d: "Consultez le solde fictif et l’historique depuis un seul espace.",
    step3: "Soumettez une demande", step3d: "Découvrez les formulaires de dépôt et de retrait de démonstration.",
    step4: "Suivez le statut", step4d: "Consultez clairement le statut de chaque demande.",
    featuresTitle: "Tout au même endroit", featuresSub: "Une première expérience simple et adaptée à tous les écrans.",
    feature1: "Espace personnel", feature1d: "Une interface pour gérer votre profil.",
    feature2: "Parrainage", feature2d: "Lien d’invitation et statistiques fictives.",
    feature3: "Solde et opérations", feature3d: "Historique clair des activités et demandes.",
    feature4: "Transparence et sécurité", feature4d: "Statuts visibles et messages explicites.",
    testimonialsTitle: "Une expérience simple", testimonialsSub: "Textes fictifs à titre de démonstration, pas de vrais avis.",
    quote1: "Une interface claire pour comprendre les demandes.", quote2: "Les sections principales sont faciles à trouver.", quote3: "Le passage entre les langues est simple.",
    faqTitle: "Questions fréquentes", q1: "Le solde affiché est-il réel ?", a1: "Non. Il s’agit d’une maquette qui n’est reliée à aucune banque ni prestataire de paiement.",
    q2: "Puis-je déposer ou retirer de l’argent ?", a2: "Vous pouvez tester les formulaires uniquement ; aucun transfert n’est effectué.",
    q3: "La plateforme prend-elle en charge le français ?", a3: "Oui, cette maquette permet de basculer entre le français et l’arabe.",
    ctaTitle: "Organisez votre expérience financière", ctaSub: "Créez un compte de démonstration et explorez l’interface.",
    footer: "© 2026 Waffir Floussek. Maquette de démonstration.",
    modalTitle: "Créer un compte de démonstration", name: "Nom complet", email: "E-mail", password: "Mot de passe",
    cancel: "Annuler", submit: "Continuer en démo", modalNote: "Vos données ne seront ni enregistrées ni envoyées à un serveur.",
    requestTitle: "Demande de démonstration", amount: "Montant", sendRequest: "Envoyer la demande fictive",
    requestSent: "Demande ajoutée à l’aperçu uniquement.", close: "Fermer",
    referralLink: "Lien de parrainage fictif", copy: "Copier le lien", copied: "Copié si le navigateur le permet.",
    language: "Français"
  }
} as const;

export default function App() {
  const [lang, setLang] = useState<Lang>("ar");
  const [modal, setModal] = useState<"signup" | "login" | "deposit" | "withdraw" | "referral" | null>(null);
  const [notice, setNotice] = useState("");
  const [amount, setAmount] = useState("100");
  const t = copy[lang];
  const rtl = lang === "ar";

  function openModal(kind: typeof modal) {
    setNotice("");
    setModal(kind);
  }

  function submitDemo(e: React.FormEvent) {
    e.preventDefault();
    setNotice(t.requestSent);
  }

  return (
    <div className={rtl ? "app rtl" : "app ltr"} dir={rtl ? "rtl" : "ltr"}>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Waffir Floussek">
          <span className="brand-mark">▣</span>
          <span className="brand-words"><strong>وفّر فلوسك</strong><small>ÉPARGNEZ VOTRE ARGENT</small></span>
        </a>
        <nav className="nav-links">
          <a href="#home">{t.home}</a><a href="#features">{t.featuresNav}</a><a href="#how">{t.how}</a><a href="#faq">{t.faq}</a><a href="#contact">{t.contact}</a>
        </nav>
        <div className="nav-actions">
          <button className="language" onClick={() => setLang(lang === "ar" ? "fr" : "ar")}>◎ {t.language}⌄</button>
          <button className="btn btn-outline compact" onClick={() => openModal("login")}>{t.login}</button>
          <button className="btn btn-primary compact" onClick={() => openModal("signup")}>{t.signup}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">{t.badge} <b>✦</b></span>
            <h1>{t.title1}<br/><em>{t.title2}</em></h1>
            <p>{t.subtitle}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => openModal("signup")}>{t.create} <span>➜</span></button>
              <button className="btn btn-outline" onClick={() => openModal("login")}>{t.signIn}</button>
            </div>
            <div className="micro-note"><span className="pulse"/> {t.demo}</div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="phone">
              <div className="phone-top"><span>9:41</span><span>● ● ▰</span></div>
              <div className="phone-brand"><span className="mini-mark">▣</span><b>وفّر فلوسك</b><span>⌕</span></div>
              <div className="balance-card"><small>{t.balance}</small><strong>1,250.00 <i>MAD</i></strong><span>↗ {t.growth}</span></div>
              <div className="quick-actions">
                <button onClick={() => openModal("deposit")}><b>＋</b><small>{t.deposit}</small></button>
                <button onClick={() => openModal("withdraw")}><b>↗</b><small>{t.withdraw}</small></button>
                <button onClick={() => openModal("referral")}><b>♧</b><small>{t.invite}</small></button>
                <button onClick={() => openModal("referral")}><b>▤</b><small>{t.transactions}</small></button>
              </div>
              <div className="activity-head"><b>{t.recent}</b><span>•••</span></div>
              <div className="activity"><span className="activity-icon">＋</span><div><b>{t.depositLabel}</b><small>20/10/2026</small></div><strong>+ 300.00</strong></div>
              <div className="activity"><span className="activity-icon">♧</span><div><b>{t.referralLabel}</b><small>18/10/2026</small></div><strong>+ 25.00</strong></div>
              <div className="phone-nav"><span>⌂<small>{t.home}</small></span><span>▤<small>{t.transactions}</small></span><span>♧<small>{t.invite}</small></span><span>●<small>{t.featuresNav}</small></span></div>
            </div>
            <div className="floating-note"><span>✦</span><b>{t.available}</b><strong>1,250.00 MAD</strong><small>{t.demo}</small></div>
            <div className="leaf leaf-a">↗</div><div className="leaf leaf-b">✧</div>
          </div>
        </section>

        <section className="trust-strip">
          <div><span className="round-icon">♟</span><strong>{t.stat1}</strong><small>{t.statsTitle}</small></div>
          <div><span className="round-icon">◷</span><strong>{t.stat2}</strong><small>{t.transactions}</small></div>
          <div><span className="round-icon">◎</span><strong>{t.stat3}</strong><small>العربية · Français</small></div>
          <div><span className="round-icon">✓</span><strong>{t.stat4}</strong><small>{t.feature4d}</small></div>
        </section>

        <section className="section how-section" id="how">
          <div className="section-heading"><span className="eyebrow dark">{t.how}</span><h2>{t.howTitle}</h2><p>{t.howSub}</p></div>
          <div className="steps">
            {[[t.step1,t.step1d,"♙"],[t.step2,t.step2d,"▣"],[t.step3,t.step3d,"↗"],[t.step4,t.step4d,"✓"]].map((s,i)=><article className="step-card" key={s[0]}><span className="step-icon">{s[2]}</span><span className="step-num">0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></article>)}
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="features-visual"><div className="glow-disc"/><div className="phone phone-small"><div className="phone-top"><span>9:41</span><span>● ● ▰</span></div><div className="phone-brand"><span className="mini-mark">▣</span><b>وفّر فلوسك</b></div><div className="balance-card"><small>{t.balance}</small><strong>1,250.00 <i>MAD</i></strong><span>↗ {t.growth}</span></div><div className="fake-bars"><i/><i/><i/><i/><i/><i/><i/></div></div></div>
          <div className="features-copy"><span className="eyebrow">{t.featuresNav} ✦</span><h2>{t.featuresTitle}</h2><p>{t.featuresSub}</p><ul><li>✓ {t.feature1}: {t.feature1d}</li><li>✓ {t.feature2}: {t.feature2d}</li><li>✓ {t.feature3}: {t.feature3d}</li><li>✓ {t.feature4}: {t.feature4d}</li></ul></div>
          <div className="feature-grid">
            <article><span>♙</span><h3>{t.feature1}</h3><p>{t.feature1d}</p></article><article><span>♧</span><h3>{t.feature2}</h3><p>{t.feature2d}</p></article><article><span>▣</span><h3>{t.feature3}</h3><p>{t.feature3d}</p></article><article><span>✓</span><h3>{t.feature4}</h3><p>{t.feature4d}</p></article>
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-heading"><h2>{t.testimonialsTitle}</h2><p>{t.testimonialsSub}</p></div>
          <div className="quote-grid"><article><span>“</span><p>{t.quote1}</p><small>— {rtl ? "نص تجريبي" : "Exemple fictif"}</small></article><article><span>“</span><p>{t.quote2}</p><small>— {rtl ? "نص تجريبي" : "Exemple fictif"}</small></article><article><span>“</span><p>{t.quote3}</p><small>— {rtl ? "نص تجريبي" : "Exemple fictif"}</small></article></div>
          <p className="disclaimer">{t.testimonialsSub}</p>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-heading"><h2>{t.faqTitle}</h2></div>
          <div className="faq-list"><details><summary>{t.q1}</summary><p>{t.a1}</p></details><details><summary>{t.q2}</summary><p>{t.a2}</p></details><details><summary>{t.q3}</summary><p>{t.a3}</p></details></div>
        </section>

        <section className="cta" id="contact"><div><h2>{t.ctaTitle}</h2><p>{t.ctaSub}</p></div><button className="btn btn-primary" onClick={() => openModal("signup")}>{t.create} ➜</button></section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">▣</span><span className="brand-words"><strong>وفّر فلوسك</strong><small>ÉPARGNEZ VOTRE ARGENT</small></span></a><div className="footer-links"><a href="#home">{t.home}</a><a href="#features">{t.featuresNav}</a><a href="#how">{t.how}</a><a href="#faq">{t.faq}</a></div><span>{t.footer}</span></footer>

      {modal && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setModal(null); }}>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-x" onClick={() => setModal(null)} aria-label={t.close}>×</button>
          <h2 id="modal-title">{modal === "signup" ? t.modalTitle : modal === "login" ? t.login : modal === "deposit" || modal === "withdraw" ? t.requestTitle : t.referralLink}</h2>
          {modal === "signup" || modal === "login" ? <form onSubmit={submitDemo}><label>{t.email}<input type="email" required placeholder="name@example.com"/></label>{modal === "signup" && <label>{t.name}<input required placeholder={t.name}/></label>}<label>{t.password}<input type="password" required minLength={6} placeholder="••••••••"/></label><p className="modal-note">{t.modalNote}</p><div className="modal-buttons"><button type="button" className="btn btn-outline" onClick={() => setModal(null)}>{t.cancel}</button><button className="btn btn-primary" type="submit">{t.submit}</button></div></form>
          : modal === "deposit" || modal === "withdraw" ? <form onSubmit={submitDemo}><label>{t.amount} (MAD)<input type="number" min="1" step="0.01" required value={amount} onChange={e=>setAmount(e.target.value)}/></label><p className="modal-note">{t.a2}</p><div className="modal-buttons"><button type="button" className="btn btn-outline" onClick={() => setModal(null)}>{t.cancel}</button><button className="btn btn-primary" type="submit">{t.sendRequest}</button></div></form>
          : <div><p className="referral-demo">https://waffir-floussek.example/invite/demo</p><p className="modal-note">{t.modalNote}</p><button className="btn btn-primary full" onClick={() => { setNotice(t.copied); }}>{t.copy}</button></div>}
          {notice && <div className="notice" role="status">{notice}</div>}
        </div>
      </div>}
      <div className="demo-banner">DEMO UI — No real money, payments, accounts or referrals are connected.</div>
    </div>
  );
}
