import { useState, useEffect } from "react";

const fonts = `@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap');`;

const gs = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--ink:#19324A;--ink-deep:#19324A;--coral:#688276;--coral-soft:#E7EFEB;--mint:#E3F1EB;--paper:#F3F4F2;--slate:#5B6872;--line:rgba(25,50,74,0.12);}
html{scroll-behavior:smooth;}
body{font-family:'Manrope',sans-serif;background:var(--paper);color:var(--ink);}
h1,h2,h3,h4{font-family:'DM Serif Display',serif;font-weight:400;}
p{line-height:1.75;font-size:0.98rem;}
a{text-decoration:none;color:inherit;}
.btn-p{background:var(--coral);color:#fff;font-family:'Manrope',sans-serif;font-weight:800;font-size:0.7rem;letter-spacing:0.08em;text-transform:uppercase;padding:14px 24px;border:none;border-radius:999px;cursor:pointer;transition:transform 0.2s,background 0.2s,box-shadow 0.2s;box-shadow:0 8px 18px rgba(255,107,87,0.22);}
.btn-p:hover{background:#e95643;transform:translateY(-2px);box-shadow:0 12px 22px rgba(255,107,87,0.3);}
.btn-o{border:1px solid var(--coral);color:var(--coral);background:transparent;font-family:'Manrope',sans-serif;font-weight:800;font-size:0.7rem;letter-spacing:0.08em;text-transform:uppercase;padding:13px 24px;border-radius:999px;cursor:pointer;transition:all 0.2s;}
.btn-o:hover{background:var(--coral);color:#fff;border-color:var(--coral);}
.sl{font-family:'Manrope',sans-serif;font-size:0.65rem;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:var(--coral);margin-bottom:10px;display:block;}
.gl{width:54px;height:4px;background:var(--coral);border-radius:9px;margin-bottom:22px;}
.con{max-width:1240px;margin:0 auto;padding:0 52px;}
.card{background:#fff;border:1px solid var(--line);border-top:3px solid var(--coral);border-radius:12px;padding:28px 24px;box-shadow:0 10px 28px rgba(16,42,67,0.06);transition:transform 0.2s,box-shadow 0.2s;}
.card:hover{transform:translateY(-5px);box-shadow:0 16px 34px rgba(16,42,67,0.1);}
.ph{background:#E4EDE8!important;padding:88px 52px 68px;position:relative;overflow:hidden;}
.ph::before{display:none;}
.ph .bc{font-family:'Manrope',sans-serif;font-size:0.65rem;letter-spacing:0.1em;color:#688276;margin-bottom:14px;text-transform:uppercase;}
.ph h1{color:var(--ink);font-size:clamp(2rem,4vw,3.4rem);font-weight:400;line-height:1.1;position:relative;z-index:2;}
.ph h1 em{color:#557467;}
.skip-link{position:absolute;left:16px;top:-48px;background:var(--coral);color:#fff;padding:10px 16px;font-family:'Manrope',sans-serif;font-weight:700;z-index:2000;}
.brand-logo{width:56px;height:56px;object-fit:contain;display:block;flex-shrink:0;}
.brand-lockup{display:flex;align-items:center;gap:12px;}
.brand-name{font-family:'DM Serif Display',serif;font-size:1.35rem;color:var(--ink);line-height:1;}
.brand-subtitle{font-family:'Manrope',sans-serif;font-size:0.47rem;letter-spacing:0.1em;color:#A88742;text-transform:uppercase;margin-top:6px;white-space:nowrap;}
.modern-nav .nav-main{padding-top:10px!important;padding-bottom:10px!important;}
.modern-nav .nav-links{padding:8px 10px;border-radius:999px;gap:16px!important;}
.modern-nav .nav-links .btn-p{padding:10px 18px!important;}
.modern-nav{color:var(--ink);}
.modern-nav .nav-main{background:rgba(255,255,255,0.94);backdrop-filter:blur(14px);}
.modern-nav .nav-main>div>div>div:last-child{color:var(--ink)!important;}
.modern-nav .nav-links span{color:var(--ink)!important;}
.modern-nav .nav-links span[style*="C9A84C"]{color:var(--coral)!important;}
.modern-nav .nav-toggle{border-color:var(--coral);color:var(--coral);}
.modern-nav .nav-links{background:#fff;}
.modern-nav .nav-utility{background:var(--mint)!important;}
.modern-nav .nav-utility span{color:var(--ink)!important;}
.modern-nav .nav-utility span[style*="071429"]{background:var(--ink)!important;color:#fff!important;}
.modern-nav .top-join{background:var(--coral)!important;color:#fff!important;border-radius:999px;padding:7px 16px!important;box-shadow:0 5px 12px rgba(174,48,64,0.22);}
.modern-nav .utility-label{font-weight:800!important;letter-spacing:0.04em;}
.modern-home-grid>div>div,.modern-partner-grid>div{background:#fff!important;}
.modern-callout{background:var(--coral-soft)!important;right:9%!important;bottom:28px!important;z-index:3;}
.modern-hero-mark{position:absolute;right:9%;top:23%;width:360px;height:430px;background:rgba(255,255,255,0.72);border:1px solid rgba(25,50,74,0.1);border-radius:28px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 26px 60px rgba(25,50,74,0.12);transform:rotate(3deg);}
.modern-hero-mark::before{content:'';position:absolute;inset:14px;border:1px solid rgba(201,79,69,0.2);border-radius:20px;}
.modern-hero-mark img{width:285px;height:285px;object-fit:contain;position:relative;z-index:1;}
.modern-hero-mark-label{font-family:'Manrope',sans-serif;font-size:0.64rem;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:var(--ink);position:relative;z-index:1;margin-top:8px;}
.modern-hero-mark-line{width:42px;height:3px;background:var(--coral);border-radius:9px;margin:12px 0 0;position:relative;z-index:1;}
.modern-stat-grid{background:var(--mint)!important;border-top-color:rgba(25,50,74,0.08)!important;}
.modern-stat-grid>div{border-right-color:rgba(25,50,74,0.1)!important;}
.modern-stat-grid>div>div:first-child{color:var(--coral)!important;}
.modern-stat-grid>div>div:last-child{color:var(--ink)!important;}
.modern-ecosystem{background:#F3F4F2!important;}
.modern-ecosystem h2{color:var(--ink)!important;}
.modern-ecosystem> .con>p{color:var(--slate)!important;}
.modern-ecosystem .modern-partner-grid>div{background:#fff!important;border-top-color:var(--coral)!important;color:var(--ink)!important;}
.modern-ecosystem .modern-partner-grid>div div{color:var(--ink)!important;}
.modern-ecosystem .modern-partner-grid>div span{color:var(--slate)!important;}
.modern-ecosystem .modern-partner-grid>div>div:first-child{color:var(--coral)!important;}
.modern-cta{background:#DCEBE5!important;}
.modern-cta h2,.modern-cta p{color:var(--ink)!important;}
.modern-cta button:first-child{background:var(--ink)!important;color:#fff!important;}
.modern-cta button:last-child{border-color:var(--ink)!important;color:var(--ink)!important;}
.partnership-heading{color:var(--ink)!important;}
.partnership-heading em{color:var(--coral)!important;}
.partnership-card{background:#fff!important;color:var(--ink)!important;border-top-color:var(--coral)!important;}
.partnership-card h3{color:var(--ink)!important;}
.partnership-card p{color:var(--slate)!important;}
.partnership-card .partner-name{color:var(--coral)!important;}
.partnership-hierarchy{background:var(--ink)!important;}
.services-intro{grid-template-columns:1fr 1.25fr!important;}
.services-categories{grid-template-columns:repeat(3,1fr)!important;gap:12px!important;align-content:start;}
.services-categories>div{background:transparent!important;border:0;}
.services-category{background:var(--mint);border:1px solid rgba(25,50,74,0.1);border-radius:10px;text-align:left;min-height:70px;padding:14px 16px;font-family:'Manrope',sans-serif;font-size:0.72rem;font-weight:800;letter-spacing:0.03em;color:var(--ink);cursor:pointer;transition:background 0.2s,transform 0.2s,border-color 0.2s;}
.services-category:hover{transform:translateY(-2px);border-color:var(--coral);}
.services-category.active{background:var(--ink);color:#fff;border-color:var(--ink);box-shadow:0 8px 16px rgba(25,50,74,0.14);}
.service-results-heading{display:flex;align-items:end;gap:18px;flex-wrap:wrap;margin:0 0 22px;padding-top:8px;scroll-margin-top:120px;}
.service-results-heading .sl{margin:0;flex-basis:100%;}
.service-results-heading h2{font-size:clamp(1.5rem,2.6vw,2rem);color:var(--ink);}
.service-results-heading button{border:0;background:transparent;color:var(--coral);font-family:'Manrope',sans-serif;font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;cursor:pointer;padding:0 0 4px;border-bottom:1px solid var(--coral);}
.membership-modal{position:fixed;inset:0;z-index:1200;background:rgba(25,50,74,0.58);display:flex;align-items:center;justify-content:center;padding:22px;}
.membership-form{position:relative;background:#fff;width:min(560px,100%);max-height:calc(100vh - 44px);overflow:auto;border-top:4px solid var(--coral);border-radius:16px;padding:34px;box-shadow:0 24px 70px rgba(25,50,74,0.24);}
.membership-form-close{position:absolute;top:16px;right:18px;border:0;background:transparent;color:var(--ink);font-size:1.8rem;line-height:1;cursor:pointer;}
.membership-form h2,.membership-success h2{font-size:clamp(1.7rem,3vw,2.3rem);color:var(--ink);margin-bottom:8px;}
.membership-form-intro{color:var(--slate);margin-bottom:22px;}
.membership-form label{display:block;color:var(--ink);font-family:'Manrope',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:14px;}
.membership-form input,.membership-form textarea{display:block;width:100%;margin-top:7px;border:1px solid var(--line);border-radius:8px;background:var(--paper);padding:11px 12px;color:var(--ink);font:500 0.9rem 'Manrope',sans-serif;outline:none;}
.membership-form input:focus,.membership-form textarea:focus{border-color:var(--coral);box-shadow:0 0 0 3px var(--coral-soft);}
.membership-form textarea{resize:vertical;margin-bottom:8px;}
.membership-success p{color:var(--slate);margin:0 0 24px;}
.membership-links{display:grid;gap:10px;margin-top:20px;}
.membership-link{display:flex;justify-content:space-between;align-items:center;gap:16px;border:1px solid var(--line);border-radius:10px;background:var(--paper);padding:14px 16px;color:var(--ink);font:700 0.78rem 'Manrope',sans-serif;transition:transform 0.2s,border-color 0.2s,background 0.2s;}
.membership-link:hover{transform:translateY(-2px);border-color:var(--coral);background:var(--coral-soft);}
.membership-link span{color:var(--coral);font-size:0.65rem;letter-spacing:0.04em;text-transform:uppercase;white-space:nowrap;}
.membership-contact-note{background:var(--paper);border-radius:10px;padding:18px;margin-top:20px;}
.membership-contact-note p{color:var(--slate);font-size:0.9rem;margin-bottom:18px;}
.membership-includes{background:#fff;border:1px solid var(--line);border-top:3px solid var(--coral);border-radius:12px;padding:28px 24px;box-shadow:0 10px 28px rgba(16,42,67,0.06);}
.membership-join-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;padding:0;list-style-position:inside;color:var(--ink);}
.membership-join-steps li{background:#fff;border:1px solid var(--line);border-top:4px solid #C9A84C;border-radius:12px;padding:24px;min-width:0;box-shadow:0 10px 28px rgba(16,42,67,0.06);}
.membership-join-steps li::marker{color:var(--coral);font-weight:800;}
.membership-join-steps p{color:var(--slate);margin-top:8px;}
.about-work-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;align-items:stretch;}
.about-work-card{display:flex;flex-direction:column;align-items:flex-start;}
.about-work-card .btn-p{margin-top:auto;}
.about-context-columns{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:40px;align-items:start;}
.about-context-columns>div{border-top:1px solid var(--line);padding-top:26px;}
.about-values-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 16px;}
.about-values-grid .card{border-top:4px solid #C9A84C;}
.about-network-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:40px;align-items:start;}
.resource-card{cursor:default!important;}
.resource-access{border:0;background:transparent;color:var(--coral);font-family:'Manrope',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;padding:0;cursor:pointer;}
.resource-access:hover{text-decoration:underline;}
.resource-access:focus-visible{outline:2px solid var(--coral);outline-offset:4px;}
.product-preview{height:260px;border-radius:12px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:22px;}
.product-preview img{width:100%;height:100%;object-fit:contain;display:block;}
.product-preview-fallback{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:var(--slate);}
.product-preview-fallback span{font-size:3.5rem;}
.product-preview-fallback small{font:700 0.62rem 'Manrope',sans-serif;letter-spacing:0.08em;text-transform:uppercase;}
.newsroom-intro{display:grid;grid-template-columns:1.4fr 0.8fr;gap:28px;align-items:end;margin-bottom:34px;}
.newsroom-intro h2{font-size:clamp(1.8rem,3vw,2.5rem);color:var(--ink);line-height:1.15;margin-bottom:12px;}
.newsroom-intro p{color:var(--slate);max-width:650px;}
.newsroom-note{background:var(--mint);border-left:4px solid var(--coral);padding:20px 22px;display:grid;gap:8px;color:var(--ink);}
.newsroom-note strong{font:800 0.68rem 'Manrope',sans-serif;letter-spacing:0.1em;text-transform:uppercase;}
.newsroom-note span{font-size:0.84rem;line-height:1.6;color:var(--slate);}
.newsroom-controls{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:34px;}
.featured-article{display:grid;grid-template-columns:1.4fr 0.6fr;gap:28px;align-items:stretch;background:var(--ink);border-radius:16px;padding:34px 38px;margin-bottom:42px;overflow:hidden;box-shadow:0 16px 34px rgba(25,50,74,0.12);}
.featured-article-copy h2{color:#fff;font-size:clamp(1.6rem,3vw,2.4rem);line-height:1.15;margin-bottom:12px;}
.featured-article-copy p{color:rgba(255,255,255,0.76);max-width:680px;margin-bottom:16px;}
.featured-article-copy .article-meta{color:rgba(255,255,255,0.55);margin-bottom:22px;}
.featured-article-mark{display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.2);color:var(--coral);font:800 clamp(1.2rem,3vw,2rem) 'Manrope',sans-serif;letter-spacing:0.1em;transform:rotate(3deg);}
.featured-article-mark span{display:block;font:400 0.65rem 'Manrope',sans-serif;letter-spacing:0.16em;color:rgba(255,255,255,0.58);margin-top:10px;}
.featured-article-image{width:100%;height:100%;min-height:220px;object-fit:cover;border-radius:12px;}
.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:20px;margin:0 0 20px;}
.article-section-heading h2{font-size:clamp(1.5rem,2.5vw,2rem);color:var(--ink);}
.article-section-heading>span{color:var(--slate);font:700 0.7rem 'Manrope',sans-serif;text-transform:uppercase;letter-spacing:0.06em;}
.article-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.article-card{min-height:240px;}
.article-meta{color:#9CA3AF;font:500 0.68rem 'Manrope',sans-serif;margin-bottom:14px;}
.article-archive{margin-top:58px;padding-top:34px;border-top:1px solid var(--line);}
.archive-months{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px;}
.archive-months button{border:1px solid var(--line);background:#fff;color:var(--ink);padding:10px 14px;border-radius:999px;font:700 0.68rem 'Manrope',sans-serif;cursor:pointer;}
.archive-months button:hover,.archive-months button.active{background:var(--ink);border-color:var(--ink);color:#fff;}
.archive-months .archive-reset{color:var(--coral);border-color:var(--coral);background:transparent;}
.archive-grid{margin-top:20px;}
.article-read-link{border:0;background:transparent;padding:0;color:var(--coral);font:800 0.68rem 'Manrope',sans-serif;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;}
.article-read-link:hover{text-decoration:underline;}
.article-modal{position:fixed;inset:0;z-index:1300;background:rgba(25,50,74,0.62);display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:70px 22px 40px;}
.article-reader{position:relative;background:#fff;width:min(820px,100%);border-radius:16px;overflow:hidden;box-shadow:0 24px 80px rgba(25,50,74,0.28);}
.article-reader-close{position:absolute;right:20px;top:18px;z-index:2;border:0;background:rgba(255,255,255,0.9);border-radius:50%;width:38px;height:38px;color:var(--ink);font-size:1.6rem;line-height:1;cursor:pointer;}
.article-reader-header{padding:42px 52px 30px;}
.article-reader-header h2{font-size:clamp(2rem,4vw,3.2rem);line-height:1.08;color:var(--ink);max-width:700px;margin-bottom:16px;}
.article-reader-image{display:block;width:100%;max-height:360px;object-fit:cover;}
.article-reader-placeholder{height:260px;background:linear-gradient(135deg,var(--ink),#31566A);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.85);font:800 1.7rem 'Manrope',sans-serif;letter-spacing:0.08em;}
.article-reader-placeholder span{font:400 0.72rem 'Manrope',sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:var(--coral);margin-left:12px;}
.article-reader-body{padding:38px 52px 18px;color:var(--slate);font-size:1.02rem;line-height:1.85;}
.article-reader-lead{font-size:1.2rem;line-height:1.7;color:var(--ink);}
.article-reader-rule{height:1px;background:var(--line);margin:26px 0;}
.article-reader-footer{display:flex;justify-content:space-between;align-items:center;gap:18px;flex-wrap:wrap;border-top:1px solid var(--line);padding:22px 52px 30px;color:var(--slate);font:500 0.72rem 'Manrope',sans-serif;}
.shop-webinars{border-radius:16px;box-shadow:0 16px 34px rgba(25,50,74,0.12);}
.services-categories .services-category-intro{grid-column:1/-1;background:transparent!important;border:0;display:block;min-height:0;padding:0 0 4px;}
footer{background:var(--ink)!important;}
.skip-link:focus{top:16px;}
.nav-toggle{display:none;border:1px solid rgba(201,168,76,0.6);background:transparent;color:#C9A84C;padding:8px 11px;font-family:'Barlow',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;}
.about-nav-item{position:relative;display:flex;align-items:center;gap:5px;}
.about-nav-trigger,.about-nav-toggle{border:0;background:transparent;font-family:'Barlow',sans-serif;font-size:0.7rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;padding:0 0 2px;}
.about-nav-toggle{font-size:0.8rem;padding:0 3px;}
.about-dropdown{position:absolute;top:100%;left:-16px;min-width:245px;padding:8px;background:#fff;border:1px solid var(--line);border-top:3px solid #C9A84C;border-radius:0 0 10px 10px;box-shadow:0 14px 28px rgba(7,28,44,0.18);display:grid;gap:2px;z-index:1001;}
.about-dropdown button{border:0;background:transparent;text-align:left;padding:12px 14px;color:var(--ink);font:700 0.72rem 'Barlow',sans-serif;letter-spacing:0.04em;text-transform:uppercase;cursor:pointer;}
.about-dropdown button:hover,.about-dropdown button:focus-visible{background:var(--coral-soft);color:var(--ink);}
.about-dropdown button:focus-visible,.about-nav-trigger:focus-visible{outline:2px solid var(--coral);outline-offset:3px;}
@media(max-width:980px){
  .nav-utility{padding:6px 22px!important;}
  .nav-utility-copy{display:none;}
  .nav-main{padding:14px 22px!important;}
  .nav-toggle{display:block;}
  .nav-links{display:none!important;position:absolute;top:100%;left:0;right:0;background:var(--ink-deep);padding:10px 22px 22px;border-top:1px solid rgba(255,107,87,0.28);box-shadow:0 14px 28px rgba(7,28,44,0.28);}
  .nav-links.open{display:flex!important;flex-direction:column;align-items:stretch;gap:0!important;}
  .nav-links.open span{padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.08);}
  .nav-links.open button{margin-top:14px;}
  .about-nav-item{width:100%;flex-wrap:wrap;gap:0;border-bottom:1px solid rgba(255,255,255,0.08);}
  .about-nav-trigger{flex:1;padding:14px 0;text-align:left;color:#fff!important;}
  .about-nav-toggle{padding:14px 4px;}
  .about-nav-toggle{color:#fff!important;}
  .about-nav-item.active .about-nav-trigger,.about-nav-item.active .about-nav-toggle{color:#C9A84C!important;}
  .about-dropdown{position:static;min-width:0;margin:0 0 10px;padding:4px;background:rgba(255,255,255,0.06);border:0;border-left:2px solid #C9A84C;border-radius:0;box-shadow:none;}
  .about-dropdown button{background:transparent!important;color:#fff!important;padding:12px 14px;}
  .about-dropdown button:hover,.about-dropdown button:focus-visible{background:rgba(255,255,255,0.1)!important;color:#fff!important;}
}
@media(max-width:980px){.modern-home-grid{grid-template-columns:1fr!important;}.modern-partner-grid,.homepage-insight-grid{grid-template-columns:1fr!important;}.modern-stat-grid{grid-template-columns:repeat(2,1fr)!important;}.services-intro{grid-template-columns:1fr!important;}.services-categories{grid-template-columns:repeat(2,1fr)!important;}.shop-webinars>div{grid-template-columns:1fr!important;}.newsroom-intro,.featured-article{grid-template-columns:1fr;}.article-grid{grid-template-columns:repeat(2,1fr);}.article-reader-header,.article-reader-body{padding-left:30px;padding-right:30px;}.article-reader-footer{padding-left:30px;padding-right:30px;}}
@media(max-width:1100px){.modern-hero-mark{right:4%;width:290px;height:350px;}.modern-hero-mark img{width:220px;height:220px;}.modern-hero .con>div:first-child{width:62%;max-width:700px;}}
@media(max-width:768px){.con{padding:0 22px;}.ph{padding:64px 22px 44px;}.nav-brand-sub{display:none;}.modern-hero{padding-top:150px!important;min-height:860px!important;}.modern-hero .con>div:first-child{width:100%!important;max-width:none!important;margin:0;text-align:left!important;}.modern-hero .con>div:first-child>div{justify-content:flex-start;}.modern-callout{right:22px!important;bottom:34px!important;}.modern-hero h1{font-size:clamp(2.55rem,13vw,4rem)!important;}.modern-stat-grid>div{padding:20px 8px!important;}.modern-hero-mark{top:auto;right:22px;bottom:150px;width:190px;height:230px;transform:rotate(2deg);}.modern-hero-mark img{width:155px;height:155px;}.modern-hero-mark-label{font-size:0.48rem;}.modern-hero-mark-line{margin-top:7px;}.modern-mandate-cards,.about-work-grid,.about-context-columns,.about-values-grid,.about-network-grid{grid-template-columns:1fr!important;}.homepage-membership-cards{grid-template-columns:repeat(2,minmax(0,1fr))!important;}.membership-join-steps{grid-template-columns:1fr;}}
`;

// NAV
function Nav({ cur, go }) {
  const [sc, setSc] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
  }, [cur]);

  const aboutPages = [
    ["representation","Representation"],
    ["collectivebargaining","Collective Bargaining"],
    ["advocacy","Advocacy and Lobbying"],
    ["team","Meet the Team"],
  ];
  const isAboutPage = aboutPages.some(([id]) => id === cur);
  const navigateAbout = id => {
    setAboutOpen(false);
    setMobileOpen(false);
    go(id);
  };

  const links = [
    ["home","Home"],["services","How We Support"],["membership","Membership"],
    ["resourcehub","Resources"],["shop","Shop"],["newsroom","Employer Voice"],["partnerships","Partners"],
  ];

  return (
    <nav className={`modern-nav ${sc||cur!=="home" ? "solid" : "transparent"}`} style={{ position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc||cur!=="home"?"#071429":"transparent",transition:"background 0.4s",borderBottom:sc?"1px solid rgba(201,168,76,0.2)":"none" }}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="nav-utility" style={{ background:"#C9A84C",padding:"6px 48px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <span className="nav-utility-copy" style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:600,color:"#071429" }}>
          Mon–Fri: 07:30–16:30 &nbsp;|&nbsp; info@saueo.co.za &nbsp;|&nbsp; Standing with South African employers since 1998.
        </span>
        <div style={{ display:"flex",gap:14,alignItems:"center" }}>
          <a className="utility-label" href="https://portal.saueo.co.za/login" target="_blank" rel="noreferrer" style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,color:"#071429" }}>Portal login</a>
          <span className="top-join" onClick={()=>go("membership")} style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,background:"#071429",color:"#C9A84C",padding:"4px 14px",cursor:"pointer" }}>Join (SA)UEO</span>
        </div>
      </div>
      <div className="nav-main" style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 48px",position:"relative" }}>
        <div onClick={()=>go("home")} style={{ cursor:"pointer",minWidth:0 }}>
          <div className="brand-lockup">
            <img src={`${process.env.PUBLIC_URL}/saueo-logo-transparent2.png`} alt="(SA)UEO logo" className="brand-logo" />
            <div><div className="brand-name">(SA)UEO</div><div className="brand-subtitle">South African United Commercial & Allied Employers' Organisation</div></div>
          </div>
        </div>
        <button className="nav-toggle" aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={()=>setMobileOpen(open=>!open)}>{mobileOpen ? "Close" : "Menu"}</button>
        <div id="primary-navigation" className={`nav-links${mobileOpen ? " open" : ""}`} style={{ display:"flex",gap:18,alignItems:"center" }}>
          {links.slice(0,1).map(([id,label])=>(
            <span key={id} onClick={()=>go(id)} style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.7rem",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:cur===id?"#C9A84C":"#fff",cursor:"pointer",borderBottom:cur===id?"2px solid #C9A84C":"2px solid transparent",paddingBottom:2,transition:"color 0.2s" }}>{label}</span>
          ))}
          <div
            className={`about-nav-item${isAboutPage?" active":""}`}
            onMouseEnter={()=>{ if (window.matchMedia("(hover: hover)").matches) setAboutOpen(true); }}
            onMouseLeave={()=>{ if (window.matchMedia("(hover: hover)").matches) setAboutOpen(false); }}
          >
            <button
              className="about-nav-trigger"
              type="button"
              onClick={()=>navigateAbout("about")}
              aria-current={cur==="about"?"page":undefined}
              style={{ color:isAboutPage?"#C9A84C":"#19324A",borderBottom:isAboutPage?"2px solid #C9A84C":"2px solid transparent",transition:"color 0.2s" }}
            >
              About Us
            </button>
            <button
              className="about-nav-toggle"
              type="button"
              aria-label={`${aboutOpen ? "Close" : "Open"} About Us menu`}
              aria-expanded={aboutOpen}
              aria-controls="about-subnavigation"
              onClick={()=>setAboutOpen(open=>!open)}
              onKeyDown={event=>{ if (event.key === "Escape") setAboutOpen(false); }}
              style={{ color:isAboutPage?"#C9A84C":"#19324A" }}
            >
              <span aria-hidden="true">{aboutOpen ? "⌃" : "⌄"}</span>
            </button>
            {aboutOpen && (
              <div id="about-subnavigation" className="about-dropdown" aria-label="About Us pages">
                {aboutPages.map(([id,label])=>(
                  <button key={id} type="button" onClick={()=>navigateAbout(id)} aria-current={cur===id?"page":undefined}>{label}</button>
                ))}
              </div>
            )}
          </div>
          {links.slice(1).map(([id,label])=>(
            <span key={id} onClick={()=>go(id)} style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.7rem",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:cur===id?"#C9A84C":"#fff",cursor:"pointer",borderBottom:cur===id?"2px solid #C9A84C":"2px solid transparent",paddingBottom:2,transition:"color 0.2s" }}>{label}</span>
          ))}
          <button className="btn-p" onClick={()=>go("contact")} style={{ fontSize:"0.66rem",padding:"9px 18px" }}>Get Help</button>
        </div>
      </div>
    </nav>
  );
}

// HOME
function Home({ go }) {
  return (
    <div>
      <div className="modern-hero" style={{ minHeight:760,background:"linear-gradient(135deg,#F7F9F8 0%,#EAF3F0 62%,#DDEBE6 100%)",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",padding:"150px 0 64px" }}>
        <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)",backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute",top:"8%",right:"-4%",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
        <div className="con" style={{ position:"relative",zIndex:2 }}>
          <div style={{ maxWidth:800,width:"72%",textAlign:"left" }}>
            <span className="sl" style={{ textTransform:"none",letterSpacing:"0.04em" }}>Since 1998 · Registered with the Department of Employment and Labour</span>
            <h1 style={{ color:"#19324A",fontSize:"clamp(2.5rem,4.2vw,4rem)",fontWeight:900,lineHeight:1.08,marginBottom:22 }}>
              You carry more than<br /><em style={{ color:"#688276" }}>a business.</em>
            </h1>
            <p style={{ color:"#52616D",fontSize:"1.1rem",lineHeight:1.8,maxWidth:560,marginBottom:14,fontStyle:"italic",fontFamily:"'DM Serif Display',serif" }}>
              Behind every business is a livelihood. Often several.
            </p>
            <p style={{ color:"#52616D",fontSize:"1.1rem",lineHeight:1.8,maxWidth:740,margin:"0 auto 32px",padding:"12px 0 12px 18px",borderLeft:"3px solid #C9A84C" }}>
              As an employer, you carry livelihoods, communities and a part of our economy. You also carry the consequences when a workplace decision is challenged, an industry agreement changes your wage bill or a new rule adds to what your business must do.
            </p>
            <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
              <button className="btn-p" onClick={()=>go("membership")}>Find Your Membership</button>
              <button className="btn-o" onClick={()=>go("about")}>About (SA)UEO</button>
            </div>
          </div>
        </div>
        <div className="modern-hero-mark" aria-label="(SA)UEO 25 years emblem">
          <img src={`${process.env.PUBLIC_URL}/saueo-logo-transparent2.png`} alt="(SA)UEO 25 years emblem" />
          <div className="modern-hero-mark-label">Since 1998</div>
          <div className="modern-hero-mark-line" />
        </div>
      </div>

      <div className="modern-stat-grid" style={{ background:"#102A43",display:"grid",gridTemplateColumns:"repeat(4,1fr)",borderTop:"1px solid rgba(255,107,87,0.25)",margin:"24px 0" }}>
        {[["Since 1998",""],["Registered","With the Department of Employment and Labour"],["More than 200","Active Organisers"],["41 sectors","Represented in our membership"]].map(([n,l],i)=>(
          <div key={i} style={{ textAlign:"center",padding:"24px 16px",borderRight:i<3?"1px solid rgba(201,168,76,0.12)":"none" }}>
            <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"2.6rem",fontWeight:900,color:"#C9A84C",lineHeight:1 }}>{n}</div>
            {l && <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"#9CA3AF",marginTop:6 }}>{l}</div>}
          </div>
        ))}
      </div>

      <div style={{ padding:"72px 0",background:"#F3F4F2" }}>
        <div className="con">
          <div className="modern-home-grid" style={{ display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:40,alignItems:"center" }}>
            <div>
              <span className="sl">The Collective Behind the Voice</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:18 }}>Your business is one of many carrying these pressures.</h2>
              <p style={{ color:"#4A5568",marginBottom:20,lineHeight:1.8 }}>An employer can explain what a change means inside one workplace. A collective can show how the same issue reaches businesses of different sizes and sectors. That gives (SA)UEO a firmer basis for the positions it takes and makes it accountable for whom it says it represents.</p>
            </div>
            <div>
              <p style={{ color:"#4A5568",margin:"0 0 12px",fontWeight:600 }}>Our 2025/26 membership audit recorded:</p>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:0,background:"#E2F0EA",borderRadius:12,padding:16 }}>
                {[["4,445","member businesses"],["224,000+","people employed by members"],["41","sectors"],["R28.7 billion+","in annual economic activity"]].map(([n,l],i)=>(
                  <div key={i} style={{ background:"#fff",padding:"22px 20px",minWidth:0,borderRight:i%2===0?"1px solid rgba(25,50,74,0.16)":"none",borderBottom:i<2?"1px solid rgba(25,50,74,0.16)":"none" }}>
                    <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.45rem,2.5vw,2rem)",fontWeight:900,color:"#688276",lineHeight:1.1,marginBottom:10,overflowWrap:"anywhere" }}>{n}</div>
                    <div style={{ fontSize:"0.78rem",color:"#52616D",lineHeight:1.5 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p style={{ color:"#4A5568",lineHeight:1.8,margin:"28px 0 0" }}>These figures show the breadth of the employers whose realities (SA)UEO has a duty to understand. A credible collective voice starts with knowing who stands behind it.</p>
          <details open style={{ borderTop:"1px solid rgba(25,50,74,0.16)",borderBottom:"1px solid rgba(25,50,74,0.16)",marginTop:24,padding:"16px 0" }}>
            <summary style={{ cursor:"pointer",fontSize:"0.84rem",fontWeight:700,color:"#19324A" }}>How these figures were calculated</summary>
            <p style={{ color:"#4A5568",fontSize:"0.88rem",lineHeight:1.8,margin:"18px 0 0" }}>The 2025/26 audit identified 4,445 member businesses across 41 sectors. Employment and economic activity totals include only information that could be verified from member records. Where records were incomplete, no figures were assumed. The totals are therefore conservative and disclose no individual business.</p>
          </details>
        </div>
      </div>

      <div style={{ padding:"88px 0",background:"#E4EDE8" }}>
        <div className="con">
          <span className="sl">The Mandate</span>
          <div className="gl" />
          <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:18,maxWidth:850 }}>Four ways we work for employers. One collective employer voice.</h2>
          <p style={{ color:"#4A5568",marginBottom:26,lineHeight:1.8,maxWidth:900 }}>Different decisions call for different forms of action. A dispute may require formal representation. A sector agreement may require an employer's circumstances to be heard at a bargaining table. A proposed regulation may need a clear account of what it would take to apply inside a business. A new legal requirement may need to be identified and met before an inspector or a dispute tests it.</p>
          <button className="btn-p" onClick={()=>go("about")} style={{ marginBottom:30 }}>About (SA)UEO</button>
          <div className="modern-mandate-cards" style={{ display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:22 }}>
              {[
                { i:"⚖️",t:"Representation",d:"When a workplace matter enters a formal process, (SA)UEO represents eligible members at the CCMA, in bargaining councils and in other labour forums, subject to the rules of each forum." },
                { i:"🏛️",t:"Collective Bargaining",d:"Where (SA)UEO participates in a bargaining structure, we put the circumstances of the employers we represent before the parties negotiating sector terms." },
                { i:"📊",t:"Advocacy and Lobbying",d:"We gather employer insight, test it against credible evidence and engage on policy and regulatory issues that affect the way businesses employ people." },
                { i:"📋",t:"Compliance",d:"Labour law and statutory requirements change, and the obligation to meet them sits with the employer. (SA)UEO helps members understand what applies to their workplace, identify gaps through a compliance checklist and address them with their organiser, so that an inspection, a dispute or a penalty does not find them first." },
              ].map((p,i)=>(
                <div key={i} className="card" style={{ padding:"30px 28px",minHeight:230,borderTop:"4px solid #C9A84C" }}>
                  <div style={{ fontSize:"1.6rem",marginBottom:12 }}>{p.i}</div>
                  <h4 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",fontWeight:700,marginBottom:8,color:"#0B1E3E" }}>{p.t}</h4>
                  <p style={{ fontSize:"0.88rem",color:"#4A5568",lineHeight:1.65 }}>{p.d}</p>
                </div>
              ))}
            </div>
          <p style={{ color:"#4A5568",margin:"28px 0 0",lineHeight:1.8 }}>The purpose across all four is a stronger collective employer voice, grounded in members and facts we can substantiate.</p>
          <div className="modern-home-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:44,alignItems:"center",marginTop:60,padding:"40px",background:"#F3F4F2",borderRadius:16 }}>
            <div>
              <h3 style={{ fontSize:"clamp(1.55rem,2.5vw,2.1rem)",lineHeight:1.2,marginBottom:16 }}>Support before a matter becomes formal.</h3>
              <p style={{ color:"#4A5568",lineHeight:1.8,margin:0 }}>A labour issue rarely arrives in isolation. A staffing decision may be tied to cash flow. A new requirement may affect payroll, records and the way work is organised. Members need information while there is still time to consider what to do.</p>
            </div>
            <div style={{ background:"#E3F1EB",padding:"28px",borderRadius:12 }}>
              <p style={{ color:"#4A5568",lineHeight:1.8,marginBottom:20 }}>Heads-Up, employer alerts, webinars and practical resources help members understand changes and ask better questions earlier. When a matter reaches beyond labour relations, we can connect members with relevant knowledge and expertise.</p>
              <button className="btn-p" onClick={()=>go("resourcehub")}>Explore Resources</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding:"80px 0",background:"#F3F4F2" }}>
        <div className="con">
          <span className="sl">Membership</span>
          <div className="gl" />
          <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:18 }}>Membership starts before you need representation.</h2>
          <p style={{ color:"#4A5568",lineHeight:1.8,maxWidth:850,marginBottom:30 }}>An employers’ organisation is there for the decisions you face now as well as the matters that may arise later. Find the option that reflects your workplace. The support available under each option is explained before you apply.</p>
          <div className="homepage-membership-cards" style={{ display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:16 }}>
            {[
              ["Domestic Employers",false],
              ["Micro Employers",false],
              ["Small, Medium and Large Employers",true],
              ["NPOs",false],
              ["Agriculture Employers",false],
              ["Collaborative Membership",false],
            ].map(([name,popular])=>(
              <div key={name} style={{ background:"#fff",border:"1px solid rgba(25,50,74,0.14)",borderTop:popular?"4px solid #C9A84C":"3px solid #688276",borderRadius:12,padding:"24px 22px",minHeight:150,display:"flex",flexDirection:"column",alignItems:"flex-start",boxShadow:popular?"0 12px 28px rgba(25,50,74,0.1)":"0 8px 20px rgba(25,50,74,0.05)",position:"relative" }}>
                {popular && <span style={{ position:"absolute",top:12,right:14,fontFamily:"'Barlow',sans-serif",fontSize:"0.56rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase",color:"#80651F",background:"#F5E8BF",padding:"6px 8px",borderRadius:999 }}>Most popular</span>}
                <h3 style={{ fontSize:"1.15rem",lineHeight:1.35,marginBottom:"auto",paddingRight:popular?80:0 }}>{name}</h3>
                <button onClick={()=>go("membership")} style={{ border:0,background:"transparent",padding:0,marginTop:22,color:"#557467",fontFamily:"'Barlow',sans-serif",fontSize:"0.64rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer" }}>Find out more →</button>
              </div>
            ))}
          </div>
          <button className="btn-p" onClick={()=>go("membership")} style={{ marginTop:26 }}>Find Your Membership</button>
        </div>
      </div>

      <div style={{ padding:"64px 0",background:"#E4EDE8" }}>
        <div className="con">
          <div className="homepage-insight-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:24,alignItems:"stretch" }}>
            <div style={{ background:"#fff",border:"1px solid rgba(25,50,74,0.12)",borderTop:"4px solid #C9A84C",borderRadius:12,padding:"30px 32px",boxShadow:"0 10px 28px rgba(16,42,67,0.06)",display:"flex",flexDirection:"column" }}>
              <span className="sl">State of Business</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.55rem,2.4vw,2rem)",lineHeight:1.2,marginBottom:16 }}>Before we advocate, we listen.</h2>
              <p style={{ color:"#4A5568",lineHeight:1.75,marginBottom:16 }}>A requirement may look workable in a policy document and prove difficult in a business with five employees, a seasonal workforce or a narrow margin. We need employers to tell us where the pressure lies and what the proposed change would mean in practice.</p>
              <p style={{ color:"#4A5568",lineHeight:1.75,marginBottom:22 }}>The State of Business Survey helps us identify issues to investigate and build a more credible basis for advocacy and lobbying.</p>
              <button className="btn-p" onClick={()=>go("newsroom")} style={{ marginTop:"auto",alignSelf:"flex-start" }}>Why We Ask</button>
            </div>
            <div style={{ background:"#fff",border:"1px solid rgba(25,50,74,0.12)",borderTop:"4px solid #C9A84C",borderRadius:12,padding:"30px 32px",boxShadow:"0 10px 28px rgba(16,42,67,0.06)",display:"flex",flexDirection:"column" }}>
              <span className="sl">Employer Updates</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.55rem,2.4vw,2rem)",lineHeight:1.2,marginBottom:16 }}>Has a rule changed what you need to pay, record or do?</h2>
              <p style={{ color:"#4A5568",lineHeight:1.75,marginBottom:22 }}>An amended law, a new earnings threshold, an extended bargaining council agreement or a significant court judgment can affect decisions you make about people. Heads-Up and our employer alerts explain what has been proposed or changed, who it affects, when it applies and what to check in your business.</p>
              <button className="btn-p" onClick={()=>go("newsroom")} style={{ marginTop:"auto",alignSelf:"flex-start" }}>Read Employer Updates</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modern-ecosystem" style={{ background:"#E4EDE8",padding:"80px 0" }}>
        <div className="con">
          <span className="sl">Partnerships That Extend Member Value</span>
          <div className="gl" />
          <h2 style={{ color:"#fff",fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:14 }}>Complementary expertise, <em style={{ color:"#C9A84C" }}>within reach.</em></h2>
          <p style={{ color:"rgba(255,255,255,0.7)",marginBottom:32,maxWidth:620,lineHeight:1.8 }}>Carefully selected relationships extend member value beyond the core mandate, supporting business resilience and professional standards while (SA)UEO remains the constitutional anchor.</p>
          <div className="modern-partner-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:16 }}>
            {[
              { label:"Recalibrate",role:"Independent Strategic Partner",pts:["Business systems and pipelines","Service provider network","Operational enablement","Structurally separate"] },
              { label:"LLLRA",role:"Professional Standards",pts:["Labour-relations development","CPD and ethical discipline","Practitioner standards","Recognition wording pending"] },
            ].map((b,i)=>(
                <div key={i} style={{ background:"rgba(255,255,255,0.04)",padding:"24px 20px",borderTop:"3px solid #C9A84C" }}>
                <div style={{ width:58,height:58,background:"#E7EFEB",border:"1px solid rgba(25,50,74,0.14)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Manrope',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.04em",color:"#19324A",marginBottom:18 }}>{b.label}</div>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:4 }}>{b.label}</div>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"0.92rem",color:"#fff",marginBottom:14,lineHeight:1.35 }}>{b.role}</div>
                {b.pts.map((pt,j)=>(
                  <div key={j} style={{ display:"flex",gap:8,alignItems:"flex-start",marginBottom:8 }}>
                    <div style={{ width:5,height:5,background:"#C9A84C",borderRadius:"50%",marginTop:7,flexShrink:0 }} />
                    <span style={{ fontFamily:"'Crimson Pro',serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.75)",lineHeight:1.55 }}>{pt}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="btn-o" onClick={()=>go("partnerships")} style={{ marginTop:28 }}>Explore Partnerships</button>
        </div>
      </div>

      <div className="modern-cta" style={{ background:"#C9A84C",padding:"72px 0" }}>
        <div className="con" style={{ textAlign:"center" }}>
          <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.3rem)",color:"#071429",marginBottom:12 }}>Know who will stand <em>with your business.</em></h2>
          <p style={{ color:"#071429",fontSize:"1.05rem",maxWidth:560,margin:"0 auto 28px",lineHeight:1.75 }}>Explore the membership options or speak to us about the support relevant to your workplace.</p>
          <div style={{ display:"flex",gap:14,justifyContent:"center" }}>
            <button onClick={()=>go("membership")} style={{ background:"#071429",color:"#C9A84C",fontFamily:"'Barlow',sans-serif",fontWeight:800,fontSize:"0.72rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"13px 28px",border:"none",cursor:"pointer" }}>View Membership Options</button>
            <button onClick={()=>go("contact")} style={{ border:"2px solid #071429",color:"#071429",background:"transparent",fontFamily:"'Barlow',sans-serif",fontWeight:800,fontSize:"0.72rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"11px 26px",cursor:"pointer" }}>Contact Our Team</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// PARTNERSHIPS
function Partnerships() {
  const partners = [
    { name:"CIBA", role:"Financial & Governance Insight", text:"CIBA extends member value through financial advisory insight, governance support, and broader business intelligence. The relationship adds perspective around the commercial pressures that often sit behind workplace risk." },
    { name:"Recalibrate", role:"Independent Strategic Partner", text:"Recalibrate supports business systems, operational enablement, and access to a service provider network. It remains structurally separate from (SA)UEO's statutory representation mandate." },
    { name:"LLLRA", role:"Professional Standards", text:"LLLRA supports the development of professional standards, continuing development, ethical discipline, and practitioner capability in labour relations. Final recognition wording remains subject to confirmation." },
  ];

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Partnerships & Member Value</div>
        <h1>Complementary expertise.<br /><em>One stronger employer ecosystem.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F3F4F2" }}>
        <div className="con">
          <span className="sl">Partnerships & Member Value</span>
          <div className="gl" />
          <h2 className="partnership-heading" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:18 }}>The mandate stays clear.<br /><em style={{ color:"#C9A84C" }}>The ecosystem goes further.</em></h2>
          <p style={{ color:"#4A5568",maxWidth:700,marginBottom:46 }}>Partnerships bring complementary expertise within members' reach. They strengthen the wider business environment around organised employer representation without being presented as part of (SA)UEO's three core mandate functions.</p>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
            {partners.map((p,i)=>(
              <div key={i} className="card partnership-card" style={{ minHeight:280 }}>
                <div style={{ width:72,height:72,background:"#E7EFEB",border:"1px solid rgba(25,50,74,0.14)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Manrope',sans-serif",fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.06em",color:"#19324A",marginBottom:22 }}>{p.name}</div>
                <div className="partner-name" style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:6 }}>Member value partner</div>
                <h3 style={{ fontSize:"1.12rem",lineHeight:1.35,marginBottom:12 }}>{p.role}</h3>
                <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div className="partnership-hierarchy" style={{ background:"#0B1E3E",padding:"30px 34px",marginTop:42,display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,flexWrap:"wrap" }}>
            <div>
              <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.64rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:8 }}>The hierarchy</div>
              <p style={{ color:"rgba(255,255,255,0.75)",fontSize:"0.95rem",lineHeight:1.7,margin:0,maxWidth:700 }}>Representation, Collective Bargaining, and Employer Advocacy remain the core (SA)UEO mandate. Partnerships extend member value around that foundation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ABOUT
function About({ go }) {
  return (
    <div>
      <div className="ph">
        <div className="bc">Home / About Us</div>
        <h1>An organisation with<br /><em>substance behind the words.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F3F4F2" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"5fr 4fr",gap:56,alignItems:"start" }}>
            <div>
              <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)",marginBottom:20,lineHeight:1.2 }}>Behind every mandate is a member.</h2>
              <p style={{ color:"#4A5568",marginBottom:20 }}>If an organisation says it speaks for employers, it should be able to say who they are, what authority it holds and how its people are accountable. That matters when someone represents your business at a hearing. It matters just as much when they speak at a bargaining table or comment on a proposed law.</p>
              <p style={{ color:"#4A5568",marginBottom:28 }}>(SA)UEO was founded in 1998 and registered with the Department of Employment and Labour in 1999. We are an employers' organisation whose work rests on three responsibilities, Representation, Collective Bargaining, and Advocacy and Lobbying, and on a fourth that runs through all of them: helping members meet the legal and statutory requirements that govern employment. Our work must remain grounded in the members whose businesses and employees are affected by decisions made in those settings.</p>
              <button className="btn-p" onClick={()=>go("team")}>Meet Our Team</button>
            </div>
            <div style={{ display:"grid",gap:14 }}>
              {[
                { t:"Our vision",d:"To be a next-generation employers' organisation that empowers employers to adapt their workplaces effectively in the rapidly changing world of work." },
                { t:"Our mission",d:"To represent, strengthen and give voice to South African employers through professional representation, collective bargaining and evidence-led advocacy, while providing the guidance and support they need to build stronger, more sustainable businesses." },
                { t:"Our higher purpose",d:"To contribute to a stronger South African business environment by helping employers remain resilient, responsible and ready for change, while ensuring that their collective voice is heard where it matters." },
              ].map((v,i)=>(
                <div key={i} className="card">
                  <h3 style={{ fontFamily:"'Barlow',sans-serif",color:"#0B1E3E",fontSize:"0.95rem",fontWeight:700,marginBottom:10 }}>{v.t}</h3>
                  <p style={{ color:"#4A5568",fontSize:"0.9rem" }}>{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background:"#E4EDE8",padding:"80px 0" }}>
        <div className="con">
          <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:28 }}>What the four ways we work mean for an employer</h2>
          <div className="about-work-grid">
            {[
              { h:"Representation",d:"When a workplace matter becomes formal, the reason for a decision, the process followed and the records available may all be examined. (SA)UEO’s organisers represent eligible members at the CCMA, in bargaining councils and in other labour forums under the organisation’s mandate and the relevant forum rules.",button:"Read about representation →",page:"services" },
              { h:"Collective Bargaining",d:"Sector agreements can set wages, benefits and conditions employers must plan for. Where (SA)UEO participates in a bargaining structure, it brings the circumstances of its members into the negotiation. Those circumstances need to be heard before terms are settled.",button:"Read about collective bargaining →",page:"services" },
              { h:"Advocacy and Lobbying",d:"Proposed laws and regulations can have costs and practical consequences that are difficult to see on paper. We listen to employers, develop positions from evidence we can substantiate and use available channels to engage decision-makers.",button:"Read about advocacy and lobbying →",page:"services" },
              { h:"Compliance",d:"Labour law and statutory requirements change, and the obligation to meet them sits with the employer. (SA)UEO helps members understand what applies to their workplace, identify gaps through a compliance checklist and address them with their organiser, so that an inspection, a dispute or a penalty does not find them first.",button:"Resources for compliance →",page:"resourcehub" },
            ].map((b,i)=>(
              <div key={i} className="card about-work-card" style={{ borderTop:"4px solid #C9A84C" }}>
                <h3 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",fontWeight:800,color:"#19324A",marginBottom:12 }}>{b.h}</h3>
                <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.7,marginBottom:22 }}>{b.d}</p>
                <button className="btn-p" onClick={()=>go(b.page)}>{b.button}</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding:"88px 0",background:"#F3F4F2" }}>
        <div className="con">
          <div className="about-context-columns">
            <div>
              <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)",marginBottom:20,lineHeight:1.2 }}>Members need help before a matter reaches a forum.</h2>
              <p style={{ color:"#4A5568",marginBottom:20 }}>By the time a dispute is lodged, the decision and much of the process behind it may already have happened. An employer may need guidance earlier: when a legal requirement changes, a manager is unsure of a procedure or a difficult staffing decision is taking shape.</p>
              <p style={{ color:"#4A5568",marginBottom:28 }}>That is why representation sits alongside employer alerts, practical guidance, webinars and resources. These help members understand what has changed and what to check. The organiser remains the person who can help apply that information to the facts of a particular workplace.</p>
              <button className="btn-p" onClick={()=>go("membership")}>Explore Membership Support</button>
            </div>
            <div>
              <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)",marginBottom:20,lineHeight:1.2 }}>Most of our members run smaller workplaces.</h2>
              <p style={{ color:"#4A5568",marginBottom:20 }}>In the 2025/26 audit, 82% of members employed fewer than 50 people. In a small business, the person dealing with a labour question may also be responsible for payroll, customers and keeping the day’s work moving. That reality must inform the support we provide and the positions we take.</p>
              <p style={{ color:"#4A5568" }}>The audit recorded 4,445 member businesses across 41 sectors. No single sector accounted for more than 12% of the membership. Our responsibility is to hear the differences within that collective, not to pretend one employer’s circumstances fit all.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding:"80px 0",background:"#E4EDE8" }}>
          <div className="con">
            <h2 style={{ fontSize:"clamp(1.7rem,2.8vw,2.3rem)",marginBottom:14 }}>Values have to show in the work.</h2>
            <p style={{ color:"#4A5568",marginBottom:28,maxWidth:900 }}>Members experience our values in a call returned, a matter prepared, a fact checked and a difficult answer given plainly. They matter only if they guide those choices.</p>
            <div className="about-values-grid">
              {[
                { t:"Empathy",d:"We listen to the full situation, including the business and the people affected by it." },
                { t:"Integrity",d:"We work from the law, the facts and information we can substantiate. We take responsibility for what we say and do." },
                { t:"Relationships",d:"We invest in knowing the members we represent and the organisers who work with them." },
                { t:"Innovation",d:"We improve our tools and ways of working where they make support more useful and reliable." },
                { t:"Optimism",d:"We take the pressures employers face seriously and look for the steps that are still open to them." },
              ].map((value,i)=>(
                <div key={i} className="card">
                  <h3 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",fontWeight:800,color:"#19324A",marginBottom:12 }}>{value.t}</h3>
                  <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.7 }}>{value.d}</p>
                </div>
              ))}
            </div>
            <h3 style={{ fontSize:"1.2rem",marginTop:28,marginBottom:12 }}>One discipline behind it all: defensible.</h3>
            <p style={{ color:"#4A5568",maxWidth:900 }}>Representation must be grounded in law and fact. Bargaining positions must reflect the employers we represent. Advocacy needs evidence. Information needs credible sources. Our own claims must withstand scrutiny. Credibility is earned in these choices.</p>
          </div>
      </div>

      <div style={{ padding:"80px 0",background:"#F3F4F2" }}>
          <div className="con">
            <div className="about-network-grid">
              <div>
                <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",lineHeight:1.2,marginBottom:16 }}>The person beside you has an organisation behind them.</h2>
                <p style={{ color:"#4A5568",marginBottom:20 }}>When you are making a difficult workplace decision, you need advice that takes the facts, the process and the possible consequences seriously. If the matter becomes formal, you need someone entitled and prepared to represent you. (SA)UEO invests in the organisers who carry that responsibility.</p>
                <p style={{ color:"#4A5568",marginBottom:18 }}>Our national network: more than 200 active organisers.</p>
                <details style={{ borderTop:"1px solid rgba(25,50,74,0.16)",borderBottom:"1px solid rgba(25,50,74,0.16)",padding:"16px 0" }}>
                  <summary style={{ cursor:"pointer",fontSize:"0.84rem",fontWeight:700,color:"#19324A" }}>What stands behind your organiser</summary>
                  <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.8,margin:"16px 0 0" }}>Organisers work within (SA)UEO’s national mandate, with access to Head Office support, labour-relations expertise and the knowledge of a wider network of practitioners.</p>
                </details>
              </div>
              <div>
                <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",lineHeight:1.2,marginBottom:16 }}>Raising the standard of labour relations practice</h2>
                <p style={{ color:"#4A5568" }}>(SA)UEO is a founding sponsor of the Labour Law and Labour Relations Association. Its registration process is under way. Organisers are earmarked to be among its first members and to pursue professional designation once the body and its designation process are formally in place. Until then, the standard is carried the way it always has been: by organisers who prepare carefully, work from the facts and the law, and keep learning.</p>
              </div>
            </div>
          </div>
      </div>

      <div style={{ padding:"64px 0",background:"#E4EDE8",borderTop:"1px solid rgba(25,50,74,0.12)" }}>
          <div className="con">
            <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.4rem)",marginBottom:12 }}>Know who will stand with your business.</h2>
            <p style={{ color:"#4A5568",marginBottom:24 }}>Explore the membership options or speak to us about the support relevant to your workplace.</p>
            <div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
              <button className="btn-p" onClick={()=>go("membership")}>Find Your Membership</button>
              <button className="btn-o" onClick={()=>go("contact")}>Talk to Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSubpage({ title, go }) {
  return (
    <div>
      <div className="ph">
        <div className="bc">Home / About Us / {title}</div>
        <h1>{title}</h1>
      </div>
      <section style={{ padding:"88px 0",background:"#F3F4F2" }}>
        <div className="con" style={{ maxWidth:900 }}>
          <span className="sl">About (SA)UEO</span>
          <div className="gl" />
          <h2 style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:18 }}>This page is taking shape.</h2>
          <p style={{ color:"#4A5568",marginBottom:28 }}>More information about {title.toLowerCase()} will be added here.</p>
          <button className="btn-p" onClick={()=>go("about")}>Back to About Us</button>
        </div>
      </section>
    </div>
  );
}

// TEAM
function Team() {
  const [tab, setTab] = useState("manco");

  const teamData = {
    manco: {
      title: "MANCO",
      desc: "The MANCO team leads the day-to-day operations, legal representation, and financial governance of (SA)UEO.",
      members: [
        { n:"Elise Coetser", t:"General Secretary", d:"Strategic leadership of (SA)UEO and founder of the LLLRA — professionalising labour relations practice across South Africa." },
        { n:"Andre Fourie", t:"Assistant General Secretary", d:"Supporting the General Secretary in the strategic and operational management of the organisation." },
        { n:"Adv. Cisca Moyses", t:"Legal Representative", d:"Providing legal expertise and representation across labour forums, ensuring mandate integrity and member protection." },
        { n:"Rilene Horn", t:"Head of Operations and Finance", d:"Overseeing operational delivery and financial governance across the national (SA)UEO structure." },
      ],
    },
    exco: {
      title: "EXCO",
      desc: "The Executive Committee provides constitutional oversight and institutional leadership, guiding strategic direction and mandate integrity.",
      members: [
        { n:"Adriaan Bezuidenhout", t:"Chairperson", d:"Providing executive leadership and institutional direction for (SA)UEO at the highest governance level." },
        { n:"Dawie Brink", t:"Vice-Chairperson", d:"Supporting the Chairperson and deputising in all executive engagements and governance decisions." },
        { n:"Erikka Motang", t:"Member", d:"Contributing to executive-level strategy and institutional policy decisions." },
        { n:"Charmaine le Grange", t:"Member", d:"Contributing to executive-level strategy and institutional policy decisions." },
      ],
    },
    staff: {
      title: "Staff",
      desc: "The Head Office staff team delivers day-to-day member services, communications, finance, and operational support across (SA)UEO.",
      members: [
        { n:"Rilene Horn", t:"Head of Operations and Finance — 15 Years", d:"Leading operational and financial management with 15 years of committed service to (SA)UEO." },
        { n:"Leonette Horn", t:"Finance Assistant — 10 Years", d:"Supporting financial administration and member billing with a decade of institutional knowledge." },
        { n:"Lize-Mari de Klerk", t:"Communications & Graphic Design Specialist — 10 Years", d:"Driving brand communications, digital presence, and graphic design across all (SA)UEO platforms." },
        { n:"Marius van den Berg", t:"HR IT Support and Multimedia — 5 Years", d:"Managing IT infrastructure, HR support, and multimedia production for the organisation." },
        { n:"Bianca Kruger", t:"Administrative Assistant — Members", d:"Providing dedicated administrative support to (SA)UEO members across all membership categories." },
        { n:"Danya Nepgen", t:"Administrative Assistant — Organisers", d:"Supporting the national organiser network with coordination and administrative excellence." },
        { n:"Linsey van Nieuwenhuizen", t:"Junior Project Manager", d:"Coordinating projects and initiatives across the (SA)UEO operational environment." },
      ],
    },
  };

  const tabs = [["manco","MANCO"],["exco","EXCO"],["staff","Staff"]];
  const current = teamData[tab];

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Our Team</div>
        <h1>The people behind<br /><em>South Africa's organised employer voice.</em></h1>
      </div>
      <div style={{ padding:"80px 0",background:"#F3F4F2" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"200px 1fr",gap:40,alignItems:"start" }}>
            <div>
              <span className="sl">Structure</span>
              <div className="gl" />
              {tabs.map(([id,label])=>(
                <div key={id} onClick={()=>setTab(id)} style={{ padding:"13px 16px",background:tab===id?"#0B1E3E":"#fff",color:tab===id?"#fff":"#0B1E3E",fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"0.8rem",letterSpacing:"0.07em",textTransform:"uppercase",cursor:"pointer",borderLeft:tab===id?"4px solid #C9A84C":"4px solid transparent",marginBottom:3,transition:"all 0.2s" }}>{label}</div>
              ))}
              <div style={{ background:"#C9A84C",padding:"20px 22px",marginTop:22 }}>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#071429",marginBottom:4 }}>National Network</div>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.8rem",fontWeight:900,color:"#071429" }}>200+</div>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",color:"#071429",marginTop:4 }}>Active organisers across all 9 provinces</div>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize:"clamp(1.4rem,2.5vw,1.9rem)",color:"#0B1E3E",marginBottom:8 }}>{current.title}</h2>
              <p style={{ color:"#4A5568",marginBottom:28,fontSize:"0.95rem" }}>{current.desc}</p>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:18 }}>
                {current.members.map((m,i)=>(
                  <div key={i} style={{ background:"#fff",borderTop:"3px solid #C9A84C",padding:"22px 20px",boxShadow:"0 2px 12px rgba(11,30,62,0.07)" }}>
                    <div style={{ width:48,height:48,borderRadius:"50%",background:"#0B1E3E",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontSize:"1.2rem",fontWeight:700,color:"#C9A84C",marginBottom:14 }}>{m.n.charAt(0)}</div>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"0.9rem",color:"#0B1E3E",marginBottom:4 }}>{m.n}</div>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.08em",color:"#C9A84C",textTransform:"uppercase",marginBottom:10 }}>{m.t}</div>
                    <p style={{ fontSize:"0.86rem",color:"#4A5568",lineHeight:1.65 }}>{m.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// MEMBERSHIP
function Membership({ go }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const cats = [
    { i:"🏠",key:"Domestic Employers",n:"Domestic Employers",d:"Your home is also a workplace when you employ someone. Pay, leave, contracts, working time and the way an employment relationship ends all carry legal responsibilities.",pop:false },
    { i:"🏪",key:"Micro Employers",n:"Micro Employers",d:"With one to five employees, you may be the person running the work, handling payroll and making every difficult people decision. One unresolved matter can take time you cannot spare.",pop:false },
    { i:"🏢",key:"Small, Medium & Large",n:"Small, Medium and Large Employers",d:"As a workforce grows, decisions move through managers, sites, policies and sector requirements. You need processes that can be followed consistently and explained when questioned.",pop:true },
    { i:"🏛️",key:"NPO / NPC / Body Corporate",n:"NPOs",d:"Funding and project cycles can change, while responsibilities to employees continue. Staffing decisions need to be planned and handled lawfully even when resources are under pressure.",pop:false },
    { i:"🌾",key:"Agriculture Employers",n:"Agriculture Employers",d:"Seasonal work, varied roles and changing labour needs make planning more complex. The employment obligations attached to that work continue throughout the year.",pop:false },
    { i:"🤝",key:"Collaborative Membership",n:"Collaborative Membership",d:"You want reliable information to stay current with labour and compliance changes, and you want your business to add its weight to the wider employer voice in advocacy and lobbying. This option provides information and resources but does not include formal representation.",pop:false },
  ];
  const closeApplication = () => setSelectedCategory(null);
  const scrollToCategories = () => document.getElementById("membership-categories").scrollIntoView({ behavior:"smooth" });
  const applicationLinks = {
    "Micro Employers":[["Micro Business · 1–5 employees","https://forms.clickup.com/20674763/f/kpy6b-14012/ZRXKTORARPAWWEFEN6"]],
    "Small, Medium & Large":[["Small Business · 6–49 employees","https://forms.clickup.com/20674763/f/kpy6b-13572/SLOHVZXOU852RDRYTG"],["Medium Business · 50–199 employees","https://forms.clickup.com/20674763/f/kpy6b-13872/NCZEGCB18PFE3YPFFX"],["Large Business · 200–499 employees","https://forms.clickup.com/20674763/f/kpy6b-13932/WVTEQ0W8QKP60Q4BXY"],["Macro Business · 500+ employees","https://forms.clickup.com/20674763/f/kpy6b-13972/6Y85TBWM7M19MJID6O"]],
    "Domestic Employers":[["Domestic Member · 1–2 employees","https://forms.clickup.com/20674763/f/kpy6b-14572/JHXYYHNZU5H21UIIB3"]],
    "Agriculture Employers":[["Agriculture · 6–49 employees","https://forms.clickup.com/20674763/f/kpy6b-14252/DH5ZHXCXGEI1A7NN4H"],["Agriculture · 50–199 employees","https://forms.clickup.com/20674763/f/kpy6b-14332/QG0BSQCM5Y5294VZ0C"],["Agriculture · 200–499 employees","https://forms.clickup.com/20674763/f/kpy6b-14412/8HO3BP7SBJQXN2Q147"],["Agriculture · 500+ employees","https://forms.clickup.com/20674763/f/kpy6b-14492/RK2S7A6KLXBZH2MCBO"]],
    "Catering Employers":[["Catering · 6–49 employees","https://forms.clickup.com/20674763/f/kpy6b-14292/FMCFXOVVZX0ZMCX5EZ"],["Catering · 50–199 employees","https://forms.clickup.com/20674763/f/kpy6b-14372/WPB4PK7191R0H63G4D"],["Catering · 200–499 employees","https://forms.clickup.com/20674763/f/kpy6b-14452/HA144BDL353UI0GWX4"],["Catering · 500+ employees","https://forms.clickup.com/20674763/f/kpy6b-14532/Z99K97BLSXH902ZUJU"]],
    "NPO / NPC / Body Corporate":[["NPO / NPC / Body Corporate · 6–49 employees","https://forms.clickup.com/20674763/f/kpy6b-14092/QDICWUUYR08IROO6T8"],["NPO / NPC / Body Corporate · 50–199 employees","https://forms.clickup.com/20674763/f/kpy6b-14132/KCDWVI5QIQA8VV45RN"],["NPO / NPC / Body Corporate · 200–499 employees","https://forms.clickup.com/20674763/f/kpy6b-14172/L4X11HW5RZMSVBYSI5"],["NPO / NPC / Body Corporate · 500+ employees","https://forms.clickup.com/20674763/f/kpy6b-14212/8FP5K6SM799QJH782Q"]],
  };

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Membership</div>
        <h1>Membership categories.<br /><em>Structured for value.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F3F4F2" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,marginBottom:64,alignItems:"start" }}>
            <div>
              <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.3rem)",marginBottom:16,lineHeight:1.25 }}>The decisions you make as an employer carry consequences.</h2>
              <p style={{ color:"#4A5568",marginBottom:20 }}>You may need to dismiss an employee, respond to a workplace complaint, apply a sector agreement or adjust to a new legal requirement. Some decisions will be tested later. Others change what your business must pay or do before you have had much say in them.</p>
              <p style={{ color:"#4A5568",marginBottom:24 }}>Membership places your business within a registered employers’ organisation. Represented options give eligible members access to formal representation. Across the membership offer, (SA)UEO provides information, practical support and a way for employer realities to inform collective bargaining and advocacy. The exact support depends on the option you choose.</p>
              <div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
                <button className="btn-p" onClick={scrollToCategories}>Apply for Membership</button>
              </div>
            </div>
            <div className="membership-includes">
              <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#19324A",marginBottom:18 }}>What Membership Includes</div>
              {["Representation at CCMA, Labour Court & Bargaining Councils, subject to membership category","Access to 211 professional organisers nationally","Compliance checklists, contract templates, and HR policies","Preventative compliance screening at onboarding","Expert updates on labour law changes","State of Business Survey participation","Free Recalibrate Business Client registration","Employee benefit scheme access","Professional development through the LLLRA","Invitations to employer forums and institutional engagements"].map((b,i)=>(
                <div key={i} style={{ display:"flex",gap:12,alignItems:"flex-start",marginBottom:12 }}>
                  <div style={{ width:5,height:5,background:"#688276",borderRadius:"50%",marginTop:9,flexShrink:0 }} />
                  <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.65,margin:0 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section style={{ padding:"36px 0",marginBottom:48,background:"#E4EDE8" }}>
          <div className="con">
            <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:16 }}>A workplace decision can become a formal case.</h2>
            <p style={{ color:"#4A5568",marginBottom:20 }}>The CCMA received 193,069 referrals in 2024/25, with 51% concerning unfair dismissal. Each case is different, but the volume makes one point clear: employers need to be ready to explain the reason for a decision, the process followed and the records that support it.</p>
            <p style={{ color:"#4A5568",marginBottom:20 }}>The Labour Relations Act permits compensation of up to 12 months’ remuneration for an unfair dismissal and 24 months for an automatically unfair dismissal. Reinstatement may also be ordered. At a salary of R20,000 a month, 12 months’ remuneration is R240,000. That is an illustration of a statutory ceiling, not an expected award. The time spent preparing a case and the disruption to the business also have a cost.</p>
            <p style={{ color:"#4A5568",marginBottom:24 }}>There is a practical question before a hearing: can the person who advised you represent your business there? Advice alone does not confer that right. (SA)UEO represents eligible members under its mandate and the applicable forum rules. Its organisers also help members address process and record-keeping issues before a decision is tested.</p>
            <button className="btn-p" onClick={scrollToCategories}>Understand Representation →</button>
          </div>
        </section>

        <section style={{ marginBottom:56,background:"#F3F4F2" }}>
          <div className="con">
            <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:28 }}>Standing. Support. Voice.</h2>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16,marginBottom:28 }}>
              {[
                ["Standing when a matter becomes formal","Under represented options, eligible members can be represented by organisers acting under (SA)UEO’s mandate, subject to the rules of the forum. Membership verification and the institutional representation letter establish the authority under which they act."],
                ["Support before and during a problem","Employer updates, practical resources and discussions with an organiser help you understand a requirement or check a process. When a matter becomes formal, the organiser prepares from the law, the facts and your records, with a national network and Head Office behind them."],
                ["A voice beyond your own business","Your circumstances can inform the positions (SA)UEO takes where it participates in collective bargaining, and in advocacy and lobbying. The more clearly we understand the businesses behind a position, the stronger the case we can put forward."],
                ["The business behind the employer","A labour decision may be tied to cash flow, operations or wider compliance obligations. Where a question reaches beyond labour relations, (SA)UEO can connect members with credible knowledge and relevant expertise."],
              ].map(([title,description])=>(
                <div key={title} style={{ background:"#fff",border:"1px solid rgba(25,50,74,0.12)",borderTop:"3px solid #688276",borderRadius:12,padding:"24px 22px",boxShadow:"0 8px 22px rgba(16,42,67,0.05)" }}>
                  <h3 style={{ fontFamily:"'Manrope',sans-serif",fontSize:"0.9rem",fontWeight:800,marginBottom:12,color:"#19324A" }}>{title}</h3>
                  <p style={{ fontSize:"0.88rem",color:"#4A5568",lineHeight:1.7 }}>{description}</p>
                </div>
              ))}
            </div>
            <p style={{ color:"#4A5568" }}>Represented options include formal representation where the membership terms and forum rules permit it. Collaborative Membership provides information and participation in the collective voice without formal representation. Optional CCMA cover is available separately, subject to policy terms.</p>
          </div>
        </section>

        <section style={{ marginBottom:56,paddingBottom:64,background:"#E4EDE8" }}>
          <div className="con">
            <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:16,color:"#19324A" }}>How to join</h2>
            <div>
              <ol className="membership-join-steps">
                <li><strong>Apply</strong><p>Choose an option and complete the application-start form. If you are unsure which option fits, send an enquiry and tell us about your workplace.</p></li>
                <li><strong>Confirm</strong><p>The team explains the option’s terms and formal requirements, confirms your details and verifies membership once those requirements are met. Submitting a form does not itself start representation.</p></li>
                <li><strong>Use your membership</strong><p>You can then access the support included in your option. Where representation is included, (SA)UEO issues the institutional representation letter after verification. Your organiser can help you work through a practical checklist of workplace questions and records.</p></li>
              </ol>
            </div>
          </div>
        </section>

        <div className="con">
          <div id="membership-categories">
          <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.5rem)",marginBottom:16 }}>Different workplaces. Different pressures. One clear starting point.</h2>
          <p style={{ color:"#4A5568",marginBottom:28 }}>Choose the description closest to your workplace. The represented options share (SA)UEO’s core mandate, with terms and support explained during the application. Collaborative Membership has a different purpose and does not include formal representation.</p>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
            {cats.map((c,i)=>(
              <div key={i} role="button" tabIndex="0" onClick={()=>setSelectedCategory(c.key)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){setSelectedCategory(c.key);}}} style={{ background:c.pop?"#0B1E3E":"#fff",borderTop:"4px solid #C9A84C",padding:"22px 18px",cursor:"pointer",boxShadow:"0 2px 12px rgba(11,30,62,0.07)",position:"relative" }}>
                {c.pop&&<div style={{ position:"absolute",top:14,right:14,background:"#C9A84C",color:"#071429",fontFamily:"'Barlow',sans-serif",fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.1em",padding:"2px 8px",textTransform:"uppercase" }}>Popular</div>}
                <div style={{ fontSize:"1.6rem",marginBottom:12 }}>{c.i}</div>
                <h4 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",fontWeight:700,marginBottom:10,color:c.pop?"#fff":"#0B1E3E",lineHeight:1.4 }}>{c.n}</h4>
                <p style={{ fontSize:"0.84rem",color:c.pop?"rgba(255,255,255,0.72)":"#4A5568",lineHeight:1.65,marginBottom:16 }}>{c.d}</p>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.1em",color:"#C9A84C",textTransform:"uppercase" }}>Apply Now →</div>
              </div>
            ))}
          </div>
          </div>
        </div>
        <section style={{ padding:"36px 0",marginTop:56,marginBottom:24,borderTop:"1px solid rgba(25,50,74,0.12)",borderBottom:"1px solid rgba(25,50,74,0.12)",background:"#E4EDE8" }}>
          <div className="con">
            <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.5rem)",marginBottom:14 }}>Make the decision to join before a dispute makes it urgent.</h2>
            <p style={{ color:"#4A5568",marginBottom:22 }}>Explore the options or tell us about your workplace. We will explain the membership terms and the support available to you.</p>
            <div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
              <button className="btn-p" onClick={scrollToCategories}>Apply for Membership</button>
              <button className="btn-o" onClick={()=>go("contact")}>Enquire Now</button>
            </div>
          </div>
        </section>
        <div className="con">
          {selectedCategory && (
            <div className="membership-modal" onClick={closeApplication}>
              <div className="membership-form" role="dialog" aria-modal="true" aria-label={`Apply for ${cats.find(c=>c.key===selectedCategory).n}`} onClick={e=>e.stopPropagation()}>
                <button type="button" className="membership-form-close" aria-label="Close application form" onClick={closeApplication}>×</button>
                <span className="sl">Official membership application</span>
                <h2>Apply for {cats.find(c=>c.key===selectedCategory).n}</h2>
                <p className="membership-form-intro">Choose the option that matches your organisation. The application will open in the official (SA)UEO registration form.</p>
                {applicationLinks[selectedCategory] ? <div className="membership-links">{applicationLinks[selectedCategory].map(([label,url])=><a key={url} href={url} target="_blank" rel="noreferrer" className="membership-link">{label}<span>Open application ↗</span></a>)}</div> : <div className="membership-contact-note"><p>We do not currently have a dedicated online form listed for this category. Our team can guide you to the right membership route.</p><a className="btn-p" href="mailto:info@saueo.co.za?subject=Membership enquiry">Contact the membership team</a></div>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// NEWSROOM
function Newsroom({ go }) {
  const [filter, setFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("current");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const arts = [
    { cat:"insights",tag:"Insights & Opinions",t:"What the CCMA's 2025 Caseload Data Means for South African Employers",d:"15 May 2026",ex:"Over 140,000 referrals annually. We unpack what this means for employer compliance posture and representation strategy.",by:"Legal Team",body:"A high referral volume is a practical warning for every employer: workplace processes need to be ready before a dispute reaches the CCMA. A defensible position starts with clear policies, consistent records, fair procedure, and early action when concerns first arise.\n\nThe lesson is not that every disagreement becomes a case. It is that preventable gaps become harder and more expensive to correct once a matter is formally referred. Employers should review contracts, disciplinary processes, grievance channels, and the records that show how decisions were made.\n\nOrganised representation adds another layer of readiness. It gives employers a structured route to guidance and representation when a workplace issue moves beyond an internal conversation." },
    { cat:"media",tag:"Media Coverage",t:"(SA)UEO Featured in Business Day: The Future of Employer Representation",d:"8 May 2026",ex:"Our General Secretary discusses the evolution of employers' organisations in a changing world of work.",by:"Business Day",body:"The world of work is changing quickly, and employer representation must keep pace. The conversation focuses on the need for organisations that combine statutory labour knowledge with a practical understanding of business pressures.\n\nFor employers, the future is not only about reacting to disputes. It is also about building better systems, understanding obligations early, and having a credible voice when industry decisions are being shaped." },
    { cat:"insights",tag:"Insights & Opinions",t:"Collective Bargaining Season 2026: What Employers Must Know",d:"2 May 2026",ex:"As bargaining councils convene, we outline key wage demands, sector pressures, and what organised members can expect.",by:"IR Advisory",body:"Bargaining season is a period for preparation, not surprise. Employers should understand which council or sector instruments apply to them, review current wage and benefit obligations, and identify the operational impact of proposed changes.\n\nOrganised employers are better placed to understand the position being negotiated and to contribute to a structured employer voice. The practical starting point is a current picture of your workforce, payroll, contracts, and affordability constraints." },
    { cat:"media",tag:"Media Coverage",t:"LLLRA Recognised as SA's First Designated Labour Relations Body",d:"22 April 2026",ex:"The Labour Law Labour Relations Association achieves a landmark designation milestone.",by:"HR Pulse",body:"Professional standards matter because employers depend on capable, ethical representation when workplace matters are under pressure. The recognition of LLLRA represents an important step toward clearer development pathways for labour-relations practitioners.\n\nFor the wider employer community, stronger professional discipline supports better advice, clearer communication, and more consistent representation across the labour system." },
    { cat:"insights",tag:"Insights & Opinions",t:"Navigating the NMW Increase: A Practical Guide",d:"10 April 2026",ex:"The National Minimum Wage adjustment for 2026 — what your payroll and compliance approach needs to reflect.",by:"Compliance Unit",body:"A minimum-wage change should trigger a short compliance review, not only a payroll adjustment. Employers should check affected employees, written agreements, payslips, working hours, deductions, and any sector-specific instrument that may apply.\n\nMaking the change consistently and keeping a record of the review helps reduce uncertainty later. Where the position is unclear, employers should seek guidance before changing terms or processing the next pay cycle." },
    { cat:"insights",tag:"Insights & Opinions",t:"State of Business Survey 2026: Early Findings",d:"1 April 2026",ex:"First data from our annual survey surfaces the critical pressure points facing South African businesses.",by:"Research Team",body:"The early findings point to the value of listening directly to employers. Business pressure, labour risk, compliance capacity, and operational resilience are connected; they cannot be understood through isolated statistics alone.\n\nThe survey gives employer realities a structured place in the conversation and helps inform the issues that deserve practical support, evidence-led advocacy, and continued attention." },
  ];
  const monthKey = article => {
    const date = new Date(article.d);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  };
  const monthLabel = key => new Intl.DateTimeFormat("en-ZA", { month:"long", year:"numeric" }).format(new Date(`${key}-01T00:00:00`));
  const months = [...new Set(arts.map(monthKey))];
  const calendarMonth = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}`;
  const activeMonth = monthFilter === "current" ? (months.includes(calendarMonth) ? calendarMonth : months[0]) : monthFilter;
  const filtered = arts.filter(article => monthKey(article) === activeMonth && (filter === "all" || article.cat === filter));
  const featured = filtered[0];
  const olderMonths = months.filter(month => month !== activeMonth);
  const olderArticles = arts.filter(article => monthKey(article) !== activeMonth && (filter === "all" || article.cat === filter));

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Newsroom</div>
        <h1>Newsroom.<br /><em>Evidence before opinion. Structure before noise.</em></h1>
      </div>
      <div style={{ padding:"80px 0",background:"#F3F4F2" }}>
        <div className="con">
          <div className="newsroom-intro">
            <div><span className="sl">Employer voice</span><h2>Useful insight for the decisions in front of you.</h2><p>Read the latest (SA)UEO updates, practical guidance, and employer perspectives. New articles will appear in the current month automatically.</p></div>
            <div className="newsroom-note"><strong>Not legal advice</strong><span>Articles are for general information and should be considered alongside advice for your situation.</span></div>
          </div>
          <div className="newsroom-controls">
            {[["all","All Articles"],["insights","Insights & Opinions"],["media","Media Coverage"]].map(([id,label])=>(
              <button key={id} onClick={()=>setFilter(id)} style={{ padding:"9px 20px",fontFamily:"'Barlow',sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:`2px solid ${filter===id?"#0B1E3E":"rgba(11,30,62,0.2)"}`,background:filter===id?"#0B1E3E":"transparent",color:filter===id?"#fff":"#0B1E3E",cursor:"pointer",transition:"all 0.2s" }}>{label}</button>
            ))}
          </div>
          {featured && <div className="featured-article"><div className="featured-article-copy"><span className="sl">Featured this month</span><h2>{featured.t}</h2><p>{featured.ex}</p><div className="article-meta">{featured.d} · By {featured.by}</div><button className="btn-p" type="button" onClick={()=>setSelectedArticle(featured)}>Read featured article</button></div>{featured.image ? <img className="featured-article-image" src={featured.image} alt="" /> : <div className="featured-article-mark">{featured.cat === "media" ? "MEDIA" : "INSIGHT"}<span>(SA)UEO</span></div>}</div>}
          <div className="article-section-heading"><div><span className="sl">{monthLabel(activeMonth)}</span><h2>Latest articles</h2></div><span>{filtered.length} {filtered.length === 1 ? "article" : "articles"}</span></div>
          <div className="article-grid">
            {filtered.slice(1).map((a,i)=>(
              <div key={i} className="card article-card" role="button" tabIndex="0" onClick={()=>setSelectedArticle(a)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" ")setSelectedArticle(a)}} style={{ cursor:"pointer" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12 }}>
                  <span style={{ background:a.cat==="insights"?"#0B1E3E":"#C9A84C",color:a.cat==="insights"?"#C9A84C":"#071429",fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",padding:"2px 8px" }}>{a.tag}</span>
                  <span style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",color:"#9CA3AF" }}>{a.d}</span>
                </div>
                <h3 style={{ fontSize:"0.96rem",color:"#0B1E3E",marginBottom:10,lineHeight:1.4 }}>{a.t}</h3>
                <p style={{ fontSize:"0.87rem",color:"#4A5568",lineHeight:1.65,marginBottom:14 }}>{a.ex}</p>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",color:"#9CA3AF",marginBottom:12 }}>By {a.by}</div>
                <button type="button" className="article-read-link" onClick={e=>{e.stopPropagation();setSelectedArticle(a)}}>Read the article →</button>
              </div>
            ))}
          </div>
          {selectedArticle && <div className="article-modal" onClick={()=>setSelectedArticle(null)}><article className="article-reader" role="dialog" aria-modal="true" aria-label={selectedArticle.t} onClick={e=>e.stopPropagation()}><button type="button" className="article-reader-close" aria-label="Close article" onClick={()=>setSelectedArticle(null)}>×</button><div className="article-reader-header"><span className="sl">{selectedArticle.tag}</span><h2>{selectedArticle.t}</h2><div className="article-meta">{selectedArticle.d} · By {selectedArticle.by}</div></div>{selectedArticle.image ? <img className="article-reader-image" src={selectedArticle.image} alt="" /> : <div className="article-reader-placeholder">(SA)UEO <span>Employer voice</span></div>}<div className="article-reader-body"><p className="article-reader-lead">{selectedArticle.ex}</p><div className="article-reader-rule" />{(selectedArticle.body || "This article is ready for the full WordPress content, including the article text, supporting images, and related resources.").split("\n\n").map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div><div className="article-reader-footer"><span>For general information only. Not legal advice.</span><button type="button" className="btn-o" onClick={()=>setSelectedArticle(null)}>Back to newsroom</button></div></article></div>}
          <div className="article-archive"><div className="article-section-heading"><div><span className="sl">Keep exploring</span><h2>Older articles</h2></div><span>Browse by month</span></div><div className="archive-months">{olderMonths.map(month=><button key={month} type="button" className={monthFilter === month ? "active" : ""} onClick={()=>setMonthFilter(month)}>{monthLabel(month)}</button>)}{monthFilter !== "current" && <button type="button" className="archive-reset" onClick={()=>setMonthFilter("current")}>Back to latest</button>}</div>{monthFilter !== "current" && <div className="article-grid archive-grid">{olderArticles.filter(article=>monthKey(article) === monthFilter).map((a,i)=><div key={i} className="card article-card"><span className="sl">{a.tag}</span><h3>{a.t}</h3><p>{a.ex}</p><div className="article-meta">{a.d} · By {a.by}</div></div>)}</div>}</div>
        </div>
      </div>
    </div>
  );
}

// RESOURCE HUB
function ResourceHub({ go }) {
  const [filter, setFilter] = useState("all");
  const res = [
    { cat:"templates",tag:"Starter Template",i:"📄",t:"Basic Employment Contract - Domestic Employer",d:"A practical starting contract for employing a domestic worker.",url:"https://saueo.co.za/wp-content/uploads/2025/10/CONTRACT-OF-EMPLOYMENT-DOMESTIC-WORKER.doc" },
    { cat:"templates",tag:"Starter Template",i:"📄",t:"Domestic Employer Payslip Example",d:"An example payslip to help domestic employers keep clearer employment records.",url:"https://saueo.co.za/wp-content/uploads/2025/09/PAYSLIP.pdf" },
    { cat:"checklists",tag:"Compliance Checklist",i:"✅",t:"UIF COIDA Guidelines Checklist - Domestic Employers",d:"A practical checklist covering key UIF and COIDA considerations.",url:"https://saueo.co.za/protostar/wp-content/uploads/2025/08/UIF_COIDA_Guidelines_Checklist_Domestic_Employers.pdf" },
    { cat:"checklists",tag:"Workplace Record",i:"✅",t:"Domestic Worker Attendance Register",d:"A simple register for recording attendance and maintaining consistent records.",url:"https://saueo.co.za/protostar/wp-content/uploads/2025/08/Domestic_Worker_Attendance_Register.pdf" },
    { cat:"guides",tag:"Official Form",i:"📘",t:"UIF (UI.19) Form",d:"The official UI.19 form for relevant UIF administration.",url:"https://saueo.co.za/wp-content/uploads/2025/09/Form-UI19.pdf" },
    { cat:"guides",tag:"Official Form",i:"📘",t:"UI 8D Form",d:"Application for registration as an employer of workers in a private household.",url:"https://saueo.co.za/wp-content/uploads/2025/09/Form-UI-8D-Application-for-registration-as-an-employer-of-workers-in-a-PRIVATE-HOUSEHOLD.pdf" },
  ];
  const filtered = filter === "all" ? res : res.filter(r => r.cat === filter);

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Resource Hub</div>
        <h1>Resource Hub.<br /><em>Compliance tools built for South African employers.</em></h1>
      </div>
      <div style={{ padding:"80px 0",background:"#F3F4F2" }}>
        <div className="con">
            <div style={{ background:"#0B1E3E",padding:"28px 36px",marginBottom:36,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16 }}>
            <div>
              <h3 style={{ color:"#fff",fontSize:"1rem",marginBottom:6 }}>Free starter resources for employers</h3>
              <p style={{ color:"rgba(255,255,255,0.65)",fontSize:"0.88rem",margin:0 }}>Practical tools and official forms to help you take the next step with confidence.</p>
            </div>
            <button className="btn-p" onClick={()=>go("membership")}>Need tailored support?</button>
          </div>
          <div style={{ display:"flex",gap:10,marginBottom:32,flexWrap:"wrap" }}>
            {[["all","All Resources"],["templates","Templates"],["checklists","Checklists"],["guides","Guides"]].map(([id,label])=>(
              <button key={id} onClick={()=>setFilter(id)} style={{ padding:"9px 20px",fontFamily:"'Barlow',sans-serif",fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:`2px solid ${filter===id?"#0B1E3E":"rgba(11,30,62,0.2)"}`,background:filter===id?"#0B1E3E":"transparent",color:filter===id?"#fff":"#0B1E3E",cursor:"pointer",transition:"all 0.2s" }}>{label}</button>
            ))}
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
            {filtered.map((r,i)=>(
              <div key={i} className="card resource-card">
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12 }}>
                  <span style={{ background:"#F1F0EE",color:"#0B1E3E",fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"2px 8px" }}>{r.tag}</span>
                  <div style={{ fontSize:"1.3rem" }}>{r.i}</div>
                </div>
                <h4 style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",fontWeight:700,color:"#0B1E3E",marginBottom:10,lineHeight:1.4 }}>{r.t}</h4>
                <p style={{ fontSize:"0.86rem",color:"#4A5568",lineHeight:1.65,marginBottom:16 }}>{r.d}</p>
                <a className="resource-access" href={r.url} target="_blank" rel="noreferrer">Download resource →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// SHOP
function Shop() {
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { type:"organiser", format:"Physical product", tag:"Organiser order", icon:"💳", title:"Business Cards", desc:"Official (SA)UEO business cards for part-time organisers and representatives.", action:"Order business cards", url:"https://www.vaoutsourcingservices.co.za/product-page/sa-ueo-business-cards-part-time-organisers", image:"https://static.wixstatic.com/media/0704df_880659081427471e8f39ffee6fbf6236~mv2.png/v1/fill/w_827,h_551,al_c,q_90/0704df_880659081427471e8f39ffee6fbf6236~mv2.png" },
    { type:"organiser", format:"Physical product", tag:"Organiser order", icon:"🏷️", title:"Name Badge", desc:"A professional branded name badge for part-time organisers and representatives.", action:"Order name badge", url:"https://www.vaoutsourcingservices.co.za/product-page/sa-ueo-name-badge-part-time-organisers", image:"https://static.wixstatic.com/media/0704df_b20bdf06d0fa4957840197d9fe143bbb~mv2.png/v1/fill/w_838,h_551,al_c,q_90/0704df_b20bdf06d0fa4957840197d9fe143bbb~mv2.png" },
    { type:"organiser", format:"Physical product", tag:"Organiser order", icon:"📁", title:"Organiser File", desc:"A branded organiser file to keep member documents, notes, and workplace records together.", action:"Order organiser file", url:"https://www.vaoutsourcingservices.co.za/product-page/copy-of-sa-ueo-organiser-file", image:"https://static.wixstatic.com/media/0704df_f4c8ca2ab1d24b75b1aed86e3e5bc883~mv2.png/v1/fill/w_551,h_551,al_c,q_85/0704df_f4c8ca2ab1d24b75b1aed86e3e5bc883~mv2.png" },
    { type:"physical", format:"Physical product", tag:"Branded item", icon:"⚖️", title:"(SA)UEO Labour Posters", desc:"Browse the official collection of paid workplace posters for display in your organisation.", action:"View physical products", url:"https://www.vaoutsourcingservices.co.za/category/saueo-branded-posters" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"📄", title:"Disciplinary Templates", desc:"Professionally drafted policies, procedures, and forms for disciplinary processes.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/category/disciplinary-policy-procedures-forms" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"🤝", title:"Grievance Templates", desc:"Structured documents to help employers manage workplace grievances consistently.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/category/grievances" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"📋", title:"HR Documents", desc:"Core HR documents for sound, consistent employment administration.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/category/hr-documents" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"📊", title:"Performance Templates", desc:"Tools for managing poor work performance with a fair and documented process.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/category/poor-work-performance" },
    { type:"digital", format:"Digital product", tag:"Template library", icon:"🧭", title:"Incapacity, Recruitment & Leave", desc:"Access templates for workplace incompatibility, incapacity, recruitment, and leave processes.", action:"Open digital library", url:"https://www.vaoutsourcingservices.co.za/saueo-template-library" },
  ];
  const webinars = [
    { date:"NOV 2026", title:"Session 2: CIBA | (SA)UEO", detail:"A joint CIBA and (SA)UEO session for employers. Event details and registration will be published soon.", time:"Details to be confirmed" },
  ];
  const filtered = filter === "all" ? products : products.filter(p => p.type === filter);

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Shop</div>
        <h1>Practical tools.<br /><em>Ready for the real workplace.</em></h1>
      </div>
      <div style={{ padding:"80px 0",background:"#F3F4F2" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"1fr",gap:36,alignItems:"start",marginBottom:64 }}>
            <div>
              <span className="sl">The (SA)UEO Shop</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.7rem,3vw,2.5rem)",lineHeight:1.2,marginBottom:16 }}>Tools that make your position <em style={{ color:"#C9A84C" }}>defensible.</em></h2>
              <p style={{ color:"#4A5568",maxWidth:640,marginBottom:16 }}>Find official (SA)UEO branded items, paid labour posters, and professionally drafted labour and HR templates in our current online stores.</p>
              <p style={{ color:"#4A5568",fontStyle:"italic",borderLeft:"3px solid #C9A84C",paddingLeft:16 }}>Webinar registrations will live here as each event opens. Join briefings led by practitioners who work inside South Africa's labour system.</p>
            </div>
          </div>

          <div className="shop-webinars" style={{ background:"#0B1E3E",padding:"38px 40px",marginBottom:64 }}>
            <span className="sl">Coming Up</span>
            <h2 style={{ color:"#fff",fontSize:"clamp(1.5rem,2.6vw,2.1rem)",marginBottom:26 }}>Upcoming employer webinars.</h2>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
              {webinars.map((w,i)=>(
                <div key={i} style={{ borderTop:"3px solid #C9A84C",background:"rgba(255,255,255,0.045)",padding:"20px 18px" }}>
                  <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",color:"#C9A84C",marginBottom:12 }}>{w.date} · {w.time}</div>
                  <h3 style={{ color:"#fff",fontSize:"1rem",lineHeight:1.35,marginBottom:9 }}>{w.title}</h3>
                  <p style={{ color:"rgba(255,255,255,0.68)",fontSize:"0.87rem",lineHeight:1.6,marginBottom:18 }}>{w.detail}</p>
                  <button className="btn-o" onClick={()=>window.alert("Registration will open soon. Please check back or contact info@saueo.co.za.")} style={{ padding:"8px 13px",fontSize:"0.6rem" }}>Register Interest</button>
                </div>
              ))}
            </div>
          </div>

          <span className="sl">Shop by product type</span>
          <div className="gl" />
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"end",gap:20,flexWrap:"wrap",marginBottom:28 }}>
            <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)" }}>Choose a category, then select your product.</h2>
            <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
              {[['all','All Items'],['organiser','Organiser Orders'],['physical','Physical Products'],['digital','Digital Products']].map(([id,label])=>(
                <button key={id} onClick={()=>setFilter(id)} style={{ padding:"8px 16px",fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",border:`2px solid ${filter===id?"#0B1E3E":"rgba(11,30,62,0.2)"}`,background:filter===id?"#0B1E3E":"transparent",color:filter===id?"#fff":"#0B1E3E",cursor:"pointer" }}>{label}</button>
              ))}
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginBottom:76 }}>
            {filtered.map((p,i)=>(
              <div key={i} className="card" style={{ display:"flex",flexDirection:"column" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:14 }}>
                  <span style={{ background:p.type === "digital" ? "#E7EFEB" : "#19324A",color:p.type === "digital" ? "#19324A" : "#fff",fontFamily:"'Manrope',sans-serif",fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.06em",textTransform:"uppercase",padding:"4px 8px",borderRadius:999 }}>{p.format}</span>
                  <span style={{ fontSize:"1.45rem" }}>{p.icon}</span>
                </div>
                <h3 style={{ fontSize:"1rem",lineHeight:1.35,marginBottom:10 }}>{p.title}</h3>
                <p style={{ color:"#4A5568",fontSize:"0.88rem",lineHeight:1.65,marginBottom:18,flexGrow:1 }}>{p.desc}</p>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,borderTop:"1px solid rgba(11,30,62,0.1)",paddingTop:16 }}>
                  <span style={{ fontFamily:"'Manrope',sans-serif",fontSize:"0.64rem",fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",color:"#9CA3AF" }}>{p.type === "digital" ? "Digital access" : "Physical order"}</span>
                  <button className="btn-p" onClick={()=>setSelectedProduct(p)} style={{ padding:"9px 13px",fontSize:"0.62rem" }}>View Product</button>
                </div>
              </div>
            ))}
          </div>

          {selectedProduct && (
            <div onClick={()=>setSelectedProduct(null)} style={{ position:"fixed",inset:0,zIndex:1200,background:"rgba(7,20,41,0.78)",display:"flex",alignItems:"center",justifyContent:"center",padding:22 }}>
              <div role="dialog" aria-modal="true" aria-label={selectedProduct.title} onClick={e=>e.stopPropagation()} style={{ background:"#F8F4EC",maxWidth:620,width:"100%",borderTop:"5px solid #C9A84C",boxShadow:"0 20px 70px rgba(0,0,0,0.3)" }}>
                <div style={{ padding:"30px 32px 26px" }}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"start",gap:20,marginBottom:22 }}>
                    <div>
                      <span className="sl">{selectedProduct.tag}</span>
                      <h2 style={{ fontSize:"clamp(1.5rem,3vw,2.1rem)",lineHeight:1.2 }}>{selectedProduct.title}</h2>
                    </div>
                    <button aria-label="Close product details" onClick={()=>setSelectedProduct(null)} style={{ border:"none",background:"transparent",fontSize:"1.8rem",lineHeight:1,color:"#0B1E3E",cursor:"pointer" }}>×</button>
                  </div>
                  <div className="product-preview">
                    {selectedProduct.image ? <img src={selectedProduct.image} alt={`${selectedProduct.title} product preview`} /> : <div className="product-preview-fallback"><span>{selectedProduct.icon}</span><small>Product preview coming soon</small></div>}
                  </div>
                  <p style={{ color:"#4A5568",lineHeight:1.75,margin:"0 0 24px" }}>{selectedProduct.desc}</p>
                  <div style={{ background:"#fff",borderLeft:"3px solid #C9A84C",padding:"16px 18px",marginBottom:24 }}>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.64rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"#9CA3AF",marginBottom:6 }}>How it works</div>
                    <p style={{ color:"#4A5568",fontSize:"0.9rem",lineHeight:1.65,margin:0 }}>{selectedProduct.type === "digital" ? "Open the official digital library to review and access this product." : "Open the official external store to review the product, pricing, and ordering options."}</p>
                  </div>
                  <div style={{ display:"flex",justifyContent:"flex-end",gap:10,flexWrap:"wrap" }}>
                    <button className="btn-o" onClick={()=>setSelectedProduct(null)}>Keep Browsing</button>
                    <a className="btn-p" href={selectedProduct.url} target="_blank" rel="noreferrer">{selectedProduct.action} ↗</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <p style={{ color:"#9CA3AF",fontFamily:"'Barlow',sans-serif",fontSize:"0.68rem",letterSpacing:"0.04em" }}>Product orders and digital resources open through their official external stores and libraries.</p>
        </div>
      </div>
    </div>
  );
}

// SERVICES
function Services({ go }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const svs = [
    { i:"⚖️",cat:"Core Mandate",t:"Representation at CCMA, Labour Court & Bargaining Councils",d:"Formal right of appearance in statutory labour forums. Representation is issued institutionally and digitally verified before issuance.",pts:["CCMA conciliation and arbitration","Labour Court appearances","Bargaining Council proceedings","Mandate-controlled institutional representation"] },
    { i:"🤝",cat:"Core Mandate",t:"Collective Bargaining Representation",d:"Not secondary — central. We consolidate employer voices into structured positions before agreements become binding obligations on all employers in that sector.",pts:["Participation in industry Bargaining Councils","Wage negotiation representation","Terms and conditions advocacy","Prevention of fragmented employer positioning"] },
    { i:"📋",cat:"Risk Management",t:"Preventative Compliance and Labour Risk Management",d:"Entry-level compliance screening at onboarding, early risk identification, and organiser-led intervention before disputes escalate.",pts:["Compliance screening at member onboarding","Early labour risk identification","Organiser-led preventative intervention","Reducing exposure before disputes arise"] },
    { i:"📊",cat:"Evidence & Advocacy",t:"State of Business Survey©",d:"An institutional evidence instrument — not a marketing campaign. Informs the State of Business Report and Address, translating employer realities into structured data.",pts:["Cross-sector employer data gathering","State of Business Report","State of Business Address","Evidence-led advocacy and policy input"] },
    { i:"🔗",cat:"Ecosystem Support",t:"More Than Labour — Recalibrate Access",d:"Every (SA)UEO member receives a coupon code to register as a Recalibrate Business Client free of charge. Representation remains constitutionally clean. Enablement is structurally separate.",pts:["Free Recalibrate Business Client registration","Access to vetted service provider network","Business systems and operational support","Mandate separation maintained"] },
    { i:"🛡️",cat:"Member Benefits",t:"Employee Benefit Schemes",d:"Affordable hospitalisation, funeral, and income protection benefits for employer members and their teams — because resilient businesses need resilient people.",pts:["Hospitalisation cover","Funeral benefits","Income protection","Affordable group benefit access"] },
    { i:"🎓",cat:"Professional Standards",t:"LLLRA Professional Development Pathway",d:"SA's first emerging professional body for labour relations practitioners. All (SA)UEO organisers must hold LLLRA membership.",pts:["Professional designation pathways","CPD and ethical discipline","Peer-to-peer knowledge sharing nationally","Raising the standard of employer-side representation"] },
    { i:"📰",cat:"Member Intelligence",t:"Expert Updates and Business Intelligence",d:"Critical expert updates on any new developments that may impact your business — delivered as they arise, not after the fact.",pts:["Labour law change alerts","CCMA trend reports","NMW and wage compliance updates","Enforcement environment advisories"] },
  ];
  const categories = [
    ["Core Mandate","Representation & Advice"],
    ["Risk Management","Prevent Problems"],
    ["Evidence & Advocacy","Research & Advocacy"],
    ["Member Benefits","Benefits for Members"],
    ["Professional Standards","Professional Development"],
    ["Member Intelligence","Updates & Insights"],
    ["Ecosystem Support","Business Support"],
  ];
  const visibleServices = activeCategory === "all" ? svs : svs.filter(service => service.cat === activeCategory);
  const activeLabel = activeCategory === "all" ? "All support services" : categories.find(([id]) => id === activeCategory)?.[1];
  const chooseCategory = id => {
    setActiveCategory(activeCategory === id ? "all" : id);
    window.setTimeout(() => document.getElementById("service-results")?.scrollIntoView({ behavior:"smooth", block:"start" }), 0);
  };

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Services & Programmes</div>
        <h1>Services & Programmes.<br /><em>More than labour. By institutional design.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F3F4F2" }}>
        <div className="con">
          <div className="services-intro" style={{ display:"grid",gridTemplateColumns:"1fr 2fr",gap:56,marginBottom:56,alignItems:"start" }}>
            <div>
              <span className="sl">How We Help Employers</span>
              <div className="gl" />
              <h2 style={{ fontSize:"clamp(1.6rem,2.8vw,2.2rem)",marginBottom:16,lineHeight:1.25 }}>Practical support for <em style={{ color:"#C9A84C" }}>stronger businesses.</em></h2>
              <p style={{ color:"#4A5568",marginBottom:16 }}>From everyday compliance questions to formal labour disputes, we help employers understand their responsibilities, reduce risk, and make confident decisions.</p>
              <p style={{ color:"#4A5568",marginBottom:28 }}>Our team combines representation, prevention, expert insight, and practical business support so you are not left to navigate the labour environment alone.</p>
              <button className="btn-p" onClick={()=>go("membership")}>View Membership Options</button>
            </div>
            <div className="services-categories" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10 }}>
              <div className="services-category-intro"><div className="sl" style={{ margin:0 }}>Areas of support</div><p style={{ color:"#5B6872",fontSize:"0.82rem",lineHeight:1.5,marginTop:7 }}>Explore the ways we support employers and their teams.</p></div>
              {categories.map(([id,label])=>(
                <button key={id} type="button" className={`services-category${activeCategory === id ? " active" : ""}`} onClick={()=>chooseCategory(id)}>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
          <div id="service-results" className="service-results-heading"><span className="sl">Selected support area</span><h2>{activeLabel}</h2><button type="button" onClick={()=>setActiveCategory("all")}>Show all services</button></div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20 }}>
            {visibleServices.map((s,i)=>(
              <div key={i} className="card">
                <div style={{ display:"flex",gap:16,alignItems:"flex-start" }}>
                  <div style={{ fontSize:"1.8rem",flexShrink:0 }}>{s.i}</div>
                  <div>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"#C9A84C",marginBottom:4 }}>{s.cat}</div>
                    <h3 style={{ fontSize:"1rem",color:"#0B1E3E",marginBottom:10,lineHeight:1.3 }}>{s.t}</h3>
                    <p style={{ fontSize:"0.87rem",color:"#4A5568",lineHeight:1.68,marginBottom:14 }}>{s.d}</p>
                    {s.pts.map((pt,j)=>(
                      <div key={j} style={{ display:"flex",gap:9,alignItems:"flex-start",marginBottom:7 }}>
                        <div style={{ width:5,height:5,background:"#C9A84C",borderRadius:"50%",marginTop:7,flexShrink:0 }} />
                        <span style={{ fontFamily:"'Crimson Pro',serif",fontSize:"0.87rem",color:"#0B1E3E",lineHeight:1.6 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// CONTACT
function Contact() {
  const [form, setForm] = useState({ name:"",email:"",phone:"",cat:"",msg:"" });
  const [done, setDone] = useState(false);
  const ch = e => setForm(f => ({ ...f,[e.target.name]:e.target.value }));

  return (
    <div>
      <div className="ph">
        <div className="bc">Home / Contact Us</div>
        <h1>Get in Touch.<br /><em>We are here to help.</em></h1>
      </div>
      <div style={{ padding:"88px 0",background:"#F3F4F2" }}>
        <div className="con">
          <div style={{ display:"grid",gridTemplateColumns:"2fr 3fr",gap:56,alignItems:"start" }}>
            <div>
              <span className="sl">Contact Information</span>
              <div className="gl" />
              <h2 style={{ fontSize:"1.6rem",marginBottom:24,lineHeight:1.25 }}>Reach the right <em style={{ color:"#C9A84C" }}>team directly.</em></h2>
              {[["✉️","General Enquiries","info@saueo.co.za"],["🕐","Office Hours","Monday to Friday: 07:30 to 16:30"],["🔐","Member Portal","portal.saueo.co.za"]].map(([ic,lbl,val],i)=>(
                <div key={i} style={{ display:"flex",gap:16,marginBottom:22,alignItems:"flex-start" }}>
                  <div style={{ fontSize:"1.2rem",flexShrink:0,marginTop:2 }}>{ic}</div>
                  <div>
                    <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#9CA3AF",marginBottom:4 }}>{lbl}</div>
                    <div style={{ fontFamily:"'Crimson Pro',serif",fontSize:"1rem",color:"#0B1E3E" }}>{val}</div>
                  </div>
                </div>
              ))}
              <div style={{ background:"#0B1E3E",padding:28,marginTop:8 }}>
                <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C9A84C",marginBottom:10 }}>National Footprint</div>
                <p style={{ color:"rgba(255,255,255,0.78)",fontSize:"0.9rem",lineHeight:1.75 }}>More than 200 organisers operating across all nine provinces, ensuring employers are never without accessible, professionally governed support.</p>
              </div>
            </div>
            <div style={{ background:"#fff",padding:44,boxShadow:"0 8px 40px rgba(11,30,62,0.1)" }}>
              {done ? (
                <div style={{ textAlign:"center",padding:"36px 0" }}>
                  <div style={{ fontSize:"2.4rem",marginBottom:14 }}>✅</div>
                  <h3 style={{ color:"#0B1E3E",fontSize:"1.3rem",marginBottom:12 }}>Message Received</h3>
                  <p style={{ color:"#4A5568" }}>Thank you for reaching out. A member of our team will respond within one business day.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ color:"#0B1E3E",fontSize:"1.2rem",marginBottom:8 }}>Send Us a Message</h3>
                  <p style={{ color:"#4A5568",fontSize:"0.9rem",marginBottom:24 }}>Complete the form and our team will respond within one business day.</p>
                  {[["name","Full Name *","text"],["email","Email Address *","email"],["phone","Phone Number","tel"]].map(([nm,lbl,tp])=>(
                    <div key={nm} style={{ marginBottom:16 }}>
                      <label style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#0B1E3E",display:"block",marginBottom:6 }}>{lbl}</label>
                      <input type={tp} name={nm} value={form[nm]} onChange={ch} style={{ width:"100%",padding:"10px 14px",border:"1px solid rgba(11,30,62,0.2)",fontFamily:"'Crimson Pro',serif",fontSize:"1rem",outline:"none",background:"#F8F4EC" }} />
                    </div>
                  ))}
                  <div style={{ marginBottom:16 }}>
                    <label style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#0B1E3E",display:"block",marginBottom:6 }}>Enquiry Type</label>
                    <select name="cat" value={form.cat} onChange={ch} style={{ width:"100%",padding:"10px 14px",border:"1px solid rgba(11,30,62,0.2)",fontFamily:"'Crimson Pro',serif",fontSize:"1rem",outline:"none",background:"#F8F4EC" }}>
                      <option value="">Select an option</option>
                      <option>Membership Enquiry</option>
                      <option>CCMA or Labour Dispute</option>
                      <option>Compliance Support</option>
                      <option>Collective Bargaining</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div style={{ marginBottom:24 }}>
                    <label style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#0B1E3E",display:"block",marginBottom:6 }}>Message *</label>
                    <textarea name="msg" value={form.msg} onChange={ch} rows={5} style={{ width:"100%",padding:"10px 14px",border:"1px solid rgba(11,30,62,0.2)",fontFamily:"'Crimson Pro',serif",fontSize:"1rem",outline:"none",background:"#F8F4EC",resize:"vertical" }} />
                  </div>
                  <button className="btn-p" onClick={()=>{ if(form.name&&form.email&&form.msg)setDone(true); }} style={{ width:"100%",textAlign:"center" }}>Send Message</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FOOTER
function Footer({ go }) {
  return (
    <footer style={{ background:"#071429" }}>
      <div style={{ height:4,background:"linear-gradient(90deg,#C9A84C,#E2C47A,#C9A84C)" }} />
      <div className="con" style={{ padding:"56px 48px 32px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,marginBottom:40 }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:10 }}><img src={`${process.env.PUBLIC_URL}/saueo-logo-transparent2.png`} alt="(SA)UEO logo" className="brand-logo" /><div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",fontWeight:900,color:"#fff" }}>(SA)UEO</div></div>
            <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.52rem",letterSpacing:"0.13em",color:"#C9A84C",textTransform:"uppercase",marginBottom:16 }}>South African United Commercial and Allied Employers' Organisation</div>
            <p style={{ color:"rgba(255,255,255,0.52)",fontSize:"0.88rem",lineHeight:1.75,marginBottom:16,maxWidth:280 }}>Registered employers' organisation in terms of the Labour Relations Act. Recognised by the Department of Employment and Labour.</p>
            <div style={{ fontFamily:"'Playfair Display',serif",fontStyle:"italic",fontSize:"0.92rem",color:"#C9A84C" }}>"The organised voice of employers."</div>
          </div>
          {[
            { h:"Organisation",ls:[["home","Home"],["about","About Us"],["team","Our Team"],["contact","Contact Us"]] },
            { h:"Membership",ls:[["membership","All Categories"],["membership","Micro Employers"],["membership","SME Membership"],["membership","Agriculture"]] },
            { h:"Resources",ls:[["newsroom","Newsroom"],["resourcehub","Resource Hub"],["services","Services"],["contact","Contact"]] },
          ].map((col,i)=>(
            <div key={i}>
              <div style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.14em",textTransform:"uppercase",color:"#C9A84C",marginBottom:16 }}>{col.h}</div>
              {col.ls.map(([pg,lbl],j)=>(
                <div key={j} style={{ marginBottom:10 }}>
                  <span onClick={()=>go(pg)} style={{ fontFamily:"'Crimson Pro',serif",fontSize:"0.92rem",color:"rgba(255,255,255,0.62)",cursor:"pointer",transition:"color 0.2s" }} onMouseEnter={e=>e.target.style.color="#C9A84C"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.62)"}>{lbl}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:20,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12 }}>
          <span style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",color:"rgba(255,255,255,0.32)" }}>© 2026 (SA)UEO — All rights reserved.</span>
          <span style={{ fontFamily:"'Barlow',sans-serif",fontSize:"0.65rem",color:"rgba(255,255,255,0.32)" }}>Registered in terms of the Labour Relations Act</span>
        </div>
      </div>
    </footer>
  );
}

// APP
export default function App() {
  const [page, setPage] = useState("home");
  const go = p => { setPage(p); window.scrollTo({ top:0,behavior:"smooth" }); };
  const pages = {
    home: <Home go={go} />,
    partnerships: <Partnerships />,
    about: <About go={go} />,
    representation: <AboutSubpage title="Representation" go={go} />,
    collectivebargaining: <AboutSubpage title="Collective Bargaining" go={go} />,
    advocacy: <AboutSubpage title="Advocacy and Lobbying" go={go} />,
    team: <Team />,
    membership: <Membership go={go} />,
    newsroom: <Newsroom go={go} />,
    resourcehub: <ResourceHub go={go} />,
    shop: <Shop />,
    services: <Services go={go} />,
    contact: <Contact />,
  };
  return (
    <>
      <style>{fonts + gs}</style>
      <Nav cur={page} go={go} />
      <main id="main-content" tabIndex="-1" style={{ paddingTop: page === "home" ? 0 : 108 }}>
        {pages[page] || pages.home}
      </main>
      <Footer go={go} />
    </>
  );
}
