import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  username,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>

      <div className="mt-4 text-gray-700">
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Website:</span> {website}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Address</h3>
        <p className="text-gray-600">
          {address.street}, {address.suite}, {address.city} ({address.zipcode})
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="italic text-gray-500">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
