class Normal_lixiao{
    constructor(root){
        this.root = root;
        this.$normal_lixiao = $(`
      	<div class="web_app_normal_lixiao">
            <div class="web_app_normal_lixiao_context">
                    <div class="web_app_normal_lixiao_title">
                        学生离校申请
                    </div>
                    <div class="web_app_normal_lixiao_name">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="姓名" readonly>
                        </div>
                    </div>
                    <div class="web_app_normal_lixiao_id">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="学号" readonly>
                        </div>
                    </div>

                    <div class="web_app_normal_lixiao_time1">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="离开时间">
                        </div>
                    </div>

                     <div class="web_app_normal_lixiao_time2">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="返回时间">
                        </div>
                    </div>

                    <div class="web_app_normal_lixiao_didian">
                        <div class="web_app_normal_lixiao_item">
                            <input type="text" placeholder="地点">
                        </div>
                    </div>


                    <div class="web_app_normal_lixiao_error_message">
                    
                             </div>
                    <div class="web_app_normal_lixiao_submit">
                        <div class="web_app_normal_lixiao_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_normal_lixiao_return">
                        <div class="web_app_normal_lixiao_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$normal_lixiao);
        this.$lixiao_name = this.$normal_lixiao.find(".web_app_normal_lixiao_name input");
        this.$lixiao_time1 = this.$normal_lixiao.find(".web_app_normal_lixiao_time1 input");
        this.$lixiao_time2 = this.$normal_lixiao.find(".web_app_normal_lixiao_time2 input");
        this.$lixiao_didian = this.$normal_lixiao.find(".web_app_normal_lixiao_didian input");
        this.$lixiao_submit = this.$normal_lixiao.find(".web_app_normal_lixiao_submit button");
        this.$lixiao_xuehao = this.$normal_lixiao.find(".web_app_normal_lixiao_id input");
        this.$lixiao_return = this.$normal_lixiao.find(".web_app_normal_lixiao_return button");
        this.$error_message = this.$normal_lixiao.find(".web_app_normal_lixiao_error_message");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$lixiao_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
        this.$lixiao_submit.click(function(){
            let time1 = outer.$lixiao_time1.val();
            let time2 = outer.$lixiao_time2.val();
            let didian = outer.$lixiao_didian.val();
            if(time1 === "" || time2=== "" || didian===""){
                outer.$error_message.html("信息未填写完整");
            }else{
                $.ajax({
                    url:"https://epidemic.dylolorz.cn/normal/lixiao",
                    type:"GET",
                    data:{
                        "id":outer.root.settings.xuehao,
                        "time1":time1,
                        "time2":time2,
                        "didian":didian,
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
        this.$normal_lixiao.hide();
        this.$error_message.empty();
        this.$lixiao_time1.val("");
        this.$lixiao_time2.val("");
        this.$lixiao_didian.val("");
    }
    show(){
        this.$normal_lixiao.show();
        this.$lixiao_xuehao.val(this.root.settings.xuehao);
        let outer = this;
        $.ajax({
            url:"https://epidemic.dylolorz.cn/getinfo/getname",
            type:"GET",
            data:{
                username: outer.root.settings.xuehao,
            },
            success:function(resp){
                if(resp.result === "success"){
                    outer.$lixiao_name.val(resp.username);
                }
            },
        });
    }
}
