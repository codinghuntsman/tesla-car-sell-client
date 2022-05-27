import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-3'>
            <div className='card py-3 px-3 shadow-xl'>
                <h2 className='text-xs md:text-md lg:text-2xl text-pink-500 font-bold font-serif'><span className='text-accent'>Question: </span>How to improve performance of a react application?</h2>
                <p className='text-xs md:text-md lg:text-xl text-justify text-black font-bold font-sans mt-1'>
                    Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application. This post will go over some useful techniques you can use to improve your React code.Data immutability is not an architecture or design pattern, it's an opinionated way of writing code. This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow.
                </p>
            </div>
            <div className='card py-3 px-3 mt-4 shadow-xl'>
                <h2 className='text-xs md:text-md lg:text-2xl text-pink-500 font-bold font-serif'><span className='text-accent'>Question: </span>What are the different ways to manage state in react application?</h2>
                <p className='text-xs md:text-md lg:text-xl text-justify text-black font-bold font-sans mt-1'>
                    <span className='text-pink-500  font-bold'>Local (UI)</span> state - Local state is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook.
                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.
                </p>
                <p className='text-xs md:text-md lg:text-xl text-justify text-black font-bold font-sans mt-1'>
                    <span className='text-pink-500  font-bold'>Global (UI) </span>
                    state - Global state is data we manage across multiple components.
                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                </p>
                <p className='text-xs md:text-md lg:text-xl text-justify text-black font-bold font-sans mt-1'>
                    <span className='text-pink-500  font-bold'>Server state </span>
                    - Data that comes from an external server that must be integrated with our UI state.
                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                </p>
                <p className='text-xs md:text-md lg:text-xl text-justify text-black font-bold font-sans mt-1'>
                    <span className='text-pink-500  font-bold'> URL state </span>
                    - Data that exists on our URLs, including the pathname and query parameters.
                    URL state is often missing as a category of state, but it is an important one.
                </p>
            </div>
            <div className='card py-3 px-3 mt-4 shadow-xl'>
                <h2 className='text-xs md:text-md lg:text-2xl text-pink-500 font-bold font-serif'><span className='text-accent'>Question: </span>How does prototypal inheritance work?</h2>
                <p className='text-xs md:text-md lg:text-xl text-justify text-black font-bold font-sans mt-1'>
                    JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                </p>
            </div>
            <div className='card py-3 px-3 mt-4 shadow-xl'>
                <h2 className='text-xs md:text-md lg:text-2xl text-pink-500 font-bold font-serif'><span className='text-accent'>Question: </span>Why we use setState in react?</h2>
                <p className='text-xs md:text-md lg:text-xl text-justify text-black font-bold font-sans mt-1'>
                    setState() setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.
                </p>
            </div>
            <div className='card py-3 px-3 mt-4 shadow-xl'>
                <h2 className='text-xs md:text-md lg:text-2xl text-pink-500 font-bold font-serif'><span className='text-accent'>Question: </span>What is unit test.why should write unit test?</h2>
                <p className='text-xs md:text-md lg:text-xl text-justify text-black font-bold font-sans mt-1'>
                    Let's start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future..
                </p>
            </div>
        </div>
    );
};

export default Blogs;