"use client";

import React, { useState } from "react";
import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import { stats } from "@/static";
import Link from "next/link";

export default function Page() {
  return (
    <Container>
      <Header text="Selamat Datang Guru" />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Link key={index} href={stat.link}>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <stat.icon className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
