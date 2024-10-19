// Lưu nội dung gốc vào một biến
var originalText = $(".content").html(); // Lấy nội dung HTML ban đầu

function fadeIn() {
  var parts = originalText.split(/<br\s*\/?>/); // Tách nội dung tại <br>
  var html = [];

  // Xử lý từng phần tách biệt
  parts.forEach(part => {
    var trimmedPart = part.replace(/^\s+|\s+$/g, ""); // Xóa khoảng trắng
    var length = trimmedPart.length;
    var sp = 4; // Số ký tự mỗi lần hiển thị

    // Chia nhỏ từng phần thành các span
    for (var i = 0; i < length; i += sp) {
      var txt = trimmedPart.substring(i, i + sp);
      html.push('<span class="c animated">' + txt + "</span>");
    }

    html.push("<br/>"); // Thêm <br/> sau mỗi phần
  });

  $(".content").removeClass("c").html(html.join("")); // Cập nhật nội dung của phần tử

  // Chạy hiệu ứng cho từng phần nội dung
  var spans = $(".content").find(".animated");
  for (let i = 0; i < spans.length; i++) {
    !(function (i) {
      setTimeout(function () {
        $(spans[i]).addClass("fadeIn");
      }, i * 400);
    })(i);
  }
}

document.querySelector(".content").onclick = () => {
  document.querySelector("#heart").hidden = false;
  document.querySelector("body").style.backgroundColor = "#ffffff";
  fadeIn(); // Gọi hàm fadeIn

  // Phát lại nhạc từ đầu khi nhấp chuột
  var audio = document.querySelector("#background-music");
  audio.currentTime = 0; // Đặt lại thời gian phát về đầu
  if (audio.paused) {
    audio.play(); // Phát nhạc
  }
};
