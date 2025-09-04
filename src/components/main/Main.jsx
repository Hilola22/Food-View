import React, { useState, useEffect } from "react";
import Form from "../form/Form";
import FoodView from "../food-view/FoodView";

const Main = () => {
  const [foods, setFoods] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [editingFood, setEditingFood] = useState(null);

  const handleCreate = () => {
    setEditingFood(null);
    setIsOpen(true);
  };

  const handleSave = (food) => {
    if (food.id) {
      setFoods(foods.map((item) => (item.id === food.id ? { ...food } : item)));
    } else {
      setFoods([...foods, { ...food, id: Date.now() }]);
    }
    setIsOpen(false);
  };

  const handleEdit = (food) => {
    setEditingFood(food);
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    setFoods(foods.filter((f) => f.id !== id));
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between w-full h-[80px] bg-[rgb(224,224,224)] items-center px-[20px]">
        <h1 className="text-3xl font-bold ">Food Store 🍔</h1>
        <button
          onClick={handleCreate}
          className="bg-[#303435] text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#303435] hover:border border-[1px] border-[#303435]"
        >
          Add Food
        </button>
      </div>

      <FoodView foods={foods} onEdit={handleEdit} onDelete={handleDelete} />

      {isOpen && (
        <Form
          food={editingFood}
          onSave={handleSave}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Main;
