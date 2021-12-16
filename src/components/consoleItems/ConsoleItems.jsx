import consoleItems from "../../data/consoleItems";
import ConsoleItem from "./ConsoleItem";

//Parasyti cikla, kuris  isspausdina duomenis pagal items pateikta struktura
const ConsoleItems = () => {
	return (
		<>
			{consoleItems.map((obj) => (
				<ConsoleItem key={obj.id} idProps={obj.id} titleProps={obj.title} countProps={obj.count} />
			))}
		</>
	);
};

export default ConsoleItems;

// {for (const item of items) {
// 	for (const data in item) {
// 	// console.log(data, ':', item[data])
// 	console.log(`${props.data}: ${props.item[data]}`)
// 	}
// 	console.log("----------")
// 	 }
// 	}
