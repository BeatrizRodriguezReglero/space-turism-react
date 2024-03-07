import MainContainer from "./components/main-container/MainContainer";
import Home from "./pages/Home";
import Router from "./router/Router";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
	return (
		<>
		<GlobalStyles/>
		<MainContainer/>
		<Home/>
		<Router/>
		</>
	)
	
};

export default App;
