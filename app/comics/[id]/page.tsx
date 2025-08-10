"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/app/styles/themes/default";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ComicDetailClient from "./ComicDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ComicDetail({ params }: PageProps) {
  const { id } = React.use(params);

  const comicId = Number(id);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <ComicDetailClient comicId={comicId} />
      <Footer />
    </ThemeProvider>
  );
}
