from django.http import JsonResponse

def signin(request):
    data = request.GET
    username = data.get('username')
    password = data.get('password')
    return JsonResponse({
        'result': "success",
        "character": "normal",
    })
