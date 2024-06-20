import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: '30',
    address: '123 Street, City, Country',
    phoneNumber: '123-456-7890',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleInputChange = (field, value) => {
    setEditedProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto py-10 flex-grow">
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            {isEditing ? (
              <input
                type="text"
                className="border rounded px-2 py-1 w-full"
                value={editedProfile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            ) : (
              <p className="text-gray-800">{profile.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            {isEditing ? (
              <input
                type="text"
                className="border rounded px-2 py-1 w-full"
                value={editedProfile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            ) : (
              <p className="text-gray-800">{profile.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Age:</label>
            {isEditing ? (
              <input
                type="text"
                className="border rounded px-2 py-1 w-full"
                value={editedProfile.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
              />
            ) : (
              <p className="text-gray-800">{profile.age}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Address:</label>
            {isEditing ? (
              <input
                type="text"
                className="border rounded px-2 py-1 w-full"
                value={editedProfile.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
            ) : (
              <p className="text-gray-800">{profile.address}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone Number:</label>
            {isEditing ? (
              <input
                type="text"
                className="border rounded px-2 py-1 w-full"
                value={editedProfile.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              />
            ) : (
              <p className="text-gray-800">{profile.phoneNumber}</p>
            )}
          </div>
          {isEditing ? (
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
