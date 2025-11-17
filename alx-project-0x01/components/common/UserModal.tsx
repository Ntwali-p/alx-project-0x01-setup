import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" }
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle nested fields
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        address: { ...prev.address, [field]: value }
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        company: { ...prev.company, [field]: value }
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="website"
            placeholder="Website"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          {/* Address */}
          <input name="address.street" placeholder="Street" onChange={handleChange}
            className="w-full border px-3 py-2 rounded" />

          <input name="address.city" placeholder="City" onChange={handleChange}
            className="w-full border px-3 py-2 rounded" />

          {/* Company */}
          <input name="company.name" placeholder="Company Name" onChange={handleChange}
            className="w-full border px-3 py-2 rounded" />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="text-gray-600">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Add User
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UserModal;
