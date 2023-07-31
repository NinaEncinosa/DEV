export class TaskItem {
    id: number;
    title: string;
    description: string;
    isChecked: boolean = false;

    constructor(title: string, description: string){
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.isChecked = this.isChecked;
    }

}