"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Activar reveal solo cuando JS está corriendo
    document.body.classList.add('js-ready');

    const all = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

      all.forEach((el) => obs.observe(el));
      
      return () => obs.disconnect();
    } else {
      // Fallback para browsers sin IntersectionObserver
      all.forEach((el) => el.classList.add('visible'));
    }

    // Failsafe: si después de 800ms algo sigue oculto, mostrarlo
    const timer = setTimeout(() => {
      all.forEach((el) => el.classList.add('visible'));
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* COVER */}
      <div className="cover">
        <p className="cover-tag">Propuesta de Desarrollo Web · 2026</p>
        <h1>Compa<span>sCo</span></h1>
        <p className="cover-sub">Tu presencia digital, de cero a leads reales.</p>
        <div className="cover-divider"></div>
        <p className="cover-client">Preparado para <strong>CompasCo</strong> &nbsp;·&nbsp; Marzo 2026</p>
      </div>

      {/* PROBLEMA / SOLUCIÓN */}
      <div className="problem-solution">
        <div className="ps-inner">
          <div className="ps-col problem reveal-left d1">
            <p className="section-label">El problema</p>
            <h3>Una web que no comunica ni convierte</h3>
            <ul className="ps-list">
              <li>Página web sin buen diseño ni identidad visual</li>
              <li>Sin estructura para que te conozcan y entiendan lo que ofrecés</li>
              <li>No está pensada para posicionarse en Google</li>
            </ul>
          </div>
          <div className="ps-col solution reveal d2">
            <p className="section-label">La solución</p>
            <h3>Un sitio que trabaja por vos las 24hs.</h3>
            <ul className="ps-list">
              <li>Diseño profesional que transmite confianza e internacionalidad</li>
              <li>Estructura clara para que cada visitante entienda qué ofrecés</li>
              <li>Formulario que envía cada consulta directo a tu Gmail</li>
              <li>SEO y blog para posicionarte en Google desde el día 1</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MOCKUP */}
      <div className="mockup-section">
        <div className="mockup-inner">
          <p className="section-label reveal d1">Vista previa</p>
          <h2 className="reveal d2">Así va a verse tu nueva web</h2>
          <p className="reveal d3">El formulario es el corazón — visible desde el primer scroll, conectado directo a Gmail, sin perder ningún lead.</p>
          <div className="browser reveal-scale d3">
            <div className="browser-bar">
              <div className="browser-dot"></div><div className="browser-dot"></div><div className="browser-dot"></div>
              <div className="browser-url">compasco.com</div>
            </div>
            <div>
              <div className="mock-nav">
                <div className="mock-logo">CompasCo</div>
                <ul className="mock-nav-links">
                  <li>Servicios</li><li>Sobre Nosotros</li><li>Blog</li>
                  <li className="cta">Contacto ↗</li>
                </ul>
              </div>
              <div className="mock-hero">
                <div className="mock-hero-text">
                  <h3>Tu negocio tiene<br/><em>todo para crecer.</em><br/>Nosotros te acompañamos.</h3>
                  <p>Consultoría estratégica para emprendedores en el mercado de habla hispana. Presencial y online.</p>
                  <div className="mock-cta-btn">Conocer Servicios</div>
                </div>
                <div className="mock-form-card">
                  <h4>Contáctanos hoy</h4>
                  <input className="mock-input" type="text" placeholder="Nombre" disabled />
                  <input className="mock-input" type="text" placeholder="Apellido" disabled />
                  <input className="mock-input" type="email" placeholder="Email" disabled />
                  <div className="mock-input tall" style={{ fontSize: '9px', color: '#9CA3AF', padding: '8px 10px', display: 'flex', alignItems: 'flex-start' }}>Contanos tu situación…</div>
                  <button className="mock-submit">Enviar →</button>
                  <div className="gmail-badge"><div className="gmail-icon">G</div><span>Llega directo a tu Gmail</span></div>
                </div>
              </div>
              <div className="mock-services">
                <div className="mock-service-card"><h5>Consultoría 1:1</h5><p>Acompañamiento estratégico personalizado. Presencial u online.</p></div>
                <div className="mock-service-card"><h5>Programas Grupales</h5><p>Talleres y mentorías para equipos de emprendedores.</p></div>
                <div className="mock-service-card"><h5>Red Internacional</h5><p>Alianzas en múltiples países de habla hispana.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUÉ INCLUYE */}
      <section>
        <p className="section-label reveal d1">Qué entregamos</p>
        <h2 className="reveal d2">Las 4 páginas que necesitás</h2>
        <div className="deliverables-grid">
          <div className="deliverable-card reveal d1">
            <div className="deliverable-number">1</div>
            <h3>Formulario → Gmail</h3>
            <p>La página más importante. Cada consulta llega automáticamente a tu bandeja de entrada, sin perder ni un lead.</p>
          </div>
          <div className="deliverable-card reveal d2">
            <div className="deliverable-number">2</div>
            <h3>Servicios</h3>
            <p>Tus ofertas presentadas con claridad: modalidad, mercados y un CTA que lleva al formulario.</p>
          </div>
          <div className="deliverable-card reveal d3">
            <div className="deliverable-number">3</div>
            <h3>Sobre Nosotros</h3>
            <p>Historia, equipo y alianzas internacionales. La sección que genera confianza y te diferencia.</p>
          </div>
          <div className="deliverable-card reveal d4">
            <div className="deliverable-number">4</div>
            <h3>Blog</h3>
            <p>Contenido para posicionarte en Google y construir autoridad en el mercado hispano.</p>
          </div>
        </div>
      </section>

      <hr className="line-divider" />

      {/* PROCESO */}
      <div className="process-section">
        <p className="section-label reveal d1">Cómo trabajamos</p>
        <h2 className="reveal d2">El proceso, paso a paso</h2>
        <div className="steps">
          <div className="step reveal d1">
            <div className="step-num">1</div>
            <div className="step-body">
              <div className="step-tag">Semana 1</div>
              <h4>Kickoff y brief</h4>
              <p>Reunión de arranque para definir paleta, tipografía, fotos y el contenido de cada página. Vos aprobás antes de que arranquemos a construir.</p>
            </div>
          </div>
          <div className="step reveal d2">
            <div className="step-num">2</div>
            <div className="step-body">
              <div className="step-tag">Semana 1–2</div>
              <h4>Diseño y desarrollo en WordPress</h4>
              <p>Armamos las 4 páginas sobre una base mobile-first. Instalamos y configuramos el formulario con SMTP para que cada lead llegue a tu Gmail sin fallas.</p>
            </div>
          </div>
          <div className="step reveal d3">
            <div className="step-num">3</div>
            <div className="step-body">
              <div className="step-tag">Semana 2</div>
              <h4>Revisión y ajustes</h4>
              <p>Te mostramos el sitio en un link de preview. Tenés una ronda de cambios incluida para afinar textos, imágenes o cualquier detalle antes del lanzamiento.</p>
            </div>
          </div>
          <div className="step reveal d4">
            <div className="step-num">4</div>
            <div className="step-body">
              <div className="step-tag">Semana 3</div>
              <h4>SEO y lanzamiento</h4>
              <p>Configuramos Yoast SEO, Google Search Console y optimizamos las imágenes. Publicamos en tu dominio y probamos el formulario end-to-end.</p>
            </div>
          </div>
          <div className="step reveal d5">
            <div className="step-num">5</div>
            <div className="step-body">
              <div className="step-tag">Post-lanzamiento</div>
              <h4>Entrega</h4>
              <p>El sitio queda 100% en tus manos. Podés publicar en el blog, editar servicios y gestionar todo desde WordPress de forma independiente.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="pricing-section">
        <p className="section-label reveal d1">Inversión</p>
        <h2 className="reveal d2">Precio del Proyecto</h2>
        <p className="reveal d3">Precio fijo, sin sorpresas. Todo lo anterior incluido.</p>
        <div className="price-card reveal-scale d2">
          <div className="price-amount"><sup>USD</sup> 200</div>
          <p className="price-desc">Precio total del proyecto</p>
          <div className="price-splits">
            <div className="price-split">
              <div className="amount">USD 100</div>
              <div className="label">50% al confirmar<br/>(pre-entrega)</div>
            </div>
            <div className="price-split">
              <div className="amount">USD 100</div>
              <div className="label">50% al lanzar<br/>(finalización)</div>
            </div>
          </div>
          <div className="price-includes">
            <h4>Incluye</h4>
            <ul>
              <li>4 páginas WordPress (Formulario, Servicios, Sobre Nosotros, Blog)</li>
              <li>Formulario conectado a Gmail vía SMTP</li>
              <li>Diseño mobile-first y carga rápida</li>
              <li>SEO básico (Yoast + Google Search Console)</li>
              <li>1 ronda de revisiones incluida</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <p>Propuesta preparada con amor ❤️ por <span className="studio">MYB digitals</span> · 2026</p>
      </div>
    </>
  );
}
