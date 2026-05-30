import { useEffect, useState } from "react";

export default function Dashboard() {
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("http://localhost:3000/dashboard/pending", {
  headers: {
    "x-api-key": import.meta.env.VITE_API_KEY
  }
})
    .then((res) => res.json())
    .then((data) => {
      console.log("API RESPONSE:", data);

      if (Array.isArray(data)) {
        setPending(data);
      } else {
        setPending([]); // fallback if error
      }

      setLoading(false);
    })
    .catch((err) => {
      console.log("Error fetching data:", err);
      setPending([]);
      setLoading(false);
    });
}, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Library Dashboard</h1>

      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Book Name</th>
            <th>Issued Date</th>
            <th>Return Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {pending.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No pending books 🎉
              </td>
            </tr>
          ) : (
            pending.map((item, index) => (
              <tr key={index}>
                <td>{item.memberName}</td>
                <td>{item.bookName}</td>
                <td>
                  {item.issuedDate
                    ? new Date(item.issuedDate).toLocaleDateString()
                    : "-"}
                </td>
                <td>
                  {item.targetReturnDate
                    ? new Date(item.targetReturnDate).toLocaleDateString()
                    : "-"}
                </td>
                <td>{item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}