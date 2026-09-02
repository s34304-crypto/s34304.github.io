<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio | ชื่อของคุณ</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <nav>
    <div class="logo">Portfolio</div>

    <div class="nav-links">
      <a href="#home">หน้าแรก</a>
      <a href="#about">เกี่ยวกับฉัน</a>
      <a href="#skills">ทักษะ</a>
      <a href="#projects">ผลงาน</a>
      <a href="#contact">ติดต่อ</a>
    </div>
  </nav>

  <section id="home" class="hero">
    <div class="hero-text">
      <p class="hello">สวัสดีครับ 👋</p>
      <h1>ผมชื่อ <span>ชื่อของคุณ</span></h1>
      <h2>นักเรียน / นักศึกษา / นักพัฒนาเว็บไซต์</h2>

      <p>
        ยินดีต้อนรับเข้าสู่แฟ้มสะสมผลงานของฉัน
        ที่รวบรวมประวัติ ทักษะ และผลงานที่ภาคภูมิใจ
      </p>

      <a href="#projects" class="button">ดูผลงานของฉัน</a>
    </div>

    <div class="profile">
      <img src="https://via.placeholder.com/300" alt="รูปโปรไฟล์">
    </div>
  </section>

  <section id="about">
    <h2 class="section-title">เกี่ยวกับฉัน</h2>

    <div class="about-box">
      <p>
        สวัสดีครับ ผมชื่อ <strong>ชื่อของคุณ</strong>
        ปัจจุบันกำลังศึกษาอยู่ที่ <strong>ชื่อโรงเรียน/มหาวิทยาลัย</strong>
        สนใจด้านเทคโนโลยี การออกแบบ และการพัฒนาเว็บไซต์
      </p>

      <p>
        ผมชอบเรียนรู้สิ่งใหม่ ๆ และนำความรู้มาสร้างผลงาน
        เพื่อพัฒนาทักษะของตัวเองอยู่เสมอ
      </p>
    </div>
  </section>

  <section id="skills">
    <h2 class="section-title">ทักษะของฉัน</h2>

    <div class="skills-container">
      <div class="skill-card">
        <h3>HTML</h3>
        <p>สร้างโครงสร้างเว็บไซต์</p>
      </div>

      <div class="skill-card">
        <h3>CSS</h3>
        <p>ออกแบบและตกแต่งเว็บไซต์</p>
      </div>

      <div class="skill-card">
        <h3>JavaScript</h3>
        <p>สร้างเว็บไซต์แบบ Interactive</p>
      </div>

      <div class="skill-card">
        <h3>Canva</h3>
        <p>ออกแบบสื่อและนำเสนอผลงาน</p>
      </div>
    </div>
  </section>

  <section id="projects">
    <h2 class="section-title">ผลงานของฉัน</h2>

    <div class="projects-container">

      <div class="project-card">
        <img src="https://via.placeholder.com/500x300" alt="Project 1">
        <div class="project-content">
          <h3>เว็บไซต์แนะนำตัว</h3>
          <p>
            เว็บไซต์ Portfolio ที่สร้างขึ้นเพื่อแนะนำประวัติ
            ทักษะ และผลงานของฉัน
          </p>
          <a href="#" class="project-button">ดูผลงาน</a>
        </div>
      </div>

      <div class="project-card">
        <img src="https://via.placeholder.com/500x300" alt="Project 2">
        <div class="project-content">
          <h3>โครงงานที่ 2</h3>
          <p>
            รายละเอียดเกี่ยวกับโครงงาน ผลงาน หรือกิจกรรม
            ที่เคยทำ
          </p>
          <a href="#" class="project-button">ดูผลงาน</a>
        </div>
      </div>

      <div class="project-card">
        <img src="https://via.placeholder.com/500x300" alt="Project 3">
        <div class="project-content">
          <h3>กิจกรรม</h3>
          <p>
            รวบรวมกิจกรรม การแข่งขัน หรือประสบการณ์
            ที่เคยเข้าร่วม
          </p>
          <a href="#" class="project-button">ดูรายละเอียด</a>
        </div>
      </div>

    </div>
  </section>

  <section id="contact">
    <h2 class="section-title">ติดต่อฉัน</h2>

    <div class="contact-box">
      <p>📧 Email: your@email.com</p>
      <p>📱 โทร: 08X-XXX-XXXX</p>
      <p>📍 ที่อยู่: จังหวัดของคุณ</p>

      <a href="https://github.com/" class="button">GitHub</a>
    </div>
  </section>

  <footer>
    <p>© 2026 ชื่อของคุณ | Portfolio</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
