function DanhSachNhanVien() {
    this.arr = [];

    this.themNV = function(NhanVien) {
        this.arr.push(NhanVien);
    };
    this.timViTriNV = function(maSV) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var NhanVien = this.arr[i];
            if (NhanVien.tenNV === maSV) {
                index = i;
                break;
            }
        }
        return index;
    }
    this._xoaNV = function(maSV) {
        /**
         * tạo biến index = -1(-1 là trường họp chưa xảy ra giá trị)
         * duyệt mảng arr
         * nếu sinhVien.maSV trùng với maSV cần xóa
         * => gán cho index vị trí tìm thấy : break
         * xóa phần tử trong mảng: arr.splice(index,1);
         */
        // console.log(maSV);
        // var index = -1;
        // for (var i = 0; i < this.arr.length; i++) {
        //     var NhanVien = this.arr[i];
        //     if (NhanVien.tenNV === maSV) {
        //         index = i;
        //         break;
        //     }
        // }
        var index = this.timViTriNV(maSV);

        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    this._suaNV = function(maSV) {
        // tìm vị trí dựa vào maSV
        index = this.timViTriNV(maSV);
        if (index !== -1) {
            // Lấy object sinhVien trong arr dựa vào index
            var nhanVien = this.arr[index];
            return nhanVien;
        }
        return null;
    };
    this.capNhatNhanVien = function(NhanVien) {
        var index = this.timViTriNV(NhanVien.tenNV)
        if (index !== -1) {
            this.arr[index] = NhanVien;
        }
        console.log("index");
    };
    this.timkiemNhanVien = function(KeyWord) {
        /**
         * 0. MangTimKiem = []
         * 1. Duyet mang this.arr
         * 2. Neu sinhVien.tenSV trung voi keyword
         *  => Push sinhVien vao mang tim kiem
         * 3. tra ve MangTimkiem
         */
        var MangTimkiem = [];
        for (var i = 0; i < this.arr.length; i++) {
            var NhanVien = this.arr[i];
            // //đây là so sánh tuyệt đối:
            //  sinhVien.tenSV === KeyWord
            if (NhanVien.tenNV.toLowerCase().indexOf(KeyWord.toLowerCase()) !== -1) {
                MangTimkiem.push(NhanVien);
            }
        }
        return MangTimkiem;
    };

}

// var index = this.timViTriNV(NhanVien.taikhoanNV)
// if (index !== -1) {
//     this.arr[index] = NhanVien;
// }

// var index = -1;
// for (var i = 0; i < this.arr.length; i++) {
//     var sinhVien = this.arr[i];
//     if (sinhVien.maSV === maSV) {
//         index = i;
//         console.log(maSV);
//         break;

//     }
// }
//  var index = -1;
//         for (var i = 0; i < this.arr.length; i++) {
//             var sinhVien = this.arr[i];
//             if (sinhVien.maSV === maSV) {
//                 index = i;
//                 break;
//             }
//         }
//         var index = this.timViTriSV(maSV);
//         if (index !== -1) {
//             this.arr.splice(index, 1);
//         }
// function DanhSachSinhVien() {
//     this.arr = [];

//     this.themSV = function(sv) {
//         this.arr.push(sv);