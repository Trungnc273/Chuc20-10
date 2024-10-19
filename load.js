window.onload = function() {
    // Hiển thị trái tim và thanh loading trước
    setTimeout(() => {
        document.getElementById('heart-screen').classList.add('hidden'); // Ẩn màn hình trái tim
        document.getElementById('cutscene-screen').classList.remove('hidden'); // Hiện màn hình cắt cảnh
    }, 3500);  // Thời gian thanh loading chạy xong

    // Chuyển hướng đến trang indexxx.html ngay sau khi hiển thị màn hình cắt cảnh
    setTimeout(() => {
        window.location.href = "womenday.html"; // Chuyển hướng
    }, 4600); // Thời gian cắt cảnh (có thể điều chỉnh nếu cần)
};
