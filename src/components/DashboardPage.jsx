import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";


const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Farmers</p>
                  <h3 className="text-2xl font-bold text-white mt-1">4,289</h3>
                  <p className="text-xs text-green-500 mt-1">+12% from last month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-900/30 flex items-center justify-center">
                  <i className="fas fa-seedling text-green-500 text-xl"></i>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Fisherfolks</p>
                  <h3 className="text-2xl font-bold text-white mt-1">2,157</h3>
                  <p className="text-xs text-blue-500 mt-1">+8% from last month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <i className="fas fa-fish text-blue-500 text-xl"></i>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Unset Pinmarks</p>
                  <h3 className="text-2xl font-bold text-white mt-1">342</h3>
                  <p className="text-xs text-orange-500 mt-1">Action needed</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-orange-900/30 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-orange-500 text-xl"></i>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1e1e] border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Crops/Animals</p>
                  <h3 className="text-2xl font-bold text-white mt-1">12,845</h3>
                  <p className="text-xs text-purple-500 mt-1">+5% from last month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <i className="fas fa-leaf text-purple-500 text-xl"></i>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-[#1e1e1e] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-white text-lg">Registry Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div id="donutChart" className="h-80 w-full"></div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1e1e] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-white text-lg">Production by Area</CardTitle>
            </CardHeader>
            <CardContent>
              <div id="barChart" className="h-80 w-full"></div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-[#1e1e1e] border-0 shadow-md lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white text-lg">Monthly Registration Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div id="lineChart" className="h-80 w-full"></div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1e1e] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-white text-lg">Top Puroks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Purok 1', count: 428, percent: 92 },
                  { name: 'Purok 2', count: 356, percent: 78 },
                  { name: 'Purok 3', count: 312, percent: 65 },
                  { name: 'Purok 4', count: 287, percent: 59 },
                  { name: 'Purok 5', count: 243, percent: 52 }
                ].map((barangay, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{barangay.name}</span>
                      <span className="text-gray-400">{barangay.count}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" 
                        style={{ width: `${barangay.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
};

export default DashboardPage;