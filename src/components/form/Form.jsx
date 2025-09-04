import React, { useState, useEffect } from "react";

const Form = ({ food, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    country: "",
    categories: [],
    isHalal: false,
  });

  const [categoryInput, setCategoryInput] = useState("");

  useEffect(() => {
    if (food) {
      setFormData(food);
    }
  }, [food]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddCategory = () => {
    const exist = formData.categories.some((item) => item === categoryInput);
    if (!exist && categoryInput.trim() !== "") {
      setFormData({
        ...formData,
        categories: [...formData.categories, categoryInput],
      });
    }
    setCategoryInput("");
  };

  const handleRemoveCategory = (index) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((_, inx) => inx !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="w-[450px] bg-white rounded-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">
          {food ? "Update Food" : "Add Food"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Food name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg outline-0 border-gray-200 mt-3"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg outline-0 border-gray-200 mt-3"
            required
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg outline-0 border-gray-200 mt-3"
            required
          />

          <div className="mt-3 flex gap-1">
            <input
              className="border w-full h-10 indent-3 rounded-lg border-gray-200"
              type="text"
              placeholder="Categories"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
            />
            <button
              onClick={handleAddCategory}
              type="button"
              className="bg-slate-900 text-white px-3 rounded-lg text-xl"
            >
              &#10011;
            </button>
          </div>

          <div className="flex gap-2 flex-wrap mt-2">
            {formData.categories.map((cat, i) => (
              <div className="bg-gray-200 px-2 py-1 text-sm rounded-lg flex gap-2.5">
                <span key={i}>{cat}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveCategory(i)}
                  className="cursor-pointer hover:text-red-500"
                >
                  &#10005;
                </button>
              </div>
            ))}
          </div>

          <label className="flex items-center gap-2 mt-3 pl-1">
            <input
              type="checkbox"
              name="isHalal"
              checked={formData.isHalal}
              onChange={handleChange}
            />
            <span>Is Halal?</span>
          </label>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
