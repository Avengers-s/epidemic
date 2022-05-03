from django.http import JsonResponse
import pymysql

def daka(request):
    data = request.GET
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call select_health1(1)'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    result = cursor.fetchall()

    sql = f'call select_health1(0)'
    cursor = db.cursor()
    cursor.execute(sql)
    
    ans = cursor.fetchall()

    res = list(result) + list(ans)
    print(res)
    db.commit()
    db.close()

    return JsonResponse({
        'result': "success",
        'list': res,
    })
