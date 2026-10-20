import "./Content.css"
import type {Task} from "../../types/task.ts";
import axios from "axios";
import {useState, useEffect} from "react";


export default function Content() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    // let pageNum = 1;
    // let per_page = 10;

    const fetchPage = async (page: number, limit: number) => {
        try{
            const response = await axios.get("http://localhost:3001/tasks",
                {
                    params: {
                        _page: page,
                        _per_page: limit
                    }
                });

            console.log("données récupérer par fetch data : ", response.data);

            //const totalElements = response.data;
            const tasksArray = Array.isArray(response?.data.data) ? response.data.data : [];

            return {
                data: tasksArray,
                total: tasksArray.length
            }
        }
        catch (error) {
            console.error("erreur lors du chargement des tâches.", error);
            return {
                data: [],
                total: 0
            }
        }
    }

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const result = await fetchPage(1, 10);
            console.log(result.data);
            setTasks(result.data);
            setLoading(false);
        };

        loadData();
    }, []);


    if (loading) {
        return <div>Loading tasks...</div>;
    }
    else if(tasks == null){
        return "Unespected error"
    }
    else{
        return (
            <main className="content">
                {
                    tasks.length === 0 ?
                        <h3>
                            No tasks found
                        </h3>
                        : tasks?.map((task) => (
                            <article key={task.id} className="task-item">
                                <div className="task-info">
                                    <h2 className="task-title">{task.title}</h2>
                                    <p className="task-description">{task.description}</p>
                                </div>

                                <div className="task-actions">
                                    <button type="button" className="edit-button">
                                        Modifier
                                    </button>

                                    <button type="button" className="delete-button">
                                        Supprimer
                                    </button>
                                </div>
                            </article>
                        ))
                }
            </main>
        );
    }
}

