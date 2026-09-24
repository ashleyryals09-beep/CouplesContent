<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta
    name="description"
    content="Cinematic photography gallery featuring dramatic male portraiture, firelight, shadows and film-inspired imagery."
  />

  <title>Gallery | INFERNO STUDIO</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
    rel="stylesheet"
  />

  <link rel="stylesheet" href="styles.css" />
</head>


<body class="gallery-page">

  <!-- =========================================
       GLOBAL NAV
  ========================================== -->
  <header class="site-header">
    <nav class="navbar">

      <a href="index.html" class="brand" aria-label="Inferno Studio home">
        INFERNO<span>.</span>
      </a>

      <div class="nav-links">
        <a href="index.html">Index</a>
        <a href="gallery.html" class="active">Gallery</a>
      </div>

    </nav>
  </header>


  <main>

    <!-- =========================================
         GALLERY INTRO
    ========================================== -->
    <section class="gallery-hero">

      <div class="gallery-hero-bg"></div>

      <div class="gallery-heading">

        <p class="eyebrow">
          SELECTED FRAMES / 2026
        </p>

        <h1>
          BURNED
          <span>INTO</span>
          MEMORY.
        </h1>

        <p class="gallery-intro">
          Portraits built from shadow, heat, motion and
          unfiltered masculine energy.
        </p>

      </div>

      <div class="gallery-index">
        <span>RAW PORTRAITURE</span>
        <span>/</span>
        <span>FILM STILLS</span>
        <span>/</span>
        <span>AFTER DARK</span>
      </div>

    </section>


    <!-- =========================================
         MASONRY GALLERY
    ========================================== -->
    <section class="gallery-section">

      <div class="gallery-grid">


        <!-- IMAGE 01 -->
        <a href="#lightbox-1" class="gallery-card tall">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=90"
            alt="Cinematic male portrait"
          />

          <div class="gallery-overlay">
            <span>FRAME 001</span>
            <strong>AFTER DARK</strong>
          </div>
        </a>


        <!-- IMAGE 02 -->
        <a href="#lightbox-2" class="gallery-card wide">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=90"
            alt="Dramatic male portrait"
          />

          <div class="gallery-overlay">
            <span>FRAME 002</span>
            <strong>ASH + BONE</strong>
          </div>
        </a>


        <!-- IMAGE 03 -->
        <a href="#lightbox-3" class="gallery-card">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=90"
            alt="Editorial male portrait"
          />

          <div class="gallery-overlay">
            <span>FRAME 003</span>
            <strong>NO SAINTS</strong>
          </div>
        </a>


        <!-- IMAGE 04 -->
        <a href="#lightbox-4" class="gallery-card tall">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90"
            alt="Moody cinematic portrait"
          />

          <div class="gallery-overlay">
            <span>FRAME 004</span>
            <strong>RED HOURS</strong>
          </div>
        </a>


        <!-- IMAGE 05 -->
        <a href="#lightbox-5" class="gallery-card">
          <img
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=1200&q=90"
            alt="Dark editorial portrait"
          />

          <div class="gallery-overlay">
            <span>FRAME 005</span>
            <strong>WILDFIRE</strong>
          </div>
        </a>


        <!-- IMAGE 06 -->
        <a href="#lightbox-6" class="gallery-card wide">
          <img
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1400&q=90"
            alt="Cinematic portrait photograph"
          />

          <div class="gallery-overlay">
            <span>FRAME 006</span>
            <strong>BURN LINE</strong>
          </div>
        </a>


        <!-- IMAGE 07 -->
        <a href="#lightbox-7" class="gallery-card">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=90"
            alt="Male fashion portrait"
          />

          <div class="gallery-overlay">
            <span>FRAME 007</span>
            <strong>HEATWAVE</strong>
          </div>
        </a>


        <!-- IMAGE 08 -->
        <a href="#lightbox-8" class="gallery-card tall">
          <img
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=90"
            alt="Cinematic fashion portrait"
          />

          <div class="gallery-overlay">
            <span>FRAME 008</span>
            <strong>SMOKE SIGNAL</strong>
          </div>
        </a>


        <!-- IMAGE 09 -->
        <a href="#lightbox-9" class="gallery-card">
          <img
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1200&q=90"
            alt="Moody masculine portrait"
          />

          <div class="gallery-overlay">
            <span>FRAME 009</span>
            <strong>DEAD HEAT</strong>
          </div>
        </a>


        <!-- IMAGE 10 -->
        <a href="#lightbox-10" class="gallery-card wide">
          <img
            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1400&q=90"
            alt="Black and white male portrait"
          />

          <div class="gallery-overlay">
            <span>FRAME 010</span>
            <strong>THE LAST MATCH</strong>
          </div>
        </a>

      </div>

    </section>


    <!-- =========================================
         CSS-ONLY LIGHTBOXES
    ========================================== -->

    <div id="lightbox-1" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2000&q=95"
          alt="Cinematic male portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 001</span>
          <strong>AFTER DARK</strong>
        </div>
      </div>
    </div>


    <div id="lightbox-2" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=2000&q=95"
          alt="Dramatic male portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 002</span>
          <strong>ASH + BONE</strong>
        </div>
      </div>
    </div>


    <div id="lightbox-3" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=95"
          alt="Editorial portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 003</span>
          <strong>NO SAINTS</strong>
        </div>
      </div>
    </div>


    <div id="lightbox-4" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=95"
          alt="Portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 004</span>
          <strong>RED HOURS</strong>
        </div>
      </div>
    </div>


    <div id="lightbox-5" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=2000&q=95"
          alt="Dark editorial portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 005</span>
          <strong>WILDFIRE</strong>
        </div>
      </div>
    </div>


    <div id="lightbox-6" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=2000&q=95"
          alt="Cinematic portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 006</span>
          <strong>BURN LINE</strong>
        </div>
      </div>
    </div>


    <div id="lightbox-7" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=2000&q=95"
          alt="Fashion portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 007</span>
          <strong>HEATWAVE</strong>
        </div>
      </div>
    </div>


    <div id="lightbox-8" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=2000&q=95"
          alt="Cinematic fashion portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 008</span>
          <strong>SMOKE SIGNAL</strong>
        </div>
      </div>
    </div>


    <div id="lightbox-9" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=2000&q=95"
          alt="Moody masculine portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 009</span>
          <strong>DEAD HEAT</strong>
        </div>
      </div>
    </div>


    <div id="lightbox-10" class="lightbox">
      <a href="#" class="lightbox-background"></a>

      <div class="lightbox-content">
        <a href="#" class="lightbox-close">×</a>

        <img
          src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=2000&q=95"
          alt="Male portrait expanded"
        />

        <div class="lightbox-caption">
          <span>FRAME 010</span>
          <strong>THE LAST MATCH</strong>
        </div>
      </div>
    </div>


    <!-- =========================================
         FOOTER
    ========================================== -->
    <footer class="footer">

      <div>
        <a href="index.html" class="footer-logo">
          INFERNO<span>.</span>
        </a>

        <p>
          Cinematic male portrait photography.
        </p>
      </div>

      <div class="footer-links">
        <a href="index.html">INDEX</a>
        <a href="gallery.html">GALLERY</a>
        <a href="#top">BACK TO TOP ↑</a>
      </div>

      <p class="copyright">
        © 2026 INFERNO STUDIO
      </p>

    </footer>

  </main>

</body>
</html>
