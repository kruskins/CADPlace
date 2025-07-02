import React from 'react'
import { User, Mail, Download, ShoppingBag, Settings } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Profile: React.FC = () => {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Please sign in</h2>
          <p className="text-gray-600">You need to be logged in to view your profile</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>Member since 2024</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Download className="w-5 h-5" />
                <span>15 Downloads</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <ShoppingBag className="w-5 h-5" />
                <span>8 Purchases</span>
              </div>
            </div>

            <button className="w-full mt-6 flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              <Settings className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="space-y-8">
            {/* Recent Downloads */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Downloads</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/586958/pexels-photo-586958.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Modern Office Chair"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Modern Office Chair</h4>
                    <p className="text-sm text-gray-600">Downloaded 2 days ago</p>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Download Again
                  </button>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Mechanical Gear Assembly"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Mechanical Gear Assembly</h4>
                    <p className="text-sm text-gray-600">Downloaded 1 week ago</p>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Download Again
                  </button>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Smartphone Case Design"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Smartphone Case Design</h4>
                    <p className="text-sm text-gray-600">Downloaded 2 weeks ago</p>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Download Again
                  </button>
                </div>
              </div>
            </div>

            {/* Purchase History */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Purchase History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Order</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Items</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-primary-600 font-medium">#ORD-001</td>
                      <td className="py-3 px-4 text-gray-600">Dec 15, 2024</td>
                      <td className="py-3 px-4 text-gray-600">3 items</td>
                      <td className="py-3 px-4 text-gray-900 font-medium">$89.97</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-primary-600 font-medium">#ORD-002</td>
                      <td className="py-3 px-4 text-gray-600">Dec 10, 2024</td>
                      <td className="py-3 px-4 text-gray-600">1 item</td>
                      <td className="py-3 px-4 text-gray-900 font-medium">$29.99</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-primary-600 font-medium">#ORD-003</td>
                      <td className="py-3 px-4 text-gray-600">Dec 5, 2024</td>
                      <td className="py-3 px-4 text-gray-600">2 items</td>
                      <td className="py-3 px-4 text-gray-900 font-medium">$54.98</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile