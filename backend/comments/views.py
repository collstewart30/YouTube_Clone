from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404



@api_view(['GET'])  # get comments by video id
@permission_classes([AllowAny])
def get_all_comments(request, video_id):
    video_comments = Comment.objects.filter(video_id=video_id)
    serializer = CommentSerializer(video_comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])     
@permission_classes([IsAuthenticated])
def user_comments(request):
   # print('User ',f"{request.user.id} {request.user.email} {request.user.username}")
    
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)        
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

