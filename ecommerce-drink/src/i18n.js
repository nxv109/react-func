import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "My account": "My account",
          "Order status": "Order status",
          "Favorites list": "Favorites list",
          "Cart": "Cart",
          "Logout": "Logout",
          "Login": "Login",
          "Register": "Register",
          "Search": "Search",
          "Home": "Home",
          "Customer login": "Customer login",
          "Personal information": "Personal information",
          "First name": "First name",
          "Last name": "Last name",
          "Password": "Password",
          "Password again": "Password again",
          "Address": "Address",
          "Introduce": "Introduce",
          "See more": "See more",
          "Red wine": "Red wine",
          "White wine": "White wine",
          "About us": "About us",
          "Contact": "Contact",
          "Grape wine": "Grape wine",
          "Add to cart": "Add to cart",
          "Days": "Days",
          "Hours": "Hours",
          "Minutes": "Minutes",
          "Seconds": "Seconds",
          "New product": "New product",
          "Interested product": "Interested product",
          "Information": "Information",
          "Send": "Send",
          "Delivery": "Delivery",
          "Feelings": "Feelings",
          "Storage": "Storage",
          "Purchase": "Purchase",
          "Transport": "Transport",
          "Return the product": "Return the product",
          "Buy safe products": "Buy safe products",
          "International Shipping": "International Shipping",
          "Link": "Link",
          "Discount service": "Discount service",
          "Email us for support": "Email us for support",
          "Company Address": "Floor 4, Hanoi building group No. 442 Doi Can, P. Cong Vi, Ba Dinh District, Hanoi.",
          "Foreign wine": "Foreign wine",
          "Wine": "Wine",
          "Precious wine": "Precious wine",
          "Unique wine": "Unique wine",
          "Chivas wine": "Chivas wine",
          "Alcohol hundred years": "Alcohol hundred years",
          "Alcohol thousand years": "Alcohol thousand years",
          "Champagne": "Champagne",
          "Rated points": "Rated points",
          "Color": "Color",
          "Size": "Size",
          "Amounts": "Amounts",
          "Love": "Love",
          "Compare": "Compare",
          "Descriptions": "Descriptions",
          "Highlight": "Highlight",
          "Evaluate": "Evaluate",
          "Your evaluate": "Your evaluate",
          "Login to evaluate": "Log in to evaluate",
          "There are no reviews yet": "There are no reviews yet",
          "You need to select this section": "You need to select this section",
          "Image": "Image",
          "Name": "Name",
          "Price": "Price",
          "Amount": "Amount",
          "Total": "Total",
          "Into money": "Into money",
          "Remove": "Remove",
          "Choosed": "Choosed",
          "red": "Red",
          "yellow": "Yellow",
          "blue": "Blue",
          "orange": "orange",
          "black": "black",
          "gray": "gray",
          "large": "Large",
          "medium": "Medium",
          "small": "Small",
          "Empty cart": "Empty cart",
          "Please login to view cart details": "Please login to view cart details",
          "Are you sure you want to delete the item?": "Are you sure you want to delete the item?",
          "This product already exists in the basket, do you want to increase the quantity?": "This product already exists in the basket, do you want to increase the quantity?",
          "Do you want to delete all the shopping carts?": "Do you want to delete all the shopping carts?",
          "Continue to buy": "Continue to buy",
          "Delete cart": "Delete cart",
          "Choose size": "Choose size",
          "Checkout": "Checkout",
          "Manipulation": "Manipulation",
          "Back to home page": "Back to home page",
          "Order": "Order",
          "Transport fee": "Transport fee",
          "Total payment": "Total payment",
          "Orders": "Orders",
          "Delete orders": "Delete orders",
          "Please login to view orders details": "Please login to view orders details",
          "Empty orders": "Empty orders",
          "Status": "Status",
          "Order placed": "Order placed",
          "Delivering": "Delivering",
          "Delivered": "Delivered",
          "Detail": "Detail",
          "Orders details": "Orders details",
          "Back": "Back",
          "Users management": "Users management",
          "Categories management": "Categories management",
          "Products management": "Products management",
          "Dashboard": "Dashboard",
          "Unknown": "Unknown",
          "Sign in to see more": "Sign in to see more",
          "Profile": "Profile",
          "Edit": "Edit",
          "Update": "Update",
          "New password": "New password"
        }
      },
      vi: {
        translations: {
          "My account": "Tài khoản của tôi",
          "Order status": "Trạng thái đơn hàng",
          "Favorites list": "Danh sách ưu thích",
          "Cart": "Giỏ hàng",
          "Logout": "Đăng xuất",
          "Login": "Đăng nhập",
          "Register": "Đăng ký",
          "Search": "Tìm kiếm",
          "Home": "Trang chủ",
          "Customer login": "Khách hàng đăng nhập",
          "Personal information": "Thông tin cá nhân",
          "First name": "Họ",
          "Last name": "Tên",
          "Password": "Mật khẩu",
          "Password again": "Nhập lại mật khẩu",
          "Address": "Địa chỉ",
          "Introduce": "Giới thiệu",
          "See more": "Xem thêm",
          "Red wine": "Rượu vang đỏ",
          "White wine": "Rượu trắng",
          "About us": "Thông tin",
          "Contact": "Liên hệ",
          "Grape wine": "Rượu nho",
          "Add to cart": "Thêm vào giỏ",
          "Days": "Ngày",
          "Hours": "Giờ",
          "Minutes": "Phút",
          "Seconds": "Giây",
          "New product": "Sản phẩm mới",
          "Interested product": "Sản phẩm quan tâm",
          "Information": "Thông tin",
          "Send": "Gửi",
          "Delivery": "Giao hàng",
          "Feelings": "Cảm nghĩ",
          "Storage": "Lưu trữ",
          "Purchase": "Mua hàng",
          "Transport": "Vận chuyển",
          "Return the product": "Trả lại hàng hóa",
          "Buy safe products": "Mua hàng an toàn",
          "International Shipping": "Vận chuyển quốc tế",
          "Link": "Liên kết",
          "Discount service": "Dịch vụ giảm giá",
          "Email us for support": "Gửi email cho chúng tôi để được hổ trợ",
          "Company Address": "Tầng 4 tòa nhà Hà Nội group Số 442 Đội Cấn, P.Cống Vị, Q.Ba Đình, Hà Nội.",
          "Foreign wine": "Rượu ngoại",
          "Wine": "Rượu vang",
          "Precious wine": "Rượu quý",
          "Unique wine": "Rượu độc đáo",
          "Chivas wine": "Rượu Chivas",
          "Alcohol hundred years": "Rượu trăm năm",
          "Alcohol thousand yearsyears": "Rượu ngàn năm",
          "Champagne": "Rượu sâm banh",
          "Rated points": "Lượt đánh giá",
          "Color": "Màu sắc",
          "Size": "Kích thước",
          "Amounts": "Số lượng",
          "Love": "Yêu thích",
          "Compare": "So sánh",
          "Descriptions": "Mô tả",
          "Highlight": "Đặc điểm nổi bật",
          "Evaluate": "Đặc điểm",
          "Your evaluate": "Đánh giá của bạn",
          "Login to evaluate": "Đăng nhập để đánh giá",
          "There are no reviews yet": "Chưa có đánh giá nào",
          "You need to select this section": "Bạn cần chọn phần này",
          "Image": "Ảnh",
          "Name": "Tên",
          "Price": "Giá",
          "Amount": "Số lượng",
          "Total": "Tổng",
          "Into money": "Thành tiền",
          "Remove": "Xóa",
          "Choosed": "Đã chọn",
          "red": "Màu đỏ",
          "yellow": "Màu vàng",
          "blue": "Màu xanh",
          "orange": "Màu cam",
          "black": "Màu đen",
          "gray": "Màu xám",
          "large": "Lớn",
          "medium": "Trung bình",
          "small": "Nhỏ",
          "Empty cart": "Chưa có sản phầm nào trong giỏ",
          "Please login to view cart details": "Vui lòng đăng nhập để xem chi tiết giỏ hàng",
          "Are you sure you want to delete the item?": "Bạn có chắc chắn muốn xóa mục này không?",
          "This product already exists in the basket, do you want to increase the quantity?": "Sản phẩm này đã tồn tại trong giỏ, bạn có muốn tăng số lượng không?",
          "Do you want to delete all the shopping carts?": "Bạn có muốn xóa tất cả các giỏ hàng?",
          "Continue to buy": "Tiếp tục mua",
          "Delete cart": "Xóa giỏ hàng",
          "Choose size": "Chọn kích cỡ",
          "Checkout": " Thanh toán",
          "Manipulation": "Thao tác",
          "Back to home page": "Quay lại trang chủ",
          "Order": "Đặt hàng",
          "Transport fee": "Phí vận chuyển",
          "Total payment": "Tổng tiền thanh toán",
          "Orders": "Đơn hàng",
          "Delete orders": "Xóa đơn hàng",
          "Please login to view orders details": "Vui lòng đăng nhập để xem chi tiết đơn hàng",
          "Empty orders": "Đơn hàng trống",
          "Status": "Trạng thái",
          "Order placed": "Đã đặt hàng",
          "Delivering": "Đang giao hàng",
          "Delivered": "Đã giao hàng",
          "Detail": "Xem chi tiết",
          "Orders details": "Chi tiết đơn hàng",
          "Back": "Trở lại",
          "Users management": "Quản lý người dùng",
          "Categories management": "Quản lý chuyên mục",
          "Products management": "Quản lý sản phẩm",
          "Dashboard": "Bảng điều khiển",
          "Unknown": "Chưa rõ",
          "Sign in to see more": "Đăng nhập để xem chi tiết",
          "Profile": "Hồ sơ",
          "Edit": "Chỉnh sửa",
          "Update": "Cập nhật",
          "New password": "Mật khẩu mới"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
