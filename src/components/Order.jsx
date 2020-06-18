import React from 'react';
import {Field,  reduxForm } from "redux-form";
import s from "./Order.module.css";
import Post from "./Post.jsx";

const OrderForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >

            <div >
               <div className={s.name}><label className={s.label}>Imię</label></div>
                <Field placeholder={"Imię"} name={"Imie"} component={"input"} className={s.input}/>
            </div>
            <div>
               <div className={s.name}><label className={s.label}>Nazwisko</label></div>
                <Field placeholder={"Nazwisko"} name={"Nazwisko"} component={"input"} className={s.input}/>
            </div>
            <div>
                <div className={s.name}><label className={s.label}>PESEL</label></div>
                <Field placeholder={"PESEL"} name={"PESEL"} component={"input"} className={s.input}/>
            </div>
            <div>
                <div className={s.name}><label className={s.label}>Lek</label></div>
                <Field name={"Lek"} component={"select"} placeholder={"Wybierz lek"} className={s.input}>
                    <option />
                    <option value="Aspiryna">Aspiryna</option>
                    <option value="Vit C">Vit C</option>
                    <option value="Vita plus 3000">Vita plus 3000</option>
                </Field>
            </div>
            <div>
                <div className={s.name}><label className={s.label}>Pora nadania</label></div>
                <Field name={"Pora"} component={"select"} placeholder={"Wybierz porę nadania leku"} className={s.input}>
                    <option />
                    <option value="8:00">8:00</option>
                    <option value="15:00">15:00</option>
                    <option value="22:00">22:00</option>
                </Field>
            </div>
            <div>
                <div className={s.name}><label className={s.label}>Ilość leku dziennie</label></div>
                <Field placeholder={"Wprowadz ilość leku dziennie"} name={"Ilosc"} component={"input"} className={s.input}/>
            </div>
            <div>
                <div className={s.name}><label className={s.label}>Data nadania leku</label></div>
                <Field placeholder={"Wprowadz datę nadania leku"} name={"Data"} component={"input"} className={s.input}/>
            </div>
          <div>
              <div className={s.name} ><label className={s.label}>Oddział nadania</label></div>
            <Field name={"Oddzial"} component={"select"} placeholder={"Wybierz oddział nadania leku"} className={s.input}>
                <option />
                <option value="Szpital Wojewódzki w Lódzi oddział 1">Szpital Wojewódzki w  Łódźi oddział 1</option>
                <option value="Szpital Wojewódzki w Lódzi oddział 2">Szpital Wojewódzki w  Łódźi oddział 2</option>
                <option value="Szpital Wojewódzki w Lódzi oddział 3">Szpital Wojewódzki w  Łódźi oddział 3</option>
            </Field>
          </div>
            <div className={s.name}>
                <button type="submit" className={s.button}>Nadać zlecenie</button>
            </div>
        </form>)
}

const OrderReduxForm = reduxForm ({//robimy wrap naszej formy zlecenia
    form:'order'
})(OrderForm);


/*let orders = //zlecenia
    props.posts.map( p =>
        <Post  Imie={p.Imie} Nazwisko={p.Nazwisko}/>
    );

*/

const Order =()=> {//funkcja pobrania i wyswietlania zlecenia

    const onSubmit= (formData)=>{ //dane pobrane to wysłania  zlecenia
        console.log(formData);
        //props.addPost(formData.Imie, formData.Nazwisko);//uzywamy callback do wstawiania danych
    }

    return(
        <div className={s.form}>
            <h1>Zlecenie na lek</h1>
            <OrderReduxForm onSubmit={onSubmit}/>
            <h1>Stworzone zlecenia: </h1>/* {"orders"}*/
        </div>
    )
}

export default Order;