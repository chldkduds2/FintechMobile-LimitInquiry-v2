"use client";
import { useState, useEffect } from "react";

export const useFooterTerms = () => {
  const [footerTermList, setFooterTermList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFooterTerms = async () => {
      try {
        const response = await fetch("/api/Data/FooterTermList");
        const data = await response.json();
        setFooterTermList(data);
      } catch (error) {
        console.error("Footer terms fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFooterTerms();
  }, []);

  return { footerTermList, isLoading };
};
