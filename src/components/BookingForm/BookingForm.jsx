import React, { useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import sprite from "../img/sprite.svg";
import css from "./BookingForm.module.css";
import { Schema } from 'schema/schema';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('en-GB', enGB);

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
        bookingDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, bookingDate: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.bookingDate) {
            alert('Please fill in all required fields.');
            return;
        }

        console.log(formData);

        setFormData({
            name: '',
            email: '',
            comment: '',
            bookingDate: ''
        });

        window.location.reload();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} schema={Schema}>
            <h4 className={css.form_title}>Book your campervan now</h4>
            <h6 className={css.form_description}>Stay connected! We are always ready to help you.</h6>
            <label className={css.label_form}>
                <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label className={css.label_form}>
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label className={css.calendar_div}>
                <DatePicker
                    locale="en-GB"
                    selected={formData.bookingDate}
                    onChange={handleDateChange}
                    customInput={<input className={css.calendar} />}
                    placeholderText="Booking date"
                    className={css.calendar_color}
                />
                <svg className={css.icon_data} width={16} height={16}>
                    <use href={`${sprite}#icon-data`} />
                </svg>
            </label>
            <label className={css.comment}>
                <textarea
                    rows="6"
                    cols="50"
                    name="text"
                    placeholder='Comment'
                    value={formData.comment}
                    onChange={handleChange}
                />
            </label>
            <button className={css.send} type="submit">Send</button>
        </form>
    );
};

export default BookingForm;
