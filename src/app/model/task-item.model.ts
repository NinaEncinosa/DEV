export class TaskItem {
    id: number;
    title: string;
    description: string;
    isChecked: boolean = false;

    constructor(id: number,title: string, description: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.isChecked = this.isChecked;
    }

}