import React from "react";
import halal from "../../assets/halal_certificate.jpg";

const FoodView = ({ foods, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 mt-[30px]">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">№</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Price</th>
          <th className="border border-gray-300 px-4 py-2">Country</th>
          <th className="border border-gray-300 px-4 py-2">Category</th>
          <th className="border border-gray-300 px-4 py-2 flex justify-center gap-2.5">
            isHalal <img className="size-6 rounded-full" src={halal} alt="" />
          </th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((food, index) => (
          <tr key={food.id}>
            <td className="border border-collapse border-gray-200 px-4 py-2 text-center">
              {index + 1}
            </td>
            <td className="border border-collapse border-gray-200 px-4 py-2">
              {food.name}
            </td>
            <td className="border border-collapse border-gray-200 px-4 py-2">
              {food.price} so'm
            </td>
            <td className="border border-collapse border-gray-200 px-4 py-2">
              {food.country}
            </td>
            <td className="border border-collapse border-gray-200 px-4 py-2">
              {food?.categories?.map((item, inx) => (
                <span key={inx}>
                  {item} <br />
                </span>
              ))}
            </td>
            <td className="border border-collapse border-gray-200 px-4 py-2">
              {food.isHalal ? "✅ Yes" : "❌ No"}
            </td>
            <td className="border border-collapse border-gray-200 px-4 py-2 flex gap-4 justify-center">
              <button
                onClick={() => onEdit(food)}
                className="bg-green-500 text-white px-3 py-1 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(food.id)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FoodView;
