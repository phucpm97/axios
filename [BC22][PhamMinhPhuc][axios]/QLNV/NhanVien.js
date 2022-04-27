function ThongtinNhanVien(_TKNV, _tenNV, _emailNV, _matkhauNV, _ngaylamNV, _luongNV, _chucvuNV, _giolamNV) {
    this.taikhoanNV = _TKNV;
    this.tenNV = _tenNV;
    this.emailNV = _emailNV;
    this.matkhauNV = _matkhauNV;
    this.ngaylamNV = _ngaylamNV;
    this.luongNV = _luongNV;
    this.chucvuNV = _chucvuNV;
    this.giolamNV = _giolamNV;
    this.DiemTB = 0;
    this.XepChuyenCan = 0;
    this.LuongChucvu = function() {
        if (this.chucvuNV === "Sếp") {
            this.DiemTB = this.luongNV * 3;
        } else if (this.chucvuNV === "Trưởng phòng") {
            this.DiemTB = this.luongNV * 2;
        } else { this.DiemTB = this.luongNV; }
    };

    this.xepLoai = function() {
        if (192 <= this.giolamNV) {
            return this.XepChuyenCan = "Nhân viên Xuất sắc";
        } else if (176 <= this.giolamNV && this.giolamNV < 192) {
            return this.XepChuyenCan = "Nhân viên giỏi";
        } else if (160 <= this.giolamNV && this.giolamNV < 176) {
            return this.XepChuyenCan = "Nhân viên khá";
        } else {
            return this.XepChuyenCan = "Nhân viên trung bình";
        }
    };
};

// function SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan) {
//     this.MaSV = _maSV;
//     this.TenSV = _tenSV;
//     this.LoaiSV = _loaiSV;
//     this.DiemToanSV = _diemToan;
//     this.DiemVanSV = _diemVan;
//     this.DiemTB = 0;

//     this.tinhDTB = function() {
//         this.DiemTB = (this.DiemToanSV + this.DiemVanSV) / 2;
//     };
//     this.xepLoai = function(dtb) {
//         if (8 <= dtb && dtb <= 10) {
//             return "Gioi";
//         } else if (6 <= dtb && dtb < 8) {
//             return "Kha";
//         } else if (5 <= dtb && dtb < 6) {
//             return "Trung binh";
//         } else {
//             return "Yeu";
//         }
//     };
// };



// function SinhVien(_maSV, _tenSV, _email, _matKhau, _ngaySinh, _KhoaHoc, _diemToan, _diemLy, _diemHoa) {
//     this.maSV = _maSV;
//     this.tenSV = _tenSV;
//     this.email = _email;
//     this.matKhau = _matKhau;
//     this.ngaySinh = _ngaySinh;
//     this.KhoaHoc = _KhoaHoc;
//     this.diemToan = _diemToan;
//     this.diemLy = _diemLy;
//     this.diemHoa = _diemHoa;
//     this.dtb = 0;

//     this.tinhDTB = function() {
//         this.dtb = (this.diemToan + this.diemLy + this.diemHoa) / 3;
//         return this.dtb;
//     };
//     this.xepLoai = function(dtb) {
//         if (8 <= dtb && dtb <= 10) {
//             return "Gioi";
//         } else if (6 <= dtb && dtb < 8) {
//             return "Kha";
//         } else if (5 <= dtb && dtb < 6) {
//             return "Trung binh";
//         } else {
//             return "Yeu";
//         }
//     };

// }