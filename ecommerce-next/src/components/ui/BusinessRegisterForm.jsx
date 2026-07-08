"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const initialFormData = {
  businessName: "",
  ownerName: "",
  businessType: "",
  category: "",
  description: "",
  email: "",
  phone: "",
  country: "",
  province: "",
  city: "",
  address: "",
  storeName: "",
  storeLogo: null,
  storeBanner: null,
  agreement: false,
};

function Field({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#f59e0b] focus:ring-4 focus:ring-amber-100"
      />
    </label>
  );
}

function UploadField({ label, name, fileName, onChange }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-4">
        <input
          type="file"
          name={name}
          onChange={onChange}
          className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-[#232f3e] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#131921]"
        />
        <p className="mt-3 text-xs text-slate-500">
          {fileName || "No file selected yet."}
        </p>
      </div>
    </label>
  );
}

export default function BusinessRegisterForm({ locale }) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value, type, checked, files } = event.target;

    setFormData((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
            ? files?.[0] ?? null
            : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(formData);
    router.push(`/${locale}/business/success`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8"
    >
      <div className="grid gap-8">
        <section className="grid gap-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Business Information
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Tell us about your business and how you want customers to find it.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Northwind Trading Co."
            />
            <Field
              label="Owner Name"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Alex Johnson"
            />
            <Field
              label="Business Type"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              placeholder="Retail, wholesale, services..."
            />
            <Field
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Electronics"
            />
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            <span>Description</span>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your business, products, and store focus."
              rows={5}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#f59e0b] focus:ring-4 focus:ring-amber-100"
            />
          </label>
        </section>

        <section className="grid gap-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
            <p className="mt-1 text-sm text-slate-600">
              We will use these details for account updates and support.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="owner@northwind.com"
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 555 010 2020"
            />
          </div>
        </section>

        <section className="grid gap-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Address</h2>
            <p className="mt-1 text-sm text-slate-600">
              This helps tailor your storefront and local business settings.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="United States"
            />
            <Field
              label="Province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              placeholder="California"
            />
            <Field
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="San Francisco"
            />
            <Field
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="100 Market Street"
            />
          </div>
        </section>

        <section className="grid gap-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Store</h2>
            <p className="mt-1 text-sm text-slate-600">
              Add store branding so your business profile feels complete from day one.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Store Name"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              placeholder="Northwind Market"
            />
            <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Live form state
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Your information stays on the client for this flow. No backend request is made.
              </p>
              <p className="mt-4 text-xs text-slate-500">
                {submittedData
                  ? `Latest submission prepared for ${submittedData.storeName || submittedData.businessName || "your store"}.`
                  : "Submit the form to continue to your business success screen."}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <UploadField
              label="Store Logo upload"
              name="storeLogo"
              fileName={formData.storeLogo?.name}
              onChange={handleChange}
            />
            <UploadField
              label="Store Banner upload"
              name="storeBanner"
              fileName={formData.storeBanner?.name}
              onChange={handleChange}
            />
          </div>
        </section>

        <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#232f3e] focus:ring-[#232f3e]"
          />
          <span>
            I agree to create this business account and confirm the provided information is accurate.
          </span>
        </label>

        <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Complete the details above to finish your business account setup.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#232f3e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#131921]"
          >
            Create Business Account
          </button>
        </div>
      </div>
    </form>
  );
}
