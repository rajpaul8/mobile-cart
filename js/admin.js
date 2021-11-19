function admin() {
    this.form = $('form');
}

admin.prototype.bindEvents = function() {
    this.form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formMap = {};
        for(const [key, value] of formData.entries()) {
            formMap[key] = value;
        }
        const items = localStorage.getItem('items');
        if(items) {
            const previousItems = JSON.parse(items);
            localStorage.setItem('items', JSON.stringify(previousItems.concat([formMap])));
        }
        else {
            localStorage.setItem('items', JSON.stringify([formMap]));
        }
        window.location.reload();
    });
}

const adminInstance = new admin();
adminInstance.bindEvents();