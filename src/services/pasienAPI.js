import axios from "axios";

const BASE_URL = "https://iitcdrfpxfnehcfmywmm.supabase.co/rest/v1/pasien";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpdGNkcmZweGZuZWhjZm15d21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTEzMjYsImV4cCI6MjA2NTU2NzMyNn0.D5NrQbajWicp0VcezmJjvOdpxhw70l0ov6YLtcl7svo"; // potong untuk ringkas

// Header otentikasi untuk Supabase REST API
const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

// Objek pasienAPI dengan 3 fungsi utama
export const pasienAPI = {
  getAll: async () => {
    const res = await axios.get(BASE_URL, { headers });
    return res.data;
  },

  tambahPasien: async (data) => {
    const res = await axios.post(BASE_URL, [data], { headers }); // Supabase butuh array
    return res.data;
  },

  delete: async (id) => {
    const res = await axios.delete(`${BASE_URL}?id=eq.${id}`, { headers });
    return res.data;
  },
};