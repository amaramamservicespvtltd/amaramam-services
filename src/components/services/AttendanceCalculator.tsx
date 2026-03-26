import { useState } from "react";
import { Calculator, CheckCircle, AlertTriangle, History, RotateCcw } from "lucide-react";

const AttendanceCalculator = () => {
  const [subjectName, setSubjectName] = useState("");
  const [lecture, setLecture] = useState("");
  const [tutorial, setTutorial] = useState("");
  const [practical, setPractical] = useState("");
  const [skilling, setSkilling] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState<{
    subject: string;
    finalPercentage: number;
    isPass: boolean;
    l: number;
    t: number;
    p: number;
    s: number;
  } | null>(null);

  const calculateAttendance = (e: React.FormEvent) => {
    e.preventDefault();

    const l = parseFloat(lecture) || 0;
    const t = parseFloat(tutorial) || 0;
    const p = parseFloat(practical) || 0;
    const s = parseFloat(skilling) || 0;

    if (l > 100 || t > 100 || p > 100 || s > 100) {
      setError(true);
      setResult(null);
      return;
    }
    setError(false);

    const wL = 1.0;
    const wT = 0.25;
    const wP = 0.50;
    const wS = 0.25;
    const totalWeight = wL + wT + wP + wS;

    const weightedSum = (l * wL) + (t * wT) + (p * wP) + (s * wS);
    const finalPercentage = weightedSum / totalWeight;

    setResult({
      subject: (subjectName || "General Subject").toUpperCase(),
      finalPercentage,
      isPass: finalPercentage >= 85,
      l, t, p, s,
    });
  };

  const resetForm = () => {
    setSubjectName("");
    setLecture("");
    setTutorial("");
    setPractical("");
    setSkilling("");
    setError(false);
    setResult(null);
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Navbar */}
      <nav style={{
        backgroundColor: "#9b1c1c",
        padding: "15px 30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>KL University</div>
          <div style={{ display: "flex", gap: "1.5rem" }} className="hidden md:flex">
            <span style={{ fontSize: "0.90rem", fontWeight: 600, letterSpacing: "0.5px", cursor: "pointer", textTransform: "uppercase" }}>Home</span>
            <span style={{ fontSize: "0.90rem", fontWeight: 600, letterSpacing: "0.5px", cursor: "pointer", textTransform: "uppercase" }}>Attendance by L-T-P-S</span>
            <span style={{ fontSize: "0.90rem", fontWeight: 600, letterSpacing: "0.5px", cursor: "pointer", textTransform: "uppercase" }}>Subject Attendance</span>
          </div>
          <div></div>
        </div>
      </nav>

      {/* Calculator Card */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          padding: "40px",
          marginTop: "50px",
          textAlign: "center",
        }}>
          <h2 style={{ fontWeight: "bold", marginBottom: "4px", color: "#2c3e50" }}>L-T-P-S Calculator Pro</h2>
          <p style={{ color: "#6c757d", marginBottom: "1.5rem" }}>Advanced Academic Performance Analytics</p>

          {error && (
            <div style={{
              backgroundColor: "#f8d7da", color: "#842029", border: "1px solid #f5c2c7",
              borderRadius: "8px", padding: "12px", marginBottom: "12px", textAlign: "left",
            }}>
              <AlertTriangle size={16} style={{ display: "inline", marginRight: "8px" }} />
              Error: Values cannot exceed 100%.
            </div>
          )}

          <div style={{ textAlign: "left" }}>
            <button
              onClick={() => alert("History feature coming soon!")}
              style={{
                backgroundColor: "#7c4dff", color: "white", border: "none",
                borderRadius: "8px", padding: "8px 15px", marginBottom: "20px", fontWeight: 500, cursor: "pointer",
              }}
            >
              <History size={14} style={{ display: "inline", marginRight: "8px" }} />
              Show History
            </button>
          </div>

          <form onSubmit={calculateAttendance}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="grid grid-cols-1 md:grid-cols-2">
              {/* Subject Name */}
              <div style={{
                border: "1px solid #eef2f7", borderRadius: "12px", padding: "20px",
                position: "relative", textAlign: "left",
              }}>
                <label style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#6c757d" }}>Subject Name (Optional)</label>
                <input
                  type="text" value={subjectName} onChange={e => setSubjectName(e.target.value)}
                  placeholder="Enter subject name"
                  style={{
                    width: "100%", marginTop: "8px", border: "none", backgroundColor: "#f8f9fa",
                    borderRadius: "6px", padding: "8px 12px", outline: "none",
                  }}
                />
              </div>

              {/* Lecture */}
              <div style={{
                border: "1px solid #eef2f7", borderRadius: "12px", padding: "20px",
                position: "relative", textAlign: "left",
              }}>
                <span style={{
                  position: "absolute", top: "15px", right: "20px", backgroundColor: "#448aff",
                  color: "white", borderRadius: "20px", padding: "2px 10px", fontSize: "0.75rem",
                }}>100% Wt</span>
                <label style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#6c757d" }}>Lecture Component (%)</label>
                <input
                  type="number" step="0.01" max={100} value={lecture} onChange={e => setLecture(e.target.value)}
                  placeholder="Enter percentage" required
                  style={{
                    width: "100%", marginTop: "8px", border: "none", backgroundColor: "#f8f9fa",
                    borderRadius: "6px", padding: "8px 12px", outline: "none",
                  }}
                />
              </div>

              {/* Tutorial */}
              <div style={{
                border: "1px solid #eef2f7", borderRadius: "12px", padding: "20px",
                position: "relative", textAlign: "left",
              }}>
                <span style={{
                  position: "absolute", top: "15px", right: "20px", backgroundColor: "#448aff",
                  color: "white", borderRadius: "20px", padding: "2px 10px", fontSize: "0.75rem",
                }}>25% Wt</span>
                <label style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#6c757d" }}>Tutorial Component (%)</label>
                <input
                  type="number" step="0.01" max={100} value={tutorial} onChange={e => setTutorial(e.target.value)}
                  placeholder="Enter percentage" required
                  style={{
                    width: "100%", marginTop: "8px", border: "none", backgroundColor: "#f8f9fa",
                    borderRadius: "6px", padding: "8px 12px", outline: "none",
                  }}
                />
              </div>

              {/* Practical */}
              <div style={{
                border: "1px solid #eef2f7", borderRadius: "12px", padding: "20px",
                position: "relative", textAlign: "left",
              }}>
                <span style={{
                  position: "absolute", top: "15px", right: "20px", backgroundColor: "#448aff",
                  color: "white", borderRadius: "20px", padding: "2px 10px", fontSize: "0.75rem",
                }}>50% Wt</span>
                <label style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#6c757d" }}>Practical Component (%)</label>
                <input
                  type="number" step="0.01" max={100} value={practical} onChange={e => setPractical(e.target.value)}
                  placeholder="Enter percentage" required
                  style={{
                    width: "100%", marginTop: "8px", border: "none", backgroundColor: "#f8f9fa",
                    borderRadius: "6px", padding: "8px 12px", outline: "none",
                  }}
                />
              </div>

              {/* Skilling */}
              <div style={{
                border: "1px solid #eef2f7", borderRadius: "12px", padding: "20px",
                position: "relative", textAlign: "left",
              }}>
                <span style={{
                  position: "absolute", top: "15px", right: "20px", backgroundColor: "#448aff",
                  color: "white", borderRadius: "20px", padding: "2px 10px", fontSize: "0.75rem",
                }}>25% Wt</span>
                <label style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#6c757d" }}>Skilling Component (%)</label>
                <input
                  type="number" step="0.01" max={100} value={skilling} onChange={e => setSkilling(e.target.value)}
                  placeholder="Enter percentage" required
                  style={{
                    width: "100%", marginTop: "8px", border: "none", backgroundColor: "#f8f9fa",
                    borderRadius: "6px", padding: "8px 12px", outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "1.5rem" }}>
              <button type="submit" style={{
                backgroundColor: "#448aff", border: "none", padding: "12px 30px",
                borderRadius: "8px", fontWeight: 600, color: "white", cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}>
                <Calculator size={16} style={{ display: "inline", marginRight: "8px" }} />
                Calculate Attendance
              </button>
              <button type="button" onClick={resetForm} style={{
                backgroundColor: "transparent", border: "none", padding: "12px 20px",
                borderRadius: "8px", color: "#6c757d", cursor: "pointer", fontWeight: 500,
              }}>
                <RotateCcw size={14} style={{ display: "inline", marginRight: "4px" }} />
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div style={{
          maxWidth: "900px", margin: "30px auto", padding: "0 16px",
        }}>
          <div style={{
            borderRadius: "12px", padding: "20px 40px", textAlign: "center",
            ...(result.isPass
              ? { backgroundColor: "#d1e7dd", color: "#0f5132", border: "1px solid #badbcc" }
              : { backgroundColor: "#f8d7da", color: "#842029", border: "1px solid #f5c2c7" }),
            animation: "slideUp 0.5s ease-out",
          }}>
            <div style={{ fontSize: "1.2rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>
              {result.subject}
            </div>
            <div style={{ marginBottom: "8px" }}>
              {result.isPass
                ? <CheckCircle size={48} />
                : <AlertTriangle size={48} />}
            </div>
            <div style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.2 }}>
              {result.finalPercentage.toFixed(2)}%
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "15px" }}>
              {result.isPass ? "Good Standing!" : "Attendance Shortage!"}
            </div>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", margin: "15px 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px" }}>
              <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                Lecture<span style={{ display: "block", fontSize: "1.1rem", fontWeight: 800 }}>{result.l}%</span>
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                Tutorial<span style={{ display: "block", fontSize: "1.1rem", fontWeight: 800 }}>{result.t}%</span>
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                Practical<span style={{ display: "block", fontSize: "1.1rem", fontWeight: 800 }}>{result.p}%</span>
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                Skilling<span style={{ display: "block", fontSize: "1.1rem", fontWeight: 800 }}>{result.s}%</span>
              </div>
            </div>
            <button onClick={resetForm} style={{
              backgroundColor: "#448aff", color: "white", border: "none",
              padding: "10px 25px", borderRadius: "8px", fontWeight: 600,
              marginTop: "15px", cursor: "pointer",
            }}>
              <Calculator size={14} style={{ display: "inline", marginRight: "8px" }} />
              Calculate Another
            </button>
          </div>
        </div>
      )}

      <div style={{ height: "50px" }} />
    </div>
  );
};

export default AttendanceCalculator;
