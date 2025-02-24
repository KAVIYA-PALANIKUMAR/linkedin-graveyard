const Home = () => {
    return (
      <div className="bg-black text-red-600 min-h-screen flex flex-col items-center p-6">
        {/* Scary Title */}
        <h1 className="text-5xl font-bold mt-10">👻 The LinkedIn Graveyard 👻</h1>
        
        {/* Timeline */}
        <div className="mt-10 text-lg">
          <p className="mb-2">🟢 Oct 2023 - Created my LinkedIn account</p>
          <p className="mb-2">🔵 Dec 2024 - Reached 500+ connections</p>
          <p className="mb-2">🟡 Jan 2025 - Suspicious activity detected...</p>
          <p className="mb-2">🔴 Jan 2025 - **ACCOUNT BLOCKED** 💀</p>
        </div>
  
        {/* Tombstone Section */}
        <div className="mt-10">
          <p className="text-2xl font-bold">🪦 Here Lies My LinkedIn 🪦</p>
          <p className="italic">"Gone but never forgotten... should've enabled 2FA."</p>
        </div>
      </div>
    );
  };
  
  export default Home;
  