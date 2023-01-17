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
    comments = Comment.objects.filter(video_id=video_id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['POST'])  # post comments by video id
@permission_classes([IsAuthenticated])
def add_comment(request):
    comments = get_object_or_404(Comment, user_id=request.user.id)
    serializer = CommentSerializer(comments, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()   
    return Response(status=status.HTTP_204_NO_CONTENT)

