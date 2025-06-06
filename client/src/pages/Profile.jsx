import React, { useEffect, useState } from 'react';
 import API from '../api/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) return;

    const fetchUser = async () => {
      try {
   
       const res = await API.get(`/users/${storedUser.email}`);
        setUser(res.data.user);
        setNewName(res.data.user.name);
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };

    fetchUser();
  }, []);

  const handleUpdate = async () => {
    try {
  

    const res = await API.put('/users/update-name', {
      email: user.email,
       name: newName,
     });
      setUser(res.data.user);
      setEditing(false);
    } catch (err) {
      console.error('Error updating name:', err);
    }
  };

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <p className="border p-2 rounded bg-gray-100">{user.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          {editing ? (
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          ) : (
            <p className="border p-2 rounded bg-gray-100">{user.name}</p>
          )}
        </div>

        {editing ? (
          <div className="flex gap-2">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            onClick={() => setEditing(true)}
          >
            Edit Name
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
