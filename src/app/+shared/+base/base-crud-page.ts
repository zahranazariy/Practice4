import { inject } from "@angular/core";
import { Thing } from "./base-thing";
import { BaseService } from "./base-service";

export class BaseCrudPage<T extends Thing> {
    save() {
        if (this.state == 'add') {
            this.setService.add(this.item);
        }
        else if (this.state == 'edit') {
            this.setService.edit(this.item);
        }
        else if (this.state == 'remove') {
            this.setService.remove(this.item);
        }

        this.dataRefresh();
        this.state = 'list'
    }
   // ngOnInit(): void {
       // this.dataRefresh();}
    data: T[] = [];
    item!: T ;

    setService!:BaseService<T>;
    state: string = 'list';
    dataRefresh() {
        this.data = this.setService.list();
    }
    add() {
        this.state = 'add';
        //this.item = {
            //title: '',
           // writer: '',
           // publisher: '',
        //};
    }
    edit(book: T) {
        this.item = { ...book };
        this.state = 'edit';
    }
    remove(book: T) {
        this.item = { ...book };
        this.state = 'remove';
    }
    cancel() {
        this.state = 'list';
    }

}
