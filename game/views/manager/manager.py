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

def lixiao_query(request):
    data = request.GET
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call select_outrequire(0)'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    result = cursor.fetchall()


    db.commit()
    db.close()

    return JsonResponse({
        'result': "success",
        'list': result,
    })


def lixiao_update(request):
    data = request.GET
    username = data.get('id')
    yijian = data.get('yijian')
    flag = -1
    if yijian == "同意":
        flag = 1
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call update_outrequire({username},{flag})'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    #result = cursor.fetchall()


    db.commit()
    db.close()

    return JsonResponse({
        'result': "success",
    })

def weihu(request):
    data = request.GET
    username = data.get('id')
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call select_vaccinate({username})'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    result = cursor.fetchall()
    sql = f'call get_stu_info({username})'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    ans = cursor.fetchall()
    db.commit()
    db.close()

    return JsonResponse({
        'result': "success",
        'list': result,
        'class': ans[0][4],
        'num': ans[0][5],
        'username': ans[0][1],
    })

def geli_query(request):
    data = request.GET
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call select_separate()'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    result = cursor.fetchall()
    db.commit()
    db.close()
    return JsonResponse({
        'result': "success",
        'list': result,
    })

def geli_delete(request):
    data = request.GET
    username = data.get('id')
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call delete_separate1({username})'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    result = cursor.fetchall()
    db.commit()
    db.close()
    return JsonResponse({
        'result': "success",
    })

def geli_insert(request):
    data = request.GET
    username = data.get('id')
    db = pymysql.connect(host='localhost',user='root',password='root',port=443,db='db1')
    sql = f'call insert_separate({username})'
    #获取下标
    cursor = db.cursor()
    cursor.execute(sql)
                #查询
    result = cursor.fetchall()
    db.commit()
    db.close()
    return JsonResponse({
        'result': "success",
        'list': result,
    })
