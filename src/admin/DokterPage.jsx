import React, { useState, useEffect } from 'react';
import { dokterAPI } from '../services/dokterAPI';
import { FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa';

const DokterPage = () => {
  const [dokterList, setDokterList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    name: '',
    position: '',
    experience: '',
    specialization: '',
    photo: '',
  });

  useEffect(() => {
    fetchDokter();
  }, []);

  const fetchDokter = async () => {
    try {
      const data = await dokterAPI.fetchAll();
      setDokterList(data);
    } catch (err) {
      console.error("Error fetching dokter:", err.message);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await dokterAPI.update(editId, form);
      } else {
        await dokterAPI.create(form);
      }
      fetchDokter();
      handleCancel();
    } catch (err) {
      console.error("Gagal submit:", err.message);
    }
  };

  const handleEdit = (dokter) => {
    setForm(dokter);
    setEditId(dokter.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Yakin hapus dokter ini?")) {
      try {
        await dokterAPI.remove(id);
        fetchDokter();
      } catch (err) {
        console.error("Gagal hapus:", err.message);
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);
    setForm({ name: '', position: '', experience: '', specialization: '', photo: '' });
  };

   return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manajemen Dokter</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-3 py-2 rounded flex items-center gap-2"
        >
          {showForm ? <><FaTimes /> Batal</> : <><FaPlus /> Tambah Dokter</>}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-gray-50 p-4 rounded shadow mb-6"
        >
          {['name', 'position', 'experience', 'specialization', 'photo'].map((field) => (
            <input
              key={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              className="border p-2 rounded"
              required
            />
          ))}

          <div className="col-span-1 md:col-span-2 flex justify-end gap-2">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              {editId ? 'Update' : 'Simpan'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Batal
            </button>
          </div>
        </form>
      )}

      {/* Tabel Dokter */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Daftar Dokter</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="border px-3 py-2">No</th>
                <th className="border px-3 py-2">Foto</th>
                <th className="border px-3 py-2">Nama</th>
                <th className="border px-3 py-2">Posisi</th>
                <th className="border px-3 py-2">Spesialisasi</th>
                <th className="border px-3 py-2">Pengalaman</th>
                <th className="border px-3 py-2 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dokterList.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center p-4">
                    Tidak ada data dokter.
                  </td>
                </tr>
              ) : (
                dokterList.map((dokter, index) => (
                  <tr key={dokter.id} className="hover:bg-gray-50">
                    <td className="border px-3 py-2">{index + 1}</td>
                    <td className="border px-3 py-2">
                      <img
                        src={dokter.photo}
                        alt={dokter.name}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    </td>
                    <td className="border px-3 py-2">{dokter.name}</td>
                    <td className="border px-3 py-2">{dokter.position}</td>
                    <td className="border px-3 py-2">{dokter.specialization}</td>
                    <td className="border px-3 py-2">{dokter.experience}</td>
                    <td className="border px-3 py-2 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(dokter)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(dokter.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Hapus"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DokterPage;