// app/not-found.js
import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
        <img src="/res/boring0.png" alt="not-found-svg" className='h-20 w-20' />
        <h1 className="text-6xl font-bold text-base-content">Error 404</h1>
        <p className="mt-4 text-2xl text-base-content">Boring portfolio not found.</p>
        <p className="mt-2 text-base-content">It looks like the page you're looking for doesn't exist.</p>
        <Link href="/">
            <button className='btn btn-outline mt-5'>
                Go back Home
            </button>
        </Link>
    </div>
);
};

export default Custom404;
