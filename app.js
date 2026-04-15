window.addEventListener('load', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    console.log("取得したスライドの数:", slides.length);

    function showNextSlide() {
        if (slides.length === 0) return;

        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    // 4秒ごとに切り替え
    setInterval(showNextSlide, 4000);
});