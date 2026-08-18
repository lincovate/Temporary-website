import React from "react";
import "./CompanyRegistrationInfo.css";

export default function CompanyRegistrationInfo() {
  return (
    <div className="CompanyRegistrationInfo-container">

      <h1 className="CompanyRegistrationInfo-title">
        💼 Kenya Company Registration Guide (Private Limited Company)
      </h1>

      {/* COST SECTION */}
      <section className="CompanyRegistrationInfo-card">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          💰 1. Exact Government Registration Cost (eCitizen/BRS)
        </h2>

        <p className="CompanyRegistrationInfo-text">
          For a Private Limited Company (Ltd):
        </p>

        <h3 className="CompanyRegistrationInfo-subTitle">Core registration fee</h3>
        <p className="CompanyRegistrationInfo-highlight">
          KES 10,650 (standard BRS fee)
        </p>

        <h3 className="CompanyRegistrationInfo-subTitle">Name search</h3>
        <p className="CompanyRegistrationInfo-text">
          KES 150 (per name search attempt)
        </p>

        <h3 className="CompanyRegistrationInfo-subTitle">Stamp duty (depends on share capital)</h3>
        <p className="CompanyRegistrationInfo-text">
          For startups with normal/low capital (KES 100,000 – 1,000,000):
        </p>

        <p className="CompanyRegistrationInfo-highlight">
          Usually KES 1,000 – 5,000
        </p>

        <p className="CompanyRegistrationInfo-note">
          This is not fixed, but for most startups it stays low.
        </p>
      </section>

      {/* DIY TOTAL */}
      <section className="CompanyRegistrationInfo-card">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          📌 ✔ Safe Planning Total (DIY Registration)
        </h2>

        <p className="CompanyRegistrationInfo-bigText">
          👉 KES 12,000 – 15,000 total
        </p>

        <ul className="CompanyRegistrationInfo-list">
          <li>Company registration</li>
          <li>Name search(s)</li>
          <li>Small stamp duty adjustments</li>
        </ul>

        <p className="CompanyRegistrationInfo-note">
          📍 This is the true “no lawyer” cost range on eCitizen.
        </p>
      </section>

      {/* LAWYER COST */}
      <section className="CompanyRegistrationInfo-card">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          💼 2. If You Use a Lawyer or Agent
        </h2>

        <ul className="CompanyRegistrationInfo-list">
          <li>Lawyer/service fee: KES 10,000 – 30,000</li>
        </ul>

        <p className="CompanyRegistrationInfo-bigText">
          👉 Total becomes: KES 22,000 – 45,000
        </p>
      </section>

      {/* SUMMARY TABLE */}
      <section className="CompanyRegistrationInfo-card">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          📊 FINAL SIMPLE BUDGET SUMMARY
        </h2>

        <table className="CompanyRegistrationInfo-table">
          <thead>
            <tr>
              <th>Option</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DIY (recommended if careful)</td>
              <td>KES 12K – 15K</td>
            </tr>
            <tr>
              <td>With lawyer</td>
              <td>KES 22K – 45K</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* MEMBER REQUIREMENTS */}
      <section className="CompanyRegistrationInfo-card">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          👥 WHAT EACH MEMBER SHOULD HAVE FOR REGISTRATION
        </h2>

        <ul className="CompanyRegistrationInfo-list">
          <li>National ID or Passport</li>
          <li>KRA PIN Certificate</li>
          <li>Phone number and email</li>
          <li>Passport-size photo (sometimes required)</li>
          <li>Physical address details</li>
          <li>Each partner must be listed as shareholder/director</li>
        </ul>
      </section>

      {/* LAWYER DOCUMENTS */}
      <section className="CompanyRegistrationInfo-card">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          ⚖️ DOCUMENTS REQUIRED FROM LAWYERS (IN DETAIL)
        </h2>

        <ul className="CompanyRegistrationInfo-list">
          <li>Memorandum & Articles of Association</li>
          <li>CR1 Form (Company registration application)</li>
          <li>CR2 Form (Share capital & shareholding details)</li>
          <li>CR8 Form (Registered office address)</li>
          <li>Statement of Nominal Capital</li>
          <li>Shareholding structure breakdown (4 partners)</li>
          <li>Board resolution (if already agreed)</li>
          <li>eCitizen incorporation filing and submission</li>
        </ul>

        <p className="CompanyRegistrationInfo-note">
          Lawyers handle drafting, compliance checks, and submission to BRS.
        </p>
      </section>

      {/* AFTER REGISTRATION */}
      <section className="CompanyRegistrationInfo-card">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          🧠 3. AFTER REGISTRATION — CAN YOU DO OTHER THINGS LATER?
        </h2>

        <ul className="CompanyRegistrationInfo-list">
          <li>Open business bank account</li>
          <li>Register company KRA PIN</li>
          <li>Register VAT (if needed)</li>
          <li>Add business activities</li>
          <li>Sign contracts and operate</li>
          <li>Hire employees</li>
        </ul>
      </section>

      {/* 🔥 ADDED SECTION (MISSING BEFORE) */}
      <section className="CompanyRegistrationInfo-card">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          📄 4. NIL RETURNS (IMPORTANT AFTER REGISTRATION)
        </h2>

        <p className="CompanyRegistrationInfo-text">
          If your company has no income or is not yet operating, you can file <strong>nil returns</strong>.
        </p>

        <ul className="CompanyRegistrationInfo-list">
          <li>Nil returns mean zero income, zero expenses</li>
          <li>Filing is done on KRA iTax system</li>
          <li>It is mandatory if you have a KRA PIN</li>
          <li>Filing cost is KES 0 (free)</li>
        </ul>

        <p className="CompanyRegistrationInfo-warning">
          ⚠️ Failure to file can lead to penalties even if the company is inactive.
        </p>
      </section>

      {/* IMPORTANT TIP */}
      <section className="CompanyRegistrationInfo-card">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          ⚠️ IMPORTANT TIP FOR TECH STARTUPS
        </h2>

        <p className="CompanyRegistrationInfo-warning">
          ❌ Avoid listing too many activities (AI, SaaS, consulting, etc.)
        </p>

        <ul className="CompanyRegistrationInfo-list">
          <li>Register with 1–2 core activities only</li>
          <li>Add others later via amendments</li>
        </ul>
      </section>

      {/* FINAL SUMMARY */}
      <section className="CompanyRegistrationInfo-card CompanyRegistrationInfo-highlightCard">

        <h2 className="CompanyRegistrationInfo-sectionTitle">
          🚀 FINAL RECOMMENDATION FOR YOUR SITUATION
        </h2>

        <ul className="CompanyRegistrationInfo-list">
          <li>✔ Register Private Limited Company (Ltd)</li>
          <li>✔ 4 partners = 25% shares each</li>
          <li>✔ All partners as directors</li>
          <li>✔ Budget KES 12K – 15K (DIY)</li>
          <li>✔ Or KES 25K – 40K (with lawyer)</li>
          <li>✔ Do other setup steps after registration</li>
        </ul>

      </section>

    </div>
  );
}