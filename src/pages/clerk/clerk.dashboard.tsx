import { Navbar } from "../../components/navbar";
import { SearchBar } from "../../components/search-bar";
import { Sidebar } from "../../components/sidebar";
import { TableContainerComponent } from "../../components/table-container";

export function ClerkDashboard(){
    return (
      <div>
        <Navbar />
        <Sidebar />
        <SearchBar />
        <TableContainerComponent />
      </div>
    );
}