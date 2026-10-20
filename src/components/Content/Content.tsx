import "./Content.css"
import type {Task} from "../../types/task.ts";
import axios from "axios";
import {useState, useEffect} from "react";


export const Content = () => {
    const tasks: Task[] = [];

    const fetchPage = async (page: number, limit: number) => {
        const response = await axios.get("http://localhost:3001",
            {params: {
                _page: page, _limit: limit}});

        const totalElements = response.data.totalElements;

        return {
            data: response.data,
            total: totalElements
        }
    }

    return (
        <main className="content">
            {
                tasks = fetchPage(1, 10);
                tasks.length === 0 ?
                    <h3>
                        No tasks found
                    </h3>
                    : tasks.map((task) => (
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

