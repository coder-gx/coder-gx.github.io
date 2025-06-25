---
show: true
width: 4
date: 2021-09-12 00:01:00 +0800
height: 295px
images:

- src: assets/images/photos/image.jpg
  desc: Yorushika 
- src: assets/images/photos/p3.jpg
  desc: Suzhou, 2023
- src: assets/images/photos/p1.jpg
  desc: Shanghai, 19/03/2025.
- src: assets/images/photos/p2.jpg
  desc: My dishes.
---

{% include widgets/carousel.html id=page.id images=page.images height=page.height %}
