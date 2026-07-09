"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BusinessRegisterForm({ locale }) {
  const router = useRouter();

  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    businessType: "",
    category: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    country: "",
    description: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Business form:", form);
    router.push(`/${locale}/business/success`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          name="businessName"
          label="Business Name"
          value={form.businessName}
          onChange={handleChange}
        />
        <Input
          name="ownerName"
          label="Owner Name"
          value={form.ownerName}
          onChange={handleChange}
        />
        <Input
          name="businessType"
          label="Business Type"
          value={form.businessType}
          onChange={handleChange}
        />
        <Input
          name="category"
          label="Product Category"
          value={form.category}
          onChange={handleChange}
        />
        <Input
          name="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          name="phone"
          label="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <Input
          name="country"
          label="Country"
          value={form.country}
          onChange={handleChange}
        />
        <Input
          name="province"
          label="Province"
          value={form.province}
          onChange={handleChange}
        />
        <Input
          name="city"
          label="City"
          value={form.city}
          onChange={handleChange}
        />

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            Business Address
          </label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            rows="3"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            Business Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-slate-900"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 rounded-full bg-slate-900 px-8 py-3 font-semibold text-white hover:bg-black"
      >
        Create Business Account
      </button>
    </form>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block font-medium text-slate-700">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-slate-900"
      />
    </div>
  );
}
