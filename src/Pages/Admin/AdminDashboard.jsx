import { ChartBarIcon, CubeIcon, UsersIcon } from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Sales', value: '1,200,000 RWF', icon: ChartBarIcon, color: 'text-emerald-600' },
    { label: 'Active Orders', value: '12', icon: CubeIcon, color: 'text-orange-500' },
    { label: 'New Customers', value: '48', icon: UsersIcon, color: 'text-blue-500' },
  ];

  return (
    <div>
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-black">Overview</h1>
        {/* We can keep this sub-header or move it to Layout */}
        <div className="bg-white px-4 py-2 rounded-full border shadow-sm font-bold text-sm text-gray-600">
          Last 24 Hours
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className={`p-3 rounded-2xl bg-gray-50 inline-block mb-4`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black mt-1 text-black">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-black uppercase tracking-tight text-black">Recent Activities</h3>
            <button className="text-[10px] font-black uppercase text-emerald-600 hover:underline">View All</button>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center font-black text-xs text-gray-500">
                  #0{i}
                </div>
                <div>
                  <p className="font-black text-sm text-black">New Order from Gisenyi</p>
                  <p className="text-xs text-gray-400 font-bold">2 minutes ago</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-emerald-600 font-black text-sm block">+45,000 RWF</span>
                <span className="text-[9px] font-black uppercase text-gray-300">Paid</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;