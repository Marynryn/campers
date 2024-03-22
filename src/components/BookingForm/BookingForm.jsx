import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import sprite from "../img/sprite.svg"
const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });
    const [selectedDate, setSelectedDate] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setErrors({ ...errors, bookingDate: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email } = formData;
        const errors = {};

        if (!name) {
            errors.name = 'Name is required';
        }

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Invalid email format';
        }

        if (!selectedDate) {
            errors.bookingDate = 'Booking date is required';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }


        setFormData({
            name: '',
            email: '',
            comment: ''
        });
        setSelectedDate(null);
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Book your campervan now</h4>
            <h6>Stay connected! We are always ready to help you.</h6>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                />

            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />

            </div>
            <div>
                <Datetime
                    id="bookingDate"
                    name="bookingDate"
                    value={selectedDate}
                    onChange={handleDateChange}
                    inputProps={{ required: true }}
                    placeholder="Booking date"
                />
                <svg className="" width={16} height={16}>
                    <use href={`${sprite}#icon-Container`} />
                </svg>
            </div>
            <div>
                <textarea
                    name="comment"
                    placeholder='Comment'
                    value={formData.comment}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Send</button>
        </form>
    );
};

export default BookingForm;
