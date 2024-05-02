import { Navbar } from "../../components/navbar";
import { SearchBar } from "../../components/search-bar";
import { Sidebar } from "../../components/sidebar";

export function ClerkDashboard(){
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <SearchBar/>
        </div>
    )
}