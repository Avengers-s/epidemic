class WebApp {
    constructor(id){
        this.id = id;
        this.$web_app = $('#' + id);
        this.$settings = new Settings(this);
    }

}
