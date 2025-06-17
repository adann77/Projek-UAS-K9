import React, { useEffect, useState } from "react";
import { kontakAPI } from "../services/kontakAPI";

const KontakPage = () => {
  const [kontakList, setKontakList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchKontak = async () => {
    try {
      const data = await kontakAPI.getAll();
      setKontakList(data);
    } catch (error) {
      console.error("Gagal memuat data kontak:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin menghapus pesan ini?")) {
      try {
        await kontakAPI.delete(id);
        fetchKontak();
      } catch (error) {
        console.error("Gagal menghapus kontak:", error);
      }
    }
  };

  useEffect(() => {
    fetchKontak();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pesan Kontak Masuk</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border">Nama</th>
              <th className="py-3 px-4 border">Email</th>
              <th className="py-3 px-4 border">Telepon</th>
              <th className="py-3 px-4 border">Kategori</th>
              <th className="py-3 px-4 border">Subjek</th>
              <th className="py-3 px-4 border">Pesan</th>
              <th className="py-3 px-4 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kontakList.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-2 px-4 border">{item.nama}</td>
                <td className="py-2 px-4 border">{item.email_kontak}</td>
                <td className="py-2 px-4 border">{item.nomorhp}</td>
                <td className="py-2 px-4 border">{item.kategori}</td>
                <td className="py-2 px-4 border">{item.subjek}</td>
                <td className="py-2 px-4 border">{item.pesan}</td>
                <td className="py-2 px-4 border text-center">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {kontakList.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Belum ada pesan masuk.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KontakPage;
