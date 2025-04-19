import React, { useState } from "react";
import { useCreateInvitationMutation } from "../../../api/weddingApi";
import { defaultData, labels, templates, templateThemes } from "./data";

interface BankAccount {
  bankName: string;
  accountNumber: string;
}

export default function WeddingCardForm() {
  const [formData, setFormData] = useState(defaultData);

  const [createInvitation] = useCreateInvitationMutation();
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    { bankName: "", accountNumber: "" },
  ]);

  const [images, setImages] = useState<File[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBankAccountChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newAccounts = [...bankAccounts];
    newAccounts[index][e.target.name as keyof BankAccount] = e.target.value;
    setBankAccounts(newAccounts);
  };

  const addBankAccount = () => {
    setBankAccounts([...bankAccounts, { bankName: "", accountNumber: "" }]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submitData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      console.log({ key, value });
      submitData.append(key, value);
    });
    submitData.append("bankAccounts", JSON.stringify(bankAccounts));
    images.forEach((file) => submitData.append("images", file));
    await createInvitation(submitData).unwrap();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Tạo Thiệp Cưới</h2>

      {Object.keys(formData).map((key) => (
        <div key={key} className="flex flex-col text-left">
          <label className="font-medium capitalize">{labels[key]}</label>
          {key === "template" ? (
            <select
              name="template"
              value={formData.template}
              onChange={handleInputChange}
              className="border rounded px-3 py-2"
            >
              <option value="">Chọn mẫu thiệp</option>
              {templates.map((template) => (
                <option key={template} value={template}>
                  {template}
                </option>
              ))}
            </select>
          ) : key === "theme" ? (
            <select
              name="theme"
              value={formData.theme}
              onChange={handleInputChange}
              className="border rounded px-3 py-2"
              disabled={!formData.template}
            >
              <option value="">Chọn chủ đề</option>
              {formData.template &&
                templateThemes[formData.template].theme?.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
            </select>
          ) : (
            <input
              type="text"
              name={key}
              value={(formData as any)[key]}
              onChange={handleInputChange}
              className="border rounded px-3 py-2"
            />
          )}
        </div>
      ))}

      <div className="space-y-2">
        <label className="font-medium">Tài Khoản Ngân Hàng</label>
        {bankAccounts.map((account, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              name="bankName"
              placeholder="Tên Ngân Hàng"
              value={account.bankName}
              onChange={(e) => handleBankAccountChange(index, e)}
              className="border rounded px-3 py-2 w-1/2"
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Số Tài Khoản"
              value={account.accountNumber}
              onChange={(e) => handleBankAccountChange(index, e)}
              className="border rounded px-3 py-2 w-1/2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addBankAccount}
          className="text-sm text-blue-500 underline"
        >
          + Thêm tài khoản ngân hàng khác
        </button>
      </div>

      <div>
        <label className="font-medium">Tải Lên Hình Ảnh</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="block mt-1"
        />
        <p>{templateThemes[formData.template]?.description}</p>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Gửi
      </button>
    </form>
  );
}
