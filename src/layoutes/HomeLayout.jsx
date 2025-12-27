import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-6 flex justify-center items-center'>
                <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto'>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main_part">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>

        </div>
    );
};

export default HomeLayout;