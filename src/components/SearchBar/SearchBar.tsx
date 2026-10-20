import './SearchBar.css';
import {taskPriority, taskStatus} from "../../types/task.ts";


function getEnumElements(typeEnum: Record<string, string>):{
    key: string;
    value: string;
}[] {
    return Object.entries(typeEnum).map(([key, value]) => ({
        key,
        value,
    }));
}


export const SearchInput = () => {
    return (
            <input
                className="searchInput"
                type="text"
                placeholder="Rechercher une tâche..."
            />
    );
};

export function Filter() {

    const statusFilters = getEnumElements(taskStatus);
    const priorityFilters = getEnumElements(taskPriority);

    return (
        <div>
            <div className="radio-group">
                <h4>Statut</h4>
                <div>
                    {statusFilters.map((status) => (
                        <label key={status.key} className="radio-item">
                            <input
                                type="radio"
                                name="status"
                                value={status.value}
                            />
                            {status.value}
                        </label>
                    ))}
                </div>
            </div>
            <div className="radio-group">
                <h4>Priority</h4>
                <div>
                    {priorityFilters.map((priority) => (
                        <label key={priority.key} className="radio-item">
                            <input
                                type="radio"
                                name="priority"
                                value={priority.value}
                            />
                            {priority.value}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default function SearchBar() {
    return (
        <div className="search-bar">
            <SearchInput />
            <Filter />
        </div>
    );
}
