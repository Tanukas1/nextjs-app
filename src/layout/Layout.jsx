"use client";

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
    useEffect(() => {
    }, []);

    return (
        <div>
            <Navbar />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    );
}
export default Layout;