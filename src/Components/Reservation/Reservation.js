import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Reservation = () => {

    const [numberOfPeople, setNumberOfPeople] = useState(2);
    const [meal, setMeal] = useState('');

    const handleNumberOfPeopleChange = (event) => {
        setNumberOfPeople(parseInt(event.target.value));
    };

    const renderTableOptions = () => {
        const tableOptions = [
            { capacity: 2, quantity: 4 },
            { capacity: 4, quantity: 12 },
            { capacity: 6, quantity: 3 },
            { capacity: 8, quantity: 4 },
        ];

        const selectedTableOption = tableOptions.find(
            (option) => option.capacity === numberOfPeople
        );

        return Array.from({ length: selectedTableOption.quantity }, (_, index) => (
            <option key={index} value={index + 1}>
                Table {index + 1}
            </option>
        ));
    };


    const handleMealselect = (event) => {
        const selectedMeal = event.target.value
        setMeal(selectedMeal)
    }

    const handleReserveSit = (event) => {
        event.preventDefault();
        const form = event.target;
        const table = form.table.value
        const people = form.people.value
        const date = form.date.value
        const name = form.name.value
        const reservation = {
            name: name, meal, date: date, people: people, table: 'table no: ' + table
        }
        fetch("http://localhost:5000/reserveSit", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reservation),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    toast.success("Your Post Added", {
                        style: {
                            border: "1px solid #713200",
                            padding: "16px",
                            color: "#713200",
                        },
                        iconTheme: {
                            primary: "#713200",
                            secondary: "#FFFAEE",
                        },
                    });
                }
                console.log(data)
                form.reset()

            })
            .catch((error) => console.error(error));
    }


    return (
        <div>
            <h1 class="mx-auto text-center text-6xl px-12 py-12 uppercase font-bold text-green-600">Reservation page</h1>
            <div class="">
                <div class="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
                    <h1 class="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">Reserve your sit</h1>
                    {/* <p class="mt-6 text-lg text-white">Get an appointment with our experienced accountants</p> */}
                    <img class="absolute top-0 left-0 -z-10 h-full w-full object-cover" src="https://i.ibb.co/Lvw37hf/login.jpg" alt="" />
                </div>

                <form onSubmit={handleReserveSit} class="mx-auto grid max-w-screen-lg px-6 pb-20">
                    <div class="">
                        <p class="font-serif text-xl font-bold text-blue-900">Select your Meal type</p>
                        <div class="mt-4 mx-auto grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                            <div class="relative">
                                <input class="peer hidden" id="radio_1" onClick={handleMealselect} value='Breakfast, 9am - 10am' type="radio" />
                                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-300 bg-white peer-checked:border-emerald-400"></span>
                                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg text-black border-2 shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_1">
                                    <span class="mt-2- font-medium">Breakfast</span>
                                    <span class="text-xs uppercase">9am - 10am</span>
                                </label>
                            </div>
                            <div class="relative">
                                <input class="peer hidden" id="radio_2" onClick={handleMealselect} value='Brunch, 10am - 12pm' type="radio" />
                                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-300 bg-white peer-checked:border-emerald-400"></span>

                                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg text-black border-2 shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_2">
                                    <span class="mt-2 font-medium">Brunch</span>
                                    <span class="text-xs uppercase">10am - 12pm</span>
                                </label>
                            </div>
                            <div class="relative">
                                <input class="peer hidden" id="radio_3" onClick={handleMealselect} value='Lunch , 12pm - 4pm' type="radio" />
                                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-300 bg-white peer-checked:border-emerald-400"></span>

                                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 text-black border-2 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_3">
                                    <span class="mt-2 font-medium">Lunch</span>
                                    <span class="text-xs uppercase">12pm - 4pm</span>
                                </label>
                            </div>
                            <div class="relative">
                                <input class="peer hidden" id="radio_4" onClick={handleMealselect} value='Supper , 4pm - 8pm' type="radio" />
                                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-300 bg-white peer-checked:border-emerald-400"></span>

                                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 text-black border-2 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_4">
                                    <span class="mt-2 font-medium">Supper</span>
                                    <span class="text-xs uppercase">4pm - 8pm</span>
                                </label>
                            </div>
                            <div class="relative">
                                <input class="peer hidden" id="radio_5" onClick={handleMealselect} value='Dinner , 8pm - 11pm' type="radio" />
                                <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-300 bg-white peer-checked:border-emerald-400"></span>

                                <label class="flex h-full cursor-pointer flex-col rounded-lg p-4 text-black border-2 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_5">
                                    <span class="mt-2 font-medium">Dinner</span>
                                    <span class="text-xs uppercase">8pm - 11pm</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center gap-8 items-center'>
                        <div class="">
                            <p class="mt-8 font-serif text-xl font-bold text-blue-900">Select a date</p>
                            <div class="relative mt-4 w-56">
                                <input name='date' type='date' datepicker-orientation="bottom" class="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" placeholder="Select date" />
                            </div>
                        </div>
                    </div>
                    <img class="mx-auto mt-8" src="https://i.ibb.co/kGP1wRW/reservation.png" alt="" />
                    <p class="mt-8 font-serif text-xl font-bold text-blue-900">Select Time & Table</p>
                    <div className='flex justify-center gap-8 items-center'>
                        <div class="relative mt-4 w-56">
                            <label htmlFor="numberOfPeople" className='text-blue-900'>Number of People:</label>
                            <select className='datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm' name='people' id="numberOfPeople" value={numberOfPeople} onChange={handleNumberOfPeopleChange}>
                                <option value={2}>2</option>
                                <option value={4}>4</option>
                                <option value={6}>6</option>
                                <option value={8}>8</option>
                            </select>
                        </div>
                        <div class="relative mt-4 w-56">
                            <label htmlFor="tableSelection" className='text-blue-900'>Table:</label>
                            <select className='atepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm' name='table' id="tableSelection">{renderTableOptions()}</select>
                        </div>
                    </div>

                    <div className='flex justify-center gap-8 items-center'>
                        <div class="">
                            <p class="mt-8 font-serif text-xl font-bold text-blue-900">Your Name</p>
                            <div class="relative mt-4 w-56">
                                <input name='name' type='name' class=" block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" placeholder="Your name" />
                            </div>
                        </div>
                    </div>
                    <button type='submit' class="mt-8  mx-auto w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">Book Now</button>
                </form>
            </div>
            <script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script>

        </div>
    );
};


export default Reservation;