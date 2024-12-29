import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Foto circular no meio */}
      <div className="relative">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGM-T3ky__9pA/profile-displayphoto-shrink_800_800/B4DZPFvBgxHcAg-/0/1734189259490?e=1741219200&v=beta&t=JIHSkF4LH7wdk9mKPkG0jWAukLvUGu1alEq415p74CY"
          alt="Ben Kilinski"
          className="w-40 h-40 rounded-full border-4 border-gray-700 shadow-lg"
        />
      </div>

      {/* Ícones sociais */}
      <div className="flex space-x-6 mt-6">
        <a
          href="https://github.com/BenKilinski"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ben-kilinski-a1287b287/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
        <a
          href="mailto:ben.kilinski@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.instagram.com/ben.kilinski"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            className="w-8 h-8"
          />
        </a>
      </div>

      {/* Texto sobre você */}
      <div className="mt-10 max-w-2xl text-center">
        <h1 className="text-2xl font-bold text-white">Welcome to My About Page!</h1>
        <p className="text-gray-300 mt-4">
          One day, I was studying at the best Law School in Brazil, surrounded by books and legal discussions. The next thing I knew, I was in the middle
          of the desert in Israel, learning how to pitch a tent and handle completely different challenges. Now, here I am, living in Tel Aviv, developing
          software and turning lines of code into creative solutions. Life is funny, isn’t it?
        </p>
      </div>
    </div>
  );
};

export default About;
