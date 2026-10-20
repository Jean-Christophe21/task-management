import {type Task, type TaskPriority, taskPriority, type TaskStatus, taskStatus} from "../../types/task.ts";
import "./modifyTaskModal.css"
import {useState} from "react";
import axios from "axios";
//import * as React from "react";
import type { FormEvent } from "react";

type ModifyModalProps = {
    task: Task;
    onClose: () => void;
};

export const ModifyTaskModal = ({task, onClose}:ModifyModalProps) => {

    /*task sera utilisé plus tard pour préremplir le formulaire*/

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const [priority, setPriority] = useState(task.priority);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await axios.put(`http://localhost:3001/tasks/${task.id}`,
            {
                title: title,
                description: description,
                priority: priority
            })
    }

    return (
        <div className="modify-modal-overlay">
                <h2 className="modify-modal-title">Modifier la tâche</h2>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="modify-label">
                            Titre
                        </label>
                        <input
                            id="title"
                            className="form-title-input"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="modify-label">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="form-description-textarea"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="modify-label" htmlFor="status">
                            Statut
                        </label>
                        <select
                            id="status"
                            className="modify-select"
                            value={status}
                            onChange={event => setStatus(event.target.value as TaskStatus)}
                        >
                            {Object.values(taskStatus).map((statusValue) => (
                                <option key={statusValue} value={statusValue}>
                                    {statusValue}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="modify-label" htmlFor="priority">
                            Priorité
                        </label>
                        <select
                            id="priority"
                            className="modify-select"
                            value={priority}
                            onChange={(event) => setPriority(event.target.value as TaskPriority)}
                        >
                            {Object.values(taskPriority).map((priorityValue) => (
                                <option key={priorityValue} value={priorityValue}>
                                    {priorityValue}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-actions">
                        <button
                            type="button"
                            className="modify-cancel-button"
                            onClick={onClose}
                        >
                            Annuler
                        </button>

                        <button type="submit" className="modify-save-button">
                            Enregistrer
                        </button>
                    </div>
                </form>
        </div>
    );
}
