
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
      <div className="container mx-auto py-10 flex-grow">
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            <p className="text-gray-800">John Doe</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <p className="text-gray-800">johndoe@example.com</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Age:</label>
            <p className="text-gray-800">30</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Address:</label>
            <p className="text-gray-800">123 Street, City, Country</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone Number:</label>
            <p className="text-gray-800">123-456-7890</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
