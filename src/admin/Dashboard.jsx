import React from "react";

const DashboardAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Dashboard Admin</h2>

      {/* Section: Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard icon="🧑‍⚕️" label="Total Pasien" value="1,250" bg="bg-blue-100" />
        <StatCard icon="👨‍⚕️" label="Tenaga Medis" value="47" bg="bg-green-100" />
        <StatCard icon="📄" label="Rekam Medis" value="4,820" bg="bg-yellow-100" />
      </div>

      {/* Section: Aktivitas */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Aktivitas Terbaru</h3>
        <ul className="bg-white rounded-xl shadow-lg divide-y divide-gray-200">
          <ActivityItem text="📝 Rekam medis pasien *Ahmad Rifai* ditambahkan" />
          <ActivityItem text="👩‍⚕️ Dokter *dr. Lestari* dijadwalkan ulang" />
          <ActivityItem text="📥 Pasien *Fahmi* mendaftar ke sistem" />
        </ul>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, bg }) => (
  <div className={`p-6 rounded-xl shadow-md flex items-center gap-4 ${bg}`}>
    <div className="text-4xl">{icon}</div>
    <div>
      <div className="text-gray-600 text-lg font-medium">{label}</div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
    </div>
  </div>
);

const ActivityItem = ({ text }) => (
  <li className="px-6 py-4 hover:bg-gray-50 transition">
    <span className="text-gray-700">{text}</span>
  </li>
);

export default DashboardAdmin;
