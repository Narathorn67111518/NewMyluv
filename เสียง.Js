// อ้างอิงองค์ประกอบ HTML
const volumeSlider = document.getElementById("volume-slider");

// ฟังก์ชันปรับระดับเสียง
volumeSlider.addEventListener("input", (e) => {
    const volume = e.target.value;
    audio.volume = volume; // ตั้งค่าระดับเสียงใน audio
});
