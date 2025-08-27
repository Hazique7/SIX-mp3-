"use client";
import { useState } from "react";
import "./page1.css";
import "./download.css";

export default function Home() {
  const [link, setLink] = useState("");
  const [downloadData, setDownloadData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Extract YouTube video ID
  const extractVideoId = (url) => {
    try {
      const urlObj = new URL(url);

      if (urlObj.hostname.includes("youtube.com")) {
        return urlObj.searchParams.get("v");
      }
      if (urlObj.hostname.includes("youtu.be")) {
        return urlObj.pathname.slice(1);
      }

      return null;
    } catch {
      return url; // allow direct video ID
    }
  };

  const handleConvert = async () => {
    if (!link) return;

    const videoId = extractVideoId(link);
    if (!videoId) {
      alert("Invalid YouTube link!");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "f7b75fe2c6mshc2744724f230111p1caff4jsnf5bea04b2a0a",
            "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
          },
        }
      );

      const data = await res.json();
      console.log("API RESPONSE:", data);

      if (data && data.link) {
        setDownloadData(data); // ✅ show download view
      } else {
        alert("Conversion failed. Try another link!");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      alert("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  // If downloadData is ready → show download page
  if (downloadData) {
    return (
      <div className="card">
        <h1 className="title">SIX(mp3)</h1>
        <p className="subtitle">Your MP3 is Ready</p>
        <p className="tagline">Download Below</p>

        <div className="resultBox">
          <div className="videoInfo">
            <p className="videoTitle">{downloadData.title || "Converted Audio"}</p>
            <p className="videoLength">MP3 File</p>
          </div>
             <a
  href={downloadData.link}
  className="downloadBtn"
  download  // ✅ forces download in same window
>
  Download MP3
</a>
        </div>

        <button
          className="downloadBtn"
          onClick={() => {
            setDownloadData(null);
            setLink("");
          }}
        >
          Convert Another
        </button>

        <p className="footer">by HAZIQUE AHMED KHAAN</p>
      </div>
    );
  }

  // Otherwise → show input form
  return (

  <div className="container">
    <div className="card">
      <h1 className="title">SIX(mp3)</h1>
      <p className="subtitle">Quick and Easy YouTube MP3 Conversion</p>
      <p className="tagline">YOUTUBE TO MP3</p>

      <div className="inputWrapper">
        <input
          type="text"
          placeholder="PASTE YOUR URL HERE"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="input"
        />
        <button className="button" onClick={handleConvert} disabled={loading}>
          {loading ? "Converting..." : "CONVERT"}
        </button>
      </div>
    </div>

    {/* ✅ Bottom-left description */}
    <div className="infoBox">
      <h3>Fast and Reliable YouTube to MP3 Conversion</h3>
      <p>
        SIX-mp3 allows you to transform your favorite YouTube videos into high-quality MP3 audio within seconds. 
        Simply paste your video link and click convert — no software installation or account registration required.
      </p>
      <h3>High-Quality Audio Output</h3>
      <p>
        Enjoy crystal-clear audio at up to 320kbps. Each MP3 file preserves the original sound quality from YouTube, 
        making it perfect for music lovers and podcast enthusiasts alike.
      </p>
    </div>
  </div>
);

}
