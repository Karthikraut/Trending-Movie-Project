import React from 'react';

const Contact = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-900'>
      <section className="bg-white p-10 m-4 dark:bg-gray-900">
        <div className="container px-6 mx-auto">
          <div>
            <p className="text-3xl font-bold text-[#6556cd] dark:text-[#6556cd]">Contact me</p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Connect with me.</h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">I will love to connect with you. Please contact me here!!</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-[#6556cd] rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                <p className="mt-2 text-sm text-zinc-200 hover:text-[#6556cd]">karthikraut2@gmail.com</p>
              </div>

              <div>
                <span className="inline-block p-3 text-[#6556cd] rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-zinc-200">Phone</h2>
                <p className="mt-2 text-sm text-zinc-200 hover:text-[#6556cd]">996-0566-170</p>
              </div>

              <div>
                <a href="https://github.com/Karthikraut" target="_blank" rel="noopener noreferrer">
                  <i className="text-[#6556cd] ri-github-fill text-5xl"></i>
                </a>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-zinc-200">Github</h2>
                <a href="https://github.com/Karthikraut" target="_blank" rel="noopener noreferrer" className="mt-2 text-sm text-zinc-200 hover:text-[#6556cd]">https://github.com/Karthikraut</a>
              </div>

              <div>
                <a href="https://www.linkedin.com/in/karthik-raut-b5a6a7243/" target="_blank" rel="noopener noreferrer">
                  <i className="text-[#6556cd] ri-linkedin-fill text-5xl"></i>
                </a>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-zinc-200">Linked In</h2>
                <a href="https://www.linkedin.com/in/karthik-raut-b5a6a7243/" target="_blank" rel="noopener noreferrer" className="mt-2 text-sm text-zinc-200 hover:text-[#6556cd]">https://www.linkedin.com/in/karthik-raut-b5a6a7243/</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
