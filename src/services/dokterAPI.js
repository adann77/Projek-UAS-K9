import axios from 'axios';

const API_URL = "https://iitcdrfpxfnehcfmywmm.supabase.co/rest/v1/dokter";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpdGNkcmZweGZuZWhjZm15d21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTEzMjYsImV4cCI6MjA2NTU2NzMyNn0.D5NrQbajWicp0VcezmJjvOdpxhw70l0ov6YLtcl7svo"; // potong untuk ringkas

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const dokterAPI = {
  async fetchAll() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },
  async create(data) {
    const response = await axios.post(API_URL, [data], { headers });
    return response.data;
  },
  async update(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers });
    return response.data;
  },
  async remove(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
    return response.data;
  },
};