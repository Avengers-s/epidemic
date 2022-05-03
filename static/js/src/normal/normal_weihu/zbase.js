class Normal_weihu{
    constructor(root){
        this.root = root;
        this.$normal_weihu = $(`
      	<div class="web_app_normal_weihu">
            <div class="web_app_normal_weihu_context">
                    <div class="web_app_normal_weihu_title">
                        疫苗接种维护
                    </div>
                    <div class="web_app_normal_weihu_name">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="姓名" readonly>
                        </div>
                    </div>
                    <div class="web_app_normal_weihu_id">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="学号" readonly>
                        </div>
                    </div>

                     

                    <div class="web_app_normal_weihu_kind">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="种类:1(科兴) 2(北京生物)">
                        </div>
                    </div>
                    
                    <div class="web_app_normal_weihu_time">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="接种时间">
                        </div>
                    </div>

                    <div class="web_app_normal_weihu_num">
                        <div class="web_app_normal_weihu_item">
                            <input type="text" placeholder="针剂">
                        </div>
                    </div>

                    <div class="web_app_normal_weihu_error_message">
                    
                             </div>
                    <div class="web_app_normal_weihu_submit">
                        <div class="web_app_normal_weihu_item">
                            <button>提交</button>
                        </div>
                    </div>
                    <div class="web_app_normal_weihu_return">
                        <div class="web_app_normal_weihu_item">
                            <button>返回</button>
                        </div>
                    </div>
                    </div>
            </div>
 
        `);
        this.root.$web_app.append(this.$normal_weihu);
        this.$weihu_name = this.$normal_weihu.find(".web_app_normal_weihu_name input");
        this.$weihu_kind = this.$normal_weihu.find(".web_app_normal_weihu_kind input");
        this.$weihu_time = this.$normal_weihu.find(".web_app_normal_weihu_time input");
        this.$weihu_num = this.$normal_weihu.find(".web_app_normal_weihu_num input");
        this.$weihu_submit = this.$normal_weihu.find(".web_app_normal_weihu_submit button");
        this.$weihu_xuehao = this.$normal_weihu.find(".web_app_normal_weihu_id input");
        this.$weihu_return = this.$normal_weihu.find(".web_app_normal_weihu_return button");
        this.$error_message = this.$normal_weihu.find(".web_app_normal_weihu_error_message");
        this.start();
        this.hide();
    }

    start(){
        this.add_listening_event();
    }

    add_listening_event(){
        let outer = this;
        this.$weihu_return.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
        this.$weihu_submit.click(function(){
            let kind = outer.$weihu_kind.val();
            let time = outer.$weihu_time.val();
            let num = outer.$weihu_num.val();
            if(kind === "" || time=== "" || num===""){
                outer.$error_message.html("信息未填写完整");
            }else{
                $.ajax({
                    url:"https://epidemic.dylolorz.cn/normal/weihu/",
                    type:"GET",
                    data:{
                        "id":outer.root.settings.xuehao,
                        "kind":kind,
                        "time":time,
                        "num":num,
                    },
                    success:function(resp){
                        if(resp.result === "successful"){
                            resp.result = "success";
                        }
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
        this.$normal_weihu.hide();
        this.$error_message.empty();
        this.$weihu_time.val("");
        this.$weihu_kind.val("");
        this.$weihu_num.val("");
    }
    show(){
        this.$normal_weihu.show();
        this.$weihu_xuehao.val(this.root.settings.xuehao);
        let outer = this;
        $.ajax({
            url:"https://epidemic.dylolorz.cn/getinfo/getname",
            type:"GET",
            data:{
                username: outer.root.settings.xuehao,
            },
            success:function(resp){
                if(resp.result === "success"){
                    outer.$weihu_name.val(resp.username);
                }
            },
        });
    }
}
