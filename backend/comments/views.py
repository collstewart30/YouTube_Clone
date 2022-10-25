from rest_framework.decorators import api_view
from rest_framework import Response

@api_view(['GET'])
def comments_list(request):
    return Response('ok')