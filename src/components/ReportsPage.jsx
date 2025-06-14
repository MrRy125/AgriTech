import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'components/ui/tabs';

const ReportsPage = () => {
  return (
    <div className="p-6 space-y-6">
        <Card className="bg-[#1e1e1e] border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white text-xl">Reports</CardTitle>
            <div className="flex gap-3">
              <Button variant="outline" className="border-[#444444] bg-transparent hover:bg-[#333333] text-gray-300 !rounded-button whitespace-nowrap">
                <i className="fas fa-filter mr-2"></i> Filter
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white !rounded-button whitespace-nowrap">
                <i className="fas fa-file-export mr-2"></i> Export Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid grid-cols-4 bg-[#252525] mb-6">
                <TabsTrigger value="summary" className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                  Summary
                </TabsTrigger>
                <TabsTrigger value="farmers" className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                  Farmers
                </TabsTrigger>
                <TabsTrigger value="fisherfolks" className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                  Fisherfolks
                </TabsTrigger>
                <TabsTrigger value="production" className="data-[state=active]:bg-[#333333] data-[state=active]:text-white text-gray-400">
                  Production
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Registration Trend</h3>
                    <img 
                      src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20line%20chart%20showing%20monthly%20registration%20trends%20for%20agricultural%20data%2C%20with%20green%20and%20blue%20lines%20representing%20farmers%20and%20fisherfolks%20respectively%2C%20on%20a%20dark%20background%20with%20grid%20lines%2C%20clean%20data%20visualization%20style%20with%20clear%20labels%20and%20legend&width=600&height=300&seq=3&orientation=landscape" 
                      alt="Registration Trend Chart" 
                      className="w-full h-[250px] object-cover object-top rounded-md"
                    />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-[#2a2a2a] p-3 rounded-md">
                        <p className="text-sm text-gray-400">Total Registrations</p>
                        <p className="text-xl font-bold text-white">6,446</p>
                        <p className="text-xs text-green-500">+15% from last quarter</p>
                      </div>
                      <div className="bg-[#2a2a2a] p-3 rounded-md">
                        <p className="text-sm text-gray-400">Active Registrations</p>
                        <p className="text-xl font-bold text-white">5,982</p>
                        <p className="text-xs text-green-500">92.8% active rate</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Registry Distribution</h3>
                    <img 
                      src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20donut%20chart%20showing%20distribution%20between%20farmers%20and%20fisherfolks%2C%20with%20green%20and%20blue%20segments%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20percentages%20and%20labels%20clearly%20visible%2C%20modern%20minimalist%20design&width=600&height=300&seq=4&orientation=landscape" 
                      alt="Registry Distribution Chart" 
                      className="w-full h-[250px] object-cover object-top rounded-md"
                    />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-[#2a2a2a] p-3 rounded-md">
                        <p className="text-sm text-gray-400">Farmers</p>
                        <p className="text-xl font-bold text-white">4,289</p>
                        <p className="text-xs text-gray-400">66.5% of total</p>
                      </div>
                      <div className="bg-[#2a2a2a] p-3 rounded-md">
                        <p className="text-sm text-gray-400">Fisherfolks</p>
                        <p className="text-xl font-bold text-white">2,157</p>
                        <p className="text-xs text-gray-400">33.5% of total</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Top Crops</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Rice', count: 1245, percent: 85 },
                        { name: 'Corn', count: 987, percent: 68 },
                        { name: 'Coconut', count: 756, percent: 52 },
                        { name: 'Banana', count: 543, percent: 37 },
                        { name: 'Vegetables', count: 432, percent: 30 }
                      ].map((crop, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{crop.name}</span>
                            <span className="text-gray-400">{crop.count}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full" 
                              style={{ width: `${crop.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Top Animals</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Chicken', count: 3245, percent: 90 },
                        { name: 'Swine', count: 1876, percent: 52 },
                        { name: 'Carabao', count: 1243, percent: 35 },
                        { name: 'Goat', count: 987, percent: 27 },
                        { name: 'Cattle', count: 765, percent: 21 }
                      ].map((animal, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{animal.name}</span>
                            <span className="text-gray-400">{animal.count}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-orange-500 h-2 rounded-full" 
                              style={{ width: `${animal.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Top Barangays</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Brgy. San Isidro', count: 428, percent: 92 },
                        { name: 'Brgy. Mabuhay', count: 356, percent: 78 },
                        { name: 'Brgy. Bagong Silang', count: 312, percent: 65 },
                        { name: 'Brgy. Malaya', count: 287, percent: 59 },
                        { name: 'Brgy. Matahimik', count: 243, percent: 52 }
                      ].map((barangay, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{barangay.name}</span>
                            <span className="text-gray-400">{barangay.count}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${barangay.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="farmers" className="mt-0">
                <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                  <h3 className="text-white font-medium mb-4">Farmer Demographics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img 
                      src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20pie%20chart%20showing%20farmer%20age%20demographics%20with%20different%20colored%20segments%20for%20age%20groups%2018-30%2C%2031-45%2C%2046-60%2C%20and%2060+%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20percentages%20and%20labels%20clearly%20visible%2C%20modern%20minimalist%20design&width=500&height=300&seq=5&orientation=landscape" 
                      alt="Farmer Demographics Chart" 
                      className="w-full h-[250px] object-cover object-top rounded-md"
                    />
                    <img 
                      src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20bar%20chart%20showing%20farmer%20distribution%20by%20gender%20and%20education%20level%2C%20with%20green%20and%20blue%20bars%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20clear%20labels%20and%20values%2C%20modern%20minimalist%20design&width=500&height=300&seq=6&orientation=landscape" 
                      alt="Farmer Education Chart" 
                      className="w-full h-[250px] object-cover object-top rounded-md"
                    />
                  </div>
                </div>

                <div className="bg-[#252525] p-4 rounded-md border border-[#333333] mt-6">
                  <h3 className="text-white font-medium mb-4">Crop Production</h3>
                  <img 
                    src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20stacked%20bar%20chart%20showing%20crop%20production%20volumes%20by%20type%20across%20different%20regions%2C%20with%20multiple%20colored%20segments%20representing%20different%20crops%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20clear%20labels%20and%20values%2C%20modern%20minimalist%20design&width=1000&height=400&seq=7&orientation=landscape" 
                    alt="Crop Production Chart" 
                    className="w-full h-[400px] object-cover object-top rounded-md"
                  />
                </div>

                <div className="rounded-md border border-[#333333] overflow-hidden mt-6">
                  <Table>
                    <TableHeader className="bg-[#252525]">
                      <TableRow>
                        <TableHead className="text-gray-300">Crop Type</TableHead>
                        <TableHead className="text-gray-300">Total Area (ha)</TableHead>
                        <TableHead className="text-gray-300">Farmers</TableHead>
                        <TableHead className="text-gray-300">Avg. Yield (mt/ha)</TableHead>
                        <TableHead className="text-gray-300">Total Production (mt)</TableHead>
                        <TableHead className="text-gray-300">Est. Value (₱)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { crop: 'Rice', area: '1,245.5', farmers: 1245, yield: '4.2', production: '5,231.1', value: '104,622,000' },
                        { crop: 'Corn', area: '987.3', farmers: 987, yield: '3.8', production: '3,751.7', value: '56,275,500' },
                        { crop: 'Coconut', area: '756.8', farmers: 756, yield: '5.2', production: '3,935.4', value: '39,354,000' },
                        { crop: 'Banana', area: '543.2', farmers: 543, yield: '12.5', production: '6,790.0', value: '33,950,000' },
                        { crop: 'Vegetables', area: '432.1', farmers: 432, yield: '8.7', production: '3,759.3', value: '75,186,000' }
                      ].map((record, index) => (
                        <TableRow key={index} className="border-t border-[#333333] hover:bg-[#252525]">
                          <TableCell className="font-medium text-gray-300">{record.crop}</TableCell>
                          <TableCell className="text-gray-400">{record.area}</TableCell>
                          <TableCell className="text-gray-400">{record.farmers}</TableCell>
                          <TableCell className="text-gray-400">{record.yield}</TableCell>
                          <TableCell className="text-gray-400">{record.production}</TableCell>
                          <TableCell className="text-gray-400">₱{record.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="fisherfolks" className="mt-0">
                <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                  <h3 className="text-white font-medium mb-4">Fisherfolk Demographics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img 
                      src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20pie%20chart%20showing%20fisherfolk%20age%20demographics%20with%20different%20colored%20segments%20for%20age%20groups%2018-30%2C%2031-45%2C%2046-60%2C%20and%2060+%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20percentages%20and%20labels%20clearly%20visible%2C%20modern%20minimalist%20design&width=500&height=300&seq=8&orientation=landscape" 
                      alt="Fisherfolk Demographics Chart" 
                      className="w-full h-[250px] object-cover object-top rounded-md"
                    />
                    <img 
                      src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20bar%20chart%20showing%20fisherfolk%20distribution%20by%20fishing%20vessel%20type%20and%20fishing%20method%2C%20with%20blue%20bars%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20clear%20labels%20and%20values%2C%20modern%20minimalist%20design&width=500&height=300&seq=9&orientation=landscape" 
                      alt="Fishing Methods Chart" 
                      className="w-full h-[250px] object-cover object-top rounded-md"
                    />
                  </div>
                </div>

                <div className="bg-[#252525] p-4 rounded-md border border-[#333333] mt-6">
                  <h3 className="text-white font-medium mb-4">Fish Production</h3>
                  <img 
                    src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20stacked%20area%20chart%20showing%20fish%20production%20volumes%20by%20type%20across%20different%20months%2C%20with%20multiple%20blue%20and%20teal%20colored%20areas%20representing%20different%20fish%20types%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20clear%20labels%20and%20values%2C%20modern%20minimalist%20design&width=1000&height=400&seq=10&orientation=landscape" 
                    alt="Fish Production Chart" 
                    className="w-full h-[400px] object-cover object-top rounded-md"
                  />
                </div>

                <div className="rounded-md border border-[#333333] overflow-hidden mt-6">
                  <Table>
                    <TableHeader className="bg-[#252525]">
                      <TableRow>
                        <TableHead className="text-gray-300">Fishing Type</TableHead>
                        <TableHead className="text-gray-300">Fisherfolks</TableHead>
                        <TableHead className="text-gray-300">Vessels</TableHead>
                        <TableHead className="text-gray-300">Avg. Catch (kg/day)</TableHead>
                        <TableHead className="text-gray-300">Total Production (mt)</TableHead>
                        <TableHead className="text-gray-300">Est. Value (₱)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { type: 'Municipal (0-3km)', fisherfolks: 1245, vessels: 876, catch: '12.5', production: '4,528.1', value: '226,405,000' },
                        { type: 'Commercial (3-15km)', fisherfolks: 543, vessels: 124, catch: '85.3', production: '3,872.4', value: '193,620,000' },
                        { type: 'Aquaculture', fisherfolks: 321, vessels: 'N/A', catch: 'N/A', production: '2,154.6', value: '107,730,000' },
                        { type: 'Inland Fishing', fisherfolks: 48, vessels: 32, catch: '5.2', production: '91.1', value: '4,555,000' }
                      ].map((record, index) => (
                        <TableRow key={index} className="border-t border-[#333333] hover:bg-[#252525]">
                          <TableCell className="font-medium text-gray-300">{record.type}</TableCell>
                          <TableCell className="text-gray-400">{record.fisherfolks}</TableCell>
                          <TableCell className="text-gray-400">{record.vessels}</TableCell>
                          <TableCell className="text-gray-400">{record.catch}</TableCell>
                          <TableCell className="text-gray-400">{record.production}</TableCell>
                          <TableCell className="text-gray-400">₱{record.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="production" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Crop Production by Season</h3>
                    <img 
                      src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20line%20chart%20showing%20crop%20production%20trends%20across%20different%20seasons%20with%20multiple%20colored%20lines%20representing%20different%20crops%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20clear%20labels%20and%20values%2C%20modern%20minimalist%20design&width=500&height=300&seq=11&orientation=landscape" 
                      alt="Crop Production by Season" 
                      className="w-full h-[250px] object-cover object-top rounded-md"
                    />
                  </div>

                  <div className="bg-[#252525] p-4 rounded-md border border-[#333333]">
                    <h3 className="text-white font-medium mb-4">Fish Production by Quarter</h3>
                    <img 
                      src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20bar%20chart%20showing%20fish%20production%20volumes%20by%20quarter%20with%20blue%20bars%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20clear%20labels%20and%20values%2C%20modern%20minimalist%20design&width=500&height=300&seq=12&orientation=landscape" 
                      alt="Fish Production by Quarter" 
                      className="w-full h-[250px] object-cover object-top rounded-md"
                    />
                  </div>
                </div>

                <div className="bg-[#252525] p-4 rounded-md border border-[#333333] mt-6">
                  <h3 className="text-white font-medium mb-4">Production Value Comparison</h3>
                  <img 
                    src="https://readdy.ai/api/search-image?query=A%20professional%20dark-themed%20grouped%20bar%20chart%20comparing%20agricultural%20and%20fishery%20production%20values%20across%20different%20regions%2C%20with%20green%20and%20blue%20bars%20representing%20agriculture%20and%20fishery%20respectively%20on%20a%20dark%20background%2C%20clean%20data%20visualization%20with%20clear%20labels%20and%20values%2C%20modern%20minimalist%20design&width=1000&height=400&seq=13&orientation=landscape" 
                    alt="Production Value Comparison" 
                    className="w-full h-[400px] object-cover object-top rounded-md"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <Card className="bg-[#252525] border border-[#333333]">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-medium">Total Production</h3>
                        <div className="h-10 w-10 rounded-full bg-[#333333] flex items-center justify-center">
                          <i className="fas fa-chart-line text-green-500"></i>
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-white">32,145 mt</p>
                      <div className="flex items-center mt-2">
                        <i className="fas fa-arrow-up text-green-500 mr-1"></i>
                        <span className="text-green-500 text-sm">12.5% from last year</span>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Target</span>
                          <span className="text-gray-300">35,000 mt</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">92% of annual target</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#252525] border border-[#333333]">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-medium">Total Value</h3>
                        <div className="h-10 w-10 rounded-full bg-[#333333] flex items-center justify-center">
                          <i className="fas fa-coins text-yellow-500"></i>
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-white">₱845.2M</p>
                      <div className="flex items-center mt-2">
                        <i className="fas fa-arrow-up text-green-500 mr-1"></i>
                        <span className="text-green-500 text-sm">8.3% from last year</span>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Target</span>
                          <span className="text-gray-300">₱900M</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">94% of annual target</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#252525] border border-[#333333]">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-medium">Productivity</h3>
                        <div className="h-10 w-10 rounded-full bg-[#333333] flex items-center justify-center">
                          <i className="fas fa-tachometer-alt text-blue-500"></i>
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-white">4.8 mt/ha</p>
                      <div className="flex items-center mt-2">
                        <i className="fas fa-arrow-up text-green-500 mr-1"></i>
                        <span className="text-green-500 text-sm">5.2% from last year</span>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Target</span>
                          <span className="text-gray-300">5.0 mt/ha</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">96% of annual target</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
  );
};

export default ReportsPage;