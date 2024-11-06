import React, { useState } from "react"
import Nav from "./Nav"
import hogs from "../porkers_data"
import HogTile from "../components/HogTile/HogTile"
import HogDetails from "./HogDetails/HogDetails"
import HogFilter from "../components/HogFilter/HogFilter"
import HogForm from "../components/HogForm/HogForm"

function App() {

	const [hogData, setHogData] = useState(hogs);
	const [selectedHog, setSelectedHog] = useState(null);
	const [showGreased, setShowGreased] = useState(false);
	const [sortBy, setSortBy] = useState('');
	const [hiddenHogs, setHiddenHogs] = useState(new Set());

	const handleToggleGreased = () => setShowGreased(!showGreased);
	const handleSortChange = (e) => setSortBy(e.target.value);
	const handleHideHog = (name) => {
		const newHiddenHogs = new Set(hiddenHogs);
		newHiddenHogs.add(name);
		setHiddenHogs(newHiddenHogs);
	};

	const filteredHogs = hogData
	.filter(hog => !hiddenHogs.has(hog.name))
	.filter(hog => !showGreased || hog.greased)
	.sort((a,b) => (sortBy === 'weight' ? a.weight - b.weight : a.name.localeCompare(b.name)));


	return (
		<div className="">
			<Nav />
			<div className="pigs">
				<HogFilter
				showGreased={showGreased}
				onToggleGreased={handleToggleGreased}
				onSortChange={handleSortChange}
				/>
				{filteredHogs.map(hog => (
					<div className="pigTile" key={hog.name}> <HogTile
					key={hog.name}
					hog={hog}
					onClick={() => setSelectedHog(hog)}
					onHide={() => handleHideHog(hog.name)}
					/></div>
				))}
				{selectedHog && <HogDetails hog={selectedHog} />}
				<HogForm onAddHog={(newHog) => setHogData([...hogData, newHog])} />
			</div>

		</div>
	);
}

export default App;
