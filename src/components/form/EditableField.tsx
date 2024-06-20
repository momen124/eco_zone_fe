import React, { useState } from 'react';

const EditableField = ({ label, value, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleSave = () => {
    setIsEditing(false);
    onSave(currentValue);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">{label}:</label>
      {isEditing ? (
        <div>
          <input
            type="text"
            className="border rounded px-2 py-1 w-full"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <p className="text-gray-800">{currentValue}</p>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableField;
