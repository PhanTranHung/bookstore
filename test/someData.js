const draftModel = require("../model/model-name");

const user = [
  {
    name: "Phan Tran Hung",
    username: "cuhungahihi",
    password: "123456789",
    email: "cuhungahihi@gmail.com",
    permission: "admin"
  },
  {
    name: "Bo cua Me",
    username: "daddy",
    password: "123456789",
    email: "cuhungahihi@gmail.com",
    permission: "admin"
  },
  {
    name: "Vo cua Bo",
    username: "mama",
    password: "123456789",
    email: "cuhungahihi@gmail.com",
    permission: "manager"
  },
  {
    name: "Con gai Me",
    username: "sister",
    password: "123456789",
    email: "cuhungahihi@gmail.com",
    permission: "user"
  }
];

// const book = [];

const category = [
  {
    name: "Truyen tranh",
    alias: "truyentranh"
  },
  {
    name: "Tieu Thuyet",
    alias: "tieuthuyet"
  },
  {
    name: "Manga",
    alias: "manga"
  },
  {
    name: "Chinh Tri",
    alias: "chinhtri"
  },
  {
    name: "Giao Duc",
    alias: "giaoduc"
  },
  {
    name: "Ngon Tinh",
    alias: "ngontinh"
  }
];

const author = [
  {
    name: "Nguyen Nhat Anh",
    biography:
      "Sinh năm 1955 tại Quảng Nam, anh tốt nghiệp ngành sư phạm, từng đi thanh niên xung phong, dạy học, làm công tác Đoàn. Từ 1986 đến nay, anh là phóng viên báo Sài Gòn Giải Phóng. Làm báo, viết văn và sáng tác thơ, ở lĩnh vực nào anh cũng dành những trang viết trong sáng và ngọt ngào cho thanh thiếu niên. Nguyễn Nhật Ánh tâm sự: “Khi viết, tôi có cảm giác tự nhiên như cậu học trò ngồi viết chuyện đời mình nên các em thấy tác phẩm của tôi gần gũi. Yếu tố vui nhộn cũng là điều phù hợp với tâm hồn các em”.",
    email: "cuhungahihi@gmail.com"
  },
  {
    name: "To Huu",
    biography:
      "Sinh năm 1955 tại Quảng Nam, anh tốt nghiệp ngành sư phạm, từng đi thanh niên xung phong, dạy học, làm công tác Đoàn. Từ 1986 đến nay, anh là phóng viên báo Sài Gòn Giải Phóng. Làm báo, viết văn và sáng tác thơ, ở lĩnh vực nào anh cũng dành những trang viết trong sáng và ngọt ngào cho thanh thiếu niên. Nguyễn Nhật Ánh tâm sự: “Khi viết, tôi có cảm giác tự nhiên như cậu học trò ngồi viết chuyện đời mình nên các em thấy tác phẩm của tôi gần gũi. Yếu tố vui nhộn cũng là điều phù hợp với tâm hồn các em”.",
    email: "cuhungahihi@gmail.com"
  },
  {
    name: "Hiroshi Fujimoto",
    penname: "Fujiko Fujio",
    biography: `Fujiko Fujio (藤子 不二雄, ふじこ ふじお) (Đằng Tử Bất Nhị Hùng) IPA: /ɸɯdʒiko ɸɯdʒio/ là bút danh chung của hai nghệ sĩ manga Nhật Bản. Tên thật của họ là Hiroshi Fujimoto (藤本 弘 (Đằng Bản Hoằng) Fujimoto Hiroshi?, 1933–1996) và Motoo Abiko (安孫子 素雄 (An Tôn Tử Tố Hùng) Abiko Motoo?, 1934–). Năm 1954, hai người đều dùng cái tên "Fujiko Fujio" cho tới năm 1987, họ chia tay để theo đuổi con đường sáng tác riêng lẻ và trở thành "Fujiko F. Fujio" và "Fujiko Fujio (A)"`,
    email: "cuhungahihi@gmail.com"
  },
  {
    name: "Cố Mạn",
    penname: "Rùa Mạn",
    biography: `21/10/1981, Giang Tô - Trung Quốc`,
    email: "cuhungahihi@gmail.com"
  }
];

// const book = [
//   {
//     name : "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
//     author: "Nguyn",
//     price: "",
//     category:"",
//   },
// ]

module.exports = {
  [draftModel.user]: user,
  //   [draftModel.book]: book,
  [draftModel.category]: category,
  [draftModel.author]: author
};
