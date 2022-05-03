class Normal_daka{
    constructor(root){
        this.root = root;
        this.$normal_daka = $(`
      	<div class="web_app_normal_daka">
            <div class="web_app_normal_daka_context">
                    <div class="web_app_normal_daka_title">
                        学生健康打卡
                    </div>
                    <div class="web_app_normal_daka_name">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="姓名" readonly>
                        </div>
                    </div>
                    <div class="web_app_normal_daka_id">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="学号" readonly>
                        </div>
                    </div>

                    <div class="web_app_normal_daka_tiwen">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="体温">
                        </div>
                    </div>
                    
                    <div class="web_app_normal_daka_didian">
                        <div class="web_app_normal_daka_item">
                            <input type="text" placeholder="地点">
                        </div>
                    </div>

                    <div class="web_app_normal_daka_zaixiao">
                            <input type="radio" name="zaixiao" value="yes" class="web_app_normal_daka_radio_1" checked="checked">在校
                            <input type="radio" name="zaixiao" value="no" class="web_app_normal_daka_radio_2">不在校
                            
                    </div>

                    <div class="web_app_normal_daka_error_message">
                    
                             </div>
                    <div class="web_app_normal_daka_submit">
                        <div class="web_app_normal_daka_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_normal_daka_return">
                        <div class="web_app_normal_daka_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$normal_daka);
        this.$daka_name = this.$normal_daka.find(".web_app_normal_daka_name input");
        this.$daka_tiwen = this.$normal_daka.find(".web_app_normal_daka_tiwen input");
        this.$daka_didian = this.$normal_daka.find(".web_app_normal_daka_didian input");
        this.$daka_submit = this.$normal_daka.find(".web_app_normal_daka_submit button");
        this.$daka_xuehao = this.$normal_daka.find(".web_app_normal_daka_id input");
        this.$daka_return = this.$normal_daka.find(".web_app_normal_daka_return button");
        this.$daka_radio_1 = this.$normal_daka.find(".web_app_nromal_daka_radio_1");
        this.$daka_radio_2 = this.$normal_daka.find(".web_app_normal_daka_radio_2");
        this.$error_message = this.$normal_daka.find(".web_app_normal_daka_error_message");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$daka_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
        this.$daka_submit.click(function(){
            let tiwen = outer.$daka_tiwen.val();
            let didian = outer.$daka_didian.val();
            let zaixiao = $('input:radio:checked').val();
            if(typeof tiwen==="undefined" || tiwen === null || tiwen.trim()=== "" || typeof didian==="undefined" || didian === null || didian.trim()===""){
                outer.$error_message.html("信息未填写完整");
            }else{
                $.ajax({
                    url:"https://epidemic.dylolorz.cn/normal/daka",
                    type:"GET",
                    data:{
                        "id":outer.root.settings.xuehao,
                        "tiwen":tiwen,
                        "didian":didian,
                        "zaixiao":zaixiao,
                    },
                    success:function(resp){
                        if(resp.result === "success"){
                            outer.$error_message.html("提交成功!");
                        }else{
                            outer.$error_message.html("提交失败");
                        }
                    },
                });
            }
        });
    }
    hide(){
        this.$normal_daka.hide();
        this.$error_message.empty();
    }
    show(){
        this.$normal_daka.show();
        this.$daka_xuehao.val(this.root.settings.xuehao);
        let outer = this;
        $.ajax({
            url:"https://epidemic.dylolorz.cn/getinfo/getname",
            type:"GET",
            data:{
                username: outer.root.settings.xuehao,
            },
            success:function(resp){
                if(resp.result === "success"){
                    outer.$daka_name.val(resp.username);
                }
            },
        });
    }
}
