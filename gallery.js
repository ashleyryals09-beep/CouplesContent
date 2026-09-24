<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>JB | Gallery</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
    rel="stylesheet"
  >

  <link rel="stylesheet" href="styles.css">
</head>

<body>

<header class="site-header">
  <nav class="navbar">

    <a href="index.html" class="brand">
      JB<span>.</span>
    </a>

    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="#recently-added">Recently Added</a>
      <a href="#photos">Photos</a>
      <a href="#videos">Videos</a>
    </div>

  </nav>
</header>


<main>

  <!-- ===============================
       HERO
  ================================ -->

  <section class="gallery-hero-simple">

    <div class="gallery-hero-overlay"></div>

    <img
      src="jb-main.png"
      alt="JB"
    >

    <div class="gallery-hero-text">
      <h1>JB</h1>
    </div>

  </section>



  <!-- ===============================
       RECENTLY ADDED
  ================================ -->

  <section
    class="content-section"
    id="recently-added"
  >

    <div class="section-header">
      <p class="section-label">LATEST</p>
      <h2>Recently Added</h2>
    </div>


    <div class="recent-grid">

      <a
        class="gallery-card"
        href="#photo17"
      >
        <img
          src="photo17.JPG"
          alt="Recently added photo"
          loading="lazy"
        >
      </a>


      <a
        class="gallery-card"
        href="#photo18"
      >
        <img
          src="photo18.JPG"
          alt="Recently added photo"
          loading="lazy"
        >
      </a>


      <a
        class="gallery-card"
        href="#photo19"
      >
        <img
          src="photo19.JPG"
          alt="Recently added photo"
          loading="lazy"
        >
      </a>


      <div class="video-card featured-video">

        <video
          controls
          playsinline
          preload="metadata"
        >
          <source
            src="video14.mov"
            type="video/quicktime"
          >
        </video>

      </div>


      <div class="video-card featured-video">

        <video
          controls
          playsinline
          preload="metadata"
        >
          <source
            src="video15.mov"
            type="video/quicktime"
          >
        </video>

      </div>


      <div class="video-card featured-video">

        <video
          controls
          playsinline
          preload="metadata"
        >
          <source
            src="video16.mov"
            type="video/quicktime"
          >
        </video>

      </div>

    </div>

  </section>



  <!-- ===============================
       PHOTOS
  ================================ -->

  <section
    class="content-section"
    id="photos"
  >

    <div class="section-header">
      <p class="section-label">PHOTOS</p>
      <h2>Photos</h2>
    </div>


    <div class="masonry-grid">

      <a href="#photo1" class="gallery-card">
        <img src="photo1.JPG" alt="Photo 1" loading="lazy">
      </a>

      <a href="#photo2" class="gallery-card">
        <img src="photo2.JPG" alt="Photo 2" loading="lazy">
      </a>

      <a href="#photo3" class="gallery-card">
        <img src="photo3.JPG" alt="Photo 3" loading="lazy">
      </a>

      <a href="#photo4" class="gallery-card">
        <img src="photo4.JPG" alt="Photo 4" loading="lazy">
      </a>

      <a href="#photo5" class="gallery-card">
        <img src="photo5.JPG" alt="Photo 5" loading="lazy">
      </a>

      <a href="#photo6" class="gallery-card">
        <img src="photo6.JPG" alt="Photo 6" loading="lazy">
      </a>

      <a href="#photo7" class="gallery-card">
        <img src="photo7.JPG" alt="Photo 7" loading="lazy">
      </a>

      <a href="#photo8" class="gallery-card">
        <img src="photo8.JPG" alt="Photo 8" loading="lazy">
      </a>

      <a href="#photo9" class="gallery-card">
        <img src="photo9.JPG" alt="Photo 9" loading="lazy">
      </a>

      <a href="#photo10" class="gallery-card">
        <img src="photo10.JPG" alt="Photo 10" loading="lazy">
      </a>

      <a href="#photo11" class="gallery-card">
        <img src="photo11.JPG" alt="Photo 11" loading="lazy">
      </a>

      <a href="#photo12" class="gallery-card">
        <img src="photo12.JPG" alt="Photo 12" loading="lazy">
      </a>

      <a href="#photo13" class="gallery-card">
        <img src="photo13.JPG" alt="Photo 13" loading="lazy">
      </a>

      <a href="#photo14" class="gallery-card">
        <img src="photo14.JPG" alt="Photo 14" loading="lazy">
      </a>

      <a href="#photo15" class="gallery-card">
        <img src="photo15.JPG" alt="Photo 15" loading="lazy">
      </a>

      <a href="#photo16" class="gallery-card">
        <img src="photo16.JPG" alt="Photo 16" loading="lazy">
      </a>

      <a href="#photo17" class="gallery-card">
        <img src="photo17.JPG" alt="Photo 17" loading="lazy">
      </a>

      <a href="#photo18" class="gallery-card">
        <img src="photo18.JPG" alt="Photo 18" loading="lazy">
      </a>

      <a href="#photo19" class="gallery-card">
        <img src="photo19.JPG" alt="Photo 19" loading="lazy">
      </a>

    </div>

  </section>



  <!-- ===============================
       VIDEOS
  ================================ -->

  <section
    class="content-section"
    id="videos"
  >

    <div class="section-header">
      <p class="section-label">VIDEOS</p>
      <h2>Videos</h2>
    </div>


    <div class="video-gallery">


      <!-- VIDEO 1 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video1.mp4" type="video/mp4">
        </video>
      </div>


      <!-- VIDEO 2 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video2.mp4" type="video/mp4">
        </video>
      </div>


      <!-- VIDEO 3 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video3.mp4" type="video/mp4">
        </video>
      </div>


      <!-- VIDEO 4 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video4.mp4" type="video/mp4">
        </video>
      </div>


      <!-- VIDEO 5 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video5.mp4" type="video/mp4">
        </video>
      </div>


      <!-- VIDEO 6 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video6.mp4" type="video/mp4">
        </video>
      </div>


      <!-- VIDEO 7 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video7.mp4" type="video/mp4">
        </video>
      </div>


      <!-- VIDEO 8 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video8.mov" type="video/quicktime">
        </video>
      </div>


      <!-- VIDEO 9 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video9.mp4" type="video/mp4">
        </video>
      </div>


      <!-- VIDEO 10 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video10.MOV" type="video/quicktime">
        </video>
      </div>


      <!-- VIDEO 11 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video11.MOV" type="video/quicktime">
        </video>
      </div>


      <!-- VIDEO 12 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video12.MOV" type="video/quicktime">
        </video>
      </div>


      <!-- VIDEO 13 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video13.MOV" type="video/quicktime">
        </video>
      </div>


      <!-- VIDEO 14 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video14.mov" type="video/quicktime">
        </video>
      </div>


      <!-- VIDEO 15 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video15.mov" type="video/quicktime">
        </video>
      </div>


      <!-- VIDEO 16 -->
      <div class="video-card">
        <video controls playsinline preload="metadata">
          <source src="video16.mov" type="video/quicktime">
        </video>
      </div>


    </div>

  </section>



  <!-- ==================================
       FULL SCREEN PHOTO LIGHTBOXES
  =================================== -->


  <div id="photo1" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo1.JPG" alt="Photo 1">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo2" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo2.JPG" alt="Photo 2">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo3" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo3.JPG" alt="Photo 3">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo4" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo4.JPG" alt="Photo 4">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo5" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo5.JPG" alt="Photo 5">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo6" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo6.JPG" alt="Photo 6">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo7" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo7.JPG" alt="Photo 7">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo8" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo8.JPG" alt="Photo 8">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo9" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo9.JPG" alt="Photo 9">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo10" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo10.JPG" alt="Photo 10">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo11" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo11.JPG" alt="Photo 11">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo12" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo12.JPG" alt="Photo 12">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo13" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo13.JPG" alt="Photo 13">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo14" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo14.JPG" alt="Photo 14">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo15" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo15.JPG" alt="Photo 15">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo16" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo16.JPG" alt="Photo 16">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo17" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo17.JPG" alt="Photo 17">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo18" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo18.JPG" alt="Photo 18">
    <a href="#photos" class="lightbox-close">×</a>
  </div>

  <div id="photo19" class="lightbox">
    <a href="#photos" class="lightbox-bg"></a>
    <img src="photo19.JPG" alt="Photo 19">
    <a href="#photos" class="lightbox-close">×</a>
  </div>



  <!-- ===============================
       FOOTER
  ================================ -->

  <footer class="footer">

    <a href="index.html" class="footer-logo">
      JB<span>.</span>
    </a>

    <div class="footer-links">
      <a href="#recently-added">Recently Added</a>
      <a href="#photos">Photos</a>
      <a href="#videos">Videos</a>
    </div>

  </footer>

</main>

</body>
</html>
