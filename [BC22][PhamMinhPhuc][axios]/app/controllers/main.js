var servies = new Services();
// var servies = Services();
var validation = new Validation();

function getListProduct() {
    servies
        .fetchData()
        .then(function(result) {
            renderHTML(result.data);
            // console.log(result.data);
            // var a = result.data;
            // console.log(a);
        })
        .catch(function(error) {
            console.log(error);
        });
}

;

getListProduct();


function renderHTML(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var product = data[i];
        content += `
        <tr>
            <td>${i + 1}</td>
            <td>${product.taiKhoan}</td>
            <td>${product.matKhau}</td>
            <td>${product.hoTen}</td>      
            <td>${product.email}</td>       
            <td>${product.ngonNgu}</td>
            <td>${product.loaiND}</td>
            <td>${product.moTa}</td>
            <td>
            <img src="./../../assets/img/${product.hinhAnh}" width="50px" />
        </td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="sua(${product.id})">Sửa</button>
                <button class="btn btn-danger" onclick="xoa(${product.id})">Xoá</button>
            </td> 
        </tr>
    `;
    }
    document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}



function xoa(id) {
    console.log(id);
    servies
        .deleteProduct(id)
        .then(function(result) {
            getListProduct();
            console.log(result);
        })
        .catch(function(error) {
            console.log(error);
        })
}

function sua(id) {
    console.log(id);
    // sửa lại tiêu để modal
    document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa sản phẩm";
    // add vô nút button cập nhập dưới footer của modal
    var footer = `<button class="btn btn-warning" onclick="Capnhat(${id})">Update</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

    // gọi tới phương thức servives để lấy product từ server
    servies
        .getProductById(id)
        .then(function(result) {
            // getListProduct();
            console.log(result.data);
            // dom tới các thẻ input show value ra
            var product = result.data;

            getEle("TaiKhoan").value = product.taiKhoan;
            getEle("HoTen").value = product.hoTen;
            getEle("MatKhau").value = product.matKhau;
            getEle("Email").value = product.email;
            getEle("HinhAnh").value = product.hinhAnh;
            getEle("loaiNguoiDung").value = product.loaiND;
            getEle("loaiNgonNgu").value = product.ngonNgu;
            getEle("MoTa").value = product.moTa;

            // console.log(TaikhoanNV, NameNV, PassNV, EmailNV, HinhanhnNV, NguoidungNV, NgonnguNV, MotaNV);

        })
        .catch(function(error) {
            console.log(error);
        })
}

function Capnhat(id) {
    console.log(id);
    // dom toi cac the input lay value
    var TaikhoanNV = getEle("TaiKhoan").value;
    var NameNV = getEle("HoTen").value;
    var PassNV = getEle("MatKhau").value;
    var EmailNV = getEle("Email").value;
    var HinhanhnNV = getEle("HinhAnh").value;
    var NguoidungNV = getEle("loaiNguoiDung").value;
    var NgonnguNV = getEle("loaiNgonNgu").value;
    var MotaNV = getEle("MoTa").value;


    // tao ra doi tuong product
    var product = new Product(id, TaikhoanNV, NameNV, PassNV, EmailNV, NguoidungNV, NgonnguNV, MotaNV, HinhanhnNV);
    // console.log(product);
    //gui toi phuowng thuc services de gui product len server
    servies.UpdateProductById(product)
        .then(function() {
            // console.log(result.data);
            getListProduct();
            // tat modal
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(error) {
            console.log(error);
        })
}

getEle("btnThemNguoiDung").addEventListener("click", function() {
    //  Sua lai tieu de modal
    document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm giáo viên";
    // // add vo nut button
    var footer = `<button class="btn btn-danger" style="color:white;" onclick="addProduct()">Thêm sản phẩm </button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
})

function addProduct() {
    // console.log("hello");
    var TaikhoanNV = getEle("TaiKhoan").value;
    var NameNV = getEle("HoTen").value;
    var PassNV = getEle("MatKhau").value;
    var EmailNV = getEle("Email").value;
    var HinhanhnNV = getEle("HinhAnh").value;
    var NguoidungNV = getEle("loaiNguoiDung").value;
    var NgonnguNV = getEle("loaiNgonNgu").value;
    var MotaNV = getEle("MoTa").value;

    // console.log(TaikhoanNV, NameNV, PassNV, EmailNV, HinhanhnNV, NguoidungNV, NgonnguNV, MotaNV);
    var product = new Product("", TaikhoanNV, NameNV, PassNV, EmailNV, NguoidungNV, NgonnguNV, MotaNV, HinhanhnNV);
    console.log(product);



    var isValid = true;
    // validation tai khoan
    isValid &= validation.kiemTraRong(TaikhoanNV, "divErrorTaiKhoan", "(*)Tài khoản không được rỗng");
    isValid &= validation.kiemTraRong(NameNV, "divErrorName", "(*)Tên không được rỗng") && validation.kiemTraChuoiKyTu(NameNV, "divErrorName", "(*)Tên không đúng định dạng ");
    isValid &= validation.kiemTraRong(PassNV, "divErrorPass", "(*)Mật khẩu không được rỗng") && validation.kiemTraMatKhau(PassNV, "divErrorPass", "(*)Tên mật khẩu phải có ký tự đặc biệt ");
    isValid &= validation.kiemTraRong(EmailNV, "divErrorEmail", "(*)Email không được rỗng") && validation.kiemTraEmail(EmailNV, "divErrorEmail", "(*)Tên Email không đúng định dạng ");
    isValid &= validation.kiemTraRong(HinhanhnNV, "divErrorPicture", "(*)Hình ảnh không được rỗng");
    isValid &= validation.kiemTraRong(NguoidungNV, "divErrorOption", "(*)Nghề nghiệp không được rỗng") && validation.kiemTraNguoiDung(NguoidungNV, "divErrorOption", "(*)Bạn chưa chọn nguoi dung");
    isValid &= validation.kiemTraRong(NgonnguNV, "divErrorLanguage", "(*)Ngôn ngữ không được rỗng") && validation.kiemTraNgonNgu(NgonnguNV, "divErrorLanguage", "(*)Bạn chưa chọn ngôn ngữ");
    isValid &= validation.kiemTraRong(MotaNV, "divErrorAction", "(*)Mô tả không được rỗng") && validation.kiemTraDoDaiKyTu(MotaNV, "divErrorAction", "(*)Độ dài tài khoản từ 60 ký tự ");
    if (!isValid) return null;

    servies.addProductApi(product)
        .then(function(result) {
            // console.log(result);
            getListProduct();
            // tat modal
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(error) {
            console.log(error);
        })
}

function getEle(id) {
    return document.getElementById(id);
}

// //product2.