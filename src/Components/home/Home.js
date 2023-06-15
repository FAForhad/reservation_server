import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div class='home'>
            <ul className='ul'>
                <li><a href="#">home</a></li>
                <li class="drop"><Link to='/login'>login</Link></li>
                <div class="content">
                    <li><Link to='/registration'>Sign up</Link></li>
                </div>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
            </ul>

            <section
                class="relative bg-[url(/src/assets/res.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Best food waiting for your belly
                        </h1>

                        <div class="mt-8 flex justify-center gap-4 text-center">
                            <a
                                href="#"
                                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;