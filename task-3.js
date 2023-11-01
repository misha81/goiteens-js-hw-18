class Storage {
    constructor(items) {
        this.items = items;
    };

    getItems () {
        return this.items;
    };
    
    addItem(item) {
        this.items.push(item);
    };

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index != -1) {
          this.items.splice(index, 1);
        }
    }
};




const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);


console.log(storage.getItems());

storage.addItem('Дрони');
console.log(storage.getItems());

storage.removeItem('Пролонгер');
console.log(storage.getItems());