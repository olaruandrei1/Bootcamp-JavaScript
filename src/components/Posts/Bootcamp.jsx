import React from 'react';
import { Link } from 'react-router-dom';
import './Bootcamp.css';

const Bootcamp = () => {
    <div className='container'>
        <section className='section-articole'>
            <div className='meta'>
                <Link to='/'>PEOPLE AT SOFTBINATOR</Link>
            </div>
            <h1 className='title-section'>
                Softbinator JavaScript Bootcamp – Summer Session 2022
            </h1>
            <img
                className='img-bootcamp'
                src='C:\\Users\\olaru\\Documents\\Bootcamp Javascript\\Assignments_Projects\\Front end\\blog-softbinator-copy\\src\Images\\Box_Thumbnails\\Image_Box1_JavaScriptBootcamp.png'
                alt='WE ARE SOFTBINATOR'
            ></img>
            <p>
                You already made your first step in fulfilling your dream of
                becoming a software engineer. But what does it take to launch
                your career in software engineering?
            </p>
            <p>
                We believe bootcamp learning can bring many benefits. That’s why
                this summer, we kicked off this exciting project where students
                can learn plenty of practical coding skills in a short time and
                take advantage of individualized mentorship and job placement
                after completion.
            </p>
            <p>Here’s all you need to know about Softbinator Bootcamp.</p>
            <h2>What is Softbinator Bootcamp</h2>
            <p>
                We’ve been collaborating with several universities in Romania
                for quite some time now. Softbinator team started this
                initiative as it aligns with one of our strategic missions,
                which is to
                <span>educate the next generation of IT talent</span>.
            </p>
            <p>
                One of our focuses is to
                <span>
                    better equip computer science and information technology
                    students for the working world
                </span>
                and offer them new areas of study.
            </p>
            <p>
                Completing a Bachelor’s or Master’s degree in the IT field is
                always a plus. But if you combine it with hands-on training and
                bootcamp programs, you can start your career or get promoted in
                a relevant IT field way easier.
            </p>
            <h2>Softbinator Bootcamp – First Edition</h2>
            <p>
                <span>
                    Our latest partnership is with Ovidius University of
                    Constanta – Faculty of Mathematics and Technology
                    Information department
                </span>
                . Students from this university got the chance to join the
                summer of 2022 bootcamp project.
            </p>
            <p>
                Our first bootcamp session of many more to come focuses on
                JavaScript coding. This programming language is a must-know
                skill for professional developers, especially if they want to
                specialize in front-end or full-stack coding. You hear and read
                about JavaScript everywhere; companies like Netflix, PayPal, and
                Facebook use it daily.
            </p>
            <p>
                That said, you’ll likely have to
                <span>
                    deal with JavaScript-coded projects at your first job
                </span>
                , so knowing to code JavaScript fluently is essential.
            </p>
            <h2>
                <strong>Bootcamp Detailed Program</strong>
            </h2>
            <p>
                Our JavaScript bootcamp started on July 6th, and will last 10
                weeks covering the following schedule:
            </p>
            <ul>
                <li>
                    5 weeks of intensive training sessions covering the ins and
                    outs of Java
                </li>
                <li>
                    5 weeks of practical workshops, where students have to apply
                    what they learned into a project (which they can keep as
                    part of their portfolio)
                </li>
            </ul>
            <p>
                During these 10 weeks, students attend two sessions: one online
                course every Tuesday and one (live at the university) lecture
                every Friday.
            </p>
            <p>
                The bootcamp starts with JavaScript basics, and is followed by
                pair programming with classmates, where they’ll be challenged to
                handle common JavaScript problems. Each week, students have to
                complete a practical assignment, and they’ll receive feedback on
                their work based on 1:1 coaching sessions.
            </p>
            <p>
                Apart from the actual coding skills, they get
                <span>
                    insights on some practical tips and tricks they can apply in
                    real-world use cases
                </span>
                . So, students gain useful skills in both coding theory and
                practice.
            </p>
            <h2>Our Mentors</h2>
            <img
                src='src\Images\Posts\Post_1\Image_Mentors.png'
                alt='Our mentors'
            />
            <h2>How to Apply</h2>
            <p>
                The best part about the current bootcamp and the ones we’ll
                organize in the future is that they’re{' '}
                <span>completely free</span>. However, the number of available
                spots is limited.
            </p>
            <p>
                Keep an eye on our social media channels (
                <Link to='#'>LinkedIn</Link>,<Link to='#'>Facebook</Link>), so
                you’ll know when we’re launching the next edition.
            </p>
            <p>The application process is fairly simple:</p>
            <ul>
                <li>Send a CV and include a link to your LinkedIn profile</li>
                <li>
                    Links to GitHub or another repository are a plus and highly
                    appreciated
                </li>
            </ul>
            <h2>What’s In It for You</h2>
            <p>
                This bootcamp brings more than acquiring the essential coding
                skills (in this case, JavaScript competences) that can help
                students land a job in tech.
            </p>
            <p>At the end of the bootcamp, you receive:</p>
            <ul>
                <li>a completion certificate</li>
                <li>
                    a scholarship if you complete a project based on Softbinator
                    trainers’ requirements
                </li>
                <li>
                    the chance to
                    <span>
                        be hired as Junior Software Engineer at our company
                    </span>
                </li>
            </ul>
            <p>
                The above-mentioned benefits will be available for all our
                future bootcamps.
            </p>
            <h2>See You At Our Next Bootcamp</h2>
            <p>
                Our bootcamps are fun, engaging and filled with inspiring tech
                knowledge and resources. Our mentors focus on a practical
                approach to learning, and we want to teach students the exact
                skills prospective employers are looking for as we speak.
            </p>
            <p>
                They’re a great opportunity, especially due to face-to-face
                tutoring which is one of
                <span>
                    the best ways to start your journey to becoming a skilled
                    engineer
                </span>
                .
            </p>
            <p>
                Our plans on combining practical tech workshops with the best
                practices of universities won’t stop here. We’ll partner with
                several other educational institutions for our next bootcamp
                sessions.
            </p>
            <p>
                Stay tuned, and we’ll make sure to keep you updated on our next
                bootcamps and similar events powered by Softbinator
                Technologies.
            </p>
            <div className='author-bio'>
                <img src='' alt='' />
                <div className='auther-details'>
                    <Link to='/'>Rareș Cârligeanu</Link>
                    HR Manager
                </div>
            </div>
        </section>
    </div>;
};
export default Bootcamp;
