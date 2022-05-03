from django.http import JsonResponse
import pymysql

def getname(request):
    data = request.GET
    username = data.get('username')
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call get_stu_info({username})'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    result = cursor.fetchall()
    print(result)
    db.commit()
    db.close()

    return JsonResponse({
        'result': "success",
        'username': result[0][1],
    })
