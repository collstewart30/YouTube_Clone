from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes




@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    return Response('this is all comments')


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    return Response('this is the user comment')