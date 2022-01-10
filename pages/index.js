import { useState } from "react";
import Browser from "../components/card/Browser";
import InputWithButton from "../components/input/InputWithButton";

import { NextSeo } from "next-seo";

export default function Test() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [source, setSource] = useState("");
  const [domain, setDomain] = useState("");

  const takeScreenshot = async (url) => {
    setLoading(true);
    if (!url.includes("https://") && !url.includes("http://")) {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      await fetch(`/api/screenshot?url=${url}`)
        .then((response) => {
          if (response.status === 500) {
            return;
          }

          return response.blob();
        })
        .then((image) => {
          const url = URL.createObjectURL(image);
          setSource(url);
          setLoading(false);
          setError(false);
          return url;
        });
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <NextSeo title="Webshot" />
      <div className="flex flex-col min-h-screen md:flex-row bg-base">
        <div className="flex flex-col items-center justify-center flex-1 min-h-screen p-4 space-y-8 bg-basecolor">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 ">
              Take a screenshot
            </h1>
          </div>
          <div className="w-full max-w-md">
            <InputWithButton
              type="text"
              label="domain"
              value={domain}
              placeholder="https://zekhoi.my.id"
              onChange={(e) => setDomain(e.target.value)}
              onClick={() => takeScreenshot(domain)}
            >
              Shot
            </InputWithButton>
          </div>
          <div className="w-full max-w-2xl">
            <Browser loading={loading} error={error} src={source} />
          </div>
        </div>
      </div>
    </>
  );
}
