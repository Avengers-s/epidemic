class Settings{
    constructor(root){
        this.root = root;
        this.$settings = $(`
            <div class="web_app_settings">
                一个史无前例的疫情校园管理系统！
            </div>
        `);
        this.root.$web_app.append(this.$settings);
        
    }
}
class WebApp {
    constructor(id){
        this.id = id;
        this.$web_app = $('#' + id);
        this.$settings = new Settings(this);
    }

}
