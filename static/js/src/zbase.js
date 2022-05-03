class WebApp {
    constructor(id){
        this.id = id;
        this.$web_app = $('#' + id);
        this.settings = new Settings(this);
        this.menu = new Menu(this);
        
        this.normal_daka = new Normal_daka(this);
        this.normal_lixiao = new Normal_lixiao(this);
        this.normal_weihu = new Normal_weihu(this);

        this.manager_daka = new Manager_daka(this);
        this.manager_lixiao = new Manager_lixiao(this);
        this.manager_weihu = new Manager_weihu(this);
        this.manager_geli = new Manager_geli(this);
    }

}
