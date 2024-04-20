import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Courses from "./pages/Courses";
import Mentors from "./pages/Mentors";
import Reason from "./pages/Reason";
import CallToAction from "./pages/CallToAction";

function App() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div className='flex flex-col  bg-white text-black dark:bg-[#2E2727] dark:text-white'>
			<Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
			<section className='flex-grow min-h-screen'>
				<Landing />
			</section>
			<section className='flex-grow min-h-screen'>
				<Courses />
			</section>
			<section className='flex-grow min-h-screen'>
				<Mentors />
			</section>
			<section className='flex-grow min-h-screen'>
				<Reason />
			</section>
			<section className='flex-grow min-h-screen'>
				<CallToAction />
			</section>
		</div>
	);
}

export default App;
