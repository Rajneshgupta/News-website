function scrollTopics(direction) {
    const container = document.getElementById('topics');
    container.scrollLeft += direction;
}

 const newsData = [
    {
      title: "NDA Women Cadets’ First Passing Out Parade:",
      subtext: "A batch of 17 girls will graduate; some have army backgrounds, others come from corporate families.",
      image: "https://images.bhaskarassets.com/webp/thumb/256x0/web2images/521/2025/05/29/edu-cover-29-may_1748527320.gif",
      duration: "0:59",
      category: "Jobs - Education"
    },
    {
      title: "ISRO Launches New Satellite",
      subtext: "India successfully places a new satellite into orbit for weather forecasting and communication.",
      image: "https://images.bhaskarassets.com/webp/thumb/256x0/web2images/521/2025/05/29/edu-cover-29-may_1748527320.gif",
      duration: "1:22",
      category: "Science - Space"
    },
    {
      title: "Indian Economy Grows by 7%",
      subtext: "Despite global slowdown, Indian economy shows signs of strong growth in Q1.",
      image: "https://images.bhaskarassets.com/webp/thumb/256x0/web2images/521/2025/05/29/edu-cover-29-may_1748527320.gif",
      duration: "2:05",
      category: "Business - Finance"
    },
    {
      title: "NDA Women Cadets’ First Passing Out Parade:",
      subtext: "A batch of 17 girls will graduate; some have army backgrounds, others come from corporate families.",
      image: "https://images.bhaskarassets.com/webp/thumb/256x0/web2images/521/2025/05/29/edu-cover-29-may_1748527320.gif",
      duration: "0:59",
      category: "Jobs - Education"
    },
    {
      title: "ISRO Launches New Satellite",
      subtext: "India successfully places a new satellite into orbit for weather forecasting and communication.",
      image: "https://images.bhaskarassets.com/webp/thumb/256x0/web2images/521/2025/05/29/edu-cover-29-may_1748527320.gif",
      duration: "1:22",
      category: "Science - Space"
    },
    {
      title: "Indian Economy Grows by 7%",
      subtext: "Despite global slowdown, Indian economy shows signs of strong growth in Q1.",
      image: "https://images.bhaskarassets.com/webp/thumb/256x0/web2images/521/2025/05/29/edu-cover-29-may_1748527320.gif",
      duration: "2:05",
      category: "Business - Finance"
    }
  ];

const container = document.getElementById("news-container");

newsData.forEach(news => {
    container.innerHTML += `
      <div class="news-card">
        <a href="#">
          <div class="row">
            <div class="col-md-9 col-12">
              <div class="d-flex align-items-center">
                <span class="badge-live">LIVE</span>
                <p class="text-primary news-title mb-0">${news.title}</p>
              </div>
              <p class="news-subtext mb-2">${news.subtext}</p>
            </div>
            <div class="col-md-3 col-12 mt-2 mt-md-0">
              <div class="video-thumbnail">
                <img src="${news.image}" alt="Video">
                <span class="play-icon">&#9658;</span>
                <span class="duration">${news.duration}</span>
              </div>
            </div>
          </div>
          <div class="mt-2 d-flex justify-content-between align-items-center">
            <div>
              <button class="category-btn">${news.category}</button>
            </div>
            <div class="social-icons">
              <i class="fa fa-facebook fs-6"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-link"></i>
            </div>
          </div>
        </a>
      </div>
    `;
});