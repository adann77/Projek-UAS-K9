import React, { useEffect, useState } from "react";
import { pasienAPI } from "../services/pasienAPI";
import { FaTrash, FaSync } from "react-icons/fa";

const ManajemenPasien = () => {
  const [dataPasien, setDataPasien] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPasien = async () => {
    setLoading(true);
    try {
      const data = await pasienAPI.getAll();
      setDataPasien(data);
    } catch (error) {
      console.error("Gagal mengambil data pasien:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await pasienAPI.delete(id);
      setDataPasien((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Gagal menghapus data:", error);
      alert("Gagal menghapus data pasien.");
    }
  };

  useEffect(() => {
    fetchPasien();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Manajemen Pasien</h2>
        <button
          onClick={fetchPasien}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <FaSync /> Refresh
        </button>
      </div>

      {loading ? (
        <p>Loading data pasien...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">No HP</th>
                <th className="p-2 border">Tanggal</th>
                <th className="p-2 border">Waktu</th>
                <th className="p-2 border">Keluhan</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPasien.length > 0 ? (
                dataPasien.map((pasien) => (
                  <tr key={pasien.id} className="text-center">
                    <td className="p-2 border">{pasien.nama_lengkap}</td>
                    <td className="p-2 border">{pasien.email}</td>
                    <td className="p-2 border">{pasien.no_hp}</td>
                    <td className="p-2 border">{pasien.keluhan}</td>
                    <td className="p-2 border">{pasien.tanggal_periksa}</td>
                    <td className="p-2 border">{pasien.waktu_periksa}</td>
                    <td className="p-2 border">
                      <button
                        onClick={() => handleDelete(pasien.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Hapus"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="p-4 text-center text-gray-500">
                    Tidak ada data pasien.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManajemenPasien;
