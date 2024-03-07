document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("personalInfoForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu mặc định

        var fullName = document.getElementById("fullName").value.trim();
        var dob = document.getElementById("dob").value.trim();
        var studentID = document.getElementById("studentID").value.trim();
       
        var className = document.getElementById("class").value.trim();

        if (fullName === '' || dob === '' || studentID === '' || className === '') {
            alert("Yêu cầu nhập đủ thông tin.");
            return false;
        }

        var dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!dateRegex.test(dob)) {
            alert("Chưa đúng định dạng ngày sinh (dd/mm/yyyy).");
            return false;
        }

        alert("Khai báo thông tin thành công!");
        // Chuyển hướng người dùng sang trang bài thi
        window.location.href = "Baithi.html";
    });
});
