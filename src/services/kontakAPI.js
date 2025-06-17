import axios from "axios";

const APP_URL = "https://iitcdrfpxfnehcfmywmm.supabase.co/rest/v1/kontak";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpdGNkcmZweGZuZWhjZm15d21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTEzMjYsImV4cCI6MjA2NTU2NzMyNn0.D5NrQbajWicp0VcezmJjvOdpxhw70l0ov6YLtcl7svo"; // potong untuk ringkas

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export const kontakAPI = {
  getAll: async () => {
    const res = await axios.get(APP_URL, { headers });
    return res.data;
  },

  create: async (data) => {
    const res = await axios.post(APP_URL, [data], { headers });
    return res.data;
  },

  delete: async (id) => {
    const res = await axios.delete(`${APP_URL}?id=eq.${id}`, { headers });
    return res.data;
  },
};
