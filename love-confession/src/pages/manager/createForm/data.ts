export const defaultData = {
  brideName: "",
  groomName: "",
  path: "",
  template: "",
  theme: "",
  brideFather: "",
  brideMother: "",
  groomFather: "",
  groomMother: "",
  invitationText: "",
  location: "",
  mapLink: "",
  venue: "",
};

// Object key-value để ánh xạ các key với label tiếng Việt
export const labels: { [key: string]: string } = {
  brideName: "Tên Cô Dâu",
  groomName: "Tên Chú Rể",
  path: "Đường Dẫn",
  template: "Mẫu Thiệp",
  brideFather: "Cha Cô Dâu",
  brideMother: "Mẹ Cô Dâu",
  groomFather: "Cha Chú Rể",
  groomMother: "Mẹ Chú Rể",
  invitationText: "Nội Dung Thiệp",
  location: "Địa Điểm",
  mapLink: "Liên Kết Bản Đồ",
  theme: "Chủ Đề",
  venue: "Địa Điểm Tổ Chức",
};

// Danh sách templates
export const templates = Array.from(
  { length: 10 },
  (_, i) => `Template ${i + 1}`
);

// Theme tương ứng với mỗi template (ví dụ)
export const templateThemes: {
  [key: string]: { theme: string[]; description: string };
} = {
  "Template 1": {
    theme: ["Cổ điển", "Tối giản", "Hoa văn"],
    description: "7 hình 1 hình chính và 6 hình phụ",
  },
  "Template 2": {
    theme: ["Cổ điển", "Tối giản", "Hoa văn"],
    description: "7 hình 1 hình chính và 6 hình phụ",
  },
  "Template 3": {
    theme: ["Cổ điển", "Tối giản", "Hoa văn"],
    description: "7 hình 1 hình chính và 6 hình phụ",
  },
  "Template 4": {
    theme: ["Cổ điển", "Tối giản", "Hoa văn"],
    description: "7 hình 1 hình chính và 6 hình phụ",
  },
  "Template 5": {
    theme: ["Cổ điển", "Tối giản", "Hoa văn"],
    description: "7 hình 1 hình chính và 6 hình phụ",
  },
  "Template 6": {
    theme: ["Cổ điển", "Tối giản", "Hoa văn"],
    description: "7 hình 1 hình chính và 6 hình phụ",
  },
  "Template 7": {
    theme: ["Cổ điển", "Tối giản", "Hoa văn"],
    description: "7 hình 1 hình chính và 6 hình phụ",
  },
  "Template 8": {
    theme: ["Cổ điển", "Tối giản", "Hoa văn"],
    description: "7 hình 1 hình chính và 6 hình phụ",
  },
  "Template 9": {
    theme: ["Cổ điển", "Tối giản", "Hoa văn"],
    description: "7 hình 1 hình chính và 6 hình phụ",
  },
};
