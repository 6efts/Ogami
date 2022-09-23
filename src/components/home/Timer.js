import React, {useState, useRef, useEffect}   from 'react';
import './Timer.scss';
import {format} from 'date-fns';


const Timer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('September 10, 2022').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 *60 * 60)));
            const minutes =Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);



            if (distance < 0){
                clearInterval(interval.current);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
            
        }, 1000)  
        
    }

    useEffect(() => {
        startTimer();
        console.log(timerDays);
        return () => {
            clearInterval(interval.current);
        }
    })


  return (
    <div className='Timer'>
        <section className='Timer__content'>
            <p>{timerDays}</p>
            <h6>DAYS</h6>
        </section>

        <section className='Timer__content'>
            <p>{timerHours}</p>
            <h6>HR</h6>
        </section>

        <section className='Timer__content'>
            <p>{timerMinutes}</p>
            <h6>MIN</h6>
        </section>

        <section className='Timer__content'>
            <p>{timerSeconds}</p>
            <h6>SEC</h6>
        </section>

    </div>
  )
}

export default Timer