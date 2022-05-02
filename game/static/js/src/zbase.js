class WebApp {
    constructor(id){
        this.id = id;
        this.$web_app = $('#' + id);
        this.settings = new Settings(this);
        this.menu = new Menu(this);
        this.normal_daka = new Normal_daka(this);
    }

}
